/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/texyures/tree.glb -o src/components/tree.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Tree=(props)=> {
  const { nodes, materials } = useGLTF('/texyures/tree.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Default.geometry} material={materials.Bark} />
      <mesh geometry={nodes.Default_1.geometry} material={materials.Tree} />
    </group>
  )
}

useGLTF.preload('/texyures/tree.glb')
export default Tree;