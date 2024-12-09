import React from 'react'
import { motion } from "framer-motion"

const ProjectCart = ({ title, description, tech, image }) => {
    return (
        <div className='flex  flex-col md:flex-row gap-8 md:gap-16 md:h-[320px] overflow-hidden '>
            <div className='w-full md:w-[40%] '>
                <motion.img src={image} alt="img"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}

                    transition={{ duration: 1, delay: 1 }}
                    className='w-[50%] ml-[25%] h-[200px]  mt-8 object-fill' />
            </div>
            <div className='flex flex-col w-full md:w-[50%] gap-4'>
                <div>
                    <motion.h1
                        initial={{ x: 100, opacity: 0, style: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}

                        transition={{ duration: 1, delay: 1.2 }}
                        className='text-2xl font-bold p-2 m-2'>{title}</motion.h1>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}

                        transition={{ duration: 1, delay: 1.35 }}
                        className='text-md p-2 text-justify'> {description}.</motion.p>
                </div>
                <div className='flex flex-wrap md:gap-4 gap-2 text-lg'>
                    {
                        tech.map((e, ind) => {
                            return (
                                <motion.div key={ind}
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}

                                    transition={{ duration: 1, delay: 1.5 }}
                                    className='border border-slate-700 py-2 md:px-6 px-3 rounded-2xl bg-slate-900 text-white'>
                                    {e}
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCart
