import React, { useEffect, useState, useRef  } from "react";
import { Link ,NavLink} from 'react-router-dom'
import slider1 from '../assets/slider/male/slider-timberland.jpg';
import slider2 from '../assets/slider/male/slider-geox.jpg';
import slider3 from '../assets/slider/male/slider-springfield.jpg';
import banner1 from '../assets/slider/male/section2-1.jpg';
import banner2 from '../assets/slider/male/section2-2.jpg';
import banner3 from '../assets/slider/male/section2-3.jpg';
import image1 from '../assets/slider/male/section5-image1.jpg';
import image2 from '../assets/slider/male/section5-image2.jpg';
import image3 from '../assets/slider/male/section5-image3.jpg';
import image4 from '../assets/slider/male/section5-image4.png';
// import image5 from '../assets/slider/image-5.webp';
// import image6 from '../assets/slider/image-6.webp';
// import image7 from '../assets/slider/image-7.webp';
// import image8 from '../assets/slider/image-8.webp';
import video from '../assets/slider/male/male-video.mp4';

import Products2 from "./Products2";
import Productslider from "./Productslider";
import Productslider2 from "./Productslider2";


import './Header.css';
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css";

export default function Male() {

  const vidRef=useRef();

  useEffect(() => { 
    // vidRef.current.play();
   },[]);
 
  return (
   
<div className="">
<div class="cover-section">
        <div id="mycarousel" class="carousel carousel-fade " data-bs-ride="carousel" data-bs-interval="6000">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider1} alt="" width="100%" />
                <div class="carousel-heading">
                  <div class="caption-1 animate__animated animate__slideInUp">New Collection</div>
                  <div class="caption-2 animate__animated animate__slideInUp">MOS HUMB</div>
                  <div class="caption-3 animate__animated animate__slideInUp">FOKUSIN TËND</div>
                  <div class="caption-4 animate__animated animate__slideInUp">Histori në çdo etapë</div>
                  <div class="caption-link slider-btn animate__animated animate__slideInUp">
                    <NavLink to="/brands/male/timberland"><span>SHIKO KOLEKSIONIN</span></NavLink>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slider2} alt="" width="100%" />
                <div class="carousel-heading">
                    <div class="caption-1 animate__animated animate__slideInRight">Fashion trends</div>
                    <div class="caption-2 animate__animated animate__slideInRight">REHATI</div>
                    <div class="caption-3 animate__animated animate__slideInRight">NË ÇDO HAP</div>
                    <div class="caption-4 animate__animated animate__slideInRight">Jeto momentin</div>
                    <div class="caption-link slider-btn animate__animated animate__slideInRight">
                    <NavLink to="/brands/male/geox"><span>SHIKO KOLEKSIONIN</span></NavLink>
                    </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slider3} alt="" width="100%" />
                <div class="carousel-heading">
                    <div class="caption-1 animate__animated animate__slideInLeft">New Collection</div>
                    <div class="caption-2 animate__animated animate__slideInLeft">PËRJETO</div>
                    <div class="caption-3 animate__animated animate__slideInLeft">MOMENTIN TËND</div>
                    <div class="caption-4 animate__animated animate__slideInLeft">Eksploroni koleksionin</div>
                    <div class="caption-link slider-btn animate__animated animate__slideInLeft">
                     <NavLink to="/brands/male/springfield"><span>SHIKO KOLEKSIONIN</span></NavLink>
                    </div>
                </div>
              </div>
            </div>
            
          </div>
    </div>

    <div class="section-2">
        <div class="container">
            <div class="block_title text-center">
                <div class="title_block ">KOLEKSIONI I RI VETËM PËR TY</div>
                <p class="sub_title">Eksploroni trendet e fundit në Albi Online! Brendet botërore i gjeni vetëm tek ne.</p>
            </div>     
            <div class="row spacing-30">
               <div class="col-lg-8 cl-md-8 .col-xs-12 group-1">
                  <div class="gallery-image__item hover-image mbb">
                    <NavLink to="/Pulover/2.1.2">
                       <div class="response-image">
                         <img src={banner1} alt=""  width="100%" />
                       </div>
                    </NavLink>
                    <div class="gallery-image__caption">
                        <div class="title-block text-uppercase">PANDALSHËM</div>
                        <div class="sub-block">Me Springfield, i gatshëm në çdo kohë</div>
                        <div class="button-block"><NavLink to="/Pulover/2.1.2" class="text-uppercase text-white" style={{color:"#fff"}}>Shop the collection</NavLink></div>
                    </div>
                  </div>
               </div>
               <div class="col-lg-4 cl-md-4 .col-xs-12 group-2">
                <div class="mb-4">
                  <div class="gallery-image__item hover-image">
                    <a href="#">
                      <div class="response-image">
                        <img src={banner2} alt="" width="100%" />
                      </div>
                      <div class="gallery-image__caption">
                        <div class="title-block text-uppercase">ELEGANCË</div>
                        <div class="sub-block">GUESS i parezistueshëm</div>
                        <div class="button-block"><NavLink to="" class="text-uppercase text-white" style={{color:"#fff"}}>Së shpejti</NavLink></div>
                    </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div class="gallery-image__item hover-image">
                    <NavLink to="/Atlete/2.3.1">
                      <div class="respone-image">
                        <img src={banner3} alt="" width="100%" />
                      </div>
                      <div class="gallery-image__caption">
                        <div class="title-block text-uppercase">MBATHU SIGURTË</div>
                        <div class="sub-block"> Kualitet me GEOX</div>
                        <div class="button-block"><NavLink to="/Atlete/2.3.1" class="text-uppercase text-white" style={{color:"#fff"}}>Shop the collection</NavLink></div>
                    </div>
                    </NavLink>
                  </div>
                </div>
               </div>
            </div>   
        </div>
    </div>
    
    <div class="cart-section">
      <div class="block_title text-center">
        <div class="title_block text-uppercase">NE MENDOJMË PËR JU  &nbsp;<i class="fa-solid fa-heart"></i></div>
        
      </div>
      <Productslider/>
      <Productslider2/>
      {/* <Products2/> */}
    </div>

<div className='section-5 video-sec'>
<div id="shopify-section-16141564777b64a0a2" class="shopify-section index-section section-video wow fadeInUp  animated">
  
<div data-section-id="16141564777b64a0a2">
  <div class="distance">
    <div class="container-1320">
      <div class="block">
        <div class="item youtube position-relative">
          {/* <video playsinline="" autoplay="" loop="" muted="" loop >
            <source src="https://cdn.shopify.com/s/files/1/0256/4594/0810/files/video.mp4?v=1614659458" type="video/mp4" />
          </video> */}

          {/* <video src={video} ref={ vidRef } muted autoPlay loop /> */}

          <video src={video} muted autoPlay loop  width='100%' height='100%' webkit-playsinline="true" playsInline />
          
          <div class="block_title text-center"> 
            
              <div class="sub-title-1 text-uppercase">NEW ARRIVALS</div>
              <div class="title_block">ËSHTË MOMENTI YT</div>
              <div class="sub-title-2">Trendet e fundit i gjeni vetëm në Albi Online</div>
              {/* <div class="sub-title-3 text-uppercase">BLEJ TANI</div> */}
              {/* <div class="sub-title-4 text-uppercase">11 NOVEMBER 2021</div> */}
              <div class="sub-title-4 text-uppercase"></div>
            
            
              {/* <div class="cap_link">
                <a class="hover_x" href="#">
                  <span>SHIKO MË SHUMË</span>
                  <i class="zmdi zmdi-long-arrow-right"></i>
                </a>
              </div> */}
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
</div>
    

    <div class="section-4">
      <div class="block">
        <div class="container">
          <div class="block_title text-center">
            <div class="title_block">MERRNI GJITHË VËMENDJEN</div>    
            <div class="sub-title">Koleksionet tona të fundit përmbajn dizajne nga e gjithë bota me materiale aq komode sa nuk do të dëshironi të vishni më asgjë tjeter.</div> 
          </div>
          <div class="nov-lookbook">
            <div class="row">
              <div class="item item-1 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image1} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Coming soon</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item item-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image2} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Coming soon</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item item-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image3} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Coming soon</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item item-4 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image4} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Coming soon</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="item item-5 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image5} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Shop now</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item item-6 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image6} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Shop now</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item item-7 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image7} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Shop now</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item item-8 col-lg-3 col-md-6 col-sm-6 col-xs-12 text-center mb-4 mb-md-20">
                <div class="nov-content-lookbook">
                  <div class="image">
                    <div class="respone-image">
                      <img src={image8} alt="" class="_image_hover lazyautosizes" width="100%" />
                    </div>
                    <div class="block_link">
                     <div class="cap_link hover_x">
                      <div class="cap_link hover_x">
                        <span>Shop now</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}