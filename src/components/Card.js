import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <section className='bg-gray-600'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
    </section>
  );
};

export default Card;
