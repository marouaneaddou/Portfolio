
import { Route , createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AboutPage from "../pages/About"
import BlogPage from "../pages/Blog"
import ProjectPage from "../pages/Project"
import ContactPage from "../pages/Contact"
import CertificatetPage from "../pages/Certificate"
import HomePage from "../pages"
import Layout from "../pages/Layout"
import Main from "../components/Main"


const router = createBrowserRouter(
    createRoutesFromElements(
            <>
                <Route path="/" element={
                    <>
                        <Layout />
                    </>
                }> 
                    <Route index element={ <HomePage/>} />
                    <Route path="about" element={ <AboutPage/> }/>
                    <Route path="blog" element={ <Main> <BlogPage/> </Main>}/>
                    <Route path="projects" element={ <Main> <ProjectPage/> </Main>}/>
                    <Route path="certificates" element={ <Main> <CertificatetPage/> </Main>}/>
                    <Route path="contact" element={ <Main> <ContactPage/> </Main>}/>
                </Route>
            </>
    )
)


export default router