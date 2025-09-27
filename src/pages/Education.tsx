import { GraduationCap }        from "lucide-react";
import portfolioData            from "../config.json"
const { education } = portfolioData;


const EducationPage = () => {
    return <>
        <section className="max-w-3xl bg-white/10 backdrop-blur-[10px] rounded-xl border border-white/10 m-auto p-10">
        <h1 className="text-white flex gap-2 items-center font-bold mb-8">
                <GraduationCap />
                <span className=" text-3xl">Education</span>
            </h1>
            <div className=" grid gap-4">
                {education.map((edu , idx) => (
                    <div key={idx} className=" p-8 bg-white/5 backdrop-blur-[10px] rounded-xl border border-white/5 text-white">
                        <div className="flex justify-between mb-4">
                            <h2 className="">{edu.degree}</h2>
                            <p className=""> {edu.location}</p>
                        </div>
                        <div className="flex gap-2 text-white/70 justify-between">
                            <p>{edu.school}</p>
                            <p>{ edu.period} </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
}

export default EducationPage; 