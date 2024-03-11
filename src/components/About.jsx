const About = () => {
  return (
    <div className='py-20 px-16 about-section w-100'>
      <div className="about-top text-center mb-20 flex flex-col justify-center items-center">
        <h2 className='text-4xl font-bold p-3'>ABOUT ME</h2>

        <p className="text-xl font-bold w-100">
            Here you will find more information about and what I do in terms of programming, my current skills and some of my hobbies.
        </p>
      </div>
      <div className='divider flex flex-row gap-x-8 justify-between'>
        <div className='tech-stack w-5/12'>
          <h2 className="font-bold text-3xl">Get to know me!</h2>

          <p className="text-lg font-light mt-4 mb-2">
            Hello, my name is Garvin Chimone. I am a full-stack web developer on a misson to deliver exceptional web applications.
            You can view some of my work in the projects section
          </p>

          <p className="text-lg font-light mt-4 mb-2">
          Besides being a web developer, I am also a tech enthusiast and a music lover.
          In my free time I enjoy reading books, playing chess and the occasional video game.
          </p>

          <p className="text-lg font-light mt-4 mb-2">
          I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.
          </p>
        </div>
        <div className='about w-5/12'>
          <h2 className="font-bold text-3xl">About me</h2>
        </div>
      </div>
    </div>
  )
}

export default About;