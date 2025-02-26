import Navbar from "./Navbar"




const Header = () => {
    return (
        <>
            <header className="w-full bg-[rgb(0_0_0_/_0.9)] border-b-2 border-gray-500 h-[60px]">
                <div className="w-[80%] flex justify-between mx-auto items-center">
                    <div className="w-[10%] text-white flex ">
                        <p>maddou</p>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    )
}

export default Header