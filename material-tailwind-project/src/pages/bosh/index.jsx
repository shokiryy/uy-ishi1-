import React from 'react';

function EcommerceSection() {
  return (
    <div 
      className="flex items-center justify-between bg-pink-200 h-screen p-10 bg-cover bg-center" 
      style={{ backgroundImage: 'url(/tt.png)' }}
    >
      <div className="max-w-lg space-y-4 mb-10">
        <p className="text-gray-600">Driving growth with personalization.</p>
        <h1 className="text-5xl font-bold text-black">
          Make ecommerce <span className="text-purple-600">More personal.</span>
        </h1>
        <p className="text-gray-600">
          Hundreds of brands use <span className="font-semibold">Qubit CommerceAI</span> to power
          the next generation of product recommendations, badging and insights to build exceptional customer experiences.
        </p>
        <div className="flex mt-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-3 rounded-l-full border-none w-full max-w-xs text-gray-700"
          />
          <button className="bg-purple-600 text-white p-3 rounded-r-full hover:bg-purple-700">
            Book a demo
          </button>
        </div>
      </div>



    </div>
  );
}

export default EcommerceSection;
