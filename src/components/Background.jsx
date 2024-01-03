import React from 'react';
import {Sphere } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeProvider';

const Background = () => {
  const {theme}=useTheme()
  const gradientColorA = theme === 'light' ? '#78b6ff' : '#093e58';
  const gradientColorB = theme === 'light' ? '#62d2bd' : '#EBFFFF';
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
