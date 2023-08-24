import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer"
import {useDispatch,useSelector} from "react-redux";
import {addToWishlist} from "../action"



export default function Wishlist() {
	const dispatch = useDispatch();
	const wishlistItems = useSelector(state=>state.cart?.wishlistItems)
	const [clicking,setClicking] = useState();

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
		<>
		<Header/>
		<div className='container mx-auto'>
			<div className="Cart mt-heading">
				<div className="p-0-mobile container">
 
        {(wishlistItems && wishlistItems.length > 0 ? <>
            {wishlistItems.map((dtt)=>(
                <div className="CartList">
                    <div className="CartItem fade-in-down">
                        <button className="RemoveItemButton" onClick={(e)=>addItemToWishlist(dtt)}>Remove
                            <span className="RemoveItemButton__icon">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="#ff0000">
                                    <g id="Group_902" data-name="Group 902" transform="translate(-383.344 -217)" fill="#ff0000">
                                        <circle id="Ellipse_6" data-name="Ellipse 6" cx="9" cy="9" r="9" transform="translate(383.344 217)" fill="#ff0000"></circle>
                                        <g id="Group_892" data-name="Group 892" transform="translate(389.115 223.115)" fill="#ff0000">
                                            <line id="Line_57" data-name="Line 57" x1="6" y2="6" transform="translate(0.23 -0.115)" fill="none" stroke="#fff" stroke-width="1"></line>
                                            <line id="Line_58" data-name="Line 58" x2="6" y2="6" transform="translate(0.23 -0.115)" fill="none" stroke="#fff" stroke-width="1"></line>
                                        </g>
                                     </g>
                                </svg>
                            </span>
                        </button>
                        <div className="CartItem__image">
                            <a href="/en/product/t-bluze-pa-menge-18">
                                <img src={dtt.images[0]} srcSet={dtt.images[0]} className="Image"/>
                            </a> 
                        </div>
						<div className="CartItem__attributes">
                            <ul className="CartItem__attributes__list"> 
                                <div className="flex flex-col items-center ml-2"> 
                                    <div className="CartItem__attributes__value--color-wrapper">
                                        <li className="CartItem__attributes__value CartItem__attributes__value--color">
                                            <span style={{backgroundColor:"#000"}}></span>
                                        </li>
                                    </div>
                                </div>
                            </ul> 
                        </div>
                        <div className="CartItem__content">
                            <div className="flex">
                                <span className="CartItem__image__brand mr-2">pinko</span>
                                <span className="CartItem__image__brand">XYZ</span>
                            </div>
                            <a href="/en/product/t-bluze-pa-menge-18">
                                <h3 className="CartItem__content__title">{dtt.name}</h3>
                            </a><div className="ProductPrices">
                            <h4 className="regular">{dtt.sale_price} €</h4>
                        </div> 
                    </div>
                </div>
              </div>

              ))}
        </> : '')}
		

			{(wishlistItems && wishlistItems?.length === 0 ? <>
			<div className="text-center">
			<h1 className="font-semibold text-3xl p-2">Lista ime</h1>
			<p className="p-5">Ju momentalisht nuk keni ndonjë produkt në listë</p>
			<div>
			<button className="border border-gray-500 px-10 py-3 hover:bg-black hover:text-white">Shto produkte</button>
			</div>
			</div>
			</> : '')}
			

			</div>
			</div> 
		<Footer/> 
		</div>
		</>
	)
}