import React, { useState, useRef } from 'react';
import { FiBell, FiMenu } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { MdHistory, MdScience } from 'react-icons/md';
import { FaProjectDiagram, FaUser } from 'react-icons/fa';

const Navbar = ({ onViewChange }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const handleSectionClick = (section) => {
    onViewChange(section.toLowerCase());
    setShowSidebar(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) setShowSidebar(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    if (!showSidebar) setShowNotifications(false);
  };

  return (
    <div className="relative bg-green-50">
      <div className="flex justify-between items-center p-2 bg-green-700 text-white fixed w-full z-10 shadow-md">
        <div className="text-lg font-bold">Plant Doctor</div>
        <div className="flex items-center space-x-4">
          <BiMicrophone className="cursor-pointer text-2xl hover:text-green-400 transition-colors" />
          <FiBell className="cursor-pointer text-2xl hover:text-green-400 transition-colors" onClick={toggleNotifications} />
          <FiMenu className="cursor-pointer text-2xl hover:text-green-400 transition-colors" onClick={toggleSidebar} />
        </div>
      </div>

      {showNotifications && (
        <div className="fixed top-16 right-4 w-80 max-w-sm bg-white shadow-lg p-4 z-20 border border-green-300 rounded-lg">
          <div className="flex justify-between items-center border-b border-green-300 pb-2 mb-2">
            <p className="font-semibold text-green-800 text-lg">Notifications</p>
            <button
              onClick={() => setShowNotifications(false)}
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Close
            </button>
          </div>
          <p className="text-green-700">Here you will find recent notifications and updates. Stay tuned!</p>
        </div>
      )}

      {showSidebar && (
        <div ref={sidebarRef} className="fixed top-11 right-0 h-full w-64 bg-white shadow-lg z-20 border-r border-green-300">
          <div className="flex flex-col h-full">
            <div className="p-4">
              <div className="text-lg font-bold mb-4">Agronix</div>
              <div className="text-sm text-gray-500 mb-4">SINCE 2000</div>
              <input
                type="text"
                placeholder="What are you searching for?"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-grow overflow-y-auto">
              <ul className="p-4">
                {[
                  { name: 'Home', icon: <AiFillHome /> },
                  { name: 'History', icon: <MdHistory /> },
                  { name: 'Project', icon: <FaProjectDiagram /> },
                  { name: 'Prediction', icon: <MdScience /> },
                  { name: 'Login', icon: <FaUser /> },
                ].map((link) => (
                  <li key={link.name} className="mb-2">
                    <div
                      className="flex items-center cursor-pointer p-2 border-b border-gray-200"
                      onClick={() => handleSectionClick(link.name)}
                    >
                      <span className="mr-2 text-2xl  text-green-800">{link.icon}</span>
                      <span >{link.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-gray-200">
              <p className="font-semibold text-green-800 text-lg mb-2">Contact Info</p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="block mb-1">12/A, Mirnada City Tower, NYC</span>
                <span className="block">088889797697</span>
              </p>
            </div>
            <button
              onClick={() => setShowSidebar(false)}
              className="mt-auto bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
