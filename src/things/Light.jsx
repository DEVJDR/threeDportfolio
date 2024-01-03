import React, { useState } from 'react';
import { useGLTF, SpotLight } from '@react-three/drei';
import { useTheme } from '../context/ThemeProvider';

const Light = (props) => {
  const { nodes, materials } = useGLTF('/texyures/Light.glb');
  const { theme } = useTheme();
 
  
  return (
    <group {...props} dispose={null}>
      {theme==='light' && 
        <SpotLight
          color={"yellow"}
          position={[2,9,8]}
           // Adjusted position
          angle={Math.PI /8}
          intensity={6}           // Adjusted intensity
        />
      }
      <group rotation={[-Math.PI / 2, 0, 8.7]} position={[-1.8, -0.2, 1]} scale={58.6}>
        <mesh geometry={nodes.StreetLight_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.StreetLight_2.geometry} material={materials.Light} />
      </group>
    </group>
  );
};

useGLTF.preload('/texyures/Light.glb');
export default Light;
