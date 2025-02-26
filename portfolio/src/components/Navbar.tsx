import { Link } from "react-router-dom"




const Navbar = () => {
    return (
        <>
            <nav className=" w-[60%] h-[60px] ">
                <ul className="text-white flex justify-between text-xl items-center h-[60px]">
                    <li className="">Home</li>
                    <li> 
                        <Link to="/about"> about </Link> 
                    </li>
                    <li>
                        <Link to="/Project"> Project</Link>
                    </li>
                    <li>
                        <Link to="/Challenge"> Challenge</Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar