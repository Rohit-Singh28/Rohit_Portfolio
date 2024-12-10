import React from 'react'
import { Link } from 'react-router-dom'
import RollingText from './ScrollingText'
const Header = () => {
    return (
        <header className='flex w-full place-content-between h-[80px] px-3 md:px-8 py-4  items-center text-slate-300 border-b-2 border-b-neutral-900'>
            <div className='text-xl '>
               {/* <img src={logo} alt=""  className=' object-fill h-full mix-blend-multiply-'/> */}
               <h1 className='font-semibold'><RollingText text={"Rohit Singh"} /></h1>
            </div>
            <div>
                <ul className='flex gap-3 md:gap-5 text-md md:text-lg'>
                    <li><Link to={'/'}><RollingText text={"Home"}/></Link></li>
                    <li><Link to={'/Allproject'}><RollingText text={"Projects"}/></Link></li>
                    <li><Link to={'/contact'}><RollingText text={"Contact"}/></Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
