import {  PerspectiveCamera, useScroll,PositionalAudio } from "@react-three/drei";
import Background from "./Background";
import { Bike } from "./Bike";
import { useMemo,useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Group } from 'three';
import Cabin from "./cabin";
import  Apartment  from "./apartment";
import  Tree  from "./tree";
import { TextSections } from "./textSections";
import Light from "./Light";


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

  const textSections=useMemo(()=>{
    return [ 
      {
        camreRailDist:-1,
      position:new THREE.Vector3(
        curvpoint[1].x-2,
        curvpoint[1].y,
        curvpoint[1].z
      ),
      subtitle:`Hi I'm Arun,
      FrontEnd Developer`
   },
  {
    camreRailDist:1.5,
    position:new THREE.Vector3(
      curvpoint[2].x-2,
      curvpoint[2].y,
      curvpoint[2].z
    ),
    title:"PROJECTS",
    subtitle:`IMDb Clone,Hangman Game`

  }
  
  
  ]
   },[])
   
  useFrame((_state, delta) => {
  
      const scrollOffset = Math.max(0, scroll.offset);
    

    
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
      });
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
  return (
    <>
   
      <ambientLight intensity={2} />
      <group ref={cameragroup}>
       <group ref={camreRail}>
       <PerspectiveCamera position={[0,0,50]} fov={30} makeDefault />
       </group>
        <Background/>
        
        <group ref={bike} onClick={()=>setOn(!on)}>
          {/* <group ref={bikeRef}> */}
          <Bike/>
            {/* <VibrationEffect enabled={on} /> */}
          {/* </group> */}
          {on &&
         <PositionalAudio 
         autoplay
         url="/texyures/har-stop.mp3"
         distance={1}
         loop
         volume={0.6} 
       /> 
       }
            
        </group>
      
      </group>
      


{
  textSections.map((textSection,index)=>(
    <TextSections {...textSection} key={index}/>
  ))
}

<group position={[6,0,-55]}>
  <Apartment />
  </group>
  <group position={[-6,0,-25]}>
  <Cabin />
  </group>
  <group position={[10,-5,-25]}>
  <Tree />
  </group>
  <group position={[-12,-5,35]}>
  <Tree />
  </group>
  <group position={[-13,-5,-45]}>
  <Tree />
  </group>
  <group  position={[-6,-5,-15]}>
    <Light/>
  </group>
  <group position={[-6,-5,-35]}>
  <Light/>
  </group>
  <group position={[-7,-5,-55]}>
  <Light/>
  </group>
  <group position={[-8,-5,-75]}>
  <Light/>
  </group>
  <group position={[-9 ,-5,-90]}>
  <Light/>
  </group>
      <group position-y={-12} ref={dividerGroup}>
        <mesh>
          <extrudeGeometry args={[shape, { steps: LINE_NB_POINTS, bevelEnabled: false, extrudePath: curve },]} />
          <meshStandardMaterial color={"black"} opacity={10} transparent />
        </mesh>

        <mesh>
          <extrudeGeometry args={[dividerShape, { steps: LINE_NB_POINTS, bevelEnabled: false, extrudePath: curve },]} />
          <meshStandardMaterial color={'yellow'} />
        </mesh>
      </group>
    </>
  );
};