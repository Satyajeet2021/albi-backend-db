import { Link } from "react-router-dom";
import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addToWishlist} from "../action"

import axios from "../helper/axios";

const RelatedProduct = ({catId}) => {

let per_page = 20;
let page = 0;
     const [productList, setProductList] = useState([]);
    const getProducts = async() => {
      // const productListData = await axios.post("https://appapi.albionline.com/api/getFilter", { id: location.state.id, catId: location.state.catId });
 
      const data={
                catAndGender:"",
                brands:"",
                sizes:"", 
                sort:"",
                id:"",
                page:page,
                per_page:per_page,
                catId:[catId]} 
      
      const res = await axios.post("/multifilter",data);
      setProductList(res.data.datax);
      console.log("productList", res.data.datax);
    }

useEffect(()=>{
    getProducts()
},[])

 
    console.log("productListLng", productList);
    console.log("productsLngth", productList?.length); 


    const [clicking,setClicking] = useState();
    const dispatch = useDispatch();
    const wishlistItems = useSelector(state=>state?.cart?.wishlistItems)

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
        <div className="">

            <h1 className="related-prod grid grid-cols-4 gap-4 flex flex-wrap mx-auto container product-list">Produkte të ngjashme</h1>
      
   
        

            <div className="grid grid-cols-4 gap-4 flex flex-wrap mx-auto container product-list">

                {
                    
                    productList?.map(product => {
                        if(wishlistItems && wishlistItems.length > 0){
                            var index = wishlistItems.findIndex(x => x._id==product._id); 
                           } else {
                             var index = -1;
                           }
                        return (
                            <>

                                <div className='w-full'>
                                    <div className=''>
                                        <div className="ProductItem ProductItem--big  fade-in-down">
                                            <div className="ProductItem__image">
                                                
                                      {//product?.variant?.find(o=>o?.size==product?.size)?.stockQty<=0 || product?.variant?.find(o=>o?.size==product?.size)==undefined?            
                                      product?.variant?.filter(o=>o?.stockQty)?.length<=0 || product?.variant?.find(o=>o?.size)==undefined?            
                                    <div className=" ">
  <div className="logo-wrapper absolute w-full sm:w-9/12 text-center sm:left-10   p-5 bottom-20 ">
        <h1 className="py-3 sm:py-5 w-full bg-[#747372] bg-opacity-80 rounded-2xl sm:rounded-3xl text-center text-white font-normal shadow-lg">Out Of Stock</h1>
    </div>
    </div>:""}

                                                <span className="ProductItem__image__holder related">
                                                    <a href={`/productdetails/${product?._id}/${product?.catId}`
                                                        // state: { id, catId }
                                                    }>
                                                        <img src={product?.images[0]} alt="Çizme me lidhëse" srcset="" className="Image" />
                                                    </a>
                                                </span>
                                                {product?.sale_price <= 0 || product?.sale_price == '' || product.regular_price <= 0 ? '':
                                                        <span className="ProductItem__brand-discounted">
                                                            {/* {((product?.sale_price?.toFixed(2)/product?.regular_price?.toFixed(2))*100).toFixed(2)}% */}
                                                            {Math.round(((product?.regular_price?.toFixed(2) - product?.sale_price?.toFixed(2))*100)/product?.regular_price?.toFixed(2))}%
                                                            </span>  
                                                }
                                                <div className="ProductInfoBox">
                                                    <span className="ProductInfoBox__box ProductInfoBox--limited-availability">Low in stock</span>
                                                </div>
                                                <div className="WishListButton">
                                                    <button className={(index === -1 ? '' : 'selected')} onClick={(e) => addItemToWishlist(product)}></button>
                                                </div>
                                            </div>
                                            <div className="ProductItem__content">
                                                <span className="ProductItem__brand-name">{product.vendor}</span>
                                                <a href="">
                                                    <h4 className="ProductItem__content__title">{product.description}</h4>
                                                </a>
                                                <div className="ProductPrices sale">
                                                {(product?.sale_price > 0 ? <>
                                                        <h4 className="regular"><del>{product?.sale_price > 0 ? product?.regular_price?.toFixed(2) + "Є": "Sold Out"} </del></h4>
                                                        </> : (product?.regular_price > 0 ? <h4 className="regular">{product?.regular_price?.toFixed(2) + "Є"}</h4> : ''))}

                                                        {(product?.sale_price > 0 ? <>
                                                        <h4 className="regular salening">{product?.sale_price > 0? product?.sale_price?.toFixed(2) + "Є": "Sold Out"} </h4>
                                                        </> : '')}
                                                    {/* <h4 className="regular">{product.regular_price > 0? product.regular_price + "Є": "Sold Out"}</h4> */}
                                                    {/* <h4 className="sale">21.99 €</h4> */}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProduct