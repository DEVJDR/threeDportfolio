import Cabin from "./cabin";
import  Apartment  from "./apartment";
import  Tree  from "./tree";
import Light from "./Light";
import Trees from "./tree"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";



const Others=({sceneOpacity})=>{
  const materialRef=useRef()
  useFrame(()=>{
    materialRef.current.opacity=sceneOpacity.current
  })

  
return(
      <>

<group ref={materialRef}>
<group position={[6,0,-55]}>
<Apartment />
</group>
<group position={[-6,0,-25]}>
<Cabin />
</group>
<group position={[10,-5,-25]}>
<Tree />
</group>
<group position={[-12,-5,35]}>
<Tree />
</group>
<group position={[-13,-5,-45]}>
<Tree />
</group>
<group  position={[-6,-5,-15]}>
  <Light/>
</group>
<group position={[-6,-5,-35]}>
<Light/>
</group>
<group position={[-7,-5,-55]}>
<Light/>
</group>
<group position={[-8,-5,-75]}>
<Light/>
</group>
<group position={[-9 ,-5,-90]}>
<Light/>
</group>
<group position={[-9 ,-5,-90]}>
<Cabin/>
</group>
<group position={[-9 ,-5,-130]}>
<Trees/>
</group>
</group>

      </>
    )
}
export default Others;