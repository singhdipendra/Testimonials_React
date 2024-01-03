import reviews from "./data";
import React from 'react';
import Testimonials from "./Testimonial";

const App=()=>{
  return(
    <div className="w-[100vw] flex flex-col justify-center items-center h-[100vh] bg-gray-200">

   <div className="text-center ">

     <h1 className="font-bold  text-4xl text-black"> Our Testimonials </h1>

      <div className="bg-violet-400 h-[4px] w-1/5 mx-auto  mt-3 "></div>

      <Testimonials reviews={reviews}/>

      </div>
   </div>
  )
}

export default App;
