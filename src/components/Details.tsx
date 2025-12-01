import { ExternalLink, 
    Github, 
    X }                             from "lucide-react";
import { Project }                  from "../types"
import { generateCategoryComp }     from "./Category";
import { getColor }                 from "../utils";
import TeamProjectIndicator         from "./TeamProjectTag";

interface detailsProject  {
    project : Project;
    onClose : ( ) => void;
}

const Details = ( props : detailsProject ) => {
    const Icon = generateCategoryComp(props.project.title);
    return <>
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex 
                sm:items-center justify-center">
                <div className="relative w-full h-full sm:h-auto sm:max-w-4xl  overflow-auto bg-black/80 backdrop-blur-sm">
   
                <div className="flex  p-6 bg-white/7 md:rounded-t-2xl font-bold text-white justify-between backdrop-blur border-white/10 border">
                    <p className="text-xl">{props.project.title}</p> 
                    <button onClick={() => props.onClose()}>
                        <X className="w-8 h-8"/>
                    </button>
                </div>
                <div className=" bg-white/10 backdrop-blur-[10px] md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 md:rounded-b-2xl">
                    <div className="">
                        <img className=" pt-4 md-pt-0 h-60 object-cover w-full sm:w-96 rounded-xl mb-4" src={props.project.image} alt="" />
                        <div className="p-6 md:p-0">

                            <div className="">
                                <h1 className="text-white mb-4 font-bold">Project Type</h1>
                                <p className="py-1 px-2 bg-white/10 mb-2 rounded text-sx text-white/80 w-fit">{props.project.type}</p>
                            </div>
                            <div>
                                <h1 className="text-white mb-4 font-bold">Development</h1> 
                                <p className="mb-4 w-fit"> <TeamProjectIndicator project={props.project} is_details={true}/></p>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-white mb-4 font-bold">Categories</h1>
                                <div className={`w-fit border rounded-[25px] px-4 py-1  flex gap-1  text-[12px] items-center ${getColor( props.project.category)}`}>
                                    {Icon}
                                    {props.project.category}
                                </div>
                            </div>
                            <div className=" mb-8">
                                <h1 className="text-white mb-4 font-bold">Technologies</h1>
                                <div className="flex gap-2 flex-wrap">
                                    {props.project.technologies.map( (tech : string, idx) => (
                                            <p key={idx} className="py-1 px-2 bg-white/10 mb-2 rounded text-sx text-white w-fit "> {tech}</p>
                                    ))}
                                </div>
                            </div>
                       
                            <div className="grid gap-2 grid-cols-2">
                            {
                                props.project.repoUrl !== "" && 
                                <a href={props.project.repoUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" bg-white/10  text-white flex justify-between px-8 py-2 border w-fit  border-white/10 rounded-md items-center hover:bg-white/20">
                                    <Github className=" mr-4"/>
                                    <span>Code</span>
                                </a>
                            }
                            {
                                props.project.demoUrl !== "" && 
                                <a href={props.project.repoUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" flex items-center justify-between px-8 py-2 border  w-fit text-[15px] border-white/10 rounded-md bg-orange-yellow  text-black">
                                    <ExternalLink className=" mr-4"/>
                                    <span>Demo </span>
                                </a>
                            }  
                        </div>    
                    </div>
                    </div>
                    <div className="p-6 md:p-0">
                        <div className="mb-4">
                            <h1 className="text-white mb-4 font-bold">Project Overview</h1>
                            <p className="text-white/80">
                                {props.project.description}
                            </p>
                        </div>
                        <div>
                            <h1 className="text-white mb-4 font-bold">Detailed Description</h1>
                            <div className="text-white/80">
                                { props.project.Detailed_Description.length > 0 && <p className="mb-2">{props.project.Detailed_Description[0]}</p> }
                                {props.project.Detailed_Description.slice(1).map( ( val : string) => (
                                    <li className="ml-5 list-none mb-2"> - {val}</li>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Details;