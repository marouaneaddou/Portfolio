import { Users } from "lucide-react"
import { Project } from "../types"
import { getColor } from "../utils"


interface props  {
    project : Project,
    is_details : boolean
}
const TeamProjectIndicator = ( props : props ) => {
    return <>
        { props.project.teamProject && <span className={`flex items-center gap-1 border p-2 ${props.is_details === false ? "rounded-[25px]" : "rounded"} text-sm ${getColor( props.project.category)}`}>
            <Users className="w-4 h-4" />
            {props.is_details === false ? "Team" : "Team Project"}
            </span>
        }
        { props.project.teamProject === false && <span className={`flex items-center gap-1 border p-2 ${props.is_details === false ? "rounded-[25px]" : "rounded"} text-sm ${getColor( props.project.category)}`}>
            <Users className="w-4 h-4" />
            {props.is_details === false  ? "Solo" : "Individual Project"}
            </span>
        } 
    </>
}

export default TeamProjectIndicator;