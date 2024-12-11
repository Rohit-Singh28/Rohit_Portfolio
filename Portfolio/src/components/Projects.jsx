import React from 'react'
import ProjectCart from './ProjectCart'
import ecom from '../assets/Ecom.png'
import estate from '../assets/estate.jpeg'
import AIcademy from '../assets/AIcademy.png'
import { Link } from "react-router-dom"



const Projects = () => {
    return (
        <div className=' flex flex-col px-8  mt-20 mb-36 gap-8 text-slate-300'>
            <h1 className='text-center text-3xl font-bold mb-14'>Projects</h1>
            <Link to={"/AIcademy"}>
                <ProjectCart
                    image={AIcademy}
                    title={"AIcademy - Personalized Educational Website"}
                    description="This project is an educational platform developed to provide customized course content based on individual student difficulty levels, enabling tailored learning experiences. The platform integrates AI tools (Gemini AI, Llama AI) for adaptive content recommendations and YouTube resource integration. It incorporates interactive 3D visuals and a responsive design to enhance the user experience."
                    tech={["Next.js", "Shadcn", "Drizzle", "Spline", "Crek"]} />
            </Link>

            {/* <ProjectCart
                image={AIcademy}
                title={"Password Generator"}
                description={"The Password Generator is a user-friendly web application built using React.js, designed to help users create secure, random passwords tailored to their specific needs. With an intuitive interface, users can easily specify the desired length of their password, ensuring it meets their security requirements. Upon inputting the length, the application instantly generates a robust password with a single click, making it a convenient tool for enhancing online security. Whether for personal use or professional needs, this Password Generator simplifies the process of creating strong, reliable passwords."}
                tech={["React.js", "Tailwind CSS"]} /> */}

            <Link to={"/Ecommerce"}>
                <ProjectCart
                    image={ecom}
                    title={"E-commerce"}
                    description={"This project is a  e-commerce website developed using React, MongoDB, Node.js, and Express. The site features a comprehensive admin panel that allows for product management, including adding and deleting products. Additionally, the admin has the ability to assign admin privileges to other users. The project adheres to the MVC (Model-View-Controller) design pattern to ensure a structured and maintainable codebase"}
                    tech={["MongoDB", "Node.js", "Express.js", "React.js", "Tailwind CSS"]} />
            </Link>

            <Link to={"/Estate"}>
                <ProjectCart
                    image={estate}
                    title={"E-state"}
                    description={" The application features a modern and responsive user interface designed with Tailwind CSS to enhance visual appeal. As a user, you can easily browse through a wide variety of villas, each with detailed descriptions and high-quality images, helping you find your perfect home or investment property. The coolest features of E-State is our interactive maps, powered by Mapbox API. This lets you see exactly where each villa is located."}
                    tech={["MongoDB", "Node.js", "Express.js", "Ejs template", "Tailwind CSS"]} />
            </Link>

        </div>
    )
}

export default Projects
