import Navbar from "./Navbar"


const Header = () => {
    return (
        <header className="w-full bg-[rgb(0_0_0_/_0.9)] border-b-2 border-white/10 h-[60px] fixed ">
            <div className="max-w-4xl flex justify-between mx-auto items-center">
                <div className="w-[10%] text-white">
                    <p>maddou</p>
                </div>
                <Navbar />
                {/* <Outlet/> */}
            </div>
        </header>
    )
}

export default Header