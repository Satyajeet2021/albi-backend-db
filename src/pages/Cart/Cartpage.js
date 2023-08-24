import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import {addToCart} from "../../action";
import './Cartpage.css';

import {useDispatch,useSelector} from "react-redux";

const Cartpage = () => {
    const dispatch = useDispatch();
    const cartData = useSelector(state=>state.cart?.cartItems) 
    const [qty, setQty] = useState(1);

    const cart = useSelector((state) => state.cart);
    const auth = useSelector(state=>state?.productData?.users);
    
  const onQuantityIncrement = () => {
    setQty(qty + 1); 
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1); 
  };

  const remove=async(id)=>{ 
    const filteredCart = cartData.filter((item) => item._id !== id);
  	dispatch(addToCart(filteredCart)) 
  }


  const updateCartData=(id,type,qty)=>{  
    if(qty > 1 || type=="plus"){
        let foundIndex = cartData.findIndex(element => element._id === id); 
        if(type==="minus"){
        cartData[foundIndex].quantity = cartData[foundIndex].quantity - 1;
        } else {
            cartData[foundIndex].quantity = cartData[foundIndex].quantity + 1;
        }
        dispatch(addToCart(cartData)) 
    }
}


  
 

  return (
    <>
    <Header/>
    <div className='container mx-auto'>
        <div className="Cart mt-heading pl-4 pr-4">
            <div className="p-0-mobile container wishlist">

                {(cartData.length > 0 ? <>
                <div className="HeadingTitle">
                    <h1>Shporta 
                        <span>
                        <svg width="17.79" height="15.714" viewBox="0 0 17.79 15.714" className="HeadingTitle__icon">
                            <g id="Group_874" data-name="Group 874" transform="translate(-1327.21 -32)">
                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="1.593" cy="1.593" r="1.593" transform="translate(1332.289 44.527)"></circle>
                                <g id="Group_873" data-name="Group 873">
                                    <path id="Path_16" data-name="Path 16" d="M-52.207,67.723a.5.5,0,0,0-.4-.2h0l-13.178.022-.492-2.115a.5.5,0,0,0-.487-.387h-2.632a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2.235l.49,2.107,0,.02,1.679,7.215a.5.5,0,0,0,.487.387h9.855a.5.5,0,0,0,.481-.364l2.039-7.249A.5.5,0,0,0-52.207,67.723Z" transform="translate(1397.105 -33.046)"></path>
                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="1.593" cy="1.593" r="1.593" transform="translate(1338.922 44.527)"></circle>
                                </g>
                            </g>
                        </svg>
                        </span>
                    </h1>
                </div>
                </> : '')}
                
                {cartData.map((dtt)=>(
                <div className="CartList">
                    <div className="CartItem fade-in-down">
                        <button className="RemoveItemButton" onClick={(e)=>remove(dtt?._id)}>Largo
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
                        <Link to={`/productdetails/${dtt?._id}/${dtt?.catId}`}>
                                <img src={dtt?.images[0]} alt="T Bluzë pa mëngë" className="Image"/>
                            </Link> 
                        </div>
                        <div className="CartItem__content">
                            <div className="flex">
                                <span className="CartItem__image__brand mr-2">{dtt?.brand}</span> 
                            </div>
                            <Link to={`/productdetails/${dtt?._id}/${dtt?.catId}`}>
                                <h3 className="CartItem__content__title">{(dtt?.description)?.slice(0, 35)+'...'}</h3>
                            </Link><div className="ProductPrices">
                            {/* <h4 className="regular">{dtt?.regular_price} {process.env.REACT_APP_CURRENCY}</h4> */}

                            {(dtt?.sale_price > 0 ? <>
                <h4 className="regular "><del>{dtt?.sale_price > 0 ? dtt?.regular_price?.toFixed(2) + "Є": "Sold Out"} </del></h4>
                </> :  <h4 className="regular">{dtt?.regular_price?.toFixed(2) + "Є"}</h4>)}

                {(dtt?.sale_price > 0 ? <>
                   <h4 className="regular salening">{dtt?.sale_price > 0? dtt?.sale_price?.toFixed(2) + "Є": "Sold Out"} </h4>
                </> : '')}  


                        </div>
                        <div className="CartItem__attributes">
                            <ul className="CartItem__attributes__list">
                                <li className="flex flex-col items-center">
                                    <span className="CartItem__attributes__title">Size</span>
                                    <div className="CartItem__attributes__value-wrapper">
                                        <span className="CartItem__attributes__value">{dtt?.size}</span>
                                    </div>
                                </li> 
                            </ul>
                            <div className="CartItem__attributes__quantity">
                                <span className="CartItem__attributes__title">Amount</span>
                                <div className="Quantity"> 

                                    <div className="Quantity__input">
                                        <button className="minus" onClick={(e)=>updateCartData(dtt?._id,'minus',dtt?.quantity)}>-</button>
                                        <input min="1" type="number" max="1" value={dtt?.quantity}/>
                                        <button className="plus" onClick={(e)=>updateCartData(dtt?._id,'plus',dtt?.quantity)}>+</button>
                                    </div> 

                                    <div className="Quantity__select">
                                        <label>
                                            <select id="qty" name="qty">
                                                <option value="1">1</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
 
              ))}


            {(cartData.length > 0 ? <>
                <div className="CartTotal">
                <div className="CartTotal__Price">
                    <div>Totali<strong>{parseFloat(cartData[0].totalPrice).toFixed(2)} {process.env.REACT_APP_CURRENCY}</strong></div>
                    <span>Përfshirë TVSH</span>
                    </div>
                    <div className="DefaultButton full-mob  ">
                    {auth.token?<Link className='imglink' to="/checkout">Vazhdo me blerjen</Link>:<Link className='imglink' to="/login">Vazhdo me blerjen</Link>}
                    </div>
                </div>
                <div className="TransportInformation">
                    <p>Per blerjet mbi shumën prej 50€ transporti është FALAS, ndërsa për blerjet nën shumën prej 50€ transporti është 3€</p>
                </div>
            </> : <>
            <div className="text-center">
			<h1 className="font-semibold text-3xl p-2">Shporta</h1>
			<p className="p-5">Ju momentalisht nuk keni ndonjë produkt në listë</p>
			<div>
			<button className="border border-gray-500 px-10 py-3 hover:bg-black hover:text-white">Shto produkte</button>
			</div>
			</div>
            </>)}


            <br/><br/>

            </div>
        </div>
    </div>
    <Footer/> 
    </>
    
  )
}

export default Cartpage;
