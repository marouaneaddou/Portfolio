

export interface item  {
    path: string,
    icon:  React.ElementType,
    label: string,
}

export interface TechStack {
    category  : string,
    stack     : string[]
    icon      : React.ElementType
    // "Frontend": string[];
    // "Backend & Databases": string[];
    // "Programming Languages": string[];
    // "Tools & DevOps": string[];
}
