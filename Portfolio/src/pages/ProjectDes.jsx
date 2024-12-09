import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { imgdata } from '../Data';
import { motion } from 'framer-motion';

const ProjectDes = () => {
  const { project } = useParams();
  const [projectData, setProjectData] = useState({
    title:"",
    images:[],
    name:""
  });

  useEffect(() => {
    scrollTo(0, 0);
    imgdata.forEach((data) => {
      if (data.name === project) {
        setProjectData(data)
      }
    })
  })

  return (
    <div className="min-h-screen  text-slate-300 py-8 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-3xl md:text-4xl text-center mb-8"
      >
        {projectData.title}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img 
              src={img} 
              alt={`${projectData.name} - Image ${index + 1}`} 
              className="w-full h-64 object-fill rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDes
