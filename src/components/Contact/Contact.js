import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <div className="mt-10 mx-auto form-box-style w-[95%] md:w-3/4 lg:w-1/2mx-auto py-10 px-[15px]">
                <h3 className='text-center text-blue-500 text-[28px]'>Contact Us</h3>
                <form>
                    <div className="md:flex justify-between gap-2">
                        <input type="text" placeholder='Enter Your Name*' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                        <input type="email" placeholder='Enter Your Email*' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    </div>
                    <div className="md:flex justify-between gap-2">
                        <input type="number" placeholder='Enter Your Phone Number' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' />
                        <input type="text" placeholder='Subject*' className='w-full md:w-1/2 border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    </div>
                    <textarea className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[20px]' placeholder='Message*' required></textarea>
                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md w-1/2'>Send</button>
                </form>
            </div>
        </>
    );
};

export default Contact;