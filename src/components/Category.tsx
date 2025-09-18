
import {
     
    Globe, 
    Grid3X3, 
    Server, 
    Wrench,
     }                from 'lucide-react';
import { CategoriesProject } from '../types';

const categories : CategoriesProject[] = [
    { name: 'All', icon: Grid3X3, color: 'text-white bg-white/10 border-white/20' },
    { name: 'Web', icon: Globe, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { name: 'System', icon: Server, color: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { name: 'DevOps', icon: Wrench, color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' }
]

const generateCategoryComp = ( name : string ) =>  {
    const category = categories.find(cat => cat.name === name);
    const Icon = category?.icon
    return <>
        <div className={` border rounded-[25px] px-4 py-2  flex gap-1 right-4 absolute text-[12px] items-center ${category?.color}`}>
            {Icon && <Icon className="w-4"/> }
            {name}
        </div>
    </>
}

const Category = ( name : { name : string} ) => {
    return <>
        {generateCategoryComp(name.name)}
    </>
}

export default Category;