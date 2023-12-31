import React from 'react';
import { Environment, Sphere, Html,Sky } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';
import * as THREE from 'three';
import { useTheme } from './ThemeProvider';


const Background = () => {
  const {theme}=useTheme()
  
  const gradientColorA = theme === 'light' ? '#01162e' : '#B2F2FF';
  const gradientColorB = theme === 'light' ? '#b2f2ff' : '#EBFFFF';
  return (
    <>
    
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>   
        <LayerMaterial lighting='physical' transmission={1} side={THREE.BackSide}>
        <Gradient colorA={gradientColorA} colorB={gradientColorB} axes="y" start={0} end={-0.5} />
        </LayerMaterial>
      </Sphere>
      
    </>
  );
};

export default Background;
