// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded shadow hover:bg-blue-300 hover:text-white">
            
            <h4 className="text-xl font-bold mb-2 ">Installation</h4>
            <p>Professional and timely installation services.</p>
          </div>
          <div className="border p-4 rounded shadow  hover:bg-blue-300 hover:text-white">
            <h4 className="text-xl font-bold mb-2">Maintenance</h4>
            <p>Ensuring your equipment runs smoothly.</p>
          </div>
          <div className="border p-4 rounded shadow  hover:bg-blue-300 hover:text-white">
            <h4 className="text-xl font-bold mb-2">Support</h4>
            <p>24/7 customer support to assist you anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
