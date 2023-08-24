import {authStatus, GetproductVarient} from '../action/Status';

const initialData = { 
	users:[],
	allProduct:[], 
	cart:[], 
	variantData:[],
	loginPopMsg:false

};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){

	 	case authStatus.LOGIN_REQUEST:
	 		state={
	 		    ...state,
	 		    loginPopMsg:false
	 		}
	 	break; 

	 	case authStatus.LOGIN_POPUP:
	 		state={
	 		    ...state,
	 		    loginPopMsg:true
	 		}
	 	break; 
	 	case authStatus.LOGIN_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	users:action.payload.data, 
	 	    } 
	 	break;
	 	case authStatus.LOGIN_POPUP_CLOSE:
	 	    state={
	 	    	...state,
	 		    loginPopMsg:false
	 	    } 
	 	break;

	 	case authStatus.REG_REQUEST:
	 		state={
	 		    ...state
	 		}
	 	break; 
	 	case authStatus.REG_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	users:action.payload.data, 
	 	    	loginPopMsg:true

	 	    }
	 	break;

	 	case authStatus.PRODUCT_REQUEST:
	 		state={
	 		    ...state
	 		}
	 	break; 
	 	case authStatus.PRODUCT_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	allProduct:action.payload.data, 

	 	    }
	 	break;
	 	case authStatus.CART_REQUEST:
	 		state={
	 		    ...state
	 		}
	 	break; 
	 	case authStatus.CART_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	// cart:action.payload.cartData, 


	 	    }
	 	case authStatus.GET_CART_REQUEST:
	 		state={
	 		    ...state
	 		}
	 	break; 
	 	case authStatus.GET_CART_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	cart:action.payload.cartData, 
	 	    	

	 	    }
	 	break;
		 case GetproductVarient.VARIANT_SUCCESS:
			state={
				...state,
				variantData:action.payload.variantData, 
				

			}
		break;
	 	// case regStatus.REG_REQUEST:
	 	//     state={
	 	//     	...state,
	 	//     	authenticating:true,
	 	//     }
	 	// break;
	 	// case regStatus.REG_SUCCESS:
	 	//      state={
	 	//      	...state, 
	 	//      	authenticating:true,
	 	//      	authenticate:false,
	 	//      	token:action.payload.token,
	 	//      	user:action.payload.user

	 	//      }
	 	// break;
	case authStatus.LOGOUT_REQUEST:
      state = {
        ...state, 
      };
      break;
    case authStatus.LOGOUT_SUCCESS:
      state = {
        ...initialData,
      };
      break;
    case authStatus.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error, 
      };
      break;

	 		 	            
	 }

	 return state;
}