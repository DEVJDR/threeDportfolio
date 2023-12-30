import { RoundedBox, Text } from "@react-three/drei"

export const TextSections=({title,subtitle,...props})=>{
    return(
                 <group {...props}>
                

                  {!!title &&(
                      <Text color="white"
                      anchorX="left"
                      anchorY="bottom"
                      fontSize={0.26}
                      lineHeight={1}
                      
                      font={"./texyures/textures/fonts/PlayfairDisplay-Regular.ttf"}>
                          {title}
                      </Text>

                      

                  
                  )}
                  <Text color="white"
                      anchorX="left"
                      anchorY="top"
                      fontSize={0.4}
                      lineHeight={1}
                      maxWidth={2.2}
                      font={"./texyures/textures/fonts/PlayfairDisplay-Regular.ttf"}>
                          {subtitle}
                      </Text>
                 

                 </group> 

    )
}