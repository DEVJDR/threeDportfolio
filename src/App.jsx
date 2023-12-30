import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Experience } from './components/Experience'
import { Html, OrbitControls, ScrollControls, PositionalAudio } from "@react-three/drei";
import { usePlay } from "./components/Play";
import { Overlay } from "./components/Overlay";

function App() {

  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />

        <ScrollControls
          pages={20} damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forward",
            opacity: 0,
          }}
          onScroll={() => setHasScroll(true)} // Update hasScroll state
        >
          <Experience />
         
        </ScrollControls>

      </Canvas>
      <Overlay/>
    </>
  );
}

export default App;
