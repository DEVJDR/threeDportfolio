/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/texyures/Light.glb -o src/components/Light.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 const Light=(props)=> {
  const { nodes, materials } = useGLTF('/texyures/Light.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 1.3]} scale={58.6}>
        <mesh geometry={nodes.StreetLight_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.StreetLight_2.geometry} material={materials.Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/texyures/Light.glb')
export default Light;