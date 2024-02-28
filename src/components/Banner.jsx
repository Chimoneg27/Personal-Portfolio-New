import { useGlitch } from "react-powerglitch"
import "../App.css"
import '../styles/Banner.css'
import linkedin from '../assets/images/linkedin.svg'
import x from '../assets/images/x.svg'
import github from '../assets/images/github.svg'
import medium from '../assets/images/medium.svg'

const Banner = () => {
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 3050
    },
    glitchTimeSpan: {
      start: 0.45,
      end: 0.8
    },
    shake: false,
    slice: {
      count: 6,
      velocity: 20,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: false
    },
    pulse: false
  })

  return (
    <div
      className="intro-section w-full h-screen flex flex-col items-center p-20"
      style={{
        backgroundImage: `url('/backdrop-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="short-intro p-2 w-4/5 mt-20  flex flex-col items-center ">
        <h1 className="text-6xl font-bold text-center text-blue-700" ref={glitch.ref}>
          HELLO, I&apos;M GARVIN CHIMONE
        </h1>
        <p className="text-xl text-center mt-10 font-semibold text-black">
          I am a full-stack web developer on a misson to deliver exceptional web applications.
        </p>
        <p className="text-xl text-center font-semibold text-black">
          Let&apos;s make something special.
        </p>

        <button
          type="button"
          className="px-4 py-3 mt-24 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex w-80 items-center"
        >
          <span className="ml-2 w-full text-xl font-bold">PROJECTS</span>
        </button>
      </div>

      <ul className="media-links mt-20 bg-white h-64 w-16 flex flex-col justify-evenly items-center">
        <li className='h-8 w-9 flex items-center justify-center'>
          <a href="#" className="p-1">
            <img src={linkedin} alt="linkedin" className="w-8" />
          </a>
        </li>
        <li className='h-8 w-9 flex items-center justify-center'>
          <a href="#">
            <img src={x} alt="x" className="w-8" />
          </a>
        </li>
        <li className='h-8 w-9 flex items-center justify-center'>
          <a href="#">
            <img src={github} alt="github" className="w-8" />
          </a>
        </li>
        <li className='h-8 w-9 flex items-center justify-center'>
          <a href="#">
            <img src={medium} alt="medium" className="w-8" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Banner
