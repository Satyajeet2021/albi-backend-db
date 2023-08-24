import React from 'react';
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import './Cartpage.css';


import {useDispatch,useSelector} from "react-redux";

const Cartpage = () => {


    const cart = useSelector((state) => state.cart);
     var sum=0;

  var finalObj = [];

for(var item in cart.cartItems){

    finalObj.push(cart.cartItems[item]);

} 

for (let key in cart.cartItems) {
  sum += cart.cartItems[key].totalPrice;
}
  


  return (
    <>
    <Header/>
    <div className='container mx-auto'>
        <div className="Cart mt-heading">
            <div className="p-0-mobile container">
                <div className="HeadingTitle">
                    <h1>Cart 
                        <svg width="17.79" height="15.714" viewBox="0 0 17.79 15.714" className="HeadingTitle__icon">
                            <g id="Group_874" data-name="Group 874" transform="translate(-1327.21 -32)">
                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="1.593" cy="1.593" r="1.593" transform="translate(1332.289 44.527)"></circle>
                                <g id="Group_873" data-name="Group 873">
                                    <path id="Path_16" data-name="Path 16" d="M-52.207,67.723a.5.5,0,0,0-.4-.2h0l-13.178.022-.492-2.115a.5.5,0,0,0-.487-.387h-2.632a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2.235l.49,2.107,0,.02,1.679,7.215a.5.5,0,0,0,.487.387h9.855a.5.5,0,0,0,.481-.364l2.039-7.249A.5.5,0,0,0-52.207,67.723Z" transform="translate(1397.105 -33.046)"></path>
                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="1.593" cy="1.593" r="1.593" transform="translate(1338.922 44.527)"></circle>
                                </g>
                            </g>
                        </svg>
                    </h1>
                </div>


                {finalObj.map((dtt)=>(
                <div className="CartList flex">
                    <div className="CartItem fade-in-down">
                        <button className="RemoveItemButton">Remove
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
                                <img src="https://management.albionline.com/wp-content/uploads/2022/09/805520977540_1.jpg" alt="T Bluzë pa mëngë" srcSet="https://management.albionline.com/wp-content/uploads/2022/09/805520977540_1.jpg 600w, https://management.albionline.com/wp-content/uploads/2022/09/805520977540_1-200x300.jpg 200w, https://management.albionline.com/wp-content/uploads/2022/09/805520977540_1-333x500.jpg 333w, https://management.albionline.com/wp-content/uploads/2022/09/805520977540_1-140x210.jpg 140w" className="Image"/>
                            </a>
                            <div className="WishListButton">
                                <button></button>
                            </div>
                        </div>
                        <div className="CartItem__content">
                            <div className="flex">
                                <span className="CartItem__image__brand mr-2">pinko</span>
                                <span className="CartItem__image__brand">XYZ</span>
                            </div>
                            <a href="/en/product/t-bluze-pa-menge-18">
                                <h3 className="CartItem__content__title">T Shirt without sleeves</h3>
                            </a><div className="ProductPrices">
                            <h4 className="regular">199.00 €</h4>
                        </div>
                        <div className="CartItem__attributes">
                            <ul className="CartItem__attributes__list">
                                <li className="flex flex-col items-center">
                                    <span className="CartItem__attributes__title">Size</span>
                                    <div className="CartItem__attributes__value-wrapper">
                                        <span className="CartItem__attributes__value">XS</span>
                                    </div>
                                </li>
                                <div className="flex flex-col items-center ml-2">
                                    <span className="CartItem__attributes__title">Color</span>
                                    <div className="CartItem__attributes__value--color-wrapper">
                                        <li className="CartItem__attributes__value CartItem__attributes__value--color">
                                            <span style={{backgroundColor:"#000"}}></span>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                            <div className="CartItem__attributes__quantity">
                                <span className="CartItem__attributes__title">Amount</span>
                                <div className="Quantity">
                                    <div className="Quantity__input">
                                        <button className="minus" disabled="disabled">-</button>
                                        <input min="1" type="number" max="1" value="1"/>
                                        <button className="plus" disabled="disabled">+</button>
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
            <div className="CartTotal">
                <div className="CartTotal__Price">
                    <div>Total<strong>199.00 €</strong></div>
                    <span>Including VAT</span>
                    </div>
                    
                    <div className="DefaultButton full-mob ">
                    <Link className='imglink' to="/checkout">Checkout</Link>
                        {/* <a href="/en/checkout">Checkout</a> */}
                    </div>
                </div>
                <div className="TransportInformation">
                    <p>For orders over 50€ shipping is FREE, for orders under 50€ shipping is 3€</p>
                </div>
            </div>
        </div>
    </div>
    <Footer/> 
    </>
    
  )
}

export default Cartpage;
