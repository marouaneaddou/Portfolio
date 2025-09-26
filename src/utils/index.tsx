import { Cpu, Github, Globe, 
    Grid3X3, 
    Linkedin, 
    Mail, 
    PanelsTopLeft, 
    Server,
    Wrench } from "lucide-react";
import { CategoriesProject } from "../types";
export const getIcon = ( name : string) => {
    const category = categories.find( category => category.name === name );
    const Icon = category?.icon;
    return Icon && <Icon className="w-4"/>
}

export const getColor = (name : string ) => {
    const color = categories.find( category => {
        if ( category.name === name ) return category.color;
    })
    return  color?.color
}

export const iconStack = [
    PanelsTopLeft,
    Server,
    Cpu,
    Wrench
]

export const platformSocialicons  = [
    Github,
    Linkedin,
    Mail
]
export const categories : CategoriesProject[] = [
    { name: 'All', icon: Grid3X3, color: 'text-white bg-white/10 border-white/20' },
    { name: 'Web', icon: Globe, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'System', icon: Server, color: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'DevOps', icon: Wrench, color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' }
]