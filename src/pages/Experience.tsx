import { Building2, 
    Calendar, 
    ChevronRight } from "lucide-react";
import portfolioData            from "../config.json"

const { experience } = portfolioData;

const ExperincePage = ( ) => {
    return <>
        <section className="max-w-3xl m-auto border border-white/5 backdrop-blur-[10px] bg-white/10 p-8 rounded-lg">
            <h1 className="text-white flex gap-2 items-center font-bold mb-8">
                <Building2 />
                <span className=" text-3xl">Professional Experience</span>
            </h1>
            <div className="border border-white/5 bg-white/5  p-8 rounded-md ">
                {experience.map((expe) => (
                    <div className="text-white" key={expe.id} >
                        <h2 className="text-white font-bold mb-3">{expe.jobTitle}</h2>
                        <p className="mb-2 text-white/70">{expe.company}</p>
                        <p className="flex gap-2 items-center text-white/70 mb-3">
                            < Calendar />
                            <span>{expe.period}</span>
                        </p>
                        <p className="text-white/70 mb-2">{expe.description}</p>
                        <h2 className="text-white font-bold mb-3">
                            Key Achievements
                        </h2>
                        <div className="mb-3">
                            {expe.achievements.map((achievement , idx) => (
                                <li key={idx} className="flex gap-2 text-white/70 mb-2">
                                    <ChevronRight className="text-orange-yellow"/>
                                    {achievement}
                                </li>
                            ) )}
                        </div>
                        <h2 className="text-white font-bold mb-3">
                            Technologies
                        </h2>
                        <div className=" flex flex-wrap gap-2 list-none">
                            {expe.technologies.map(( tech, idx) => (
                                <li key={idx} className=" p-2 bg-white/10 backdrop-blur-[10px] border border-white/5 rounded-lg text-white/70">
                                    {tech}
                                </li>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
}

export default ExperincePage;