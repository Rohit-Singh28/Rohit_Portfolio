import React, { useEffect } from 'react'
import image1 from '../assets/a.jpg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.webp'
import image4 from '../assets/image4.jpeg'
import Typed from 'typed.js';
import { motion } from "framer-motion"


const Hero = () => {

    const el = React.useRef(null);
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } }
    });

    const containerImg = (delay) => ({
        hidden: { x: 10, opacity: 0 },
        visible: { x: 0, opacity: 1,rotate:12, transition: { duration: 0.5, delay: delay } }
    });
    

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Full Stack Developer'],
            typeSpeed: 90,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [])

    return (
        <div className=' md:h-[calc(100vh-80px)] px-8 my-6 md:my-2 flex flex-wrap items-center gap-24 md:gap-6 '>
            <div className='flex flex-col lg:w-[47%] gap-12'>
                <div className=''>
                    <motion.h1
                        variants={container(0.25)}
                        initial="hidden"
                        animate="visible"
                        className=' text-5xl md:text-6xl font-semibold'>Rohit Singh</motion.h1>
                    <motion.h2 
                         variants={container(0.9)}
                         initial="hidden"
                         animate="visible"
                        className='my-6 text-2xl md:text-4xl bg-gradient-to-r from-pink-400 to-blue-800 bg-clip-text text-transparent'><span ref={el}></span></motion.h2>
                </div>
                <div>
                    <motion.p
                        variants={container(1.3)}
                        initial="hidden"
                        animate="visible"
                        className='text-justify text-lg'>
                        I am a passionate full stack developer with a knack for crafting robust and scalable
                        web applications. I have honed my skills in front-endtechnologies like React and
                        taiwind CSS  as well as back-end technologies like Node.js, Express.js,and MongoDB.
                        My goal is to leverage my expertise to create innovative solutionsthat drive business
                        growth and deliver exceptional user experiences.
                    </motion.p>
                </div>
            </div>
            <div className=' md:h-[450px] mx-auto relative'>
                <motion.img src={image1} alt="image" 
                    variants={containerImg(1.2)}
                    initial="hidden"
                    whileInView="visible"
                    className='md:h-[200px] h-[120px] w-[150px] border-none md:w-[300px]  relative -rotate-12 -z-20' />
                <motion.img src={image2} alt="image" 
                    variants={containerImg(1.7)}
                    initial="hidden"
                    whileInView="visible"
                    className='md:h-[200px] h-[120px] w-[150px] border-none md:w-[300px]  relative top-[60px]  md:top-[100px] -rotate-12' />
                <motion.img src={image3} alt="image" 
                    variants={containerImg(2)}
                    initial="hidden"
                    whileInView="visible"
                    className='md:h-[200px] h-[120px] w-[150px] border-none md:w-[300px]  relative top-[-150px] left-[100px] md:top-[-240px] md:left-[190px] rotate-12' />
                <motion.img src={image4} alt="image" 
                    variants={containerImg(2.3)}
                    initial="hidden"
                    whileInView="visible"
                    className='md:h-[200px] h-[120px] w-[150px] border-none md:w-[300px]  relative top-[-280px] left-[-100px] md:top-[-440px] md:left-[-190px] rotate-12 -z-10' />

            </div>

        </div>
    )
}

export default Hero
