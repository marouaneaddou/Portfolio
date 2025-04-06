
import {PanelsTopLeft , Server, Cpu, Wrench} from "lucide-react"
import { TechStack } from "../types"

const techStack : TechStack[] = [
    {category: "Frontend",stack: ["React", "TypeScript","Tailwind CSS", "HTML5", "CSS3"],icon:PanelsTopLeft},
    {category: "Backend & Databases", stack:["Django", "Django REST Framework", "PostgreSQL", "REST APIs"], icon:Server},
    {category: "Programming Languages", stack:["C", "C++", "Python" ,"JavaScript"], icon:Cpu},
    {category: "Tools & DevOps", stack:["Git", "Docker", "VS Code", "Linux", "Terminal"], icon:Wrench},
]

const AboutPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10">
                    <div className=" grid grid-cols-1 gap-4 about m-5    text-white ">
                        <div className="col-span-2 mb-6">
                            <h1 className="font-bold text-3xl mb-5">About Me</h1>
                            <h2  className="font-bold text-xl mb-2">Who I Am</h2>
                            <p className="text-white/70">
                                Hi! I'm Marouane, a <strong>Full Stack Developer</strong> and <strong>Computer Science student</strong> passionate about software engineering and the world of technology.<br/><br/>

                                I have a strong interest in <strong>backend development</strong>, where I enjoy understanding how things work under the hood and building robust, efficient systems. I love exploring <strong>C/C++</strong> for system-level programming and constantly challenge myself with coding problems to improve my logic and problem-solving abilities.<br/><br/>

                                Learning is my fuel — whether it's modern web development or low-level architecture, I’m always looking to grow and build meaningful projects.
                            </p>
                        </div>

                        <div className="" >
                            <h1 className="font-bold text-xl mb-2">Technologies</h1>
                            <div> 
                            {techStack.map( ({ category, stack, icon:Icon}) => (
                                <div key={category}>
                                    <span className="flex mb-2">
                                        <Icon className="mr-2"/>
                                        {category}
                                    </span>
                                    <div className="mb-2">
                                        {stack.map( (tech) => (

                                            <span key={tech} className="p-2 inline-block border border-white/10 rounded-md bg-white/5 mr-2 mb-2">{tech} </span>
                                        
                                        ) )}
                                    </div>
                                </div>
                                    )
                                )
                            }
                            </div>
                        </div>
                        <div className="bg-blue-300 "></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage