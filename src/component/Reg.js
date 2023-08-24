import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer"
import { useForm } from "react-hook-form";
import {LoginAction,RegAction} from "../action";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";

export default function Reg() {
		 const dispatch = useDispatch()
	 const navigate = useNavigate();
	 const { register, handleSubmit, formState: { errors } } = useForm();
        const obj = {}
        const [inputField , setInputField] = useState(obj) 
        const inputsHandler = (e) =>{
            console.log(e.target.name)
               let name = e.target.name; 
               let value = e.target.value;
               inputField[name] = value;
               setInputField(inputField);
             //setInputField( {[e.target.name]: e.target.value} )
            }

            const checkoutData=(datax)=>{ 
                var data={
                					fname:datax.fname,
                					lname:datax.lname,
                          email:datax.email,
                          address:datax.address,
                          city:datax.city,
                          dateOfBirth:datax.dob,
                          gender:datax.gender,
                          phoneNumber:datax.phone,
                          password:datax.password,
                          role:"Buyer"
                        };
                        console.log(data)
                   			dispatch(RegAction(data))
                   			navigate("/");
							alert("Registration Success");
            }

	return (
		<div>
		<Header/>
		<div className="flex container mx-auto items-center px-5 py-10 w-6/12 mob-reg">
		<div className="flex-col">
			<div className="flex text-left justify-center items-center space-x-2">
			<div className="flex space-x-2 justify-center items-center">
				<h1 className="text-3xl create-ac">Krijoni llogari</h1>
				<svg
    width="24"
    height="22.016"
    viewBox="0 0 13.99 17.016"
    className="HeadingTitle__icon"
  >
    <path
      id="Path_18"
      data-name="Path 18"
      d="M2.005,79.741a7.1,7.1,0,0,1,13.99,0,12.359,12.359,0,0,1-13.99,0Zm3.329-11.18A3.666,3.666,0,1,1,9,72.227,3.669,3.669,0,0,1,5.334,68.561Z"
      transform="translate(-2.005 -64.895)"
    />
  </svg>
			</div>	
				{/* <Link to="/business"><p className="flex border text-sm border-gray-300 rounded-full py-1 px-10 space-x-2"><span className="font-bold px-2">+</span> Register as a business</p></Link> */}
			</div>

		{/*Form*/}
		<form onSubmit={handleSubmit(checkoutData)} className="reg-form">
		<div >
		<div className="flex space-x-5 w-full p-2 my-2 form-fields">
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Emri</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2"  name="fname" onChange={inputsHandler} value={inputField.fname} {...register("fname", { required: true})}/>
          {errors.fname && <span className='validationError'>Firstname is Required</span>} 
			</div>  
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Mbiemri</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" name="lname" onChange={inputsHandler} value={inputField.lname} {...register("lname", { required: true})}/>
          {errors.lname && <span className='validationError'>Lastname is Required</span>} 
			</div>  
 
		</div>
		<div className="flex space-x-5 w-full p-2 my-2  form-fields">
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Email</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" name="email" onChange={inputsHandler} value={inputField.email} {...register("email", { required: true})}/>
          {errors.email && <span className='validationError'>Email is Required</span>} 
			</div>  
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Numri i telefonit</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" name="phone" onChange={inputsHandler} value={inputField.phone} {...register("phone", { required: true})}/>
          {errors.phone && <span className='validationError'>Phone is Required</span>} 
			</div>  
  		</div>
 
		<div className="flex space-x-5 w-full p-2 my-2  form-fields">
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Adresa</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" name="address" onChange={inputsHandler} value={inputField.address} {...register("address", { required: true})}/>
          {errors.address && <span className='validationError'>Address is Required</span>} 
			</div>  
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Qyteti</div>
			<input type="text" className="bg-gray-200 rounded-full w-full p-2" name="city" onChange={inputsHandler} value={inputField.city} {...register("city", { required: true})}/>
          {errors.city && <span className='validationError'>City is Required</span>} 
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2  form-fields">
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Fjalëkalimi</div>
			<input type="password" className="bg-gray-200 rounded-full w-full p-2" name="password" onChange={inputsHandler} value={inputField.password} {...register("password", { required: true})}/>
          {errors.password && <span className='validationError'>Password is Required</span>} 
			</div>    
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2  form-fields">
			<div className="flex-col w-12/12 fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Ditëlindja</div>
			<div className="flex space-x-5 date-filed">
			<input type="date" className="bg-gray-200 rounded-full w-12/12 p-2" name="dob" onChange={inputsHandler} value={inputField.dob} {...register("dob", { required: true})}/>
          {errors.dob && <span className='validationError'>Date of Birth is Required</span>}  
			</div>  
			</div>  
			<div className="flex-col w-12/12  fields">
			<div className="uppercase text-sm p-3 font-semibold text-gray-400">Gjinia</div>
			<select className="bg-gray-200 rounded-full w-full p-2" name="gender" onChange={inputsHandler} value={inputField.gender} {...register("gender", { required: true})}>
			<option>Mashkull</option>
			<option>Femër</option>
			{/* <option>Kids</option> */}
			<option>Unisex</option>
			</select>
          {errors.gender && <span className='validationError'>Gender is Required</span>} 
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2  form-fields">
			<div className="flex-col w-12/12  fields"> 
			 <input type="checkbox" className="text-sm"/><Link to="#">Unë pajtohem me kushtet e përdorimit</Link>
			</div>  
  		</div>
		<div className="flex space-x-5 w-full p-2 my-2  form-fields">
			<div className="flex-col w-6/12"> 
			<button className="px-8 py-3  border border-gray-800 uppercase text-sm font-semibold">Regjistrohu</button>
			</div>  
  		</div>
  		 
		</div>
		</form>



		</div>
		</div>
		<Footer/>
			
		</div>
	)
}