import { Text } from "@react-three/drei";
import { useTheme } from '../context/ThemeProvider';

export const TextSections = ({ title, subtitle, ...props }) => {
  const { theme } = useTheme();

  // Define styles based on theme
  const titleStyle = {
    color: theme === 'dark' ? '#333' : '#333333', // Change color based on theme
    fontSize: 3,
    lineHeight: 1,
    anchorX: 'left',
    anchorY: 'top',
    fontWeight:"bold",
    font: "./texyures/textures/fonts/PlayfairDisplay-Regular.ttf",
  };

  const subtitleStyle = {
    color: theme === 'dark' ? '#333' : '#333333', // Change color based on theme
    fontSize: 1,
    lineHeight: 1,
    maxWidth: 2,
   
    
    
    font: "./texyures/textures/fonts/PlayfairDisplay-Regular.ttf",
  };

  return (
   <group {...props}>
    <group  position-y={-1.5} rotation-y={-.2}>
      {!!title && (
        <Text {...titleStyle}>
          {title}
        </Text>
      )}
      </group>
      <group  rotation-y={-.2} position-y={-2}>
        <Text {...subtitleStyle}>
        {subtitle}
      </Text>
    </group>
   </group>
  );
};
