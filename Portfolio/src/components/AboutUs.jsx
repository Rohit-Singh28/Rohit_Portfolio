import React from 'react'
import aboutus from '../assets/about.jpg'
import { motion } from "framer-motion"

const AboutUs = () => {
    return (
        <div className='px-8  my-14  '>
            <h1 className='text-center text-3xl'>About Me</h1>
            <div className='flex flex-wrap flex-col md:flex-row gap-20 my-12 py-8 justify-center '>
                <div className='w-full md:w-[40%] '>
                    <motion.img src={aboutus} alt="img" 
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.5,delay:1}}
                        className='rounded-3xl shadow'/>
                </div>
                <div className='w-full md:w-[30%]'>
                    <motion.p 
                          initial={{x:-300,opacity:0}}
                          whileInView={{x:0,opacity:1}}
                          transition={{duration:0.8,delay:1}}
                        className='text-sm md:text-lg text-justify'>
                        Hello! I'm <span className='font-bold text-md md:text-xl'>Rohit</span>, a dedicated second-year Information Technology student at
                        D.J. Sanghvi College of Engineering (DJSCE). My passion for technology has driven me to delve
                        deeply into various aspects of web development, particularly the MERN stack. I have developed
                        a solid understanding of MongoDB, Express.js, React.js, and Node.js, allowing me to build dynamic
                        and responsive web applications from the ground up. Additionally, I have honed my skills in
                        Tailwind CSS, which enables me to design clean and modern user interfaces efficiently. My continuous
                        quest for knowledge keeps me exploring new technologies and frameworks to stay abreast of
                        industry trends.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
