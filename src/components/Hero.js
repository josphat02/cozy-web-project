import React from 'react';

const Hero = () => {
  const imageUrl="https://thesudantimes.com/wp-content/uploads/2024/09/image_12760e-Cheetah-1024x667.jpg"
  return (
    <section id="hero" className="bg-black relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?cozy)' }}>
      
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto text-center text-white relative z-10">
        <h2 className="text-4xl md:text-6xl font-semibold py-16">Welcome to My Cozy Space</h2>
        <p className="text-lg md:text-2xl mb-8">Your journey to a relaxing web experience starts here.</p>
         {/* Medium-Sized Image */}
         <div className="flex justify-center">
          <img
            src={imageUrl}
            alt="Cheetah"
            className="w-64 md:w-80 rounded-lg shadow-lg mb-8"
          />
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
