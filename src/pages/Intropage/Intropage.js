
import Brandlogos from '../../component/Brandlogos';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Banner from "../../assets/banner.jpg"
import './Intropage.css';
// import v1 from '../assets/image/v-1.webp';
// import v2 from '../assets/image/v-3.webp';
import v2 from '../../assets/images/v-3.jpg';
import v1 from '../../assets/images/v-1.jpg';

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategory } from "../../action";
import { GenderData } from '../../action';


export default function Intropage() {

  const genderData = useSelector(state => state.category?.gender);
    const dispatch = useDispatch();

  const chooseGender = async (gender) => {
    await dispatch(GenderData(gender))
    const data = { genderBased: gender }
    await dispatch(GetAllCategory(data));
}

  return (
    <div>
    <Header/>
    {/* <div className="flex container mx-auto py-4">
      <img src={Banner}/>
    </div> */}
    <div className="flex container mx-auto">
      <div class="section-5">
        <div class="section-image-slider distance">
          <div class="block">
              <div class="block_content">
                <div class="block_sl_ig d-flex">
                    <div class="nov-split-right w-50">
                      <img src={v2} alt="" width="100%" />
                      <div class="block_sl_ct">
                        {/* <div class="title-block text-uppercase">Denim jacket with<br /> decorative embroidery</div>
                        <div class="sub-title">Relaxed design slightly flared classic denim jacket made of soft<br /> cotton rich fabric with elastic fibre blend.</div> */}
                        {/* <a class="hover_x" href="" tabindex="0" onClick={(e) => chooseGender("male")}>
                          <span>FEMËR</span>
                          <i class="fa-solid fa-arrow-right"></i>
                        </a> */}
                        <div class="hover_x" href="" tabindex="0" onClick={(e) => chooseGender("female")}>
                          <span>FEMËR</span>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="nov-split-left w-50">
                      <img src={v1} alt="" width="100%" />
                      <div class="block_sl_ct">
                        {/* <div class="title-block text-uppercase">Denim jacket with<br /> decorative embroidery</div>
                        <div class="sub-title">Relaxed design slightly flared classic denim jacket made of soft<br /> cotton rich fabric with elastic fibre blend.</div> */}
                        <div class="hover_x" href="" tabindex="0" onClick={(e) => chooseGender("male")}>
                          <span>MASHKULL</span>
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
              </div>
            </div>
        </div>
      </div>
    </div>
    <Brandlogos/>
    <Footer/>
    </div>
  )
}
