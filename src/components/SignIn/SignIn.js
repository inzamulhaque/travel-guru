import React from 'react';
import { useNavigate } from 'react-router-dom';
import googleicon from '../../images/icons/google.png';
import githubicon from '../../images/icons/github.png';
import facebookicon from '../../images/icons/facebook.png';

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="mt-10 form-box-style w-[95%] md:w-3/4 lg:w-1/2 mx-auto py-10 px-[15px]">
                <h3 className='text-center text-blue-500 text-[28px]'>Contact Us</h3>
                <form>
                    <input type="email" placeholder='Enter Your Email*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <input type="password" placeholder='Enter Your Password*' className='w-full border-b-2 border-black focus:outline-none py-2 px-5 text-[22px]' required />
                    <button type="submit" className='py-2 px-7 bg-blue-500 text-white font-bold text-[22px] border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Sign In</button>

                </form>
                <div className="md:flex justify-between">
                    <button className='py-2 px-7 bg-orange-500 text-white font-bold text-[22px] border-2 border-orange-500 hover:bg-transparent hover:text-orange-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto'>Reset Password</button>
                    <button className='py-2 px-7 bg-green-500 text-white font-bold text-[22px] border-2 border-green-500 hover:bg-transparent hover:text-green-500 duration-500 ease-in-out rounded-md mt-3 block md:inline-block mx-auto' onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
                <div className='mt-3'>
                    <button className="text-[20px] border-2 border-[#FF4B26] rounded-[30px] px-[25px] py-2 text-[#FF4B26] hover:bg-[#FF4B26] hover:text-white duration-500 ease-in-out flex font-bold block mx-auto">
                        <img src={googleicon} alt="Google Icon" className='w-[30px] h-[30px]' />
                        Sign In With Google
                    </button>
                    <button className="text-[20px] mt-2 border-2 border-[#000000] rounded-[30px] px-[25px] py-2 text-[#000000] hover:bg-[#000000] hover:text-white duration-500 ease-in-out flex font-bold block mx-auto">
                        <img src={githubicon} alt="GitHub Icon" className='w-[30px] h-[30px] bg-white' />
                        Sign In With GitHub
                    </button>
                    <button className="text-[20px] mt-2 border-2 border-[#475993] rounded-[30px] px-[25px] py-2 text-[#475993] hover:bg-[#475993] hover:text-white duration-500 ease-in-out flex font-bold block mx-auto">
                        <img src={facebookicon} alt="Facebook Icon" className='w-[30px] h-[30px] bg-white' />
                        Sign In With Facebook
                    </button>
                </div>
            </div>
        </>
    );
};

export default SignIn;