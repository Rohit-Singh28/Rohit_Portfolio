import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='px-8 py-4 flex place-content-between text-slate-300 border-t-slate-900'>
      <div>
        <h1>@Rohit Singh </h1>
      </div>
      <div className='text-2xl flex gap-6'>
        
        <a href="https://www.linkedin.com/in/rohitsingh28" target='blank'><FaLinkedin  /></a>
        <a href="https://github.com/Rohit-Singh28" target='blank'><FaGithub  /></a>
        <a href="mailto:rohitkamaldevsingh@gmail.com"><MdEmail/></a>
      </div>
    </div>
  )
}

export default Footer
