import { Canvas} from "@react-three/fiber";
import {Experience} from './components/Experience'
import {ScrollControls} from "@react-three/drei";
import { Overlay } from "./components/Overlay";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <>
    <ThemeProvider>
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
                onScroll={() => setHasScroll(true)}>
              <Experience />
            </ScrollControls>
          </Canvas>
        <Overlay/>
    </ThemeProvider> 
    </>
  );
}

export default App;
