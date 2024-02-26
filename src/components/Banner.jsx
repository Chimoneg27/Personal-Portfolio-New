import "../App.css"

const Banner = () => {
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
      <div className="short-intro p-2 w-4/5 m-5">
        <h1 className="text-6xl font-bold text-center text-black">
          HELLO, I&apos;M GARVIN CHIMONE
        </h1>
        <p className="text-xl text-center mt-10 font-semibold text-gray-600">
          I am a full-stack web developer on a misson to deliver exceptional web applications.
        </p>
        <p className="text-xl text-center font-semibold text-gray-600">
          Let&apos;s make something special.
        </p>
      </div>

      <button
        type="button"
        className="px-4 py-3 mt-24 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex w-80 items-center"
      >
        <span className="ml-2 w-full text-xl font-bold">PROJECTS</span>
      </button>
    </div>
  )
}

export default Banner
