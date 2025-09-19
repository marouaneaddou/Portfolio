import { Project}                from "../types"
import portfolioData            from '../config.json'
import Card                     from "../components/Card";
import { useState }             from "react";
import Button                   from "../components/Button";
import { Grid3X3 } from "lucide-react";


const handleFilterProject = () => {

}

const { projects } = portfolioData
const ProjectPage = () => {
    const [ items, setItems ] = useState(projects);
    const [ isActive, setActive ] = useState("All")
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
    return (
        <>
            <div className="max-w-[1100px] mx-auto">
                <div className="flex bg-white/5 p-4 rounded-lg justify-between max-w-2xl mx-auto backdrop-blur-[10px]  border border-white/10 text-white/50">
                    <Button key={0} category={"All"} filterProject={filterProject} isActive={isActive=="All"}/>
                    { menuCategories.map( (val, idx) => (
                        <Button key={idx + 1} category={val} filterProject={filterProject} isActive={isActive==val}/>
                    ))}
                </div>
                <div className="">
                    <div className="mb-5">
                        <h1 className={`text-text text-xl font-bold mb-4`}>Projects</h1>
                        <p className="text-white/70">A showcase of my development projects and technical achievements</p>
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map(( project : Project ) => (
                            <Card key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage