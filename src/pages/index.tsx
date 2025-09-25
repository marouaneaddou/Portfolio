
import { Download , Mail , MapPin , Github, Linkedin, Wind, Trophy, Code2, ExternalLink, Award,} from "lucide-react"
import { Link } from "react-router-dom"
import bg from "../assets/bg.avif"
import profile from "../assets/profile.png"

import portfolioData            from "../config.json"
import { achievement } from "../types"

const { achievements } = portfolioData

const HomePage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className=" max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10 grid 
                    gap-2 grid-cols-1 
                    md:grid-cols-2 
                    [grid-template-areas:'first''second''third''Fourth''Fifth''Sixth''Seventh''eighth'] 
                    md:[grid-template-areas:'first_first''second_third''Fourth_Fourth''Fifth_Sixth''Seventh_Seventh''eighth_eighth']">
                    
                    <div className="" style={{gridArea: 'first'}}>
                        <img className="object-cover h-[12.75rem] w-full md:w-full" src={bg} alt="" />
                        <img className="w-36 ml-5 mt-[-4.5rem]" src={ profile } alt="" />
                    </div>
                    <div className=" mr-5 ml-5" style={{ gridArea: 'second' }}>
                        <h1 className="text-white font-bold text-xl mb-2">Marouane Addou</h1>
                        <p className=" text-orange-yellow text-xl">Software Developer</p>
                        <span className="flex justify-between text-white/70 w-[264px] mt-5 md:mb-0 mb-4">
                            <MapPin />
                            Oujda, Oriental Region, Morocco
                        </span>
                    </div>
                    <div className="flex mr-5 ml-5 md:justify-end" style={{ gridArea: 'third' }}>
                            <Link to="" className="w-30 mr-2 h-10 bg-orange-yellow flex justify-between p-3 border w-26  border-white/10 rounded-md items-center">
                                <Download className="w-4 mr-1"/>
                                <span>Resume</span>
                            </Link>
                            <Link to="/contact" className="w-30 h-10  text-white flex justify-between p-3 border w-26  border-white/10 rounded-md items-center">
                                <Mail className="w-4 mr-1"/>
                                <span>Contact</span>
                            </Link>
                    </div>
                    <div className="text-white/80 mt-4  mb-5" style={{ gridArea: 'Fourth' }}>
                        <div className="mr-5 ml-5 mb-5 text-lg">
                            Dedicated computer science student with a strong foundation in software development and a 
                            passion for learning. Experienced in working with JavaScript, React, and C++, 
                            currently focused on building innovative solutions and enhancing problem solving skills through hands-on projects
                        </div>
                        <span className="border border-white/10 w-full inline-block"></span>
                    </div>
                    <div className="mb-5 mr-5 ml-5 p-6 border border-white/10 rounded-md  bg-white/5" style={{ gridArea: 'Fifth' }}>
                        <Link to="/About" className="  ">
                            <h1 className="text-white font-bold mb-2">About me</h1>
                            <p className="text-white/70 mb-2">Learn more about my journey, skils, and experience.</p>
                            <p className=" text-orange-yellow ">View Details &gt; </p>
                        </Link>
                    </div>
                    <div className="mb-5 p-6 ml-5 mr-5 border border-white/10 rounded-md  bg-white/5" style={{ gridArea: 'Sixth' }}>
                        <Link to="/Blog" className="">
                            <h1 className="text-white font-bold mb-2">Coding Challenge</h1>
                            <p className="text-white/70 mb-2">Check out my solutions to varous programming problems</p>
                            <p className=" text-orange-yellow ">View Details  &gt; </p>
                        </Link>
                    </div>
                    <div className="pt-6 border-t-2 border-white/10" style={{gridArea: 'Seventh'}}>
                        <div className="grid md:grid-cols-[2fr_1fr]  grid-cols-1
                        [grid-template-areas:'first''second'] mr-5
                        md:[grid-template-areas:'first_second'] w-full">
                            <div className=" ml-5 mr-2 border border-white/10 bg-white/5 rounded-md p-6" style={{gridArea : 'first'}}>
                                <h1 className="text-white font-bold flex gap-2 mb-6" >
                                    <Trophy className="w-6 h-6"/>
                                    Competitive Programming
                                </h1>
                                <div className=" flex gap-2 items-center justify-between mb-4">
                                    <p className="flex gap-4">
                                        <span className="text-orange-600 bg-orange-yellow w-fit rounded-md p-3 inline-block">
                                            <Code2 className="w-6 h-6"/> 
                                        </span>
                                        <div className="text-white">
                                            <p className="font-bold text-lg">LeetCode</p>
                                            <span className="text-white/50 text-sm">@m-addou</span>
                                        </div>
                                    </p>
                                    <a href="https://leetcode.com/u/m-addou/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" flex gap-2   w-fit text-[15px] text-white hover:text-white/70 group "
                                    >
                                        <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-orange-yellow" />
                                    </a>
                                   
                                </div>
                                <p className="flex justify-between flex-wrap text-white/70 mb-4">
                                    Total Solved
                                    <span className="text-orange-yellow"> 300+</span>
                                </p>
                                <div className="flex justify-between gap-2 mb-4">
                                    <span className="bg-green-400/10 py-1 px-16 rounded-md text-white/70"> 
                                        <span className=" block text-green-400">130+</span>
                                        easy
                                    </span>
                                    <span className=" bg-yellow-400/10  py-1 px-16 rounded-md text-white/70"> 
                                        <span className=" block text-green-400">150+</span>
                                        Medium
                                    </span>
                                    <span className="bg-red-500/10 py-1 px-16 rounded-md text-white/70"> 
                                        <span className=" block text-red-400 ">20+</span>
                                        Hard
                                    </span>
                                </div>
                                <p className="flex justify-between flex-wrap text-white/70 mb-4">
                                    Global Ranking
                                    <span className="text-orange-yellow"> #308,674</span>
                                </p>
                            </div>
                            <div className=" ml-5 mr-2 border border-white/10 bg-white/5 rounded-md p-6  h-fit">
                                <h1 className="text-white font-bold flex gap-2 mb-6" >
                                    <Award className="w-6 h-6"/>
                                    Recent Achievements
                                </h1>
                                <div className=" flex flex-wrap gap-2">
                                    { achievements.map( ( arch : achievement, idx : number) => (
                                                <p key={idx}  className="px-3 py-2 bg-orange-500/10 border border-orange-500/20 w-full
                                                rounded-full text-orange-400 text-sm flex gap-4 justify-between hover:text-white/70">
                                                    <span className="">
                                                        {arch.name}
                                                    </span>
                                                    {/* <a href={arch.link} 
                                                        target="_blank"
                                                       rel="noopener noreferrer" className=" ">
                                                        <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-orange-yellow" />
                                                    </a> */}
                                                </p>

                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex p-5 bg-white/5 mt-5 border-t border-white/10 " style={{gridArea: 'eighth'}}>
                        <div className="grid  grid-cols-1 gap-4
                    md:grid-cols-3 
                    [grid-template-areas:'first''second''third']
                    md:[grid-template-areas:'first_second_third'] w-full
                    ">
                        <Link to="/" className="text-white  flex p-4 border border-white/10 bg-white/5 rounded-md " style={{ gridArea: 'first' }}>
                            <Github className="mr-2"/>
                            <span> Github <span className="ml-2"> &gt; </span> </span>
                        </Link>
                        <Link to="/" className="text-white flex  p-4 border border-white/10 bg-white/5 rounded-md" style={{ gridArea: 'second' }}>
                            <Linkedin className="mr-2"/>
                            <span> Linkedin<span className="ml-2"> &gt; </span> </span>
                        </Link>
                        <Link to="/" className="text-white flex  p-4 border border-white/10 bg-white/5 rounded-md" style={{ gridArea: 'third' }}>
                            <Mail className="mr-2"/>
                            <span> Email <span className="ml-2"> &gt; </span>  </span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage 