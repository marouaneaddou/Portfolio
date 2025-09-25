
import { Route , createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AboutPage from "../pages/About"
import BlogPage from "../pages/Blog"
import ProjectPage from "../pages/Project"
import ContactPage from "../pages/Contact"
import CertificatetPage from "../pages/Certificate"
import HomePage from "../pages"
import Layout from "../pages/Layout"
import EducationPage from "../pages/Education"
import SkillsPage from "../pages/Skills"
// import Main from "../components/Main"


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
                    <Route path="education" element={ <EducationPage/>}/>
                    <Route path="skills" element={ <SkillsPage/>}/>
                    <Route path="blog" element={ <BlogPage/>}/>
                    <Route path="projects" element={  <ProjectPage/>}/>
                    <Route path="certificates" element={  <CertificatetPage/>}/>
                    <Route path="contact" element={  <ContactPage/>}/>
                </Route>
            </>
    )
)


export default router