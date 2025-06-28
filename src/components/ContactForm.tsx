"use client";
import React, { useState } from 'react'
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { redirect } from 'next/navigation';


const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const result = await emailjs.send(
        'service_1rmdxi7',       // from EmailJS dashboard
        'template_cwfb239',      // from EmailJS dashboard
        {
          from_name: name,
          from_email: email,
          message: message
        },
        '1JvFao9bkAt3hfvX5'        // from EmailJS account
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      redirect("/")
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };
   const handleFOrmChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

    return (
        <form className='py-10  mx-auto shadow-minimal-inner border-y border-neutral-100 dark:shadow-none mt-2  ' onSubmit={handleSubmit}>
            <div className="max-w-lg mx-auto flex flex-col gap-6">

            <div className="flex flex-col  gap-2 ">
                <label htmlFor="name" className='text-sm font-medium text-neutral-600 tracking-tight dark:text-woodsmoke-300  '>Full name</label>
                <input type="text" id="name" name="name"  className='shadow-box  p-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:border-1 dark:border-woodsmoke-400 dark:placeholder-woodsmoke-500 ' onChange={handleFOrmChange} placeholder='Sameer Rao' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="email" className='text-sm font-medium text-neutral-600 tracking-tight dark:text-woodsmoke-300  '>Email Address</label>
                <input type="email" id="email" name="email" className='shadow-box  p-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:border-1 dark:border-woodsmoke-400 dark:placeholder-woodsmoke-500' onChange={handleFOrmChange} placeholder='mrao27488@gmail.com' />
            </div>
            <div className="flex flex-col  gap-2">
                <label htmlFor="message" className='text-sm font-medium text-neutral-600 tracking-tight dark:text-woodsmoke-300  '>Message</label>
                <textarea rows={5} id="message" name="message" className='shadow-box resize-none  p-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:border-1 dark:border-woodsmoke-400 dark:placeholder-woodsmoke-500' onChange={handleFOrmChange} placeholder='I wanna dicuss a project...' />
            </div>
            <button type='submit' className='bg-primary rounded-md px-4 py-2 text-white dark:bg-[#27272a] dark:text-woodsmoke-300'>Submit</button>
            </div>
        </form>
    )
}

export default ContactForm
