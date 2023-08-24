import axios from "../helper/axios";
import { cartConstants,checkoutStatus } from "./Status";
import store from "../store";

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

export const addToCart = (product, newQty = 1) => {
  console.log(product)
  return async (dispatch) => {
    const {
      cart: { cartItems },
      auth,
    } = store.getState();
  
    const qty = cartItems[product.id]
      ? parseInt(cartItems[product.id].qty + newQty)
      : 1;
    cartItems[product.id] = {
      ...product,
      qty,
    };

    if (auth?.authenticate===true) {
      dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
      const payload = {
        // cartItems: Object.keys(cartItems).map((key, index) => {
        //     return {
        //         quantity: cartItems[key].qty,
        //         product: cartItems[key]._id
        //     }
        // })
        cartItems: [
          {
            product: product.id,
            quantity: qty,
          },
        ],
      };
      console.log(payload);
      const res = await axios.post(`/user/cart/addtocart`, payload);
      console.log(res);
      if (res.status === 201) {
        dispatch(getCartItems());
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    console.log("addToCart::", cartItems);

    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: { cartItems },
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