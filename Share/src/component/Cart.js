import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer"
import MobileFooter from "../component/MobileFooter"
import {useDispatch,useSelector} from "react-redux";

export default function Cart() {
	const [qty, setQty] = useState(1);
	  const cartCount = useSelector(state=>state.productData?.cart?.qty)
  	  const allProduct = useSelector(state=>state.productData?.allProduct)
  	  const productId = useSelector(state=>state.productData?.cart?.productId)
  	  const totalPrice = useSelector(state=>state.productData?.cart.totalPrice)
  	  const cartData = allProduct.find(dt=>dt._id===productId)

	const onQuantityIncrement = () => {
    setQty(qty + 1); 
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1); 
  };
	return (
		<div>
		<Header/>
		<div className="flex container mx-auto w-11/12 py-10">
		<h1 className="text-3xl font-semibold flex items-center space-x-2">
		<span>Cart</span>
		<svg
  width="17.79"
  height="15.714"
  viewBox="0 0 17.79 15.714"
  className="HeadingTitle__icon"
>
  <g id="Group_874" data-name="Group 874" transform="translate(-1327.21 -32)">
    <circle
      id="Ellipse_1"
      data-name="Ellipse 1"
      cx="1.593"
      cy="1.593"
      r="1.593"
      transform="translate(1332.289 44.527)"
    />
    <g id="Group_873" data-name="Group 873">
      <path
        id="Path_16"
        data-name="Path 16"
        d="M-52.207,67.723a.5.5,0,0,0-.4-.2h0l-13.178.022-.492-2.115a.5.5,0,0,0-.487-.387h-2.632a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2.235l.49,2.107,0,.02,1.679,7.215a.5.5,0,0,0,.487.387h9.855a.5.5,0,0,0,.481-.364l2.039-7.249A.5.5,0,0,0-52.207,67.723Z"
        transform="translate(1397.105 -33.046)"
      />
      <circle
        id="Ellipse_2"
        data-name="Ellipse 2"
        cx="1.593"
        cy="1.593"
        r="1.593"
        transform="translate(1338.922 44.527)"
      />
    </g>
  </g>
</svg>

		</h1>
		</div>
		<div className="flex container mx-auto  w-full h-screen md:w-11/12   justify-center">
		<div className="w-full">
		<div className="flex items-center space-x-2">
		<span>Remove</span>
		 <span className="bg-red-500 text-white rounded-full p-2 w-3 h-3 flex justify-center items-center">x</span>
		</div>
			 <div className="w-3/12 p-2 bg-gray-100">
                      <img src={cartData?.images[0]}/>
                       <p className="p-2">{cartData?.name}</p>
                       <p className="font-bold px-2">{cartData?.regular_price} €</p>
                         <div className="flex space-x-5 items-center justify-between">
                         <div className="flex space-x-5 items-center">
             			  	<div className="flex-col">
             			  		<p className="font-bold text-gray-500">Size</p>
             			  		<p className="border border-gray-500 px-1 text-sm ">ONSI</p>
             			  	</div>
             			  	<div className="flex-col">
             			  		<p className="font-bold text-gray-500">Color</p>
             			  		<p className="border border-gray-500 px-1 text-sm bg-pink-600 h-7 w-7  rounded-full">
             			  			
             			  		</p>
             			  	</div>
             			  	</div>
             			  	<div>
             			  		<div>
             			  		<p className="font-bold text-gray-500 text-center">Amount</p>
					<button className="px-2 py-1 font-bold bg-gray-200 text-black" onClick={onQuantityDecrement}>-</button>
          			<input value={qty} className="w-20 bg-sky-50 text-center py-1" readOnly />
          			<button className="px-2 py-1 font-bold bg-gray-200 text-black" onClick={onQuantityIncrement}>+</button>
          			</div>
             			  	</div>
             			</div> 	
                    </div>
                    <div className="border border-gray-500 justify-between flex items-center py-5 px-5 mt-10">
                    	<div className="flex-col">
                    		<p className="text-3xl">Total <span className="font-bold">{totalPrice}</span> </p>
                    		<p>Including VAT</p>
                    	</div>
                    	<div>
                    		<button className="px-5 py-2 bg-green-700 rounded-sm text-white">Checkout</button>
                    	</div>
                    </div>
                    <p className="flex items-center py-5">
                     <svg width="18.5" height="15.031" viewBox="0 0 18.5 15.031">
  <path
    id="Icon_metro-truck"
    data-name="Icon metro-truck"
    d="M21.07,13.878,18.758,9.253H15.289V6.94a1.16,1.16,0,0,0-1.156-1.156H3.727A1.16,1.16,0,0,0,2.571,6.94v9.25l1.156,1.156H5.193a2.312,2.312,0,1,0,4,0h6.4a2.312,2.312,0,1,0,4,0H21.07V13.878Zm-5.781,0V10.409h2.4l1.734,3.469H15.289Z"
    transform="translate(-2.571 -5.784)"
  />
</svg> <span className="px-2">For orders over 50€ shipping is FREE, for orders under 50€ shipping is 3€</span></p>
                 
		</div>
		<div className="text-center">
		
			{/*<h1 className="font-semibold text-3xl p-2">Cart</h1>
			<p className="p-5">Currently you don't have any products in your cart</p>
			<div>
			<button className="border border-gray-500 px-10 py-3 hover:bg-black hover:text-white">Add Products</button>
			</div>*/}
		</div>
		</div>
		<div className="hidden md:block">
		<Footer/>
		</div>
		<div className="md:hidden">
		<MobileFooter/>
		</div>
			
		</div>
	)
}