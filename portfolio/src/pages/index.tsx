
import { Download , Mail , MapPin , Github, Linkedin,} from "lucide-react"
import { Link } from "react-router-dom"
import bg from "../assets/bg.avif"
import profile from "../assets/profile.png"

const HomePage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10">
                    <div className="">
                        <img className="object-cover h-[12.75rem] w-full" src={bg} alt="" />
                        <img className="w-36 ml-5 mt-[-4.5rem]" src={ profile } alt="" />
                    </div>
                    <div className="m-5">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-white font-bold text-xl mb-2">Marouane Addou</h1>
                                <p className=" text-orange-yellow text-xl">Software Developer</p>
                            </div>
                            <div className="flex justify-between items-center">
                                    <Link to="" className="w-28 mr-2 bg-orange-yellow flex justify-between p-3 border w-26  border-white/10 rounded-md items-center">
                                        <Download className="w-4"/>
                                        <span>Resume</span>
                                    </Link>
                                    <Link to="/contact" className="w-28 text-white flex justify-between p-3 border w-26  border-white/10 rounded-md items-center">
                                        <Mail className="w-4"/>
                                        <span>Contact</span>
                                    </Link>
                            </div>
                        </div>
                        <span className="flex justify-between text-white/70 w-[264px] mt-5 mb-6">
                            <MapPin />
                            Oujda, Oriental Region, Morocco
                        </span>
                        <span  className=" text-white/70">
                            Dedicated computer science student with a strong foundation in software development and a 
                            passion for learning. Experienced in working with JavaScript, React, and C++, 
                            currently focused on building innovative solutions and enhancing problem-solving skills through hands-on projects
                        </span>
                        <div className="flex justify-between mt-5 mb-10 ">
                            <Link to="/About" className="p-6  border border-white/10 rounded-md w-[415px] bg-white/5">
                                <h1 className="text-white font-bold mb-2">About me</h1>
                                <p className="text-white/70 mb-2">Learn more about my journey, skils, and experience.</p>
                                <p className=" text-orange-yellow ">View Details &gt; </p>
                            </Link>
                            <Link to="/Blog" className="p-6  border border-white/10 rounded-md w-[415px] bg-white/5">
                                <h1 className="text-white font-bold mb-2">Coding Challenge</h1>
                                <p className="text-white/70 mb-2">Check out my solutions to varous programming problems</p>
                                <p className=" text-orange-yellow ">View Details  &gt; </p>
                            </Link>
                        </div>
                        <hr className="  w-full h-[1px] border-white/10 mb-10"/>
                        <div className="flex justify-between w-[500px]">
                            <Link to="/" className="text-white flex p-4 border border-white/10 bg-white/5 rounded-md">
                                <Github className="mr-2"/>
                                <span> Github <span className="ml-2"> &gt; </span> </span>
                            </Link>
                            <Link to="/" className="text-white flex p-4 border border-white/10 bg-white/5 rounded-md">
                                <Linkedin className="mr-2"/>
                                <span> Linkedin<span className="ml-2"> &gt; </span> </span>
                            </Link>
                            <Link to="/" className="text-white flex p-4 border border-white/10 bg-white/5 rounded-md">
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