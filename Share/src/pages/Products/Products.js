import React,{useEffect,useState} from 'react'
import axios from "../../helper/axios";
import { useParams,Link} from 'react-router-dom'
import Footer from '../../component/Footer'
import Header from '../../component/Header'
import {addToWishlist} from "../../action"
import Productfilter from '../../component/Productfilter'
import Productlisting from '../../component/Productlisting'
import {useDispatch,useSelector} from "react-redux";



export default function Products() {
  const {id,catId} = useParams();
  const [filterData,setFilterData] = useState([]);
  const [clicking,setClicking] = useState();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state=>state?.cart?.wishlistItems)

  const getData=async()=>{
    const data={id:id,catId} 
    const res = await axios.post("/getFilter",data)
    console.log(res.data)
    setFilterData(res.data);
  }
  useEffect(()=>{
    getData();
  },[])

  useEffect(()=>{
    getData();
  },[clicking])
  
  
  
  const addItemToWishlist=async(res)=>{ 
    setClicking(Math.random());
    if(wishlistItems){
    var index = wishlistItems.findIndex(x => x._id==res._id);  
      if(index=== -1){
        wishlistItems.push(res)
      } else {
        wishlistItems.splice(wishlistItems.findIndex(a => a._id === res._id),1)
      }
      dispatch(addToWishlist(wishlistItems))
    } else {
      let array = [];
      array.push(res);
      dispatch(addToWishlist(array))
    }
        
  }


  return (
    <div>
      <Header/>

      <Productfilter/> 
      <div className="grid grid-cols-4 gap-4 flex flex-wrap mx-auto container">
 
      {filterData.map(function (dt){
        if(wishlistItems && wishlistItems.length > 0){
         var index = wishlistItems.findIndex(x => x._id==dt._id); 
        } else {
          var index = "";
        }

      return(
       <div className='w-full'>
      <div className=''>
      <div className="ProductItem ProductItem--big  fade-in-down">
            <div className="ProductItem__image">
              <span className="ProductItem__image__holder">
                <Link to={`/productdetails/${dt?._id}`}>
                  <img src={dt?.images[0]} alt="Çizme me lidhëse" srcset="" className="Image"/>
                </Link>
              </span>
              <span className="ProductItem__brand-discounted">-56%</span>
              <div className="ProductInfoBox">
                <span className="ProductInfoBox__box ProductInfoBox--limited-availability">Low in stock</span>
              </div>
              <div className="WishListButton">
                <button className={(index===-1 ? '' : 'selected')} onClick={(e)=>addItemToWishlist(dt)}></button>
              </div>

              {/* <svg width="14.782" height="13.551" viewBox="0 0 14.782 13.551">
              <path id="Path_17" data-name="Path 17" d="M-23.765,65.546a4.075,4.075,0,0,0-3.326,1.731,4.075,4.075,0,0,0-3.326-1.731,4.3,4.3,0,0,0-4.065,4.312c0,2.239,1.264,4.543,3.655,6.667A19.656,19.656,0,0,0-27.2,79.069a.247.247,0,0,0,.227,0,19.649,19.649,0,0,0,3.621-2.544C-20.963,74.4-19.7,72.1-19.7,69.858A4.3,4.3,0,0,0-23.765,65.546Z" transform="translate(34.482 -65.546)"></path>
              </svg> */}


            </div>
            <div className="ProductItem__colors">
              <div className="color_wrapper isActive">
                <span className="color colorIsActive">
                  <div style={{backgroundColor: '#000'}}></div>
                </span>
              </div>
            </div>
            <div className="ProductItem__content">
              <span className="ProductItem__brand-name">Mango</span>
              <a href="/en/product/cizme-lekure-41">
                <h4 className="ProductItem__content__title">Lace-up boots</h4>
              </a>
              <div className="ProductPrices sale">
                <h4 className="regular">49.99 €</h4>
                {/* <h4 className="sale">21.99 €</h4> */}
              </div>
            </div>
      </div> 
 
    </div>
      </div>
      )})}
      </div>

      {filterData?.length>0?"":<p className="flex justify-center items-center py-10">Loading...</p>}
      <Footer/>
    </div>
  )
}
