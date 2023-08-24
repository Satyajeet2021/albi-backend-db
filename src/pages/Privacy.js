import React,{useEffect,useState} from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import axios from "../helper/axios";

import DOMPurify from 'dompurify'

export default function Privacy() {

  const [allCms,setAllCms] = useState([]);

  const apiData=async()=>{
    // const data ={email:auth?.user?.email,role:auth?.user?.role}
    // const res= await axios.post("/getVendorProductById",data);
    // const data ={email:auth?.user?.email,role:auth?.user?.role}
    const res= await axios.post("/getcms");
    console.log(res?.status);
    console.log("----------Term res.data-----------", res.data)
    if(res.status===200){
      setAllCms(res?.data);
    }else{
      setAllCms()
    }
  }

  console.log("------------Term allProduct------------",allCms)

  useEffect(() => {
    // console.log(editorState);
    apiData();
  }, []);

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(allCms)
  })

  return ( 
   <>
    <Header/> 
  <div className='container mx-auto'>
        <div className="Cart mt-heading">
            <div className="p-0-mobile container wishlist">  
                <div className="">
                    <div className="CartItem fade-in-down"> 
                        <div className="CartItem__content delivery"> 
                        {allCms?.length>0  &&allCms?.map((dt, index)=>(
                              dt.slugTitle === "privacy" ? (
                                <div className="CartItem__content inner-pages delivery">
                                  <h2 className='privacy-heading'><strong>{dt.pageTitle}</strong></h2>
                                  {/* {dt.pageContent} */}
                                <div
                                    dangerouslySetInnerHTML={{__html: dt.pageContent}}
                                  />
                                </div>
                              ) : null
                                
                            ))}
                    </div>
                </div>
              </div> 
           
                
            </div>
        </div>
    </div>

 <Footer/>
   </>
  )
}
