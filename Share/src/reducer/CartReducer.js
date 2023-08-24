import { cartConstants,checkoutStatus } from "../action/Status";

const initState = {
    cartItems: {
        // 123: {
        //     _id: 123,
        //     name: 'Samsung mobile',
        //     img: 'some.jpg',
        //     price: 200,
        //     qty: 1,
        // }
    },
    updatingCart: false,
    updatingWishlist:false,
    error: null
};

export default (state = initState, action) => { 
    switch(action.type){
        case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;

        case checkoutStatus.CHECKOUT_SUCCESS:
            state = {
                ...initState
            }
            break;
         case cartConstants.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
            break;
        case cartConstants.ADD_TO_WISHLIST_SUCCESS:
                state = {
                    ...state,
                    wishlistItems: action.payload.cartItems.product_id,
                    updatingWishlist: false
                }
                break;    
        case cartConstants.RESET_CART:
            state = {
                ...initState
            }
    }
    return state;
}