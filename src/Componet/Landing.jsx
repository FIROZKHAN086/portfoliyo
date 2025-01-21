// src/App.jsx

import { Button } from '@/components/components/ui/button';
import React from 'react';


const Landing = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
     

      <main>
        <section className="flex flex-col items-center justify-center h-screen text-center">
          <h2 className="text-5xl font-extrabold mb-4">Hi, I'm Firoz</h2>
          <p className="text-xl text-gray-300 mb-8">A Creative Web Designer and Developer</p>
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium">View My Work</a>
        </section>

        <section id="about" className="py-20 px-6">
          <h3 className="text-4xl font-bold mb-6">About Me</h3>
          <p className="text-lg text-gray-300">
            I'm a passionate frontend designer specializing in creating visually stunning, user-friendly interfaces. I love crafting modern, responsive designs using React and Tailwind CSS.
          </p>
        </section>

        <section id="projects" className="py-20 px-6 bg-gray-800">
          <h3 className="text-4xl font-bold mb-6">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
                <img src="https://static.wixstatic.com/media/11062b_b35e39e734284486a1293ef3c6a3145b~mv2.jpg" alt="img" />
              <h4 className="text-2xl font-bold mb-2">Zomapto Clon</h4>
             
              <p className="text-gray-300">A cool web application showcasing innovative design.</p>
              <Button><a target='_blank' href="https://zoapto.netlify.app/">View On Live</a></Button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
                <img src="https://wallpapers.com/images/hd/music-4k-doodle-fhosgwe4adxuunwq.jpg" alt="" />
              <h4 className="text-2xl font-bold mb-2">Musice Player</h4>
              <p className="text-gray-300">A responsive app built with React and Tailwind.</p>
              <Button><a target='_blank' href="https://musice-my.vercel.app/">View On Live</a></Button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
                <img src="https://media.istockphoto.com/id/531633071/vector/calculator.jpg?s=612x612&w=0&k=20&c=TrSndAw_fs5LVFqagmF16aqpKb7ZYzyMZ7bVL3QVyP8=" alt="" />
              <h4 className="text-2xl font-bold mb-2">Its A Culcuator </h4>
              <p className="text-gray-300">Its not responsive ,its make on 15 mint ,  I try Logis Build It </p>
              <Button><a target='_blank' href="https://cauculator.vercel.app/">View On Live</a></Button>
            </div>
          </div>
        </section>

    <section className="py-20 px-6 flex flex-col justify-center items-center w-full bg-slate-500" >
                <h1 className='text-4xl font-bold mb-6'>You Have interesting My portfolio </h1>
                <h2 className='text-gray-300 mb-4'>You Visit <span className='text-white text-xl'>My GitHub</span> Account </h2>
                <Button><a target='_blank' href="https://github.com/FIROZKHAN086">Github..</a></Button>
    </section>


        <section id="contact" className="py-20 px-6">
          <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-300 mb-4">
            Interested in working together? Feel free to reach out!
          </p>
         <Button> <a href="mailto:firozkhan192006@gmail.com" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium">
            Email Me
          </a></Button>
        </section>
      </main>

      <footer className="py-6 text-center bg-gray-800">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Firoz's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
