import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import ParticlesBackground from "../components/Particles"


const RootLayout = () => {
    return (
        <>
            <Header/>
            <ParticlesBackground/>
            <main className="m-5">
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout