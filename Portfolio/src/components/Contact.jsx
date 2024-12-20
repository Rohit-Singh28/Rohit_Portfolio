import React, { useState } from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'


const Contact = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  })

  const handleChange = (e) => {
    setData((prev) => {
      const { name, value } = e.target;
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_zdu8l8q', 'template_z4dmoqm',  data ,'6EbxSbZ5jm5ZhR2j5')
      .then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error);
      });
  }

  return (
    <div className=' my-6  w-[100%] md:w-[35%] px-4 mx-auto mb-[100pxt] text-slate-300'>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}

        transition={{ duration: 0.6, delay: 0.6 }}
        className='text-center font-bold p-2 text-3xl my-6'>Contact</motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}

        transition={{ duration: 0.6, delay: 0.8 }}

        className=' bg-gradient-to-tl from-blue-900 to-slate-900 p-4 rounded w-full max-w-2xl h-full max-h-[80%]  shadow-xl  mx-auto '>

        <form className='grid p-4 gap-2  h-full pb-5' onSubmit={handleSubmit} >
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            id='name'
            placeholder='Enter Name '
            value={data.name}
            onChange={handleChange}
            name='name'
            className='p-2 bg-slate-100 border rounded text-black'
            required
          />

          <label htmlFor='email'>Email :</label>
          <input
            type='text'
            id='email'
            placeholder='enter email '
            value={data.email}
            onChange={handleChange}
            name='email'
            className='p-2 bg-slate-100 border rounded text-black'
            required
          />


          <label htmlFor='phone' className='mt-3'>Phone :</label>
          <input
            type='number'
            id='price'
            placeholder='XXXXXXXXXX'
            name='phone'
            className='p-2 bg-slate-100 border rounded text-black'
            value={data.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor='comment' className='mt-3'>comment :</label>
          <textarea
            className='h-28 bg-slate-100 border resize-none p-1 text-black'
            placeholder='comment us'
            rows={3}
            name='comment'
            value={data.comment}
            onChange={handleChange}
          >
          </textarea>


          <div className=''>
            <button type='submit' className='px-3 py-2 my-4 bg-gradient-to-tl from-blue-900 to-slate-800 border rounded-lg  hover:font-bold duration-200 text-white mb-10 '>Submit</button>
          </div>
        </form>
      </motion.div>

    </div>
  )
}

export default Contact
