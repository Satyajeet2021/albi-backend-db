import React, {useEffect,Fragment } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {GetCartData,RemoveCart,GenderData,GetAllCategory} from "../action";
import NavBar from "./NavBar"
import logonew from '../assets/images/logonew.png';
import $ from 'jquery';

import {useDispatch,useSelector} from "react-redux";

import './Header.css';   
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 
export default function Header() {
  const categoryValue = useSelector(state=>state?.category)
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector(state=>state.productData?.cart?.length)
  const allProduct = useSelector(state=>state.productData?.allProduct)
  const productId = useSelector(state=>state.productData?.cart)
  const totalPrice = useSelector(state=>state.productData?.cart.totalPrice)
  const genderData = useSelector(state=>state.category?.gender)
  const wishlistItems = useSelector(state=>state.cart?.wishlistItems) 

  const allCart=[];
  productId?.forEach(crtdt=>{ 
      const cartData = allProduct?.find(dt=>dt?._id===crtdt?.productId) 
      allCart.push(cartData)

  })
  console.log(allCart)
    const ourArray = [1, 4, 0, 9, -3];
  var sum = 0;

  for (let i = 0; i < allCart.length; i += 1) { 
    sum += parseFloat(allCart[i]?.regular_price);
  }


  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "sq",
        autoDisplay: true,
        includedLanguages: 'en,sq',
      },
      "google_translate_element"
    );
  };
  
  var sum=0;
  
 useEffect(()=>{
  const getAllCart=async()=>{
    await dispatch(GetCartData())
  };

  $(document).ready(function(){ 
    //$(".goog-te-combo:first").addClass("firstimg"); 
   
  });
  
 

  getAllCart();
 
  var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    if(typeof(document.querySelector) == 'function') {
      setTimeout(function() {
        document.querySelector('.goog-te-combo').setAttribute('style', 'display: none');  
      }, 1000);
    }

  //   if(typeof(document.querySelector) == 'function') {
  //     document.querySelector('.goog-logo-link').setAttribute('style', 'display: none');
  //     document.querySelector('.goog-te-gadget').setAttribute('style', 'font-size: 0');
  // }

  //If you have jQuery - works cross-browser - uncomment this
  $('.goog-logo-link').css('display', 'none');
  $('.goog-te-gadget').css('font-size', '0');


 },[])


 
 

  const getCart=()=>{ 
    dispatch(GetCartData())
  }
  const remove=async(id)=>{
    const data = {productId:id}
    await dispatch(RemoveCart(data))
    await dispatch(GetCartData())
    
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
  sum += cart.cartItems[key].totalPrice;
}
  

	return (
		<div>
		 <header className="bg-white shadow-md">
     <nav className="hidden lg:flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row container mx-auto justify-between items-center w-10/12 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-12/12 py-5">
        
        <ul className='headerlinks'>
          <li className={`cursor-pointer ${genderData==="male"?"bg-gray-200":""}`} onClick={(e)=>chooseGender("male")}>MASHKULL</li>
          <li className={`cursor-pointer ${genderData==="female"?"bg-gray-200":""}`} onClick={(e)=>chooseGender("female")}>FEMËR </li>
          <li className={`cursor-pointer ${genderData==="kids"?"bg-gray-200":""}`} onClick={(e)=>chooseGender("kids")}>FËMIJË</li>
          <li className={`cursor-pointer ${genderData==="unisex"?"bg-gray-200":""}`} onClick={(e)=>chooseGender("unisex")}>UNISEX</li>
          <li className={`cursor-pointer ${genderData==="life"?"bg-gray-200":""}`} onClick={(e)=>chooseGender("life")}>SHTËPI</li>
        </ul>	
        <Link className='imglink' to="/">
  <img src={logonew} className="logo" alt="" srcSet="" />
  </Link>
        <div className="flex space-x-5 justify-end items-center headerrightlinks">
        <div className="hidden md:block">
        <div className="flex md items-center space-x-2">

          <svg id="_360-degrees" data-name="360-degrees" width="24" height="17.801" viewBox="0 0 24 17.801" >
            
            <path id="Path_565" data-name="Path 565" d="M308,152.854a.7.7,0,0,1-.088-1.4,15.358,15.358,0,0,0,5.6-1.7c1.272-.741,1.972-1.612,1.972-2.453a2.959,2.959,0,0,0-1.507-2.158.7.7,0,1,1,.8-1.159,4.151,4.151,0,0,1,2.117,3.317c0,1.382-.923,2.65-2.671,3.668a16.529,16.529,0,0,1-6.133,1.876A.747.747,0,0,1,308,152.854Zm0,0" transform="translate(-292.896 -137.121)"></path>
            
            <path id="Path_566" data-name="Path 566" d="M11.829,145.963l-1.875-1.875a.7.7,0,0,0-.994.994l.548.548a16.941,16.941,0,0,1-5.487-1.417c-1.661-.8-2.614-1.817-2.614-2.792,0-.827.682-1.687,1.921-2.422a.7.7,0,1,0-.717-1.21C.453,139.068,0,140.47,0,141.421c0,1.56,1.211,3,3.411,4.06a18.711,18.711,0,0,0,6.322,1.583l-.774.774a.7.7,0,0,0,.994.994l1.875-1.875A.7.7,0,0,0,11.829,145.963Zm0,0" transform="translate(0 -131.237)"></path>
            
            <path id="Path_567" data-name="Path 567" d="M96.429,94.684v-.169c0-.6-.365-.712-.855-.712-.3,0-.4-.267-.4-.534s.1-.534.4-.534c.338,0,.695-.044.695-.766,0-.517-.294-.641-.659-.641-.436,0-.659.107-.659.454,0,.3-.134.508-.65.508-.641,0-.721-.134-.721-.561,0-.695.5-1.594,2.03-1.594,1.131,0,1.986.41,1.986,1.612a1.564,1.564,0,0,1-.686,1.461,1.291,1.291,0,0,1,.908,1.309v.169c0,1.461-1.006,2.013-2.253,2.013-1.532,0-2.12-.935-2.12-1.683,0-.4.169-.508.659-.508.57,0,.712.125.712.463,0,.419.392.517.793.517C96.215,95.486,96.429,95.263,96.429,94.684Zm0,0" transform="translate(-89.065 -85.908)"></path>
            
            <path id="Path_568" data-name="Path 568" d="M213.147,94.515v.08a2.188,2.188,0,0,1-4.373,0v-2.36c0-1.532.989-2.1,2.271-2.1,1.505,0,2.1.935,2.1,1.674,0,.428-.2.561-.65.561-.383,0-.721-.1-.721-.508,0-.338-.356-.517-.775-.517-.526,0-.837.276-.837.891v.8a1.424,1.424,0,0,1,1.113-.392A1.669,1.669,0,0,1,213.147,94.515Zm-2.984.178c0,.615.3.882.8.882s.793-.267.793-.882v-.08c0-.65-.294-.9-.8-.9a.715.715,0,0,0-.793.819Zm0,0" transform="translate(-198.987 -85.908)"></path>
            
            <path id="Path_569" data-name="Path 569" d="M325.055,94.595v-2.36a2.188,2.188,0,0,1,4.373,0v2.36a2.188,2.188,0,0,1-4.373,0Zm2.984-2.36c0-.615-.3-.891-.8-.891s-.793.276-.793.891v2.36c0,.615.294.891.793.891s.8-.276.8-.891Zm0,0" transform="translate(-309.818 -85.908)"></path>
            
            <path id="Path_570" data-name="Path 570" d="M411.461,4.219a2.109,2.109,0,1,1,2.109-2.109A2.112,2.112,0,0,1,411.461,4.219Zm0-2.812a.7.7,0,1,0,.7.7A.7.7,0,0,0,411.461,1.406Zm0,0" transform="translate(-390.163)"></path>
            
            </svg>
          </div>
          </div>
          <div className="flex items-center space-x-2">
    <Link to="/wishlist" className="hidden md:block">Wishlist</Link>
      <svg width="14.782" height="13.551" viewBox="0 0 14.782 13.551">
      <path id="Path_17" data-name="Path 17" d="M-23.765,65.546a4.075,4.075,0,0,0-3.326,1.731,4.075,4.075,0,0,0-3.326-1.731,4.3,4.3,0,0,0-4.065,4.312c0,2.239,1.264,4.543,3.655,6.667A19.656,19.656,0,0,0-27.2,79.069a.247.247,0,0,0,.227,0,19.649,19.649,0,0,0,3.621-2.544C-20.963,74.4-19.7,72.1-19.7,69.858A4.3,4.3,0,0,0-23.765,65.546Z" transform="translate(34.482 -65.546)"></path>
      </svg> 
      {console.log("wishlistItems === ", wishlistItems)}
     {wishlistItems && wishlistItems.length > 0 ? <><span class="text-white w-1 h-1 flex justify-center items-center p-3 bg-red-500 rounded-full">{wishlistItems.length}</span></> : ''} 
    
    </div>
    <div className="flex items-center space-x-2">
    <Link to="/login" className="hidden md:block">Log in</Link>
    <svg width="13.99" height="17.016" viewBox="0 0 13.99 17.016">
      <path id="Path_18" data-name="Path 18" d="M2.005,79.741a7.1,7.1,0,0,1,13.99,0,12.359,12.359,0,0,1-13.99,0Zm3.329-11.18A3.666,3.666,0,1,1,9,72.227,3.669,3.669,0,0,1,5.334,68.561Z" transform="translate(-2.005 -64.895)"></path>
    </svg>
    </div>
    <div className="flex items-center space-x-2">




  {/*#####################################*/} 
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="flex items-center space-x-1">
        <p>Cart</p>
        <svg width="17.79" height="15.714" viewBox="0 0 17.79 15.714"><g id="Group_874" data-name="Group 874" transform="translate(-1327.21 -32)"><circle id="Ellipse_1" data-name="Ellipse 1" cx="1.593" cy="1.593" r="1.593" transform="translate(1332.289 44.527)"></circle><g id="Group_873" data-name="Group 873"><path id="Path_16" data-name="Path 16" d="M-52.207,67.723a.5.5,0,0,0-.4-.2h0l-13.178.022-.492-2.115a.5.5,0,0,0-.487-.387h-2.632a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2.235l.49,2.107,0,.02,1.679,7.215a.5.5,0,0,0,.487.387h9.855a.5.5,0,0,0,.481-.364l2.039-7.249A.5.5,0,0,0-52.207,67.723Z" transform="translate(1397.105 -33.046)"></path><circle id="Ellipse_2" data-name="Ellipse 2" cx="1.593" cy="1.593" r="1.593" transform="translate(1338.922 44.527)"></circle></g></g></svg>
        
    {Object.keys(cart.cartItems).length>0?<span className="text-white w-1 h-1 flex justify-center items-center p-3 bg-red-500 rounded-full">{Object.keys(cart.cartItems).length}</span>:""}
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right border border-gray-500 absolute right-0 mt-2 w-72 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none cartbox">
        <div className="">
          <Menu.Item>
            {({ active }) => (
              <div className="">
                <div className="bg-gray-500 p-2 flex-col">
                  <h1 className="uppercase text-sm">My Products</h1>
                  <p>{Object.keys(cart.cartItems).length>0?Object.keys(cart.cartItems).length:""} Item</p>
                </div>

              

                 {finalObj.map((dtt)=>(
                <div className="flex border-b border-gray-300">
                 
                  <div className="w-6/12 p-2">
                    <img src={dtt?.productImg}/>
                  </div>
                  <div className="w-6/12 flex-col space-x-2">
                    <p className="p-2 break-words">{dtt?.productName}</p>
                    <p className="font-bold">{dtt?.totalPrice} €</p>
                    <p className="font-bold">{dtt?.qty} €</p>
                    <button className="flex items-center text-sm space-x-2" onClick={(e)=>remove(dtt?.id)}><span className="bg-red-500 w-5 h-5 text-white items-center flex justify-center rounded-full "> x </span> <span className="pr-2">Remove</span></button>
                  </div>
                </div>  
                ))}

                <div className="flex text-4xl px-5 py-2">
                  <h1 className="pr-5 text-2xl font-bold">Total</h1>{" "}
                  <p className="font-bold text-2xl"> {sum.toFixed(2)} €</p>

                </div>

                  <p className="text-sm px-5 pb-3">Including VAT</p>
                  

              </div>
            )}
          </Menu.Item>
          <div className="flex px-5 space-x-2 justify-center items-center pb-3">
                    <Link to="/cart" className="px-5 py-2 bg-black text-white">SEE CART</Link>
                    <Link to="/checkout" className="px-5 py-2 bg-green-700 text-white">Checkout</Link>
                  </div>
          </div>

          </Menu.Items>
          </Transition>

    </Menu>

    </div>

  {/*##########################################*/}





    
    <div className="hidden md:block">
    <div className="flex items-center space-x-2">
    {/* <p>English </p> */}
    <p><div id="google_translate_element"></div></p>
    <svg width="14.395" height="14.395" viewBox="0 0 14.395 14.395"><path id="Icon_material-language" data-name="Icon material-language" d="M10.19,3a7.2,7.2,0,1,0,7.2,7.2A7.194,7.194,0,0,0,10.19,3Zm4.988,4.318H13.055a11.263,11.263,0,0,0-.993-2.562A5.779,5.779,0,0,1,15.178,7.318ZM10.2,4.468a10.139,10.139,0,0,1,1.375,2.85H8.823A10.139,10.139,0,0,1,10.2,4.468ZM4.627,11.637a5.63,5.63,0,0,1,0-2.879H7.059a11.887,11.887,0,0,0-.1,1.439,11.887,11.887,0,0,0,.1,1.439Zm.59,1.439H7.34a11.263,11.263,0,0,0,.993,2.562A5.748,5.748,0,0,1,5.217,13.076ZM7.34,7.318H5.217A5.748,5.748,0,0,1,8.333,4.756,11.263,11.263,0,0,0,7.34,7.318ZM10.2,15.926a10.139,10.139,0,0,1-1.375-2.85h2.749A10.139,10.139,0,0,1,10.2,15.926Zm1.684-4.29H8.513A10.589,10.589,0,0,1,8.4,10.2a10.5,10.5,0,0,1,.115-1.439h3.368A10.5,10.5,0,0,1,12,10.2,10.589,10.589,0,0,1,11.882,11.637Zm.18,4a11.263,11.263,0,0,0,.993-2.562h2.123A5.779,5.779,0,0,1,12.061,15.639Zm1.274-4a11.887,11.887,0,0,0,.1-1.439,11.887,11.887,0,0,0-.1-1.439h2.433a5.63,5.63,0,0,1,0,2.879Z" transform="translate(-3 -3)"></path></svg>
</div>
</div>
        </div>
      </nav>

{/* <div className="hidden md:block">
        <nav className="flex  container mx-auto space-x-10 px-5 py-5 font-semibold font-sans text-gray-600 w-11/12">
            <p>Clothing</p>
            <p>Shoes</p>
            <p>Sports</p>
            <p>Underwear</p>
            <p>Accessories</p>
            <p>Cosmetic</p>
            <p>Bathroom</p>
            <p>Bedroom Gjumi</p>
            <p>Kitchen</p>
            <p className="text-orange-500">Brands</p>
            
			  </nav>
        </div> */}


     {/*NAVIGATION BAR*/}
     {/*########################*/}
  
     {genderData?.length>0?<NavBar/>:""}
     {/*########################*/}
     {/*NAVIGATION BAR*/}

     </header>
			
		</div>
	)
}