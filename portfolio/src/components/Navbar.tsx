import { Home, User,  MessageSquare, BookOpen, FileCode, GraduationCap } from "lucide-react";
import { NavLink } from "react-router-dom"

interface item  {
    path: string,
    icon:  React.ElementType,
    label: string,
}
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
            <nav className=" w-[60%] h-[60px] ">
                <ul className="text-white flex justify-between text-xl items-center h-[60px]">
                    <li className="">
                        <NavLink to="/"> Home </NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/about"> About </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/blog"> Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects"> Project</NavLink>
                    </li>
                    <li>
                        <NavLink to="/certificates"> Certificates </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"> Contact </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar