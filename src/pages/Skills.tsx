import { Terminal } from "lucide-react";

import portfolioData            from "../config.json"
import { iconStack } from "../utils";


const { techStack } = portfolioData;

const SkillsPage = () => {
    return <>
        <div className=" max-w-4xl m-auto py-7 px-10 bg-white/5 backdrop-blur-[10px] border border-white/10 rounded-[20px]">
            <h1 className="flex gap-2 text-white font-bold text-[25px] items-center mb-8">
                <Terminal/>
                Technical Skills
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                
                    {techStack.map( ({ category, stack }, idx) => {
                        const Icon = iconStack[idx]
                        return (
                            <div key={category} className=" p-6 bg-white/5 border border-white/10 rounded-[20px]">
                                <div className=" text-white items-center flex gap-2 mb-5">
                                    <span className="bg-white/6 border border-white/5 backdrop-blur-[10px] rounded w-fit h-fit inline-block p-2">
                                        <Icon className=" "/>
                                    </span>
                                    <p className="font-bold text-[20px]"> {category}</p>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {stack.map( ( s , idx ) => (
                                        <p key={idx} className="py-2 px-3 bg-white/5 backdrop-blur-[10px] text-white/80 rounded-md"> {s}</p>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                    )}
            </div>
        </div>
    </>
}

export default SkillsPage; 