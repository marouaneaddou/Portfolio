

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

export interface Education {
    title : string,
    institution : string,
    date    : string
}
