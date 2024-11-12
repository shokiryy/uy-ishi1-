import React from 'react';

export default function Orta() {
    return (
        <div className="p-10 mb-48">
            {/* Brend ishonchi bo'limi */}
            <h1 className="text-center mb-9 text-2xl font-semibold">Trusted by world-class brands.</h1>
            <div className="flex justify-around mb-36">
                <img src="/b.png" alt="Brand B" className="h-10" />
                <img src="/k.png" alt="Brand K" className="h-10" />
                <img src="/l.png" alt="Brand L" className="h-10" />
                <img src="/e.png" alt="Brand E" className="h-10" />
                <img src="/r.png" alt="Brand R" className="h-10" />
            </div>

            {/* Mahsulot haqida ma'lumot */}
            <h1 className="text-center mb-7 font-bold text-5xl">All the power. Easy to use.</h1>
            <p className="mb-10 text-center max-w-xl mx-auto">
                By collaborating with real ecommerce teams we've built the next-gen personalization tool. No code. No clunkiness.
            </p>
            
            {/* Rasm va tugma bo'limi */} 
            <div className="flex flex-col items-center mb-16">
                <img src="/oo.png" alt="Product Image" className="mb-6" />
                <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
                    See products
                </button>
            </div>

          {/* Qubit imkoniyatlari */}
<div className="text-center p-10">
    <h2 className="text-3xl font-bold mb-10">What you can do with Qubit.</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        
        {/* 1:1 Product recommendations */}
        <div className="space-y-2 text-center">
            <img src="/y.png" alt="Product Recommendations" className="mx-auto h-10" />
            <h3 className="text-lg font-semibold">1:1 Product recommendations</h3>
            <p className="text-gray-600">Use deep learning recommendations to engage customers in seconds.</p>
        </div>

        {/* 1:1 Product badging */}
        <div className="space-y-2 text-center">
            <img src="/y.png" alt="Product Badging" className="mx-auto h-10" />
            <h3 className="text-lg font-semibold">1:1 Product badging</h3>
            <p className="text-gray-600">Guide discovery with personalized product badging. Push sales with social proofing.</p>
        </div>

        {/* Personalized content */}
        <div className="space-y-2 text-center">
            <img src="/y.png" alt="Personalized Content" className="mx-auto h-10" />
            <h3 className="text-lg font-semibold">Personalized content</h3>
            <p className="text-gray-600">Your customers are unique. Present them with content that shows you know them.</p>
        </div>

        {/* Product insights */}
        <div className="space-y-2 text-center">
            <img src="/y.png" alt="Product Insights" className="mx-auto h-10" />
            <h3 className="text-lg font-semibold">Product insights</h3>
            <p className="text-gray-600">A platform packed with insights helping you discover the hard-hitting things you can do next.</p>
        </div>

        {/* CommerceAI */}
        <div className="space-y-2 text-center">
            <img src="/y.png" alt="CommerceAI" className="mx-auto h-10" />
            <h3 className="text-lg font-semibold">CommerceAI</h3>
            <p className="text-gray-600">Your customer’s behavioral data is telling you a story. Use predictive and affinity-based algorithms to serve them better.</p>
        </div>

        {/* Platform integrations */}
        <div className="space-y-2 text-center">
            <img src="/y.png" alt="Platform Integrations" className="mx-auto h-10" />
            <h3 className="text-lg font-semibold">Platform integrations</h3>
            <p className="text-gray-600">Connect Qubit to any tool via API. Import data or trigger an experience on any platform.</p>
        </div>

    </div>
</div>

        </div>
    );
}
