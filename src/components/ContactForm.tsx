"use client";
import React, { useState } from 'react'
import { toast } from 'sonner';

const ContactForm = () => {


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {name, email, message} = formData;
        if(!name || !email || !message){
            toast.error("Please fill all fields! ")
            return;
        }
        // call api for 

        const response = await new Promise((resolve)=>{
            setTimeout(() => {
                resolve("api call sucess");
            }, 2000);
        })

        if(response){
            toast.success('form submitted sucessfully')
        }else{
            toast.error("error in submitting the form ")
        }
    }
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleFOrmChange = (e: React.ChangeEvent<HTMLFormElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    return (
        <form className='py-10 flex flex-col gap-6 max-w-lg mx-auto ' onSubmit={handleSubmit}>
            <div className="flex flex-col  gap-2">
                <label htmlFor="name" className='text-sm font-medium text-neutral-600 tracking-tight  '>Full name</label>
                <input type="text" id="name" name="name" className='shadow-box  p-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary  ' onChange={handleFOrmChange} placeholder='Sameer Rao' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="email" className='text-sm font-medium text-neutral-600 tracking-tight  '>Email Address</label>
                <input type="email" id="email" name="email" className='shadow-box  p-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary  ' onChange={handleFOrmChange} placeholder='mrao27488@gmail.com' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="message" className='text-sm font-medium text-neutral-600 tracking-tight  '>Message</label>
                <textarea rows={5} type="text" id="message" name="message" className='shadow-box resize-none  p-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary  ' onChange={handleFOrmChange} placeholder='I wanna dicuss a project...' />
            </div>
            <button type='submit' className='bg-primary rounded-md px-4 py-2 text-white'>Submit</button>
        </form>
    )
}

export default ContactForm
