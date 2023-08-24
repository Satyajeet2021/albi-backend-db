import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import Header from "../component/Header";
import Footer from "../component/Footer"
import { useForm } from "react-hook-form";
import {LoginAction} from "../action";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import LoginPopup from "./LoginPopup"

import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from "react-google-login"


import {useDispatch,useSelector} from "react-redux";

const clientId = "678862051188-rkgs4epurpbqmjn2bt6oc22jppq5mnmt.apps.googleusercontent.com"

export default function Login() {
  const notify = () => toast.success('Jeni kyqur me sukses');
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
                          email:datax.email,
                          password:datax.password
                        };
                   dispatch(LoginAction(data))
                   notify();
                   setTimeout(()=>{navigate("/")},1000);

                   // toast("Wow so easy!");
            }

    //  const notify = () => { 
    //     toast.success('Login Success', {
    //         position: 'top-center',  
    //     }); 
    //  };

    
      const googleAuthSuccess=(res)=>{
        console.log(`[Login Success] currentUser:`,res.profileObj);
      }
      const googleAuthFailure=(res)=>{
        console.log(`[Login Failed] res:`,res);
      }
      const facebookAuthSuccess = (response) => {
      console.log(response);
      }
    
            
	return (
		<div>
     <Toaster />
 
       
		<Header/>
		<div className="flex-col container w-full sm:w-6/12 px-2 mx-auto sm:mt-48   mt-10 justify-center">
		<div class="w-full  sm:justify-center">
		<div className="flex items-center space-x-2 py-5">
		<h1 className="text-4xl"></h1>
	{/*	<svg
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
  </svg>*/}
		</div>
		<div className="sm:flex w-full sm:space-x-5">
			<div className="sm:w-6/12  h-76 mb-5 pb-2 sm:mb-0 sm:pb-0 relative" style={{backgroundColor:"#ebeffd"}}>
				<h1 className="font-semibold py-5 px-5">Llogaria ime</h1>
				<form onSubmit={handleSubmit(checkoutData)} className="px-5">
				<input type="text" className="w-full rounded-full py-2 px-5 mb-5" placeholder="Email" name="email" onChange={inputsHandler} value={inputField.email} {...register("email", { required: true})}/>
          {errors.email && <span className='validationError'>Email is Required</span>} 
				<input type="password" className="w-full rounded-full py-2 px-5 mb-5" placeholder="Fjalëkalimi" name="password" onChange={inputsHandler} value={inputField.passwod} {...register("password", { required: true})}/>
          {errors.password && <span className='validationError'>Password is Required</span>} 
				<div className="justify-center items-center"><p className="text-sm text-center pb-4">Keni harruar fjalëkalimin?</p></div>
			 <div className="relative bottom-2 w-full mb-2">
				<button className="justify-center items-center bg-black   font-semibold w-full  text-sm text-white p-4  text-center uppercase">Kyqu</button> 
        </div>
				</form>
			</div>
			<div className="sm:w-6/12  h-76 pb-3 sm:pb-0 relative" style={{backgroundColor:"#ededed"}}>
				<h1 className="font-semibold py-5 px-5">Krijoni llogari</h1>
				<div className="pb-10 sm:pb-16 mt-1 text-sm px-5">
				Në mënyrë që të thjeshtësoni procesin e blerjes ju duhet të krijoni llogari. Krijimi i llogarisë nënkupton dhënjen e informatave tuaja personale.
				</div>
				<div className="sm:absolute bottom-2 w-full px-5 sm:mb-2">
        <Link to="/reg"><p className="justify-center items-center bg-black relative bottom-0  font-semibold w-full  text-sm text-white p-4 text-center uppercase">Regjistrohu</p></Link></div>
			</div> 

		</div>

    </div>
  {/*start Authentication*/}
  <div className="text-center w-full  p-5 ">
    <p>Ose kyquni me</p>
    <div className="flex mx-auto p-5 justify-center w-full sm:items-center">
    <div className="flex items-center justify-center  space-x-2 text-xs">
    
    <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={facebookAuthSuccess}
        style={{text:"13px"}}
      />
 <GoogleLogin
   clientId={clientId}
   buttonText="Login"
   onSuccess={googleAuthSuccess}
   onFailure={googleAuthFailure}
   cookiePolicy={"single_host_origin"}
   isSignedIn={false}
   style={{marginTop:"500px"}}
   />
  


</div>
</div>

  </div>
  {/*end Authentication*/}


		</div>
    <div className="relative mt-12 ">
			<Footer/>
      </div>
		</div>
	)
}