import {  PerspectiveCamera, useScroll,PositionalAudio, OrbitControls} from "@react-three/drei";
import Background from "./Background";
import { Bike } from "./Bike";
import { useEffect, useMemo,useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { TextSections } from "./textSections";
import Others from "./Things";
import { Group } from "three";
import { usePlay } from "./Play";
import { gsap } from "gsap";


const CURVEDISTANCE=250;
const CURVE_AHEAD_CAMERA=0.008;
const CURVE_AHEAD_BIKE=0.02;
const Bike_max_Angle=30;
const FRICTION_DISTANCE=42;
export const Experience = () => {
const curvpoint=useMemo(()=>[
  
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -CURVEDISTANCE),
    new THREE.Vector3(100, 0, -2*CURVEDISTANCE),
    new THREE.Vector3(-100, 0, -3*CURVEDISTANCE),
    new THREE.Vector3(0, 0, -4*CURVEDISTANCE),
    new THREE.Vector3(0, 0, -5*CURVEDISTANCE),
    new THREE.Vector3(0, 0, -6*CURVEDISTANCE),
    new THREE.Vector3(0, 0, -7*CURVEDISTANCE),
    // new THREE.Vector3(-16, 0, -80),
    // new THREE.Vector3(-18, 0, -90),
    // new THREE.Vector3(-20, 0, -100),
    // new THREE.Vector3(-22, 0, -110),
    // new THREE.Vector3(-24, 0, -120),
    // new THREE.Vector3(-26, 0, -130),
    // new THREE.Vector3(-28, 0, -140),
    // new THREE.Vector3(-30, 0, -150),
    // new THREE.Vector3(-32, 0, -160),
    // new THREE.Vector3(-34, 0, -170),

  

],[])
const sceneOpacity=useRef(0);
const lineMaterialRef=useRef();
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
    curvpoint,
   false, "catmullrom", 0.5);
  }, []);
  
  
  const LINE_NB_POINTS = 1000;
  // const linepoints = useMemo(() => {
  //   return curve.getPoints(LINE_NB_POINTS);
  // }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -10);
    shape.lineTo(0, 10);
    return shape;
  }, [curve]);
  const stopAudioRef = useRef();
  const startAudioRef = useRef();
  const cameragroup = useRef();
  const camreRail=useRef();
  const scroll = useScroll()
  const dividerWidth = 0.2; // Adjust as needed
  const dividerHeight = 0.5; // Adjust as needed
const lastScroll=useRef(0)
  const dividerShape = useMemo(() => {
    const dividerShape = new THREE.Shape();
    dividerShape.moveTo(-dividerWidth / 2, -dividerHeight / 2);
    dividerShape.lineTo(dividerWidth / 2, -dividerHeight / 2);
    dividerShape.lineTo(dividerWidth / 2, dividerHeight / 2);
    dividerShape.lineTo(-dividerWidth / 2, dividerHeight / 2);
    return dividerShape;
  }, []);

  const dividerGroup = useRef();
  const bike = useRef();
const bikeIntl=useRef()
const bikeOttl=useRef()
const camera=useRef()
  const textSections=useMemo(()=>{
    return [ 
      {
      camreRailDist:-1,
        position: new THREE.Vector3(
          curvpoint[1].x-2,
          curvpoint[1].y,
          curvpoint[1].z-3),
      subtitle:`Hi I'm Arun,
      FrontEnd Developer`
   },
  {
    camreRailDist:1.5,
    position: new THREE.Vector3( 
      curvpoint[2].x-4,
      curvpoint[2].y,
      curvpoint[2].z-5),
    title:"PROJECTS",
    subtitle:`IMDb Clone,Hangman Game`

  }
  
  
  ]
   },[])
   useEffect(() => {
    startAudioRef.current = new Audio("/texyures/har-start.mp3");
    stopAudioRef.current = new Audio("/texyures/har-stop.mp3");
    startAudioRef.current.load();
    stopAudioRef.current.load();
    return () => {
      // Cleanup or perform any actions when the component unmounts
      if (startAudioRef.current) {
        startAudioRef.current.pause();
      }
      if (stopAudioRef.current) {
        stopAudioRef.current.pause();
      }
    };
  }, [startAudioRef, stopAudioRef]);
   const {play,setHasScroll,hasScroll,end,setEnd}=usePlay()
  useFrame((_state, delta) => {
    if (play && !hasScroll && stopAudioRef.current) {
      // Logic for playing stop audio when the bike is stopped
      if (stopAudioRef.current.paused) {
        stopAudioRef.current.play();
      }
    } else if (hasScroll && startAudioRef.current) {
      // Logic for playing start audio when moving
      if (startAudioRef.current.paused) {
        startAudioRef.current.play();
      }
    }
  

    if (window.innerWidth > window.innerHeight) {
      // landscape
      camera.current.fov = 30;
      camera.current.position.z = 36;
    } else {
      // portrait
      camera.current.fov = 30;
      camera.current.position.z = 75;
    }
    
    if(lastScroll.current<=0 && scroll.offset >0){
      setHasScroll(true);
    }
    lineMaterialRef.current.opacity=sceneOpacity.current;
  if(play && !end && sceneOpacity.current <1){
    sceneOpacity.current=THREE.MathUtils.lerp(
      sceneOpacity.current,
      1,
      delta * 0.1
    )
  }

  if(end && sceneOpacity.current >0){
    sceneOpacity.current=THREE.MathUtils.lerp(
      sceneOpacity.current,
      0,
      delta
    )
  }
      const scrollOffset = Math.max(0, scroll.offset);
    if(end){
      return;
    }
    let friction=1;
    //look to close text section
    let resetCameraRail=true;
    textSections.forEach((textSection)=>{
      const distance=textSection.position.distanceTo(
        cameragroup.current.position
      )
      if(distance<FRICTION_DISTANCE){
        friction=Math.max(distance/FRICTION_DISTANCE,0.1)
        const targetCameraRailPosition= new THREE.Vector3(
          (1-distance/FRICTION_DISTANCE)*textSection.camreRailDist,
          0,0
        )
        camreRail.current.position.lerp(targetCameraRailPosition,delta)
        resetCameraRail=false
      }

    })
    if(resetCameraRail){
      const targetCameraRailPosition=new THREE.Vector3(0,0,0);
      camreRail.current.position.lerp(targetCameraRailPosition,delta)
    }
    //calculate learped scroll offset
    let lerpedScrollOffset=THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta* friction
    );
    //protect below 0 and1

    lerpedScrollOffset=Math.min(lerpedScrollOffset,1);
    lerpedScrollOffset=Math.max(lerpedScrollOffset,0);

    lastScroll.current=lerpedScrollOffset
   
    
    const curvepoint =curve.getPoint(lerpedScrollOffset)
    //follow curve points
    cameragroup.current.position.lerp(curvepoint, delta * 24);
    //make the group loot ahead on the curve


    const lookAtPoint=curve.getPoint(
      Math.min(lerpedScrollOffset+CURVE_AHEAD_CAMERA,1));

      const currentlookAt=cameragroup.current.getWorldDirection(
        new THREE.Vector3()
      )
      const targetlookAt=new THREE.Vector3()
      .subVectors(curvepoint,lookAtPoint)
      .normalize();
    const lookAt=currentlookAt.lerp(targetlookAt,delta*24)
    cameragroup.current.lookAt(
      cameragroup.current.position.clone().add(lookAt)
    )

   const tangent=curve.getTangent(lerpedScrollOffset+CURVE_AHEAD_BIKE)

   const nonLerplookAt= new Group();
   nonLerplookAt.position.copy(curvepoint);
   nonLerplookAt.lookAt(nonLerplookAt.position.clone().add(targetlookAt));
   tangent.applyAxisAngle(
    new THREE.Vector3(0,1,0),
    -nonLerplookAt.rotation.y
   )
// bike amgle bending on curve...
        let angle =Math.atan2(-tangent.z,tangent.x);
        angle=-Math.PI/2+angle;

        let angleDegree=(angle*180)/Math.PI;
        angleDegree*=1.2;

        if(angleDegree<0){
          angleDegree=Math.max(angleDegree,-Bike_max_Angle);
        }
        if(angleDegree>0){
          angleDegree=Math.min(angleDegree,Bike_max_Angle);
        }

        angle=(angleDegree*Math.PI)/180;
        const targetBikeQuaternion=new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            bike.current.rotation.x,
            bike.current.rotation.y,
            angle
          )
        )
        bike.current.quaternion.slerp(targetBikeQuaternion,delta*2);  

        if(
          cameragroup.current.position.z <
          curvpoint[curvpoint.length - 1].z +100
  
        ){
          setEnd(true);
          bikeOttl.current.play();
        }

        bikeIntl.current=gsap.timeline();
        bikeIntl.current.pause();
        bikeIntl.current.from(bike.current.position,{
          duration:3,
          z:5,
          y:-2,
        })

        bikeOttl.current=gsap.timeline();
        bikeOttl.current.pause()

        bikeOttl.current.to(
          bike.current.position,
          {
            duration:10,
            z:-250,
            y:10,
          }
        );
        bikeOttl.current.to(
          camreRail.current.position,
          {
            duration:8,
            y:12,
          },
          0
        )
        bikeOttl.current.to(bike.current.position,
          {
            duration:1,
            z:-1000,

          })

      });

    
      useEffect(()=>{
        if(play){
          bikeIntl.current.play()
        }
      },[play])
  const [on,setOn]=useState(false)
  // const bikeRef = useRef();
  // const VibrationEffect = ({ enabled }) => {
  
  
  //   const amplitude = 0.1; // Vibration amplitude
  //   const frequency = 1.5; // Vibration frequency
  
  //   useFrame((_state, delta) => {
  //     if (enabled) {
  //       const time = _state.clock.elapsedTime;
  
  //       // Calculate vertical position using a sinusoidal function
  //       const y = Math.sin(time * frequency) * amplitude;
  
  //       // Apply the vertical position to the bike
  //       bikeRef.current.position.setY(y);
  //     }
  //   });
  
  //   return null;
  // };
  return useMemo(()=>(
    <>
   
      <ambientLight intensity={2} />
      <group ref={cameragroup}>
       <group ref={camreRail}>
       <PerspectiveCamera ref={camera} position={[0,0,50]} fov={30} makeDefault />
      
       </group>
        <Background/>
       
        <group ref={bike} onClick={()=>setOn(!on)}>
          {/* <group ref={bikeRef}> */}
          <Bike/>
            {/* <VibrationEffect enabled={on} /> */}
          {/* </group> */}
          {play &&
         <PositionalAudio 
         autoplay
         url="/texyures/har-start.mp3"
         loop
         volume={0.6} 
       /> 
       }
      
            
        </group>
      
      </group>
      {play && !hasScroll && (
            <PositionalAudio
              ref={stopAudioRef}
              autoplay
              url="/texyures/har-stop.mp3"
              loop
              volume={0.6}
            />
          )}
          {hasScroll && (
            <PositionalAudio
              ref={startAudioRef}
              autoplay
              url="/texyures/har-start.mp3"
              distance={3}
              loop
              volume={0.9}
            />
          )}  


{
  textSections.map((textSection,index)=>(
    <TextSections {...textSection} key={index}/>
  ))
}


<Others sceneOpacity={sceneOpacity}/>

      <group position-y={-12} ref={dividerGroup}>
        <mesh>
          <extrudeGeometry args={[shape, { steps: LINE_NB_POINTS, bevelEnabled: false, extrudePath: curve },]} />
          <meshStandardMaterial color={"black"} opacity={10} transparent ref={lineMaterialRef} />
        </mesh>

        <mesh>
          <extrudeGeometry args={[dividerShape, { steps: LINE_NB_POINTS, bevelEnabled: false, extrudePath: curve },]} />
          <meshStandardMaterial color={'yellow'} ref={lineMaterialRef} />
        </mesh>
      </group>
    </>
  ),[]);
};