
import { ExternalLink, 
    Eye, 
    Github }            from "lucide-react";
import { Project }      from "../types";
import Category         from "./Category";

interface CardProp  {
    project : Project
}


const Card = ( { project } : CardProp )   => {
    return <>
        <div className="group border border-white/10 rounded-[16px] backdrop-blur-sm bg-opacity-10 bg-white/5 hover:cursor-pointer hover:border-white/20">
            <div className="absulate">
                <img src={project.image} alt="" className="rounded-tr-[1rem] rounded-tl-[1rem] h-48 w-full z-10 object-cover"/>
                <div className=" absolute top-4 w-full">
                    <Category name={project.category} />
                </div>
                <div className=" absolute top-36 ml-[2px] text-[12px] bg-white/10  px-2 py-1 rounded left-2 text-white">
                    {project.type}
                </div>
                <div className=" absolute top-36 right-4 ml-[2px] text-[12px] bg-orange-yellow px-2 py-1 rounded r text-black ">
                    {project.role}
                </div>
            </div>
            <div className=" p-6 rounded-br-[1rem] rounded-bl-[1rem]">
                <h1 className="text-white font-bold pb-4 text-[20px] group-hover:text-orange-yellow "> {project.title}</h1>
                <p className=" text-white/70 pb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map( (tech : string, idx) => (
                        <p key={idx} className="p-1 bg-white/10 mb-2 rounded text-sx text-white/80"> {tech}</p>
                    ))}
                </div>
                <div className="grid gap-2 grid-cols-3">
                    {
                        project.repoUrl !== "" && 
                        <a href={project.repoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" bg-white/10  text-white flex justify-between p-2 border   border-white/10 rounded-md items-center hover:bg-white/20">
                            <Github className=" ml-1"/>
                            <span>Code</span>
                        </a>
                    }
                    {
                        <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex items-center justify-between p-2 border text-[15px] border-white/10 rounded-md  bg-white/10 text-white hover:bg-white/20">
                            <Eye className=" ml-1"/>
                            <span> Details</span>
                        </a>
                    } 
                    {
                        project.demoUrl !== "" && 
                        <a href={project.repoUrl} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex items-center justify-between p-2 border text-[15px] border-white/10 rounded-md bg-orange-yellow  text-black">
                            <ExternalLink className=" ml-1"/>
                            <span>Demo </span>
                        </a>
                    }  
                          
                </div>
            </div>
        </div>
    </>
}

export default Card; 