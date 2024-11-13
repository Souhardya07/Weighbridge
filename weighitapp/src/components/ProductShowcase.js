// src/components/ProductShowcase.js
import React from 'react';

const ProductShowcase = () => {
  return (
    <section id="products" className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card" >
            <img src="/cranes.jpg" class="card-img-top" alt="..." />
          </div>
          <div className="border p-4 rounded shadow hover:bg-blue-200 hover:text-white">
            <h4 className="text-xl font-bold mb-2">Truck Scale Model X</h4>
            <p>High precision, durable, and reliable.</p>
          </div>
          <div className="card" >
            <img src="/truck.jpg" class="card-img-top" alt="..." />
          </div>
          <div className="border p-4 rounded shadow  hover:bg-blue-200 hover:text-white">
            <h4 className="text-xl font-bold mb-2">Weighbridge Model Y</h4>
            <p>Built to withstand heavy-duty use.</p>
          </div>
          <div className="card" >
            <img src="/tools.jpg" class="card-img-top" alt="..." />
          </div>
          <div className="border p-4 rounded shadow  hover:bg-blue-200 hover:text-white">
            <h4 className="text-xl font-bold mb-2">Portable Weighbridge</h4>
            <p>Easy to install and highly accurate.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
