import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#f4d04e] w-full h-screen flex justify-center items-center '>
      <div className='border bg-white rounded-xl  p-5  w-1/4 shadow-[8px_8px_0_0_#000] '>
        <div className=' overflow-hidden rounded-xl'>
          <img alt="" src="/images/illustration-article.svg" className='w-full h-full'/>
        </div>
          
        <div className='font-semibold bg-[#f4d04e]'>Learning</div>
        Published 21 Dec 2023
        <h2 className='text-2xl hover:text-[#f4d04e]'>HTML & CSS foundations</h2>
        <p className='text-[#6b6b6b]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className='flex gap-3 items-center '>
          <img alt="user_photo" src="/images/image-avatar.webp" className='w-8 h-8 rounded-full'/>
          <p className='text-[#121212]'>Greg Hooper</p>
        </div>
        <div className='attribution text-xs text-center   '>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className='text-[#3e52a3]' target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#" className='text-[#3e52a3]'>Hapeusa</a>.
        </div>

      </div>
    </div>
  )
}

export default App
