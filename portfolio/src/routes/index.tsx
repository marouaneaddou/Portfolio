
import { Route , createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Header from "../components/Header"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header/>} 
            
        />
    )
)


export default router