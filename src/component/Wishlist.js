import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { addToCart} from "../action"
import Header from "../component/Header";
import Footer from "../component/Footer"
import {useDispatch,useSelector} from "react-redux";
import {addToWishlist} from "../action"



export default function Wishlist() {
	const dispatch = useDispatch();
	const wishlistItems = useSelector(state=>state.cart?.wishlistItems)
	const [clicking,setClicking] = useState();
	 const [qty, setQty] = useState(1);
	 const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

  	const cartData = useSelector(state => state.cart?.cartItems);

    const [filterData,setFilterData] = useState([]);

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

	  const onQuantityIncrement = () => {
    setQty(qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
  };


	  const addToCartData = (productInfo) => { 

     var selectedSize = 11 //dummy
     
    productInfo.size = selectedSize;
    if (cartData.length > 0) { 
      var foundIndex = cartData.findIndex(element => element?._id === productInfo?._id);
    } else {
      productInfo.quantity = qty;
      var foundIndex = -1;
    }
    //console.log("foundIndex === ", foundIndex, parseInt(cartData[foundIndex].quantity), '  ' ,parseInt(qty))
    if (foundIndex < 0) {
      // productInfo.quantity = 1;
      productInfo.quantity = qty;
      cartData.push(productInfo);
    } else {
      cartData[foundIndex].quantity = parseInt(cartData[foundIndex].quantity) + parseInt(qty);
    }

     

    dispatch(addToCart(cartData))
    //  dispatch(GetCartData()) 
    // alert('Product is added');

    setIsAlertVisible(true);

        setTimeout(() => {
            setIsAlertVisible(false);
        }, 2000);
    
  }


	return (
		<>
		<Header/>
		<div className='container mx-auto mt-60'>
			<div className="Cart mt-heading">
				<div className="p-0-mobile container wishlist">
 
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
                            {/* <a href="/en/product/t-bluze-pa-menge-18">
                                <img src={dtt?.images[0]} srcSet={dtt?.images[0]} className="Image"/>
                            </a>  */}
                            <Link to={`/productdetails/${dtt?._id}/${dtt?.catId}`}>
                                <img src={dtt?.images[0]} srcSet={dtt?.images[0]} className="Image"/>
                            </Link> 
                        </div>
						{/* <div className="CartItem__attributes">
                            <ul className="CartItem__attributes__list"> 
                                <div className="flex flex-col items-center ml-2"> 
                                    <div className="CartItem__attributes__value--color-wrapper">
                                        <li className="CartItem__attributes__value CartItem__attributes__value--color">
                                            <span style={{backgroundColor:"#000"}}></span>
                                        </li>
                                    </div>
                                </div>
                            </ul> 
                        </div> */}
                        <div className="CartItem__content">
                            <div className="flex">
                                <span className="CartItem__image__brand mr-2">{dtt?.vendor}</span>
                                {/* <span className="CartItem__image__brand">XYZ</span> */}
                            </div>
                            <Link to={`/productdetails/${dtt?._id}/${dtt?.catId}`}>
                                <h3 className="CartItem__content__title">{dtt.name}</h3>
                            </Link><div className="ProductPrices">

                                
                 {(dtt?.sale_price > 0 ? <>
                <h4 className="regular "><del>{dtt?.sale_price > 0 ? dtt?.regular_price?.toFixed(2) + "Є": "Sold Out"} </del></h4>
                </> :  <h4 className="regular">{dtt?.regular_price?.toFixed(2) + "Є"}</h4>)}

                {(dtt?.sale_price > 0 ? <>
                   <h4 className="regular salening">{dtt?.sale_price > 0? dtt?.sale_price?.toFixed(2) + "Є": "Sold Out"} </h4>
                </> : '')}  


                            {/* <h4 className="regular">{dtt.sale_price} €</h4> */}

                            {dtt?.variant?.length>0?"":
                            <button onClick={(e)=>addToCartData(dtt)} className="px-2 py-1 text-white rounded-sm ml-2" style={{backgroundColor:"#f6a700"}}>Add to cart</button>
                            }

                        </div> 
                    </div>
                </div>
              </div>

              ))}
        </> : '')}
		
            {console.log("wishlistItems === ", wishlistItems)}
			{(!wishlistItems || wishlistItems?.length === 0 ? <>
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
		</div>
        <Footer/>
		</>
	)
}