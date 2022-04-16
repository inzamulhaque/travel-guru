import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="mt-10 form-box-style w-[95%] md:w-3/4 lg:w-1/2 mx-auto py-10 px-[15px]">
                <h3 className='text-center text-blue-500 text-[28px]'>Contact Us</h3>
                <form>
                    <input type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input type="password" placeholder='Enter Your Password*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input type="password" placeholder='Enter Your Confirm Password*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <button type="submit" className='py-2 px-7 bg-green-500 text-white font-bold text-[22px] border-2 border-green-500 hover:bg-transparent hover:text-green-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Sign Up</button>
                </form>
                <button className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto' onClick={() => navigate("/signin")}>Sign In</button>
            </div>
        </>
    );
};

export default SignUp;