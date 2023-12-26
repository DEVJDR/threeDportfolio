import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import {Experience} from './components/Experience'
import { ScrollControls } from "@react-three/drei";
import  Component  from "./components/card";

function App() {
  
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense fallback={null}>
         <ScrollControls pages={20} damping={0.5}>
         <Experience/>
         </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
