
import { Mail,
    Github, 
    Linkedin, 
    Send, 
    Phone} from 'lucide-react';
import { useState } from "react"




const ContactPage = () => {
    const [formData, setdata] = useState({
        name: "",
        email: "",
        message: "",
    })
    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name , value } = e.target;
        setdata( prev => ({
            ...prev,
            [name] : value
        }))
    }
    return (
        <>
            <div className="containermx-auto">
                <div className="max-w-4xl bg-white/10 p-6
                    backdrop-blur-[10px] mx-auto border rounded-md border-white/10 ">
                    <h1 className="text-white font-bold text-[30px] mb-8">Get in Touch</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className=" text-white font-bold text-[25px] mb-4">Send a Message</p>
                            <form action="">
                                <label className="text-white/80 block mb-2 text-[15px]" htmlFor=""> Name</label>
                                <input className="text-white/90 py-3 px-4  focus:border bg-white/10 mb-4
                                    rounded-md focus:outline-none focus:border-orange-yellow w-full"
                                    placeholder="Your name" 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label className="text-white/80 block mb-2 text-[15px]" htmlFor=""> Email</label>
                                <input className="text-white/90 py-3 px-4  focus:border bg-white/10 
                                    rounded-md focus:outline-none focus:border-orange-yellow w-full mb-4" 
                                    placeholder="your@gmail.com" 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                 <label className="text-white/80 block mb-2 text-[15px]" htmlFor=""> Message</label>
                                <textarea  className=" resize-y text-white/90 py-2 px-2  focus:border bg-white/10 
                                    rounded-md focus:outline-none focus:border-orange-yellow w-full mb-4 h-40" 
                                    
                                    placeholder="Write your message here..." ></textarea>
                                
                                <button type="submit"
                                    className=" py-3 px-4  focus:border text-black 
                                    rounded-md focus:outline-none focus:border-orange-yellow w-full bg-orange-yellow flex gap-2 justify-center hover:cursor-pointer "
                                    >
                                    <Send /> Send message
                                </button>
                            </form>
                        </div>
                        <div className="text-white">
                            <p className=" text-white font-bold text-[25px] mb-6">Contact Information</p>
                            <p className=" text-white/80 mb-8">
                                Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible.
                            </p>
                            <div className='mb-8'>
                                    <a href="mailto:marouaneaddou@hotmail.com" 
                                    className=' flex gap-3 mb-3 group'>
                                        <span className=' p-3 bg-white/5 border
                                            border-white/10 backdrop-blur[10px] w-fit h-fit rounded-md'
                                            >
                                            <Mail className='group-hover:text-orange-yellow '/> 
                                        </span>
                                        
                                        <p > 
                                            <span className='group-hover:text-orange-yellow text-white/90'>Email</span>  
                                            <span className=' block text-white/50'>marouaneaddou@hotmail.com</span>
                                        </p>
                                    </a>
                                    <a href="https://github.com/marouaneaddou" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='group flex gap-3 mb-3'>
                                        <span className=' p-3 bg-white/5 border 
                                            border-white/10 backdrop-blur[10px] w-fit h-fit rounded-md'
                                            >
                                            <Github className=' group-hover:text-orange-yellow'/> 
                                        </span>
                                        
                                        <p > 
                                            <span className=' text-white/90 group-hover:text-orange-yellow'>GitHub</span>  
                                            <span className=' block text-white/50'>marouaneaddou</span>
                                        </p>
                                    </a>
                                    <a href="https://www.linkedin.com/in/marouaneaddou" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=' flex gap-3 mb-3 group'>
                                        <span className=' p-3 bg-white/5 border group-hover:text-orange-yellow
                                            border-white/10 backdrop-blur[10px] w-fit h-fit rounded-md'
                                            >
                                            <Linkedin className=' group-hover:text-orange-yellow'/> 
                                        </span>
                                        
                                        <p > 
                                            <span className=' text-white/90 group-hover:text-orange-yellow'>LinkedIn</span>  
                                            <span className=' block text-white/50'>marouaneaddou</span>
                                        </p>
                                    </a>
                                    <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=' group flex gap-3'>
                                        <span className=' p-3 bg-white/5 border
                                            border-white/10 backdrop-blur[10px] w-fit h-fit rounded-md'
                                            >
                                            <Phone className='group-hover:text-orange-yellow '/> 
                                        </span>
                                        
                                        <p > 
                                            <span className=' text-white/90 group-hover:text-orange-yellow'>Phone</span>  
                                            <span className=' block text-white/50'>0696782838</span>
                                        </p>
                                    </a>
                            </div>
                            <span className='h-[0.5px] bg-white/20 w-full block'></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage