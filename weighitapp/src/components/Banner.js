// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    
    <section className="bg-opacity-70 bg-blue-800 text-white p-0 text-center ">
      <img className="opacity-70  h-[20%] max-h-[470px] p-0 rounded-b-[100%]  r-20 shadow w-full "src='/tools.jpg'/>
      <h2 className="text-4xl font-bold mb-0 z-30 rounded-shadow">Reliable Weighbridge Solutions</h2>
      <p className="mb-6">Providing trusted truck scale solutions for over 20 years</p>
      <button className="mb-3 bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded">
        Learn More
      </button>
      
    </section>
   
  );
};

export default Banner;
