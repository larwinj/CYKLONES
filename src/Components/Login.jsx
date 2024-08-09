import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onViewMore }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setMobileNumber('');
        setOtp('');
        setName('');
        setLocation('');
        setEmail('');
        setIsOtpSent(false);
    };

    const handleSendOtp = async () => {
        try {
            const response = await axios.post('https://your-otp-service.com/sendOtp', {
                mobileNumber: mobileNumber
            });
            
            if (response.data.success) {
                setIsOtpSent(true);
                console.log("OTP sent to mobile:", mobileNumber);
            } else { 
                console.error("Failed to send OTP:", response.data.message);
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
        }
    };

    const handleSubmit = () => {
        if (isLogin) {
            // Handle login here.
            console.log("Logging in with OTP:", otp);
        } else {

            const userDetails = {
                name,
                location,
                mobileNumber,
                email,
            };
            console.log("Signing up with details:", userDetails);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                
                {!isLogin && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                            <input
                                type="text"
                                placeholder="Enter your location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email (Optional)</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                            />
                        </div>
                    </>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                    <input
                        type="text"
                        placeholder="Enter mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                    />
                </div>
                
                {isOtpSent && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">OTP</label>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                        />
                    </div>
                )}
                
                {!isOtpSent ? (
                    <button
                        onClick={handleSendOtp}
                        className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
                    >
                        Send OTP
                    </button>
                ) : (
                    <button
                      onClick={onViewMore}
                        className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-300"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                )}
                
                <div className="text-center mt-4">
                    <button onClick={toggleAuthMode} className="text-green-700 hover:underline">
                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
