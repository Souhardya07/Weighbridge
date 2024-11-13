// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-200">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Message" className="w-full p-2 mb-4 border rounded"></textarea>
          <button className="bg-blue-900 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
