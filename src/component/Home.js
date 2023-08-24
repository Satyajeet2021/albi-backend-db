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
// import slider1 from '../assets/slider/slider-1.jpg';
// import slider2 from '../assets/slider/slider-2.jpg';
// import slider3 from '../assets/slider/slider-3.jpg';
import {useDispatch,useSelector} from "react-redux";
import Male from '../component/Male';
import Female from '../component/Female';
import Kids from '../component/Kids';
import Stephi from '../component/Stephi';


import './Header.css';

export default function App() {
 
localStorage.setItem("myPage",0);



  const genderData = useSelector(state=>state.category?.gender);  
 
  return (
    <div className='home-page'> 
    <Header/>
    {/* <div className="flex container mx-auto py-4 banner">
      <img src={Banner}/>
    </div> */}

    {(genderData == 'male' ? <Male/> : '')}
    {(genderData == 'female' ? <Female/> : '')}
    {(genderData == 'kids' ? <Kids/> : '')}
    {(genderData == 'life' ? <Stephi/> : '')} 

    {/* <Male /> */}

  {/*line of Store*/}

    {/* code for brand store section start */}
      {/* <div className="flex container items-center space-x-2 mx-auto py-4 brandstore">
      <div className="font-bold items-center text-3xl ">Stores</div>
      <div className="border-gray-500 border-t w-full"></div>
      </div> */}
    {/*Carousel*/}
    {/* <Carousel/> */}
        {/* <Brandslider/>
        code for brand store section end */}

    {/* <Banner1/>
    <Productslider/> */}

    {/* <Products2/> */}

    {/* <Banner2/>
    <Productslider/> */}

    {/* <Products2/> */}

    {/* <Banner3/>
    <Productslider/> */}
    <Brandlogos/>
    <Footer/>
 
    
    </div>
  )
}