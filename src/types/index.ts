

export interface item  {
    path: string,
    icon:  React.ElementType,
    label: string,
}

export interface TechStack {
    category  : string,
    stack     : string[]
    icon      : React.ElementType
}

export interface CategoriesProject {
    name : string,
    icon : React.ElementType,
    color : string
}

export interface Education {
    title : string,
    institution : string,
    date    : string
}

export interface Problem {
    id    : number,
    title   :   string,
    difficulty  :   'Easy' | 'Medium' | 'Hard',
    description :   string,
    leetCodeUrl: string,
    githubSolutionUrl: string,
}

export interface Project {
    id          :   number,
    title       :   string,
    slug        :   string,
    role        :   string,
    type        :   string,
    date        :   string,
    category    :   string,
    description :   string,
    Detailed_Description : string[],
    technologies:   string[],
    image       :   string,
    repoUrl     :   string,
    demoUrl     :   string,
    featured    :   boolean,
    teamProject :   boolean
}

export interface Certificate {
    id            : number,
    title         : string,
    issuer        : string,
    date          : string,
    credentialId  : string,
    description   : string,
    skills        : string[],
    image         : string,
    verifyLink    : string, 
}
// The application included core features such as task assignment, team management, and tracking employees’ daily work. I implemented JWT-based authentication with role-based access control to ensure secure and flexible user access. The application was deployed on Cloudflare Workers to take advantage of high scalability, low latency, and optimized global performance.",
// Managed server-side communication and game session handling with Redis. Created a REST API for game actions and implemented the game interface and logic on the client side.",
        // Implemented non-blocking multiplexing and CGI for serving dynamic content. Managed error handling and HTTP parsing.",
        // Focused on system calls, file descriptors, and robust error management.",