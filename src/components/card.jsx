import { RoundedBox, Text,SpriteAnimator } from '@react-three/drei';
import { MeshBasicMaterial } from 'three';

function Sample() {
  return (
    <mesh>
      
      
      <SpriteAnimator
  position={[-3.5, -2.0, 2.5]}
  startFrame={0}
  scaleFactor={0.125}
  autoPlay={true}
  loop={true}
  numberOfFrames={16}
  
><RoundedBox /></SpriteAnimator>
    </mesh>
  );
}

export default Sample;
