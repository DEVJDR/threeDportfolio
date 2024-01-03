import Cabin from "./cabin";
import  Apartment  from "./apartment";
import Tree from './Trees'
import Light from "./Light";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";



const Others=({sceneOpacity})=>{
// const materialRef=useRef()
//   useFrame(()=>{
//     materialRef.current.opacity=sceneOpacity.current
//   })

  
return(
      <>

<group>
<group position={[11,-5,-75]} rotation-y={0}>
<Apartment />
</group>
<group position={[-25,-8,-40]} rotation-y={2.9} scale={0.8}>
<Cabin />
</group>
<group position={[15,-7,-35]}>
<Tree />
</group>
<group position={[-25,-7,-105]}>
<Tree />
</group>
<group position={[-25 ,-7,35]}>
<Tree />
</group>
<group position={[-29,-7,-45]}>
<Tree />
</group>
<group position={[18 ,-8,-150]} rotation-y={2} scale={0.7}>
<Cabin/>
</group>
<group position={[15 ,-7,-130]}>
<Tree/>
</group>
<group position={[-25 ,-7,-180]}>
<Tree/>
</group>
<group position={[30 ,-9,-250]} rotation-y={2} scale={0.7}>
<Cabin/>
</group>
<group position={[15 ,-7,-210]}>
<Tree/>
</group>
<group position={[-15 ,-7,-280]}>
<Tree/>
</group>
<group position={[18 ,-7,-350]} rotation-y={2} scale={0.7}>
<Cabin/>
</group>
<group position={[15 ,-7,-330]}>
<Tree/>
</group>
<group position={[85 ,-7,-350]}>
<Tree/>
</group>
<group position={[95 ,-7,-390]}>
<Tree/>
</group>
<group position={[-15 ,-7,-420]}>
<Tree/>
</group>
<group position={[-15 ,-7,-450]}>
<Tree/>
</group>
<group position={[-15 ,-7,-390]} rotation-y={2} scale={0.7}>
<Cabin/>
</group>
<group position={[115 ,-7,-390]} rotation-y={2} scale={0.7}>
<Cabin/>
</group>
<group position={[-25 ,-7,-350]}>
<Tree/>
</group>
<group position={[-15 ,-7,-380]}>
<Tree/>
</group>
<group position={[-15 ,-7,-380]}>
<Tree/>
</group>
<group position={[15 ,-5,-400]}>
<Tree/>
</group>
<group position={[-25 ,-5,-480]}>
<Tree/>
</group>
<group position={[25 ,-5,-530]}>
<Tree/>
</group>
<group position={[-15 ,-7,-580]}>
<Tree/>
</group>
<group position={[40 ,-5,-280]}>
<Tree/>
</group>
<group position={[40 ,-5,-300]} rotation-y={6}>
<Apartment/>
</group>
<group position={[-35 ,-5,-480]}>
<Apartment/>
</group>
<group position={[75 ,-5,-580]} rotation-y={6.8}>
<Apartment/>
</group>
<group position={[80 ,-8,-590]} >
<Tree/>
</group>
<group position={[-15 ,-8,-690]}>
<Tree/>
</group>
<group position={[5 ,-7,-600]}>
<Tree/>
</group>
<group position={[-5 ,-7,-710]}>
<Tree/>
</group>
<group position={[-5 ,-7,-750]}>
<Tree/>
</group>
<group position={[-15 ,-7,-790]}>
<Tree/>
</group>
<group position={[35 ,-7,-800]}>
<Tree/>
</group>
<group position={[-15 ,-7,-810]}>
<Tree/>
</group>
<group position={[-15 ,-7,-850]}>
<Tree/>
</group>
<group position={[35 ,-7,-900]}>
<Tree/>
</group>
<group position={[-5 ,-7,-950]}>
<Tree/>
</group>
<group position={[25 ,-7,-1000]}>
<Tree/>
</group>
<group position={[-35 ,-5,-1050]} rotation-y={2}>
<Apartment/>
</group>
<group position={[-15 ,-8,-1050]}>
<Tree/>
</group>
<group position={[45 ,-7,-1150]}>
<Tree/>
</group>
<group position={[-25 ,-7,-1250]}>
<Tree/>
</group>
<group position={[45 ,-7,-1300]}>
<Tree/>
</group>
<group position={[-25 ,-7,-1350]}>
<Tree/>
</group>
<group position={[45 ,-7,-1390]}>
<Tree/>
</group>
<group position={[-35 ,-7,-1220]} rotation-y={8}>
<Apartment/>
</group>
<group position={[-25 ,-7,-1450]}>
<Tree/>
</group>
<group position={[-35 ,-7,-1220]} rotation-y={8}>
<Apartment/>
</group>
<group position={[-25 ,-9,-1520]}>
<Tree/>
</group>
<group position={[-35 ,-7,-1510]} rotation-y={8}>
<Apartment/>
</group>
<group position={[-25 ,-8,-1550]}>
<Tree/>
</group>
<group position={[25 ,-8,-1550]}>
<Tree/>
</group>
<group position={[-25 ,-8,-1570]}>
<Tree/>
</group>
<group position={[25 ,-8,-1580]}>
<Tree/>
</group>
<group position={[-15 ,-8,-1590]} rotation-y={2} scale={0.7}>
<Cabin/>
</group>
{/* <group  position={[-6,-5,-5]}>
  <Light/>
</group>
<group position={[-6,-5,-25]}>
<Light/>
</group>
<group position={[-7,-5,-55]}>
<Light/>
</group>
<group position={[-8,-5,-75]}>
<Light/>
</group>
<group position={[-9 ,-5,-95]}>
<Light/>
</group> */}
{/* <group position={[-9,-5,-115]}>
<Light/>
</group>
<group position={[-11,-5,-135]}>
<Light/>
</group> */}
{/* <group position={[-5,-5,11]}>
<Light/>
</group>
<group position={[-12,-5,-155]}>
<Light/>
</group> */}
{/* <group position={[-12 ,-5,-170]}>
<Light/>
</group>
<group position={[-11 ,-5,-195]}>
<Light/>
</group>
<group position={[-11 ,-5,-215]}>
<Light/>
</group>
<group position={[-10 ,-5,-235]}>
<Light/>
</group>

<group position={[-10 ,-5,-215]}>
<Light/>
</group>
<group position={[-9 ,-5,-235]}>
<Light/>
</group>
<group position={[-8 ,-5,-255]}>
<Light/>
</group>
<group position={[-8 ,-5,-275]}>
<Light/>
</group>
<group position={[-11 ,-5,-295]}>
<Light/>
</group>
<group position={[-10 ,-5,-315]}>
<Light/>
</group>
<group position={[-11 ,-5,-335]}>
<Light/>
</group>
<group position={[-11 ,-5,-355]}>
<Light/>
</group>
<group position={[-10 ,-5,-375]}>
<Light/>
</group> */}
</group>


      </>
    )
}
export default Others;