import { Link } from "react-router-dom"




const Navbar = () => {
    return (
        <>
            <nav className=" w-[60%] h-[60px] ">
                <ul className="text-white flex justify-between text-xl items-center h-[60px]">
                    <li className="">
                        <Link to="/"> Home </Link> 
                    </li>
                    <li> 
                        <Link to="/about"> About </Link> 
                    </li>
                    <li>
                        <Link to="/blog"> Blog</Link>
                    </li>
                    <li>
                        <Link to="/projects"> Project</Link>
                    </li>
                    <li>
                        <Link to="/certificates"> Certificates </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar