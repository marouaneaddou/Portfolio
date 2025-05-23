import {Project} from "../types"
import { Code , Github } from 'lucide-react';
import portfolioData from '../config.json'

const { projects } = portfolioData
const ProjectPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-xl mx-auto ">
                    <div className="mb-5">
                        <h1 className={`text-text text-2xl font-bold mb-4`}>Projects</h1>
                        <p className="text-white/70">A showcase of my development projects and technical achievements</p>
                    </div>
                    <div className="grid gap-4 grid-cols-1">
                        {projects.map((project) => (
                            <div key={project.id} className="p-5 bg-black   border rounded-md border-white/10">
                                <h1 className="text-white mb-4">
                                    <Code className="mr-2 inline"/> <span >{project.title}</span>
                                </h1>
                                <div className=" text-textwhitewhite mb-2 w-48 p-2 bg-white/10 border rounded-md border-white/10 ">{project.type}
                                </div>
                                <p className="mb-2 text-text/70">{project.description}</p>
                                <div className="mb-4">
                                    <p className="text-white">Technologies Used</p>
                                    <div className="mt-4 md:flex">
                                        {project.technologies.map((teck) => (
                                            <p className="mb-2 md:mb-0 text-white p-2 mr-2 border rounded-md border-white/10 " key={teck}>{teck}</p>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.repoUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" bg-primary  flex justify-between p-3 border  w-48 border-white/10 rounded-md items-center">
                                    <span>Source Code</span>
                                    <Github className=" ml-1"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage