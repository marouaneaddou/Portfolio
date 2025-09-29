import { Home, 
    User,  
    MessageSquare, 
    BookOpen, 
    FileCode, 
    GraduationCap,
    Terminal,
} from "lucide-react";

import { NavLink } from "react-router-dom"
import { item } from "../types"
import "../styles/Navbar.css"

const NavbarItems : item[] = [
    { path: '/', icon: Home , label : "Home" },
    { path: '/About', icon: User , label : "About" },
    { path: '/Education', icon: GraduationCap , label : "Education" },
    { path: '/Experince', icon: BookOpen , label : "Experince" },
    { path: '/Skills', icon: Terminal , label : "Skills" },
    // { path: '/Blog', icon: BookOpen , label : "Blog" },
    { path: '/Challenges', icon: FileCode , label : "Challenges" },
    { path: '/Projects', icon: FileCode , label : "Projects" },
    { path: '/Certificates', icon: GraduationCap , label : "Certificates" },
    { path: '/Contact', icon: MessageSquare , label : "Contact" },
]



const Navbar = ( props : { menuIsOpen : boolean , setOpenMenu : ( b : boolean) => void} ) => {
    return (
        <>
            <nav className="">
                <ul className="hidden text-white xl:flex gap-2 justify-between text-xl items-center">
                {NavbarItems.map(({ path, icon:Icon, label }) => (
                    <li key={path} className="flex items-center text-sm text-white/70 hover:text-white justify-center">
                        <NavLink to={path} className="flex gap-1 text-[15px] py-2 px-4
                         hover:bg-white/5 rounded-md" >
                            <Icon className="mr-1 w-5"/>
                            <span>{label}</span>
                        </NavLink>
                    </li>
                    ))}
                </ul>
                {
                    props.menuIsOpen && <ul className="text-white flex-col pt-10 h-full bg-black">
                    {NavbarItems.map(({ path, icon:Icon, label }) => (
                        <li key={path} className=" ">
                            <NavLink to={path} onClick={( ) => props.setOpenMenu(false)} className="flex gap-1 text-[15px] 
                                py-4 px-6 w-full items-center hover:text-white text-white/70 text-sm
                                    hover:bg-white/5 rounded-md" >
                                <Icon className="mr-1 w-5"/>
                                <span>{label}</span>
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                }
            </nav> 
        </>
    )
}

export default Navbar