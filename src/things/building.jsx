/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/texyures/gm.glb -o src/components/building.jsx -r public 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

 const Building=(props)=> {
  const { nodes, materials } = useGLTF('/texyures/gm.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tokyo_tower_town_working.geometry} material={materials.palette} />
    </group>
  )
}

useGLTF.preload('/texyures/gm.glb')
export default Building;