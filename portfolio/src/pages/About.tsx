
import {PanelsTopLeft , Server, Cpu, Wrench, GraduationCap} from "lucide-react"
import { TechStack , Education} from "../types"

const techStack : TechStack[] = [
    {category: "Frontend",stack: ["React", "TypeScript","Tailwind CSS", "HTML5", "CSS3"],icon:PanelsTopLeft},
    {category: "Backend & Databases", stack:["Django", "Django REST Framework", "PostgreSQL", "REST APIs"], icon:Server},
    {category: "Programming Languages", stack:["C", "C++", "Python" ,"JavaScript"], icon:Cpu},
    {category: "Tools & DevOps", stack:["Git", "Docker", "VS Code", "Linux", "Terminal"], icon:Wrench},
]

const Educations : Education [] = [
    {
      title: "Architect of Digital Technologies",
      institution: "1337 Coding School",
      date: "2022 – 2025"
    },
    {
        title: "Specialized Technician Diploma – Electromechanics of Automated Systems",
        institution: "OFPPT – ISTA Oujda",
        date: "2019 – 2021"
    },
    {
        title: "High School Diploma – Physical Sciences",
        institution: "Lycée El Fath, Jerada",
        date: "2019"
    },
]

const AboutPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10">
                    <div className="m-4 grid 
                        gap-4 grid-cols-1 
                        md:grid-cols-2 
                        [grid-template-areas:'first''second''third']
                        md:[grid-template-areas:'first_first''second_third']">
                                        <div className=" col-span-1 md:col-span-2" style={{ gridArea: 'first' }}>
                                            <h1 className="font-bold text-3xl mb-5 text-white">About Me</h1>
                                            <h2  className="font-bold text-xl mb-2 text-white">Who I Am</h2>
                                            <p className="text-white/70">
                                                Hi! I'm Marouane, a <strong>Full Stack Developer</strong> and <strong>Computer Science student</strong> passionate about software engineering and the world of technology.<br/><br/>

                                                I have a strong interest in <strong>backend development</strong>, where I enjoy understanding how things work under the hood and building robust, efficient systems. I love exploring <strong>C/C++</strong> for system-level programming and constantly challenge myself with coding problems to improve my logic and problem-solving abilities.<br/><br/>

                                                Learning is my fuel — whether it's modern web development or low-level architecture, I’m always looking to grow and build meaningful projects.
                                            </p>
                                        </div>
                                        <div className="[grid-area: first]">
                                            <h1 className="font-bold text-xl mb-2 text-white">Technologies</h1>
                                            <div> 
                                            {techStack.map( ({ category, stack, icon:Icon}) => (
                                                <div key={category}>
                                                    <span className="flex mb-2  text-white">
                                                        <Icon className="mr-2"/>
                                                        {category}
                                                    </span>
                                                    <div className="mb-2">
                                                        {stack.map( (tech) => (
                                                        
                                                            <span key={tech} className="p-2 inline-block border border-white/10 rounded-md bg-white/5 mr-2 mb-2  text-white">{tech} </span>
                                                        
                                                        ) )}
                                                    </div>
                                                </div>
                                                    )
                                                )
                                            }
                                            </div>
                                        </div>
                                        <div className="[grid-area: second]">
                                            
                                            <h1 className="font-bold text-xl mb-2 text-white flex"> <GraduationCap className="mr-2"/> Education</h1> 
                                            <ul className="list-none">
                                                {Educations.map( (edu , index) => (
                                                    <li key={index} className="border border-white/10 rounded-md bg-white/5 p-4 mr-2 mb-2 text-white">
                                                        <h3 className="text-lg font-semibold">{edu.title}</h3>
                                                        <p className="text-sm">{edu.institution} - <span>{edu.date}</span></p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage