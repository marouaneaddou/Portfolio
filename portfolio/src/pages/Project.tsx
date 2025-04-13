import {Project} from "../types"
import { Code , Github } from 'lucide-react';

const projects : Project[] = [
    {
      id: 1,
      name: "Multiplayer Pong Game Website",
      project: "Full Stack Application",
      description: "Developed a real-time multiplayer Pong game using Django, WebSockets, and Vanilla JavaScript. Managed server-side communication and game session handling with Redis. Created a REST API for game actions and implemented the game interface and logic on the client side.",
      technologies: ["Django", "WebSockets", "REST API", "Redis", "Vanilla JavaScript"],
      githubUrl: ""
    },
    {
      id: 2,
      name: "Web Server Project (C++98)",
      project: "Backend Application",
      description: "Built a custom web server from scratch in C++98, handling GET, POST, and DELETE HTTP requests. Implemented non-blocking multiplexing and CGI for serving dynamic content. Managed error handling and HTTP parsing.",
      technologies: ["C++98", "HTTP", "Non-blocking Multiplexing", "CGI"],
      githubUrl: ""
    },
    {
      id: 3,
      name: "Inception Project (Docker Containers)",
      project: "System Administration",
      description: "Created and managed Docker containers from scratch with Docker Compose orchestration. Configured networking, container communication, persistent storage, and streamlined deployment of a multi-service application.",
      technologies: ["Docker", "Docker Compose", "Networking", "Containerization"],
      githubUrl: ""
    },
    {
      id: 4,
      name: "MiniShell Project",
      project: "System Programming",
      description: "Developed a shell program in C to mimic basic Bash functionality, including process creation, I/O redirection, piping, and signal handling. Focused on system calls, file descriptors, and robust error management.",
      technologies: ["C", "Unix/Linux", "System Calls", "File Descriptors", "Process Management"],
      githubUrl: ""
    }
  ];
  

const ProjectPage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="max-w-xl mx-auto ">
                    <div className="mb-5">
                        <h1 className="text-white text-2xl font-bold mb-4">Projects</h1>
                        <p className="text-white/70">A showcase of my development projects and technical achievements</p>
                    </div>
                    <div className="grid gap-4 grid-cols-1">
                        {projects.map((project) => (
                            <div key={project.id} className="p-5 bg-black   border rounded-md border-white/10">
                                <h1 className="text-white mb-4">
                                    <Code className="mr-2 inline"/> <span >{project.name}</span>
                                </h1>
                                <div className=" text-white mb-2 w-48 p-2 bg-white/10 border rounded-md border-white/10 ">{project.project}
                                </div>
                                <p className="mb-2 text-white/70">{project.description}</p>
                                <div className="mb-4">
                                    <p className="text-white">Technologies Used</p>
                                    <div className="mt-4 md:flex">
                                        {project.technologies.map((teck) => (
                                            <p className="mb-2 md:mb-0 text-white p-2 mr-2 border rounded-md border-white/10 " key={teck}>{teck}</p>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.githubUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" bg-orange-yellow  flex justify-between p-3 border  w-48 border-white/10 rounded-md items-center">
                                    <span>Source Code</span>
                                    <Github className=" ml-1"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage