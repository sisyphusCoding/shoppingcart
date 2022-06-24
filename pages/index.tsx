import type { NextPage } from 'next'
import {SiBuymeacoffee} from 'react-icons/si'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div className='
      min-h-full min-w-full
      flex  items-center justify-end'>
    <section 
        className='
        hover:bg-opacity-30
        transition-all ease duration-300
        text-zinc-200
        bg-black z-10 backdrop-filter backdrop-blur-md
        h-full px-10 w-fit flex flex-col items-center justify-evenly'>
    <h1 
     className='
        filter
        drop-shadow-[0_5px_5px_rgba(0,0,0,.7)]

      
        uppercase
        text-[clamp(1.2rem,1.2rem+8vmin,8rem)]
        tracking-tighter
          '>
      caffeined
      </h1>
      

  <button 
      className='
        border-2 
        border-transparent
        hover:border-zinc-500 
        bg-zinc-900 bg-opacity-80
        shadow-2xl
        z-10 rounded-xl  px-4 py-3' 
      >
    <Link
       href={'/store'}>
      <a 
      className=' 
          flex items-center justify-center'
        >
          <SiBuymeacoffee 
            className='   
            text-[clamp(1.2rem,1.2rem+6vmin,6rem)]
            ' />
            <h4 
            className='
            text-left
            text-[clamp(1.2rem,1.2rem+1.7vmin,2rem)] '
             >Buy our <br/> best sellers</h4>
        </a>
    </Link>
        </button>
      </section>
     <video autoPlay loop muted playsInline 
      className=' top-0 left-0 h-full w-full object-cover z-0 absolute'>
        <source src='/coffee.mp4'/>
      </video>
    </div>
  )
}

export default Home
