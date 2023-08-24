import {authStatus,categoryStatus, GetproductVarient} from "./Status";
// import axios from "axios";
import axios from "../helper/axios";
console.log(axios)


export const  LoginAction=(data)=>{
	 
	return async (dispatch)=>{
		dispatch({type:authStatus.LOGIN_REQUEST});
		// const res = await axios.get(`https://appapi.albionline.com/api/description`);
		// const res = await axios.get(`http://localhost:5000/api/description`);
		const res = await axios.post(`/login`,data);
		if(res.status===200){
            
            dispatch({type:authStatus.LOGIN_POPUP})
			const data = res.data;  
			dispatch({
				type:authStatus.LOGIN_SUCCESS,
				payload:{
					data
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const LoginPopupBtn=()=>{

	return async (dispatch)=>{
		dispatch({type:authStatus.LOGIN_POPUP_CLOSE});
	}
}



export const  RegAction=(data)=>{
	 
	return async (dispatch)=>{
		dispatch({type:authStatus.REG_REQUEST});
		// const res = await axios.get(`https://appapi.albionline.com/api/description`);
		// const res = await axios.get(`http://localhost:5000/api/description`);
		const res = await axios.post(`/reg`,data);
		if(res.status===200){
            console.log(res)
			const data = res.data;  
			dispatch({
				type:authStatus.REG_SUCCESS,
				payload:{
					data
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}




export const  ProductPage=(userLogin)=>{
	 
	return async (dispatch)=>{
		dispatch({type:authStatus.PRODUCT_REQUEST});
		// const res = await axios.get(`https://appapi.albionline.com/api/description`);
		// const res = await axios.get(`http://localhost:5000/api/description`);
		const res = await axios.get(`/description`);
		if(res.status===200){
            console.log(res)
			const data = res.data;  
			dispatch({
				type:authStatus.PRODUCT_SUCCESS,
				payload:{
					data
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}


export const  addToCartAction=(crtData)=>{
	 // console.log(cartData)
	return async (dispatch)=>{
		dispatch({type:authStatus.CART_REQUEST});
		// const res = await axios.post(`http://localhost:5000/api/addtocart`,crtData);
		const res = await axios.post(`/addtocart`,crtData);
		  const cartData = res.data;
			dispatch({
				type:authStatus.CART_SUCCESS,
				payload:{
					cartData
				}
			}) 
	    }
	
}

export const  GetCartData=()=>{
	 // console.log(cartData)
	 //console.log("GetCartData")
	return async (dispatch)=>{
		dispatch({type:authStatus.GET_CART_REQUEST});
		// const res = await axios.get(`http://localhost:5000/api/getcartdata`);
		const res = await axios.get(`/getcartdata`);
		  const cartData = res.data;
			dispatch({
				type:authStatus.GET_CART_SUCCESS,
				payload:{
					cartData
				}
			}) 
	    }
	
}


export const  GetVariantData=(data)=>{
	console.log("data", data)
	console.log("GetVariantData",data?.itemId?.split('-'))
	var itemCode = data?.itemId?.split('-')[0];
	console.log("itemCode",itemCode);
	data.itemId = itemCode;
	console.log("itemCode data",data);
   return async (dispatch)=>{
	   dispatch({type:GetproductVarient.VARIANT_REQUEST});
	   // const res = await axios.get(`http://localhost:5000/api/getcartdata`);
	   const res = await axios.post(`/getvariant`, data);
		 const variantData = res.data;
		   dispatch({
			   type:GetproductVarient.VARIANT_SUCCESS,
			   payload:{
				variantData
			   }
		   }) 
	   }
   
}



export const  RemoveCart=(data)=>{
 console.log(data)
	return async (dispatch)=>{
		dispatch({type:authStatus.REMOVE_CART_REQUEST});
		// const res = await axios.post(`http://localhost:5000/api/removecart`,data);
		const res = await axios.post(`/removecart`,data);
		  const cartData = res.data;
			dispatch({
				type:authStatus.REMOVE_CART_SUCCESS,
				payload:{
					cartData
				}
			}) 
	    }
	
}

export const  GetAllCategory=(data)=>{
	 console.log("GET ALL CATEGORY")

	return async (dispatch)=>{
		dispatch({type:categoryStatus.CATEGORY_GET_REQUEST});
		// const res = await axios.get(`http://localhost:5000/api/getcategory/`);
		 
		const res = await axios.post(`/getcategory`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:categoryStatus.CATEGORY_GET_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}



export const  GenderData=(data)=>{ 
	return async (dispatch)=>{
		dispatch({type:categoryStatus.GENDER_REQUEST});   
			const gender=data
			dispatch({
				type:categoryStatus.GENDER_SUCCESS,
				payload:{
					gender
				}
			})

		
	    } 
}



export const LogoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: authStatus.LOGOUT_REQUEST }); 
    localStorage.clear();
    dispatch({ type: authStatus.LOGOUT_SUCCESS });
    // dispatch({ type: authStatus.RESET_CART });
    //const res = await axios.post(`/admin/signout`);
    // if(res.status === 200){

    // }else{
    //     dispatch({
    //         type: authConstants.LOGOUT_FAILURE,
    //         payload: { error: res.data.error }
    //     });
    // }
  };
};
