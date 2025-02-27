
import { Route , createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AboutPage from "../pages/About"
import BlogPage from "../pages/Blog"
import ProjectPage from "../pages/Project"
import ContactPage from "../pages/Contact"
import CertificatetPage from "../pages/Certificate"
import HomePage from "../pages"
import Layout from "../pages/Layout"


const router = createBrowserRouter(
    createRoutesFromElements(
            <>
                <Route path="/" element={
                    <>
                        <Layout />
                    </>
                }> 
                    <Route index element={<HomePage/>} />
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="blog" element={<BlogPage/>}/>
                    <Route path="projects" element={<ProjectPage/>}/>
                    <Route path="certificates" element={<CertificatetPage/>}/>
                    <Route path="contact" element={<ContactPage/>}/>
                </Route>
            </>
    )
)


export default router