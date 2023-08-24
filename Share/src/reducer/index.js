import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';  
import CategoryReducer from './CategoryReducer';  
import cartReducer from './CartReducer';  

const rootReducer=combineReducers({
      productData:AuthReducer, 
      category:CategoryReducer,
      cart:cartReducer
});

export default rootReducer;
