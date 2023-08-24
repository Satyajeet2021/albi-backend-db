import axios from "../helper/axios";
import { cartConstants,checkoutStatus } from "./Status";
import store from "../store";
const { v4: uuidv4 } = require('uuid');



const getCartItems = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const res = await axios.post(`/getcartdata`);
      if (res.status === 200) {
        const { cartItems } = res.data;
        console.log({ getCartItems: cartItems });
        if (cartItems) {
          dispatch({
            type: cartConstants.ADD_TO_CART_SUCCESS,
            payload: { cartItems },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (product, size) => { 
  console.log("product, size ===== ", product, size)
  return async (dispatch) => {
    if(product.length > 0){
      let totalPrice = product.reduce(function (accumulator, item) {
        if(item.sale_price > 0){
          return accumulator + parseFloat(item.sale_price) * item.quantity;
        } else {
        return accumulator + parseFloat(item.regular_price) * item.quantity;
        }
      }, 0);
      product[0].totalPrice = totalPrice; 
   }
    //console.log("totalPrice === ", totalPrice)

    //console.log("totalPrice ==== ", totalPrice)

    // const {
    //   cart: { cartItems },
    //   auth,
    // } = store.getState();
  
    // const qty = cartItems[product.id]
    //   ? parseInt(cartItems[product.id].qty) + parseInt(product?.qty)
    //   : parseInt(product?.qty);
    // cartItems[product.id] = {
    //   ...product,
    //   qty,
    // };

    // if (auth?.authenticate===true) {
    //   dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
    //   const payload = {
    //     // cartItems: Object.keys(cartItems).map((key, index) => {
    //     //     return {
    //     //         quantity: cartItems[key].qty,
    //     //         product: cartItems[key]._id
    //     //     }
    //     // })
    //     cartItems: [
    //       {
    //         product: product.id,
    //         quantity: qty,
    //       },
    //     ],
    //   };
    //   console.log(payload);
    //   const res = await axios.post(`/user/cart/addtocart`, payload);
    //   console.log(res);
    //   if (res.status === 201) {
    //     dispatch(getCartItems());
    //   }
    // } else {
    //   localStorage.setItem("cart", JSON.stringify(cartItems));
    // }

    // console.log("addToCart::", cartItems);

    // dispatch({
    //   type: cartConstants.ADD_TO_CART_SUCCESS,
    //   payload: { cartItems },
    // });

    dispatch({ type: cartConstants.ADD_TO_CART_REQUEST }); 

      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: product,
    });

  };
};

export const removeCartItem = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: cartConstants.REMOVE_CART_ITEM_REQUEST });
      const res = await axios.post(`/user/cart/removeItem`, { payload });
      if (res.status === 202) {
        dispatch({ type: cartConstants.REMOVE_CART_ITEM_SUCCESS });
        dispatch(getCartItems());
      } else {
        const { error } = res.data;
        dispatch({
          type: cartConstants.REMOVE_CART_ITEM_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const { auth } = store.getState();
    let cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;

    console.log("upppppppppp");

    if (auth.authenticate) {
      localStorage.removeItem("cart");
      //dispatch(getCartItems());
      if (cartItems) {
        const payload = {
          cartItems: Object.keys(cartItems).map((key, index) => {
            return {
              quantity: cartItems[key].qty,
              product: cartItems[key]._id,
            };
          }),
        };
        if (Object.keys(cartItems).length > 0) {
          const res = await axios.post(`/user/cart/addtocart`, payload);
          if (res.status === 201) {
            dispatch(getCartItems());
          }
        }
      } else {
        dispatch(getCartItems());
      }
    } else {
      if (cartItems) {
        dispatch({
          type: cartConstants.ADD_TO_CART_SUCCESS,
          payload: { cartItems },
        });
      }
    }
  };
};


 



export const postCheckout = (data) => {
  
  return async (dispatch) => {
    try {
      dispatch({ type: checkoutStatus.CHECKOUT_REQUEST });
      const res = await axios.post(`/checkout`, { data });


      if (res.status === 200) {
        const { cartItems } = res.data;
         dispatch({
            type: checkoutStatus.CHECKOUT_SUCCESS,
          });
      }

    } catch (error) {
      console.log(error);
    }
  };
};



export const makeCartEmpty = (data) => { 
  return async (dispatch) => {
    try {
      dispatch({
        type: 'EMPTY_CART',
      });

    } catch (error) {
      console.log(error);
    }
  };
};



export const addToWishlist = (product_id) => { 
  const cartItems = {
    product_id:product_id
  }
  return async (dispatch) => { 
    dispatch({
      type: cartConstants.ADD_TO_WISHLIST_SUCCESS,
      payload: { cartItems },
    });
  };
};

export { getCartItems };