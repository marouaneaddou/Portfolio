
import { Mail,
    Github, 
    Linkedin, 
    Send } from 'lucide-react';
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
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage