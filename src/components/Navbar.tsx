import { Home, User,  MessageSquare, BookOpen, FileCode, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom"
import { item } from "../types"
import "../styles/Navbar.css"

const NavbarItems : item[] = [
    { path: '/', icon: Home , label : "Home" },
    { path: '/About', icon: User , label : "About" },
    { path: '/Blog', icon: BookOpen , label : "Blog" },
    { path: '/Projects', icon: FileCode , label : "Projects" },
    { path: '/Certificates', icon: GraduationCap , label : "Certificates" },
    { path: '/Contact', icon: MessageSquare , label : "Contact" },
]



const Navbar = () => {
    return (
        <>
            <nav className="">
                <ul className="text-white flex gap-2 justify-between text-xl items-center h-[60px]">
                {NavbarItems.map(({ path, icon:Icon, label }) => (
                    <li key={path} className="flex items-center text-sm text-white/70 hover:text-white justify-center">
                        <NavLink to={path} className="flex gap-1 text-[15px] py-2 px-4
                         hover:bg-white/10 rounded-md" >
                            <Icon className="mr-1 w-5"/>
                            <span>{label}</span>
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar