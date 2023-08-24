import {authStatus, GetproductVarient} from '../action/Status';

const initialData = { 
	allProduct:[], 
	cart:[], 
	variantData:[],

};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
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

	 		 	            
	 }

	 return state;
}