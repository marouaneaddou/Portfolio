
import { Download , Mail , MapPin , Github, Linkedin,} from "lucide-react"
import { Link } from "react-router-dom"
import bg from "../assets/bg.avif"
import profile from "../assets/profile.png"

const HomePage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className=" max-w-4xl bg-white bg-opacity-10 backdrop-blur-[10px] mx-auto border rounded-md border-white/10 grid 
                    gap-2 grid-cols-1 
                    md:grid-cols-2 
                    [grid-template-areas:'first''second''third''Fourth''Fifth''Sixth''Seventh'] 
                    md:[grid-template-areas:'first_first''second_third''Fourth_Fourth''Fifth_Sixth''Seventh_Seventh']">
                    
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
                    <div className="text-white/80 mt-4  mb-5 " style={{ gridArea: 'Fourth' }}>
                        <div className="mr-5 ml-5 mb-5 text-lg">
                            Dedicated computer science student with a strong foundation in software development and a 
                            passion for learning. Experienced in working with JavaScript, React, and C++, 
                            currently focused on building innovative solutions and enhancing problem solving skills through hands-on projects
                        </div>
                        <span className="border border-white/10 w-full inline-block"></span>
                    </div>
                    <div className="mr-5 ml-5 p-6 border border-white/10 rounded-md  bg-white/5" style={{ gridArea: 'Fifth' }}>
                        <Link to="/About" className="  ">
                            <h1 className="text-white font-bold mb-2">About me</h1>
                            <p className="text-white/70 mb-2">Learn more about my journey, skils, and experience.</p>
                            <p className=" text-orange-yellow ">View Details &gt; </p>
                        </Link>
                    </div>
                    <div className=" p-6 ml-5 mr-5 border border-white/10 rounded-md  bg-white/5" style={{ gridArea: 'Sixth' }}>
                        <Link to="/Blog" className="">
                            <h1 className="text-white font-bold mb-2">Coding Challenge</h1>
                            <p className="text-white/70 mb-2">Check out my solutions to varous programming problems</p>
                            <p className=" text-orange-yellow ">View Details  &gt; </p>
                        </Link>
                    </div>
                    <div className=" flex p-5 bg-white/5 mt-5 border-t border-white/10 " style={{gridArea: 'Seventh'}}>
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