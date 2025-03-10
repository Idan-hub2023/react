import React from "react";
import Navbar from "./components/Navbar"; 
import profile from "./assets/ff.jpg";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="md:container mx-auto px-6 pt-16 flex flex-col md:flex-row items-center gap-12">
    {/* Left Side: Text Content */}
    <div className="md:p-8 w-full md:w-[600px] text-center md:text-left">
        <h1 className="md:font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            I'm Irahaza Daniel, <br /> Software Developer & UI/UX Designer
        </h1>
        <p className="md:mt-4 text-gray-600 text-base sm:text-lg">
            Passionate about building user-friendly applications with a touch of creativity.
        </p>
        <button className="md:mt-6 bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300">
            Learn More
        </button>
    </div>

    {/* Right Side: Image */}
    <div className="md:relative">
        <img
            src={profile}
            alt="avatar"
            className="w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] rounded-full"
        />
    </div>
</div>

<div className="md:container mx-auto py-[30px] px-6">
    <h1 className="md:text-4xl font-bold text-blue-600 text-center">Service</h1>
    <p className=" text-center md:text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, accusantium, sint beatae corporis soluta consequatur labore totam error nostrum distinctio laborum aliquid mollitia dolorem odit nesciunt omnis repellat deserunt consectetur?</p>
</div>

<div className="px-4 md:px-6">
    <div className="flex flex-col md:flex-row md:gap-4">
        <div className="w-full md:w-1/2 bg-white py-3 px-3 my-2 rounded-2xl shadow-md hover:bg-blue-300 transition duration-600 ease-in-out">
            <div className="flex items-center">
                <img src={profile} alt="Placeholder" className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-full mr-4" />
                <div>
                    <h1 className="font-bold text-xl md:text-3xl">Backend Design</h1>
                    <p className="text-sm">Deserunt consequatur nesciunt corrupti nulla quasi aliquid voluptatum minima aperiam harum iure</p>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 bg-white py-3 px-3 my-2 rounded-2xl shadow-md hover:bg-blue-300 transition duration-600 ease-in-out">
            <div className="flex items-center">
                <img src={profile} alt="Placeholder" className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-full mr-4" />
                <div>
                    <h1 className="font-bold text-xl md:text-3xl">Frontend Design</h1>
                    <p className="text-sm">Deserunt consequatur nesciunt corrupti nulla quasi aliquid voluptatum minima aperiam harum iure</p>
                </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 bg-white py-3 px-3 my-2 rounded-2xl shadow-md hover:bg-blue-300 transition duration-600 ease-in-out">
            <div className="flex items-center">
                <img src={profile} alt="Placeholder" className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover rounded-full mr-4" />
                <div>
                    <h1 className="font-bold text-xl md:text-3xl">UI/UX Design</h1>
                    <p className="text-sm">Deserunt consequatur nesciunt corrupti nulla quasi aliquid voluptatum minima aperiam harum iure</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="container mx-auto px-6 mt-8">
    <h1 className="font-bold text-3xl mb-2">My Projects</h1>
    <div className="bg-amber-600 h-1 w-12 mb-4"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={profile} alt="Project" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="font-bold text-xl mb-2">Project Title</h2>
            <p className="text-gray-600 mb-4">ipsum vel dictum fermentum, metus turpis viverra lectus, sed lobortis ipsum velit ac neque.</p>
            <button className="p-2 bg-amber-600 rounded-lg w-full text-white font-semibold hover:bg-amber-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200">Live Demo</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={profile} alt="Project" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="font-bold text-xl mb-2">Project Title</h2>
            <p className="text-gray-600 mb-4">ipsum vel dictum fermentum, metus turpis viverra lectus, sed lobortis ipsum velit ac neque.</p>
            <button className="p-2 bg-amber-600 rounded-lg w-full text-white font-semibold hover:bg-amber-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200">Live Demo</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={profile} alt="Project" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="font-bold text-xl mb-2">Project Title</h2>
            <p className="text-gray-600 mb-4">ipsum vel dictum fermentum, metus turpis viverra lectus, sed lobortis ipsum velit ac neque.</p>
            <button className="p-2 bg-amber-600 rounded-lg w-full text-white font-semibold hover:bg-amber-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200">Live Demo</button>
        </div>
    </div>
</div>
<div class="container mx-auto px-4 py-12 flex items-center justify-center">
    <img
        src={profile}
        alt="Irahaza Daniel"
        class="rounded w-[500px] h-[400px] object-cover :mr-8 transition-transform transform hover:scale-105"
    />
    <div class="text-left md:ml-[20px]">
        <h1 class="text-4xl font-bold text-blue-700 mb-4 transition-colors hover:text-blue-500">
            Hi, I'm Irahaza Daniel!
            </h1>
      <div className="discr md:w-3xl">
        <p>"What's up? I'm Irahaza Daniel! I see my computer as a giant toy box. I love making websites and apps that are like fun games. I'm really interested in making things look great and learning all the cool stuff computers can do."</p>
<button className="p-2 bg-amber-600 rounded-lg w-[200px] text-white font-semibold hover:bg-amber-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200">Get more!</button>

      </div>
    </div>
</div> 
<div className="discr w-[960px] text-center ml-[200px]">
  <h1 className="md:font-bold text-4xl">I'AM INTERSED IN</h1>
  <p>"I'm super interested in building websites that are like fun games, where everyone can play and have a good time. I also love drawing and designing things that look awesome. And of course, I'm always excited to learn new tricks and tools on the computer. There's always something new to discover!"</p>
</div>


<div className="cards md:flex gap-3 py-16 px-7">
<div class="max-w-sm p-6 bg-white border-4 rounded-3xl shadow-sm dark:bg-white-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold  text-black">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>
</div>

    </div>
  );
};

export default App;
