import {getIcon } from "../utils";

interface buttonProp {
    category :  string;
    filterProject : ( cat : string) => void;
    isActive : boolean;
}

const Button = ( props : buttonProp ) => {

    return <>
        <button onClick={ () => props.filterProject(props.category) } 
            className={`flex gap-2 border py-2 px-4 rounded text-white/70 border-white/20 backdrop-blur-[10px]  
                `}>
            {getIcon(props.category)} {props.category}
        </button>
    </>
}

export default Button;