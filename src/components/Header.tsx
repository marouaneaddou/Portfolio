import Navbar from "./Navbar"


const Header = () => {
    return (
        <header className=" w-full bg-[rgb(0_0_0_/_0.9)] border-b-2 border-white/10 top-0 left-0 sticky z-10">
            <div className="max-w-[1400px] flex justify-between mx-auto items-center">
                <div className="flex text-white justify-center gap-2 group">
                    <div className="flex">
                        <span className="px-2 py-1 rounded-md text-black font-bold text-xl w-fit h-fit bg-gradient-to-r from-yellow-600 to-orange-600 group-hover:rotate-12 ">M</span>
                        <span className="text-white z-10 text-[10px] bg-white/20 w-fit h-fit left-5 ml-[-10px] mt-5
                             bottom-[-24px] border border-white/5 backdrop-blur-[10px] rounded p-1"> &lt;/&gt; </span>
                    </div>
                    <div className=" items-center h-fit ">
                        <p className=" h-fit font-bold leading-none text-lg group-hover:text-orange-yellow">m-addou</p>
                        <span className="text-white/80 text-xs">Developer</span>
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header
