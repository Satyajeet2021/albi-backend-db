import {categoryStatus,cmsStatus} from '../action/Status';

const initialData = {
	 categories:[],
	 genderData:[]

};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
	 	case categoryStatus.CATEGORY_GET_REQUEST:
	 		state={
	 		    ...state
	 		}
	 	break; 
	 	case categoryStatus.CATEGORY_GET_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	categories:action.payload.categories

	 	    }
	 	break; 
	 	case categoryStatus.GENDER_REQUEST:
	 	    state={
	 	    	...state
			}
	 	break; 
	 	case categoryStatus.GENDER_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	gender:action.payload.gender
			}
	 	break;
	  }

	 return state;
}