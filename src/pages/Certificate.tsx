
import { Award, 
    Calendar, 
    ExternalLink }              from "lucide-react";
import portfolioData            from "../config.json"
import { Certificate }          from "../types";
import problem_solving          from "../assets/problem_solving_basic certificate.jpg"
import JavaScript               from "../assets/JavaScript.Certification-1.jpg"

const { certificate } = portfolioData;

const CertificatePage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-4xl mx-auto ">
                    { certificate.map( ( certificate : Certificate, idx : number) => (
                        <div key={idx} className='mb-6 md:flex border rounded-[15px] border-white/10 backdrop-blur-[10px] bg-white/10 '>
                            {idx === 0 && <img className='w-[350px] rounded-tl-[15px] rounded-bl-[15px]' src={JavaScript} alt="" />}
                            {idx === 1 && <img className='w-[350px] rounded-tl-[15px] rounded-bl-[15px]' src={problem_solving} alt="" />}
                            
                            <div className='p-4'>
                                <h1 className='text-white font-bold flex w-fit mb-4'>
                                    <Award  className='mr-6 w-8 h-8'/> 
                                    <span className='text-[20px]'> {certificate.title}</span>
                                </h1>
                                <div className='flex text-white items-center mb-4'>
                                    <span className='px-2 py-1 mr-4 bg-white/10 backdrop-blur-[10px] text-white/80 border rounded border-white/10'>
                                        {certificate.issuer}
                                    </span>
                                    <span className='flex text-white/80 items-center'>
                                        <Calendar className='w-4 h-4 mr-1'/> {certificate.date}
                                    </span>
                                </div>
                                <p className='text-white/85 mb-4'>{certificate.description}</p>
                                <div className='mb-3'>
                                    { certificate.skills.length > 0 && 
                                    <h1 className="text-white/70 mb-4">Skills Covered</h1>}
                                    <div className='flex flex-wrap gap-2'>
                                        { certificate.skills.length > 0 && certificate.skills.map( (skil : string , idx : number ) => (
                                            <p key={idx} className="w-fit py-1 px-2 bg-white/10 mb-2 rounded text-sx text-white/80"> {skil}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className=' flex justify-between text-white/70'>
                                    <p >Credential ID: <span className='text-white'> { certificate.credentialId}</span></p>
                                    <a href={certificate.verifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" flex gap-2   w-fit text-[15px] text-white hover:text-white/70"
                                    >
                                        <span className=''>Verify </span> <ExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CertificatePage