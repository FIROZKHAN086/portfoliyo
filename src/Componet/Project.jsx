import { Button } from '@/components/components/ui/button'
import React from 'react'

const Project = () => {
  return (
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
  )
}

export default Project