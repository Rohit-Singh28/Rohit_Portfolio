import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Technology from '../components/Technology'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'

const Home = () => {
  return (
    <div className=' text-slate-300 gap-y-4 '>
     <Hero />
      <div className='w-full h-[0.1px] bg-slate-700'>
      </div>
      <AboutUs />
      <div className='w-full h-[0.1px] bg-slate-700'>
      </div>
      <Technology />
      <div className='w-full h-[0.1px] bg-slate-700'>
      </div>
      <Projects />
      <div className='w-full h-[0.1px] bg-slate-700'>
      </div>
      <Timeline/>
      <div className='w-full h-[0.1px] bg-slate-700'>
      </div> 
      <Contact/>
      <div className='w-full h-[0.1px] bg-slate-700'>
      </div>
    </div>
  )
}

export default Home
