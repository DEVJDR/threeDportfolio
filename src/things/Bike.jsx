

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { usePlay } from "../context/Play";
export function Bike(props) {

  const front = useRef()
  const rear = useRef()
  const {  hasScroll } = usePlay();
  useFrame((_state, delta) => {
  if(hasScroll){
    front.current.rotation.x += delta * 5
    rear.current.rotation.x += delta * 5
  }
  })


  const { nodes, materials } = useGLTF('/texyures/scene.gltf')
  return (
    <group {...props} dispose={null} rotation={[0,3.1,6.3]} scale={.8} position={[-1,-2,-4]}>
      <group position={[0, -7.952, 5.9]} rotation={[0, 0, 0]} ref={front}>
        <group position={[0, 0, 1.01]}> {/* Adjust the pivot point */}
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.chrome} />
        </group>
      </group>
      <group position={[0, -7.952, -4.3]} ref={rear}>
        <group position={[0, 0, 1.01]}> {/* Adjust the pivot point */}
          <mesh geometry={nodes.Object_7.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.chrome} />
        </group>
      </group>
      <group position={[-0.031, -7.8, -0.671]} scale={0.293}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Object_19.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Object_20.geometry} material={materials['Material.014']} />
      </group>
      <group position={[0.008, 0.125, -0.432]}>
        <mesh geometry={nodes.Object_22.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_23.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Object_24.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Object_25.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.material} />
      </group>
      <group position={[0.027, 0.046, 5.014]}>
        <mesh geometry={nodes.Object_28.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_29.geometry} material={materials['Material.013']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_37.geometry} material={materials.cloth1} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.cloth2} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.cloth3} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.cloth4} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.cloth5} />
      </group>
      <mesh geometry={nodes.Object_10.geometry} material={materials.chrome} />
      <mesh geometry={nodes.Object_11.geometry} material={materials['Material.010']} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['Material.012']} />
      <mesh geometry={nodes.Object_13.geometry} material={materials['Material.013']} />
      
      <mesh geometry={nodes.Object_33.geometry} material={materials['Material.001']} position={[0, 0, 3.295]} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.body1} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/texyures/scene.gltf')
