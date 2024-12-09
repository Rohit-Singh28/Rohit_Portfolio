import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion"

const Technology = () => {

    const IconAni = (duration) => ({
        hidden: { y: -10 },
        visible: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })

    return (
        <div className='px-8 md:px-32  mt-20 mb-36 text-slate-300 '>
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className='text-center text-3xl'>Technologies</motion.h1>
            <motion.div
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className='flex flex-wrap items-center justify-center gap-6 md:gap-16 mt-24'>
                <motion.div
                    variants={IconAni(1.9)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <RiNextjsFill className='' />
                </motion.div>
                <motion.div
                    variants={IconAni(2.6)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <RiReactjsLine className='text-blue-400' />
                </motion.div>
                <motion.div
                    variants={IconAni(2.3)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <SiMongodb className='text-green-500' />
                </motion.div>
                <motion.div
                    variants={IconAni(2)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <FaNodeJs className='text-green-700' />

                </motion.div>
                <motion.div
                    variants={IconAni(2.9)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <SiTailwindcss className='text-blue-300' />
                </motion.div>
                <motion.div
                    variants={IconAni(1.8)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <FaHtml5 className='text-orange-400' />
                </motion.div>
                <motion.div
                    variants={IconAni(1.5)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <DiCss3 className='text-blue-500' />
                </motion.div>
                <motion.div
                    variants={IconAni(1.2)}
                    initial="hidden"
                    animate="visible"
                    className='border border-slate-700 rounded-xl shadow-sm shadow-slate-400 p-4  text-3xl md:text-6xl'>
                    <IoLogoJavascript className='text-yellow-400' />
                </motion.div>


            </motion.div>
        </div>
    )
}

export default Technology
