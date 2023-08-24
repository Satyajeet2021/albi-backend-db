import React from 'react';
import Brandlogos from '../../component/Brandlogos';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import Banner from "../../assets/banner.jpg"
import './Intropage.css';


export default function Intropage() {
  return (
    <div>
    <Header/>
    <div className="flex container mx-auto py-4">
      <img src={Banner}/>
    </div>
    <Brandlogos/>
    <Footer/>
    </div>
  )
}
