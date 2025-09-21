import { Project}                from "../types"
import portfolioData            from '../config.json'
import Card                     from "../components/Card";
import { useState }             from "react";
import Button                   from "../components/Button";
import {Code2  } from "lucide-react";
import Details from "../components/Details";

const { projects } = portfolioData
const ProjectPage = () => {
    const [ items, setItems ] = useState(projects);
    const [ isActive, setActive ] = useState("All")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const menuCategories = [...new Set(projects.map((project : Project) => project.category))]

    const filterProject = ( cat : string ) => {
        setActive(cat)
        if ( cat === "All" ) {
            setItems(projects)
            return;
        }
        const newItems = projects.filter(( project ) => project.category === cat );
        setItems( newItems );
    }
    const handleShowDetails = (project : Project) => {
        setSelectedProject(project);
    };
    
    const handleCloseModal = () => {
      setSelectedProject(null);
    };

    return (
        <>
            <div className="max-w-[1100px] mx-auto">
                <div className="mb-5 text-white">
                        <h1 className="flex font-bold mb-4 text-3xl gap-3"> <Code2 className="w-8 h-8"/> Projects</h1>
                        <p className="text-white/70 text-lg">A showcase of my development projects and technical achievements</p>
                </div>
                <div className="flex flex-wrap gap-x-20 gap-y-4 w-fit
                     bg-white/5 p-6 rounded-lg  max-w-3xl mx-auto backdrop-blur-[10px]  border border-white/10 text-white/50 mb-6">
                    <Button key={0} category={"All"} filterProject={filterProject} isActive={isActive=="All"}/>
                    { menuCategories.map( (val, idx) => (
                        <Button key={idx + 1} category={val} filterProject={filterProject} isActive={isActive==val}/>
                    ))}
                </div>
                <div className="">
                    
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map(( project : Project ) => (
                            <Card key={project.id} project={project} setProject={handleShowDetails}/>
                        ))}
                    </div>
                </div>
            </div>
            {
                selectedProject && <Details project={selectedProject} onClose={handleCloseModal} />
            }
        </>
    )
}

export default ProjectPage