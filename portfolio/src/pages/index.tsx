
import { Download , Mail } from "lucide-react"
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
                    <div className=" m-5 flex justify-between">
                        <div>
                            <h1 className="text-white font-bold text-xl mb-2">Marouane Addou</h1>
                            <p className=" text-orange-yellow text-xl">Software Developer</p>
                        </div>
                        <div className="flex justify-between items-center w-[205px]">
                            <a href="" className="bg-orange-yellow flex justify-between p-2 border w-26 h-10 border-white/10 rounded-md items-center">
                                <Link to="" className="flex">
                                    <Download />
                                    <button>Resume</button>
                                </Link>
                            </a>
                            <a href="" className="text-white flex justify-between p-2 border w-26 h-10 border-white/10 rounded-md items-center" >
                                <Link to="/contact">
                                    <Mail />
                                    <button >Contact</button>
                                </Link>
                            </a>
                            {/* <div className="bg-orange-yellow flex justify-between p-2 border w-26 h-10 border-white/10 rounded-md items-center">
                                <Download />
                                <button>Resume</button>
                            </div> */}
                            {/* <div className="text-white flex justify-between p-2 border w-26 h-10 border-white/10 rounded-md items-center" >
                                <Mail />
                                <button >Contact</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage 