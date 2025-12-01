
import { Download , 
    Mail , 
    MapPin, 
    Trophy, 
    Code2, 
    ExternalLink, 
    Award,}             from "lucide-react"
import { Link }         from "react-router-dom"
import bg               from "../assets/bg.avif"
import {platformSocialicons} from  "../utils"
import portfolioData    from "../config.json"
import { achievement }  from "../types"

const { achievements , 
    social ,
    personal } = portfolioData
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
                        <img className="w-36 ml-5 mt-[-4.5rem]" src={ portfolioData.personal.profile } alt="" />
                    </div>
                    <div className=" mr-5 ml-5" style={{ gridArea: 'second' }}>
                        <h1 className="text-white font-bold text-xl mb-2">{personal.name}</h1>
                        <p className=" text-orange-yellow text-xl">{personal.title}</p>
                        <span className="flex justify-between text-white/70 w-[264px] mt-5 md:mb-0 mb-4">
                            <MapPin />
                            {personal.location}
                        </span>
                    </div>
                    <div className="flex mr-5 ml-5  md:justify-end" style={{ gridArea: 'third' }}>
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
                            {personal.bio}
                        </div>
                        <span className="border border-white/10 w-full inline-block"></span>
                    </div>
                    <div className="mb-5 md:mr-5 md:ml-5 p-6 border border-white/10 md:rounded-md  bg-white/5" style={{ gridArea: 'Fifth' }}>
                        <Link to="/About" className="  ">
                            <h1 className="text-white font-bold mb-2">About me</h1>
                            <p className="text-white/70 mb-2">Learn more about my journey, skils, and experience.</p>
                            <p className=" text-orange-yellow ">View Details &gt; </p>
                        </Link>
                    </div>
                    <div className="mb-5 p-6 md:ml-2 md:mr-5 border border-white/10 md:rounded-md  bg-white/5" style={{ gridArea: 'Sixth' }}>
                        <Link to="/Challenges" className="">
                            <h1 className="text-white font-bold mb-2">Coding Challenge</h1>
                            <p className="text-white/70 mb-2">Check out my solutions to varous programming problems</p>
                            <p className=" text-orange-yellow ">View Details  &gt; </p>
                        </Link>
                    </div>
                    <div className="border-white/10 border-t-2 pt-5 md:p-5 grid grid-cols-1 md:grid-cols-3 md:gap-6" style={{gridArea: 'Seventh'}}>
                        {/* <div className="grid md:grid-cols-2 ml-5 mr-5 w-full"
                        > */}
                            <div className=" col-span-2 border border-white/10 bg-white/5 md:rounded-md p-6">
                                <h1 className="text-white font-bold flex gap-2 mb-6" >
                                    <Trophy className="w-6 h-6"/>
                                    Competitive Programming
                                </h1>
                                <div className=" flex gap-2 items-center justify-between mb-4">
                                    <div className="flex gap-4">
                                        <span className="text-orange-600 bg-orange-yellow w-fit rounded-md p-3 inline-block">
                                            <Code2 className="w-6 h-6"/> 
                                        </span>
                                        <span className="text-white">
                                            <p className="font-bold text-lg">LeetCode</p>
                                            <span className="text-white/50 text-sm">m-addou</span>
                                        </span>
                                    </div>
                                    <a href="https://leetcode.com/u/m-addou/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" flex gap-2   w-fit text-[15px] text-white hover:text-white/70 group "
                                    >
                                        <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-orange-yellow" />
                                    </a>
                                   
                                </div>
                                <p className="flex justify-between text-white/70 mb-4 ">
                                    Total Solved
                                    <span className="text-orange-yellow"> 300+</span>
                                </p>
                                <div className="flex flex-wrap md:justify-between mb-4  gap-2 justify-center">
                                    <span className="bg-green-400/10 text-center py-3 rounded-md text-white/70 w-[155px]"> 
                                        <span className=" block text-green-400">130+</span>
                                        easy
                                    </span>
                                    <span className=" bg-yellow-400/10 text-center  py-3 rounded-md text-white/70 w-[155px]"> 
                                        <span className=" block text-green-400">150+</span>
                                        Medium
                                    </span>
                                    <span className="bg-red-500/10  text-center  py-3 rounded-md text-white/70 w-[155px]"> 
                                        <span className=" block text-red-400 ">20+</span>
                                        Hard
                                    </span>
                                </div>
                                <p className="flex justify-between flex-wrap text-white/70 mb-4">
                                    Global Ranking
                                    <span className="text-orange-yellow"> #308,674</span>
                                </p>
                            </div>
                            <div className=" col-span-1 border border-white/10 bg-white/5 md:rounded-md p-6 mt-6 md:mt-0">
                                <h1 className="text-white font-bold flex gap-2 mb-6" >
                                    <Award className="w-6 h-6"/>
                                    Recent Achievements
                                </h1>
                                <div className="flex flex-wrap gap-2">
                                    { achievements.map( ( arch : achievement, idx : number) => (
                                                <p key={idx}  className="px-3 py-2 bg-orange-500/10 border border-orange-500/20 w-full
                                                rounded-full text-orange-400 text-sm flex gap-4 justify-between hover:text-white/70">
                                                    <span className="">
                                                        {arch.name}
                                                    </span>
                                                </p>

                                    ))}
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className=" flex p-5 bg-white/5 mt-5 border-t border-white/10 " style={{gridArea: 'eighth'}}>
                        <div className="grid  grid-cols-1 gap-4
                        md:grid-cols-3 w-full
                    ">
                        {
                            social.map( ( s , idx ) => {
                                const Icon = platformSocialicons[idx];

                               return  <Link key={idx} to={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white  flex p-4 border border-white/10 bg-white/5 rounded-md " 
                                        >
                                    <Icon className="mr-2 text-white"/>
                                    <span> {s.platform} <span className="ml-2"> &gt; </span> </span>
                                </Link>
                            }
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage 