import React from 'react'
import ProjectCart from './ProjectCart'

const Projects = () => {
    return (
        <div className=' flex flex-col px-8  mt-20 mb-36 gap-8 '>
            <h1 className='text-center text-2xl font-bold mb-14'>Projects</h1>
            <ProjectCart
                title={"E-commerce"}
                description={"sdkasjdklas sdjlaskld slakjdasklsdsad sdhsajkdhasd dasjkhdasjkd dsahkldsjkad dashdjkashdas dashdasjkdhas dsdhsajkdhasjkd sdhksajkdhaskd askdhlsakjdhask dasdhaskjd"}
                tech={["MongoDB", "Node.js", "Express.js", "React.js","Tailwind CSS"]} />

            <ProjectCart
                title={"E-state"}
                description={"sdkasjdklas sdjlaskld slakjdasklsdsad sdhsajkdhasd dasjkhdasjkd dsahkldsjkad dashdjkashdas dashdasjkdhas dsdhsajkdhasjkd sdhksajkdhaskd askdhlsakjdhask dasdhaskjd"}
                tech={["MongoDB", "Node.js", "Express.js", "Ejs template","Tailwind CSS"]} />

            <ProjectCart
                title={"simmon say game"}
                description={"sdkasjdklas sdjlaskld slakjdasklsdsad sdhsajkdhasd dasjkhdasjkd dsahkldsjkad dashdjkashdas dashdasjkdhas dsdhsajkdhasjkd sdhksajkdhaskd askdhlsakjdhask dasdhaskjd"}
                tech={["HTML","CSS" ,"JS"]} />

            <ProjectCart
                title={"Currency Convertor"}
                description={"sdkasjdklas sdjlaskld slakjdasklsdsad sdhsajkdhasd dasjkhdasjkd dsahkldsjkad dashdjkashdas dashdasjkdhas dsdhsajkdhasjkd sdhksajkdhaskd askdhlsakjdhask dasdhaskjd"}
                tech={["React.js", "Tailwind CSS"]} />
        </div>
    )
}

export default Projects
