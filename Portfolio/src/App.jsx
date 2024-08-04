import './App.css'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Technology from './components/Technology'


function App() {

  return (
    <div className=' text-slate-300 gap-y-4 '>
      <Header />
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
      <Contact/>
    </div>

  )
}

export default App