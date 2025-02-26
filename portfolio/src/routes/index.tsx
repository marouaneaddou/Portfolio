
import { Route , createBrowserRouter, createRoutesFromElements } from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<h3>Hello in home</h3>}/> 
    )
)


export default router