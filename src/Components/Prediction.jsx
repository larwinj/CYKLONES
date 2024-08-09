import React, { useState,  useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import CameraUpload from './CameraUpload';

import { useImage } from './ImageContext';

const Prediction = ({ onViewMore }) => {
    const { image, setImage } = useImage();
    const [toggle, setToggle] = useState(1);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    if(!image){
        setImage();
    }
    useEffect(() => {
        if (image) {
            setLoading(true);
            const timer = setTimeout(() => {
                setResponse({
                    "problem": "Leaf Blight",
                    "solution": "Apply fungicide and implement integrated pest management practices.",
                    "requirements": [
                        "Ensure proper drainage and reduce overhead irrigation to keep leaves dry and minimize fungal growth.",
                        "Avoid overcrowding of plants to allow adequate air circulation and reduce humidity around plants.",
                        "Ensure good air circulation around the plants to prevent the spread of the disease and improve overall plant health.",
                        "Prune infected leaves promptly and dispose of them properly to prevent the spread of the disease to healthy plants.",
                        "Monitor weather conditions and adjust irrigation practices to avoid creating an environment conducive to leaf blight."
                    ],
                });
                setLoading(false);
            }, 2000); // Simulate 2 seconds delay

            return () => clearTimeout(timer); // Cleanup timeout on component unmount
        }
    }, [image]);

    return (
        <div>
            <div className="pt-20 p-4">
                <div className="absolute top-16 right-10 flex space-x-0">
                    <button
                        onClick={() => setToggle(1)}
                        className={`px-4 py-2 rounded-l border border-green-600 ${toggle === 1 ? 'bg-green-600 text-white' : 'bg-white text-green-600'}`}
                    >
                        Original
                    </button>
                    <button
                        onClick={() => setToggle(2)}
                        className={`px-4 py-2 rounded-r border border-green-600 ${toggle === 2 ? 'bg-green-600 text-white' : 'bg-white text-green-600'}`}
                    >
                        Detected
                    </button>
                </div>
                <div className="relative mb-4 mt-8 flex justify-center">
                    {toggle === 1 && (
                        <div className="p-4 border border-dashed border-green-300 rounded-lg w-96 h-96 mx-auto bg-white shadow-md">
                            <CameraUpload />
                        </div>
                    )}
                    {toggle === 2 && (
                        <div className="p-4 border border-dashed border-green-300 rounded-lg w-96 h-96 mx-auto bg-white shadow-md"></div>
                    )}
                </div>
                {loading && (
                    <div className="bg-green-100 p-4 rounded-lg mt-4 shadow-md border border-green-300 text-center">
                        <p>Loading response...</p>
                    </div>
                )}
                {response && !loading && (
                    <div className="bg-green-100 p-4 rounded-lg mt-4 shadow-md border border-green-300">
                        <h2 className="text-lg font-bold mb-2 text-green-800">Problem</h2>
                        <p>{response.problem}</p>
                        <h2 className="text-lg font-bold mb-2 mt-4 text-green-800">Solution</h2>
                        <p>{response.solution}</p>
                        <h2 className="text-lg font-bold mb-2 mt-4 text-green-800">Requirements</h2>
                        <p>{response.requirements}</p>
                        <button
                            onClick={onViewMore}
                            className="text-green-600 mt-2 hover:underline"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>

            {/* Chatbot Icon */}
            <div className="fixed bottom-10 right-10">
                <FaRobot className="text-6xl text-green-600 hover:text-green-400 transition-colors border rounded-full border-green-800 p-1 bg-black" />
            </div>
        </div>
    );
};

export default Prediction;
