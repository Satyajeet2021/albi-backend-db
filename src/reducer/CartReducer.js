import { cartConstants,checkoutStatus } from "../action/Status";

const initState = {
    cartItems: [],
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
                cartItems: action.payload,
                updatingCart: false
            }
            break;

        case checkoutStatus.CHECKOUT_SUCCESS:
            state = {
                ...state
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

                case 'EMPTY_CART':
                    state = {
                        ...initState
                    }
                    break;

        case cartConstants.RESET_CART:
            state = {
                ...initState
            }
    }
    return state;
}