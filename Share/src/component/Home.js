import React, {useEffect} from 'react'
import Header from "../component/Header";
import Banner from "../assets/banner.jpg" 
import Carousel from "../component/Carousel"
import Products from "../component/Products"
import Products2 from "../component/Products2"
import Banner2 from "../component/Banner2"
import Banner3 from "../component/Banner3"
import Footer from "../component/Footer"
import Login from "../component/Login"
import Banner1 from './Banner1';
import Brandlogos from './Brandlogos';
import Productslider from './Productslider';
import Brandslider from './Brandslider';
export default function App() {
 
  return (
    <div> 
    <Header/>
    <div className="flex container mx-auto py-4 banner">
      <img src={Banner}/>
    </div>
  {/*line of Store*/}
  <div className="flex container items-center space-x-2 mx-auto py-4 brandstore">
  <div className="font-bold items-center text-3xl ">Stores</div><div className="border-gray-500 border-t w-full"></div></div>
    {/*Carousel*/}
    {/* <Carousel/> */}
    <Brandslider/>
    <Banner1/>
    <Productslider/>
    {/* <Products2/> */}
    <Banner2/>
    <Productslider/>
    {/* <Products2/> */}
    <Banner3/>
    <Productslider/>
    <Brandlogos/>
    <Footer/>
 
    
    </div>
  )
}