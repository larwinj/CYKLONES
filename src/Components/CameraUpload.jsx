// CameraUpload.js
import React, { useState } from 'react';
import { useImage } from './ImageContext';

const CameraUpload = () => {
    const { image, setImage } = useImage();
    const [previewImage, setPreviewImage] = useState(image);

    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRetake = () => {
        try {
            setPreviewImage(null);
            setImage(null);
            const fileInput = document.getElementById('file-upload');
            if (fileInput) {
                fileInput.value = null; // Reset file input value
                fileInput.click(); // Open file dialog
            } else {
                console.error("File input element not found");
            }
        } catch (error) {
            console.error("Error handling retake:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            {previewImage ? (
                <div className="relative w-full h-full">
                    <img src={previewImage} alt="Uploaded" className="w-full h-full object-cover" />
                    <button 
                        onClick={handleRetake} 
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Retake
                    </button>
                </div>
            ) : (
                <>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <button 
                            onClick={() => document.getElementById('file-upload').click()}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Upload Image or Take Picture
                        </button>
                    </label>
                </>
            )}
        </div>
    );
};

export default CameraUpload;
