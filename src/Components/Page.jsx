import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Page = ({ onBack }) => {
  const diseaseName = "Leaf Blight";
  const images = [
    'https://www.epicgardening.com/wp-content/uploads/2024/07/Dry-cucumber-leaves-300x223.jpg',
    'https://www.epicgardening.com/wp-content/uploads/2024/05/common-garden-diseases-300x223.jpeg',
    'https://www.epicgardening.com/wp-content/uploads/2024/02/sooty-mold-300x223.jpeg',
    'https://www.epicgardening.com/wp-content/uploads/2022/06/Bacterial-blight-Psuedomonas-syringae.jpg',
    'https://www.epicgardening.com/wp-content/uploads/2022/06/Common-bacterial-blight-on-beans.jpg',
  ];
  const details = `
    Leaf blight is a common disease affecting plants, caused by various fungi and bacteria. 
    It leads to brown or black lesions on leaves, which can coalesce and cause large areas of tissue to die. 
    The disease is often favored by wet, humid conditions and poor air circulation.
  `;
  const solution = `
    Apply fungicide and implement integrated pest management practices. Ensure proper drainage and reduce 
    overhead irrigation to keep leaves dry and minimize fungal growth.
  `;
  const requirements = `
    Ensure proper drainage and reduce overhead irrigation to keep leaves dry and minimize fungal growth.
    Avoid overcrowding of plants to allow adequate air circulation and reduce humidity around plants.
    Ensure good air circulation around the plants to prevent the spread of the disease and improve overall plant health.
    Prune infected leaves promptly and dispose of them properly to prevent the spread of the disease to healthy plants.
    Monitor weather conditions and adjust irrigation practices to avoid creating an environment conducive to leaf blight.
  `;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (currentImageIndex >= images.length) {
      setCurrentImageIndex(0);
    }
  }, [currentImageIndex, images.length]);

  return (
    <div className='pl-4 pr-4 '>
      <button 
        className="mt-24 bg-blue-500 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-600" 
        onClick={onBack} 
        style={{ zIndex: 1 }}
      >
        Back
      </button>
      
      <h1 className="text-3xl font-bold mb-4 mt-4 text-green-900">{diseaseName}</h1>
      
      <div className="flex items-center justify-center mb-8 relative ">
        <button 
          onClick={handlePrevImage} 
          className={`text-2xl absolute left-0 ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          disabled={currentImageIndex === 0}
        >
          <IoIosArrowBack className='h-[60px] w-[40px]'/>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-1 overflow-hidden w-full max-w-3xl gap-2">
          {images.slice(currentImageIndex, currentImageIndex + 1).map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Disease pictures ${index + 1}`} 
              className="w-[400px] h-[300px] object-cover rounded-lg shadow-lg" 
            />
          ))}
        </div>
        
        <button 
          onClick={handleNextImage} 
          className={`text-2xl absolute right-0 ${currentImageIndex >= images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
          disabled={currentImageIndex >= images.length-1}
        >
          <IoIosArrowForward className='h-[60px] w-[40px]'/>
        </button>
      </div>

      <div className="mb-8 p-4 bg-green-100 border border-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-green-900">Details</h2>
        <p className="text-gray-700 font-poppins">{details}</p>
      </div>
      
      <div className="mb-8 p-4  bg-green-100 border border-black rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2 text-green-800">Solution</h2>
        <p className="text-gray-700 font-poppins">{solution}</p>
      </div>
      
      <div className="p-4  bg-green-100 border border-black rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2 text-green-800">Requirements for Pests</h2>
        <p className="text-gray-700 font-thin">{requirements}</p>
      </div>
    </div>
  );
};

export default Page;
