import { useProgress } from "@react-three/drei";
import { usePlay } from "../context/Play";
import { useTheme } from "../context/ThemeProvider";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";



export const Overlay = () => {
    const{theme,toggleTheme}=useTheme();
    console.log(theme)
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <>
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
         
          <h1 className="logo">
            DEVJDR.  
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )} 
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p><a
            href="https://drive.google.com/file/d/1YOyQThg3ip9M2EgpOtqZPQONWdogn99M/view?usp=sharing"
            className="explore"
            style={{ pointerEvents: 'auto', textDecoration: 'none' }}
          >Resume
          </a><a
          href="mailto:arunjev26@gmail.com"
            className="explore"
            style={{ pointerEvents: 'auto', textDecoration: 'none' }}
          >
            Contact
          </a></p>
      </div>
      <div className="switch" >
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
        style={{ pointerEvents :'auto'}}
      >
        {theme === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      </div>
      </div>
    </>
   
  );
};