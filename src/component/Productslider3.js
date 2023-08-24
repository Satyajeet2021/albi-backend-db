
import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Product1 from "../assets/bikini.jpg"
import {ProductPage} from "../action"
import {useDispatch,useSelector} from "react-redux";
import axios from "../helper/axios";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";


import "./Productslider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Productslider() {
  const dispatch = useDispatch();
  const gender = useSelector(state=>state?.category?.gender)
	 const [allData,setAllData] = useState([]);
  const apiData = async()=>{
   
     const data = {gender:gender=="life"?"unisex":gender}
    console.log(data)
    const res = await axios.post("/description",data);
    console.log(res.data)
    setAllData(res.data);
  }

  useEffect(()=>{
    apiData();
    dispatch(ProductPage())
  },[])
  return (
    <div className="flex container py-4 mx-auto 2nd">
      <div className="HomePageSlideShow__wrapper">
      <div className="HomePageSlideShowbox container items-center justify-center mx-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop = {true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {allData?.slice(10,15)?.map((dt)=>(
          <SwiperSlide>
            <Link to={`/productdetails/${dt._id}/${dt.catId}`}>
                <div className="ProductItem ProductItem--big  fade-in-down">
              <div className="ProductItem__image">
                <span className="ProductItem__image__holder">
                  <a href={`/productdetails/${dt._id}/${dt.catId}`}>
                    <img src={dt.images[0]} alt="Çizme me lidhëse" srcset="" className="Image"/>
                  </a>
                </span>
                {dt?.sale_price <= 0 || dt?.sale_price == '' ? '':
                                                        <span className="ProductItem__brand-discounted">{(((dt?.regular_price?.toFixed(2)-(dt?.sale_price?.toFixed(2)))/dt?.regular_price?.toFixed(2))*100).toFixed(2)}%</span>  
                                                }
                <div className="ProductInfoBox">
                  <span className="ProductInfoBox__box ProductInfoBox--limited-availability">Low in stock</span>
                </div>
                {/* <div className="WishListButton">
                  <button></button>
                </div> */}
              </div>
              {/* <div className="ProductItem__colors">
                <div className="color_wrapper isActive">
                  <span className="color colorIsActive">
                    <div style={{backgroundColor: '#000'}}></div>
                  </span>
                </div>
              </div> */}
              <div className="ProductItem__content">
                <span className="ProductItem__brand-name">{dt?.vendor}</span>
                <a href="/en/product/cizme-lekure-41">
                  <h4 className="ProductItem__content__title">{dt?.name}</h4>
                </a>
                <div className="ProductPrices sale">
                  {/* <h4 className="regular">{dt?.regular_price > 0? dt?.regular_price + "Є": "Sold Out"}</h4> */}
                  {(dt?.sale_price > 0 ? <>
                    <h4 className="regular"><del>{dt?.sale_price > 0 ? dt?.regular_price?.toFixed(2) + "Є": "Sold Out"} </del></h4>
                    </> : (dt?.regular_price > 0 ? <h4 className="regular">{dt?.regular_price?.toFixed(2) + "Є"}</h4> : ''))}

                    {(dt?.sale_price > 0 ? <>
                      <h4 className="regular salening">{dt?.sale_price > 0? dt?.sale_price?.toFixed(2) + "Є": "Sold Out"} </h4>
                    </> : '')}
                    
                    

                    {/* <h4 className="sale">{dt?.stockQty>0?"":"Out Of Stock"}</h4> */}
                  {/* <h4 className="sale">{dt?.regular_price > 0? dt?.regular_price + "Є": "Sold Out"}</h4> */}
                </div>
              </div>
            </div> 
            </Link>
          
       </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
    </div>
    </div>
    
  )
}
