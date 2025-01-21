// src/App.jsx

import { Button } from '@/components/components/ui/button';
import React from 'react';


const Landing = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <main>
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
