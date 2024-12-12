import React from 'react'
import { motion } from 'framer-motion'

export default function TimelineItem({ date, title, company, description, isLeft }) {
  return (
    <div className={`flex ${isLeft ? 'flex-row-reverse' : ''} items-center justify-center mb-8 px-0 md:px-20`}>
      <div className="w-5/12">
        <motion.div
          className="bg-white p-2 md:p-6 rounded-lg shadow-md"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="md:text-xl font-semibold mb-2 text-black">{title}</h3>
          <h4 className="md:text-lg text-gray-600 mb-2">{company}</h4>
          <p className="text-sm md:text-[1rem] text-gray-500 mb-4">{description}</p>
        </motion.div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
      </div>
      <div className="w-5/12 text-center">
        <span className="text-slate-300 font-medium">{date}</span>
      </div>
    </div>
  )
}

