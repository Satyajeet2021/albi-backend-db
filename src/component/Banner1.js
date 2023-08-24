import React from 'react';
import RedPic from "../assets/redPic.jpg";

export default function Banner1() {
  return (
    // <div>
    //   <div className="w-full" style={{backgroundColor:"#980b06"}}>
    //   <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row container items-center justify-center mx-auto">
    //   <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12  justify-center items-center py-4 sm:py-4 md:py-4 lg:py-8 xl:py-8 3xl:py-8">
    //     <h1 className="text-3xl sm:text-xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl py-2 sm:py-2 md:py-2 lg:py-5 xl:py-5 3xl:py-5 text-white ">Icon of innovation</h1>
    //     <p className="text-lg sm:text-sm md:text-md lg:text-md xl:text-md 2xl:text-md text-gray-200 pb-2 sm:pb-2 md:pb-2 lg:pb-5 xl:pb-5 3xl:pb-5">Quality to another level</p>
    //     <button className="py-2 px-5 border border-gray-100 rounded-sm text-white py-2 sm:py-2 md:py-2 lg:py-4 xl:py-4 3xl:py-4 px-12">SHOP NOW</button>
    //   </div>
    //   <img src={RedPic} className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 text-right"/>
    // </div>
      
    // </div>
    // </div>
    <div className='flex container py-4 mx-auto banner1'>
    <div className="w-full" style={{backgroundColor:"#980b06"}}>
    <div className="hidden sm:flex flex-col sm:flex-row  container items-center justify-center mx-auto">
      <div className="w-full sm:w-6/12 justify-center items-center py-4 sm:py-4 md:py-4 lg:py-8 xl:py-8 3xl:py-8 textcta">
        <h1 className="heading">Icon of innovation</h1>
        <p className="text-lg sm:text-sm md:text-md text-gray-200 pb-2 sm:pb-2 md:pb-2 lg:pb-5 xl:pb-5 3xl:pb-5">Quality to another level</p>
        <button className="py-2 px-5 border border-gray-100 rounded-sm text-white py-2 sm:py-2 md:py-2 lg:py-4 xl:py-4 3xl:py-4 px-12">SHOP NOW</button>
      </div>
      <img src={RedPic} className="w-full sm:w-6/12 text-right imgcta"/>
    </div>

    <div className="flex sm:hidden flex-col sm:flex-row  container items-center justify-center mx-auto">
      <div className="w-full sm:w-6/12 justify-center items-center p-4 sm:p-4 md:p-4 lg:p-8 xl:p-8 3xl:p-8 textcta">
        <h1 className="heading">Icon of innovation</h1>   
      </div>
      <div className="w-full flex sm:w-6/12 justify-between items-center p-4 sm:p-4 md:p-4 lg:p-8 xl:p-8 3xl:p-8 imgcta">
        <div className='w-6/12 flex flex-col justify-start items-start'>
        <p className="text-gray-200 pb-4 sm:pb-2 md:pb-2 lg:pb-5 xl:pb-5 3xl:pb-5">Quality to another level</p>
          <button className="py-2 px-2 border border-gray-100 rounded-sm text-white py-2 sm:py-2 md:py-2 lg:py-4 xl:py-4 3xl:py-4 px-12">SHOP NOW</button>
        </div>
        <img src={RedPic} className="w-6/12"/>
      </div>
      
    </div>
      
    </div>
      
    </div>
  )
}
