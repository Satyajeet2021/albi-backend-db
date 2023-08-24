import React,{useEffect,useState} from 'react'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import GoogleMapReact from 'google-map-react';
import axios from "../helper/axios";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function Contact() {

  

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
     <Header/>
     <div className="flex container mx-auto items-center px-5 py-10 w-9/12">
      <div className="flex-col contact-us-form">
          <div className="flex text-left justify-center items-center space-x-2">
            <div className="flex space-x-2 justify-center items-center">
                <h1 className="text-3xl">Na kontaktoni</h1>
            </div>	 
          </div> 

          <div>
          <div className="flex space-x-5 w-full p-2 my-2">
              <div className="flex-col w-6/12">
              <div className="uppercase text-sm p-3 font-semibold text-gray-400">EMRI MBIEMRI</div>
              <input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
              </div>  
              <div className="flex-col w-6/12">
              <div className="uppercase text-sm p-3 font-semibold text-gray-400">EMAIL</div>
              <input type="text" className="bg-gray-200 rounded-full w-full p-2"/>
              </div>  

          </div>
          <div className="flex space-x-5 w-full p-2 my-2">
              <div className="flex-col w-full">
              <div className="uppercase text-sm p-3 font-semibold text-gray-400">MESAZHI</div>
              <input type="textarea" className="bg-gray-200 rounded-full w-full p-2 contact-textarea"/>
              </div>   
          </div>

    
    
          <div className="flex space-x-5 w-full p-2 my-2">
            <div className="flex-col w-6/12"> 
            <button className="px-8 py-3  border border-gray-800 uppercase text-sm font-semibold">Dërgo</button>
            </div>  
          </div>
        
        </div> 
            {/* <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDpZNYQaA6YxbfpCCWuzZi2cYzOhx3U484" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div> */}

      </div>
    </div>
     <Footer/> 
    </> 
  )
}
