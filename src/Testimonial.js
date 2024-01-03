import React, { useCallback, useState } from "react";
import Card from "./Card";
import reviews from "./data"
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"

const Testimonials = (props)=>{
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

      function RightShiftHandler(){
        if(index + 1 >=reviews.length){
          setIndex(0);
      }
      else {
        setIndex(index+1);
      }
      }

      function LeftShiftHandler(){
          if(index-1<0){
              setIndex(reviews.length-1);
          }
          else {
            setIndex(index-1);
          }
      }

      function supriseHandler(){
         let randomIndex =  Math.floor(Math.random() * reviews.length);
         setIndex(randomIndex);
      }


    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center 
        mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
          <Card review={reviews[index]}>

          </Card>

          <div className='text-violet-400 mt-8 text-3xl flex font-bold gap-3 justify-center mx-auto'>

            <button className='cursor-pointer hover:text-violet-600'
                      onClick={LeftShiftHandler}
                      >
                <FiChevronLeft/>
            </button>

            <button 
                onClick={RightShiftHandler}
               className='cursor-pointer hover:text-violet-600'>
                <FiChevronRight/>
            </button>
        </div>

        <div>
            <button 
               onClick={supriseHandler}
              className='bg-violet-400  hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md mt-5 font-bold text-white  text-lg'>
                Surprise Me!
            </button>
        </div>

        </div>
    )
}

export default Testimonials