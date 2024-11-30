import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="cards" className="py-6 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="Flamingo"
            description="Flamingos or flamingoes are a type of wading bird in the family Phoenicopteridae, which is the only extant family in the order Phoenicopteriformes."
            imageUrl="https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww"
          />
          <Card 
            title="Zebra"
            description="Zebras are single-hoofed animals that are native to AfricaZebras are equids, members of the horse family. They have excellent hearing and eyesight and can run at speeds of up to 35 miles per hour (56 kilometers per hour)."
            imageUrl="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK-650-80.jpg.webp"
          />
          <Card 
            title="Cheetah"
            description="Cheetahs are big cats known for being the world's fastest land mammal, reaching speeds of up to 60-70 miles per hour."
            imageUrl="https://images.unsplash.com/photo-1516625151625-de173ddaebbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZXRhaHxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
