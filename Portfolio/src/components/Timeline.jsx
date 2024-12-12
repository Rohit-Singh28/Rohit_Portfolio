import React from 'react'
import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem'

const experiences = [
  {
    id: 1,
    date: "2024 - Present",
    title: "Web Developer",
    company: "DJSCE ACM Student Chapter",
    description: "Created multiple website for college events  using MERN Stack."
  },
  {
    id: 2,
    date: "2024 - present",
    title: "Technical Co-committee member ",
    company: "DJCSI",
    description: "Developed and maintained various college daily using projects using the Next.js , React.js and firebase."
  },
  {
    id: 3,
    date: "2023 - 2024",
    title: "Full stack Developer",
    company: "QuickAttire",
    description: "Assisted in building responsive and interactive user interfaces in shopify ."
  }
]

const Timeline = () => {
    return (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl  md:text-3xl font-bold text-center mb-10">Experience</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineItem {...experience} isLeft={index % 2 === 0} />
              </motion.div>
            ))}
          </div>
        </div>
      )
}

export default Timeline


