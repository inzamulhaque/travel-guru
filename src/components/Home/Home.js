import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sajek from "../../images/Sajek.png";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 container mx-auto items-center h-[85vh]">
                <div className="order-2 md:order-1 md:col-span-2">
                    <h1 className='text-[55px] font-bold'>Cox's bazar</h1>
                    <p className='text-justify'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button onClick={() => navigate("/contact")} className='mt-2 py-[5px] px-[10px] bg-orange-400 text-white border-2 border-orange-400 hover:bg-transparent hover:text-orange-400 duration-500 ease-in font-semibold'>Booking</button>
                </div>
                <div className="order-1 md:order-2 md:col-span-3 justify-center flex">
                    <img src={Sajek} alt="" className='h-[550px]' />
                </div>
            </div>
        </>
    );
};

export default Home;