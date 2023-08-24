import React, {useEffect,Fragment } from 'react'
import { Link,useNavigate, useLocation } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {GetCartData,RemoveCart,GenderData,GetAllCategory, addToCart} from "../action";
import NavBar from "./NavBar"
import logonew from '../assets/images/logonew.png';
import $ from 'jquery'; 
import {useDispatch,useSelector} from "react-redux";

import './Header.css';   
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 
export default function CartDetail() {
  const categoryValue = useSelector(state=>state?.category)
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector(state=>state.productData?.cart?.length)
  const allProduct = useSelector(state=>state.productData?.allProduct)
  const productId = useSelector(state=>state.productData?.cart)
  const totalPrice = useSelector(state=>state.productData?.cart.totalPrice)
  const genderData = useSelector(state=>state.category?.gender)
  const wishlistItems = useSelector(state=>state.cart?.wishlistItems);
  const cartData = useSelector(state=>state.cart?.cartItems) 
  const location = useLocation();
  //console.log("cartData ==== ",cartData);

  const allCart=[];
  productId?.forEach(crtdt=>{ 
      const cartData = allProduct?.find(dt=>dt?._id===crtdt?.productId) 
      allCart.push(cartData)

  })
  
const ourArray = [1, 4, 0, 9, -3];
var sum = 0;

  for (let i = 0; i < allCart.length; i += 1) { 
    sum += parseFloat(allCart[i]?.regular_price);
  }


  const googleTranslateElementInit = () => {

    new window.google.translate.TranslateElement({pageLanguage: 'sq',includedLanguages: 'en,sq'}, 'google_translate_element');
      
        var $googleDiv = $("#google_translate_element .skiptranslate");
        var $googleDivChild = $("#google_translate_element .skiptranslate div");
        $googleDivChild.next().remove();
      
        $googleDiv.contents().filter(function(){
          return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
        }).remove();


    // new window.google.translate.TranslateElement(
    //   {
    //     pageLanguage: "sq",
    //     autoDisplay: true,
    //     includedLanguages: 'en,sq',
    //   },
    //   "google_translate_element"
    // );
  };
  
  var sum=0;
  
 useEffect(()=>{
  const getAllCart=async()=>{
    await dispatch(GetCartData())
  };

 

  getAllCart();
 
  var $googleDiv = $("#google_translate_element .skiptranslate");
  var $googleDivChild = $("#google_translate_element .skiptranslate div");
  $googleDivChild.next().remove();

  $googleDiv.contents().filter(function(){
    return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
  }).remove();

 

  var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    if(typeof(document.querySelector) == 'function') {
      setTimeout(function() {
      const link = document.querySelector('.goog-te-combo');
      const result = link.hasAttribute('aria-label');
      if(result){
        document.querySelector('.goog-te-combo').setAttribute('style', 'display: none');
      } 
      }, 2000);
    }




 },[])


 
 

  const getCart=()=>{ 
    dispatch(GetCartData())
  }

  const remove=async(id)=>{ 
    const filteredCart = cartData.filter((item) => item._id !== id);
  	dispatch(addToCart(filteredCart))
    // const data = {productId:id}
    // await dispatch(RemoveCart(data))
    // await dispatch(GetCartData())
  }


  const chooseGender=async(gender)=>{
    await dispatch(GenderData(gender))
    const data = {genderBased:gender}
    await dispatch(GetAllCategory(data));
    navigate("/home");
  }

    // state cart value
  const cart = useSelector((state) => state.cart);

  var finalObj = [];

for(var item in cart.cartItems){

    finalObj.push(cart.cartItems[item]);

} 

for (let key in cart.cartItems) {
  sum += cart.cartItems[key].totalPrice*cart.cartItems[key].qty;
}

if(cartData.length > 0){
  var totalCartProduct = cartData.map(item => item.quantity).reduce((prev, next) => prev + next);
}
   

	return (

        
		<div>

  {/*#####################################*/} 
    <div as="div" className="relative inline-block text-left">
    <div className="header-relative test-cart n-ppost">
        <a href='/cart'>
      <div className="flex items-center space-x-1">
        <p>Cart</p>
        <svg width="17.79" height="15.714" viewBox="0 0 17.79 15.714"><g id="Group_874" data-name="Group 874" transform="translate(-1327.21 -32)"><circle id="Ellipse_1" data-name="Ellipse 1" cx="1.593" cy="1.593" r="1.593" transform="translate(1332.289 44.527)"></circle><g id="Group_873" data-name="Group 873"><path id="Path_16" data-name="Path 16" d="M-52.207,67.723a.5.5,0,0,0-.4-.2h0l-13.178.022-.492-2.115a.5.5,0,0,0-.487-.387h-2.632a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2.235l.49,2.107,0,.02,1.679,7.215a.5.5,0,0,0,.487.387h9.855a.5.5,0,0,0,.481-.364l2.039-7.249A.5.5,0,0,0-52.207,67.723Z" transform="translate(1397.105 -33.046)"></path><circle id="Ellipse_2" data-name="Ellipse 2" cx="1.593" cy="1.593" r="1.593" transform="translate(1338.922 44.527)"></circle></g></g></svg>
        
      {cartData.length > 0?<span className="header-active text-white w-1 h-1 flex justify-center items-center p-3 bg-red-500 rounded-full">{totalCartProduct}</span>:""}
      </div>
      </a>
    </div>

    <div className='cart-product-list n-ppost-name'>
    {(cartData.length ? <>
    
      <div className="origin-top-right border border-gray-500 absolute right-0 mt-2 w-72 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cartbox">
        <div className="">
          <div>
           
              <div className="">
                <div className="bg-gray-500 p-2 flex-col">
                  <h1 className="uppercase text-sm">My Products</h1>
                  <p>{cartData.length > 0 ? cartData.length:""} Item</p>
                </div>

              

                 {cartData.map((dtt)=>(
                <div className="flex border-b border-gray-300">
                 
                  <div className="w-4/12 p-2">
                    <img src={dtt?.images[0]}/> 
                  </div>
                  <div className="w-6/12 flex-col space-x-2">
                    <p className="p-2 break-words">{dtt?.name}</p>
                     <p className="font-bold">{parseFloat(dtt?.regular_price)} {process.env.REACT_APP_CURRENCY} X {dtt.quantity} </p>
                    {/* <p className="font-bold">{dtt?.quantity}</p>  */}
                    <button className="flex items-center text-sm space-x-2" onClick={(e)=>remove(dtt?._id)}><span className="bg-red-500 w-5 h-5 text-white items-center flex justify-center rounded-full "> x </span> <span className="pr-2">Remove</span></button>
                  </div>
                </div>  
                ))}

                <div className="flex text-4xl px-5 py-2">
                  <h1 className="pr-5 text-2xl font-bold">Total</h1>{" "}
                  <p className="font-bold text-2xl"> {parseFloat(cartData[0].totalPrice).toFixed(2)} {process.env.REACT_APP_CURRENCY}</p>

                </div>
                  <p className="text-sm px-5 pb-3">Including VAT</p>
              </div>
           
          </div>
          <div className="flex px-5 space-x-2 justify-center items-center pb-3">
                    <Link to="/cart" className="px-5 py-2 bg-black text-white">SEE CART</Link>
                    <Link to="/checkout" className="px-5 py-2 bg-green-700 text-white">Checkout</Link>
                  </div>
          </div>

      </div>
      

    </> : '')}
    </div>

    </div>

    </div>

	)
}