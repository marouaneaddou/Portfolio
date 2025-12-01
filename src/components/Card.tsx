
import { Project }      from "../types";
import Category         from "./Category";
import TeamProjectIndicator   from "./TeamProjectTag";

interface CardProp  {
    project : Project
    setProject : (project : Project) => void;
}

const Card = (props: CardProp) => {
    return (
        <div className="group relative border border-white/10 rounded-[16px] 
            backdrop-blur-sm bg-opacity-10 bg-white/5 hover:cursor-pointer 
            hover:border-white/20 overflow-hidden transition-all">

            <div className="
                absolute inset-0 bg-black/40 
                 group-hover:opacity-100
                flex items-center justify-center
                transition-all duration-300 z-20
            ">
                <button
                    onClick={() => props.setProject(props.project)}
                    className="px-5 py-3 bg-white/20 backdrop-blur-md 
                    text-white font-semibold rounded-lg 
                    border border-white/30 
                    opacity-0 translate-y-4
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300"
                >
                    Show Details
                </button>
            </div>

            <div className="">
                <div className="">
                    <img 
                        src={props.project.image}
                        alt=""
                        className="rounded-t-[1rem] h-48 w-full object-cover
                        transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute top-4 left-4">
                        <TeamProjectIndicator project={props.project} is_details={false}/>
                    </div>

                    <div className="absolute top-4 w-full">
                        <Category name={props.project.category} />
                    </div>

                    <div className="absolute top-36 left-2 text-[12px] 
                        bg-white/10 px-2 py-1 rounded text-white">
                        {props.project.type}
                    </div>

                    <div className="absolute top-36 right-4 text-[12px] 
                        bg-orange-yellow px-2 py-1 rounded text-black">
                        {props.project.role}
                    </div>
                </div>

                <div className="p-6 rounded-b-[1rem]">
                    <h1 className="text-white font-bold pb-4 text-[20px] 
                        group-hover:text-orange-yellow">
                        {props.project.title}
                    </h1>

                    <p className="text-white/70 pb-2">{props.project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card; 