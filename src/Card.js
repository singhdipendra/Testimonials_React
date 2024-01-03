import React from 'react'
import review from "./data"
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative '> 
        <div className='absolute top-[-7rem] z-[10] mx-auto '>
            <img 
            className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
            src={review.image}/>
           <div className='w-[140px] h-[140px] absolute rounded-full bg-violet-500 top-[-6px] z-[-20] left-[10px]'></div>
        </div>
        <div className='text-center mt-7' >
            <p className='text-2xl font-bold capitalize tracking-wide'
            >
              {review.name}
            </p>
        </div>
        <div className='text-center mt-1'>
            <p className='text-sm font-semibold uppercase text-violet-300' >
                {review.job}
            </p>
        </div>        
        <div className='text-violet-400 mx-auto mt-1'>
            <FaQuoteLeft/>
        </div>
        <div className='text-center mt-4 text-slate-500 text-lg'>
                {review.text}
        </div>
        <div className='text-violet-400 mx-auto mt-1 '>
            <FaQuoteRight/>
        </div>
    
    </div>
  )
}

export default Card