import React from 'react';

const Home = () => {
  return (
    <div className="pt-10">
    
      <div className=" pt-3 w-full bg-white z-10 pb-3 shadow-md">
        <ul className="flex flex-row gap-6 justify-center md:justify-start">
          <li><a href="#home" className="hover:text-green-700">Home</a></li>
          <li><a href="#about" className="hover:text-green-700">About</a></li>
          <li><a href="#services" className="hover:text-green-700">Services</a></li>
          <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
        </ul>
      </div>

      <div id="home" className="h-screen bg-black flex justify-center items-center text-center px-6 relative"
    style={{
        backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsyf87r9V0COqc5GkBZbQbpWVytRhAWxLe0g&s)',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"
    }}>
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>

    <div className="relative  bg-white bg-opacity-70 p-10 rounded-lg shadow-2xl max-w-2xl mx-auto transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-6xl text-gray-900 font-extrabold font-inter mb-6 leading-tight">
            <span className="text-black">AG</span>
            <span className="text-green-700">R</span>
            <span className="text-black">O</span>
            <span className="text-green-700">NI</span>
            <span className="text-black">X</span>
        </h1>

        <p className="text-gray-800 text-lg leading-relaxed mb-6">
            Welcome to Agronix, your trusted partner in modern agriculture. Explore innovative solutions to boost your farming productivity, from plant disease detection to comprehensive crop and soil guides.
        </p>

        <a href="#services" className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg hover:bg-green-800 transition-colors duration-300">
            Explore Our Services
        </a>
    </div>
</div>



      <div id="about" className="bg-white flex flex-col justify-center items-center text-center p-8 pb-0 mt-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">About Agronix</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfb-Ty5fT9Y38zqIBykPemNDKZVgOcmM9sA&s" alt="About Agronix" className="mb-6 w-full max-w-md h-64 object-cover rounded shadow-md" />
        <p className="text-lg text-gray-700 leading-relaxed">
          Agronix is committed to revolutionizing agriculture with cutting-edge technology and expert insights. Our platform provides farmers with the tools they need to grow healthier crops, manage resources efficiently, and stay ahead of the market trends.
        </p>
      </div>

  
      <div id="services" className="bg-white flex flex-col justify-center items-center text-center p-5 pt-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-green-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Plant Disease Detection</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYWWdkBXqcV_BNmZaitXaxGSYEzH-e90ONK6WM6kqoRdpnZj2MiDPlMWrICyDb2v4IpU&usqp=CAU" alt="Plant Disease Detection" className="mb-4 w-full h-40 object-cover rounded shadow-md" />
            <p className="text-gray-700 leading-relaxed text-center">
              Utilize advanced AI to detect plant diseases early and ensure your crops stay healthy and productive.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Crop Guide</h3>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*HbhB7HamnL35TGLHU_rGCg.jpeg" alt="Crop Guide" className="mb-4 w-full h-40 object-cover rounded shadow-md" />
            <p className="text-gray-700 leading-relaxed text-center">
              Access detailed guides on optimal crop management practices tailored to your local conditions.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Soil Information</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSZdzJVIvSrMwrNcYS279KRcKuIQLHqnBLINh4Z8paR9lJ-IDJUyxGt2QgInb799nDW4&usqp=CAU" alt="Soil Information" className="mb-4 w-full h-40 object-cover rounded shadow-md" />
            <p className="text-gray-700 leading-relaxed text-center">
              Get precise soil analysis reports to optimize your farming techniques and boost crop yield.
            </p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Marketing Information</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yDZi3o2Z62V529FXtM7-hegm7MvXVROmoQ&s" alt="Marketing Information" className="mb-4 w-full h-40 object-cover rounded shadow-md" />
            <p className="text-gray-700 leading-relaxed text-center">
              Stay informed about market trends and price fluctuations to make the best decisions for your farm.
            </p>
          </div>
        </div>
      </div>

      <div id="contact" className="bg-green-200 flex flex-col justify-center items-center text-center p-10 mt-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          We'd love to hear from you! Reach out to us with your inquiries, feedback, or partnership proposals.
        </p>
        <form className="w-full max-w-md">
          <input type="text" placeholder="Name" className="w-full p-2 mb-4 border border-gray-300 rounded shadow-md" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-300 rounded shadow-md" />
          <textarea placeholder="Message" className="w-full p-2 mb-4 border border-gray-300 rounded shadow-md" rows="4"></textarea>
          <button type="submit" className="w-full p-2 bg-green-700 text-white rounded hover:bg-green-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
