import {CategoriesProject, 
    Project}                from "../types"
import { Code , 
    Github, 
    Globe, 
    Grid3X3, 
    Server, 
    Wrench }                from 'lucide-react';
import portfolioData        from '../config.json'
import Card from "../components/Card";

const categories : CategoriesProject[] = [
    { name: 'All', icon: Grid3X3, color: 'text-white bg-white/10 border-white/20' },
    { name: 'Web', icon: Globe, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'System', icon: Server, color: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'DevOps', icon: Wrench, color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' }
]

const handleFilterProject = () => {

}

const { projects } = portfolioData
const ProjectPage = () => {
    return (
        <>
            <div className="max-w-[1100px] mx-auto ">
            <div className="flex bg-white/10 p-4 rounded justify-between max-w-2xl mx-auto backdrop-blur-[10px]  border">
                {categories.map( (category ) => (
                    <button onClick={handleFilterProject} className=" bg-white/10 border rounded text-white/50 px-4 py-2 border-white/10 list-none backdrop-blur-[10px]">
                        {category.name }
                    </button>
                ))}
            </div>
                <div className="">
                    <div className="mb-5">
                        <h1 className={`text-text text-xl font-bold mb-4`}>Projects</h1>
                        <p className="text-white/70">A showcase of my development projects and technical achievements</p>
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map(( project : Project ) => (
                            <Card project={project} />
                        ))}
                        {/* {projects.map((project) => (
                            <div key={project.id} className="p-5 bg-black   border rounded-md border-white/10 w-[400px] mr-2">
                                <h1 className="text-white mb-4">
                                    <Code className="mr-2 inline"/> <span >{project.title}</span>
                                </h1>
                                <div className=" text-textwhitewhite mb-2 w-48 p-2 bg-white/10 border rounded-md border-white/10 text-white ">{project.role}
                                </div>
                                <p className="mb-2 text-text/70 text-white">{project.description}</p>
                                <div className="mb-4">
                                    <li className="text-white">Technologies Used</li>
                                    <div className="mt-4 md:flex flex-wrap">
                                        {project.technologies.map((teck) => (
                                            <p className="mb-20 md:mb-0 text-white p-2 mr-2 border-2 rounded-md border-white/10 bg-white/10" key={teck}>{teck}</p>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    { project.repoUrl &&  <a href={project.repoUrl} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary  flex justify-between p-3 border  w-48 border-white/10 rounded-md items-center bg-orange-yellow text-white">
                                        <span>Source Code</span>
                                        <Github className=" ml-1"/>
                                    </a>}

                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage