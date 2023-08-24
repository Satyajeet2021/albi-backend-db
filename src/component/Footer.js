import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import "./footer.css";
import axios from '../helper/axios'

export default function Footer() {
    const [email,setEmail] = useState("");
  const sendNewsLetter =async()=>{
    const data = {email:email}
    const res = await axios.post("/newsletter",data)
    if(res.status===200){
      setEmail("");
      alert("Thank you for Subscribe... ");
    }
  }  
  const currentYear=()=> {
    return new Date().getFullYear();
}


 
useEffect(() => {
  window.scrollTo(0, 0);
}, [])




	return (
		<div className=''>
		<footer className="topFooter text-gray-600">
 
  <div className=" container mx-auto footer1">
    <div className=" w-full">
      <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center container mx-auto space-x-10 footer-ipad'>
        <div className='flex flex-auto w-64 align-center footer-mobile'>
        <div className="flex-col terms">
        <h6 className="footerlinks flex justify-center md:justify-start">
        <Link to="/terms-conditions">Kushtet e blerjes</Link> 
        </h6>
        <h6 className="footerlinks flex justify-center md:justify-start">
        <Link to="/privacy"> Kushtet e privatësisë </Link>
        </h6>
        <h6 className="footerlinks flex justify-center md:justify-start">
        <Link to="/contact-us"> Na kontaktoni </Link>
        </h6>
        <h6 className="footerlinks flex justify-center md:justify-start">
        <Link to="/faq"> Pyetjet e shpeshta </Link>
        </h6>
         
      </div>
      <div className="flex-col shipments">
        <h6 className="footerlinks flex justify-center md:justify-start">
        <Link to="/delivery">Transporti</Link>
        </h6>
        <h6 className="footerlinks flex justify-center md:justify-start">
        <Link to="/returns"> Politikat e kthimit </Link>
        </h6>
        <h6 className="footerlinks flex justify-center md:justify-start">
        <Link to="/our-partners">Partnerët tanë</Link>
        </h6>
        <h6 className="footerlinks flex justify-center md:justify-start">
        <a target="_blank" href="https://www.youtube.com/watch?v=ILgpsTxa7TU"> Si të blej </a> 
        </h6> 
        
         
      </div>
        </div>
      <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col flex-auto justify-around w-full sm:w-64 md:w-64 lg:w-32 xl:w-32 2xl:w-32 address">
        <p className="flex justify-center md:justify-start mob-fd">
         Zona e Re Industriale, Veternik <br></br> 10000 Prishtinë, Kosovë</p>
    
        <p className="flex justify-center md:justify-start ptt-3 mob-fd">
         048 300 800 <br></br>
         info@albionline.com
        </p> 
        
         
      </div>
     

      <div className="ipad-newsletter md:block hidden subscribe flex-col w-64 justify-center items-center sm:flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col">
      <div className="form-group form-group w-full subscribe-group ">
        <label for="email" className=''>
          <span>Abonohu për të rejat</span>
          </label>
          
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <svg width="19.642" height="15.714" viewBox="0 0 19.642 15.714">
                  <path id="Icon_material-email" data-name="Icon material-email" d="M20.678,6H4.964A1.962,1.962,0,0,0,3.01,7.964L3,19.75a1.97,1.97,0,0,0,1.964,1.964H20.678a1.97,1.97,0,0,0,1.964-1.964V7.964A1.97,1.97,0,0,0,20.678,6Zm0,3.928-7.857,4.911L4.964,9.928V7.964l7.857,4.911,7.857-4.911Z" transform="translate(-3 -6)"></path>
                  </svg>
                  </span>
                  </div>
                  <input placeholder="Email" name="email" type="email" className="form-control--newsletter" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  <div className="Footer__subscribe_send input-group-append">
                    <button className="input-group-text" onClick={(e)=>sendNewsLetter()}>Dërgo</button>
                    </div>
                    </div>
                    <div className="invalid-feedback">Please enter your email</div>
                    </div>


        {/* <h6 className="mb-4 flex justify-center md:justify-start">
       Subscribe to our newsletter
        </h6> 
        <h6 className="mb-4 flex justify-center md:justify-start">
        <input type="text" className="w-full border border-gray-300 bg-white rounded-full px-5 py-2" placeholder="Email"/>
        </h6>  */}
        
      </div>
      </div>
      


      
    </div>
  </div>

  <div className="container mx-auto text-center footersocial">
   <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  container mx-auto justify-between items-center ">
   	
   	<div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto socialbox">
   	<p className="socialicons">Social Media</p>
    <div className="flex space-x-8 iconlist">
    <a href={"https://www.facebook.com/albimallonline"} target="_blank">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0)">
            <path
              d="M23.94 11.97C23.94 5.36 18.58 0 11.97 0C5.36 0 0 5.36 0 11.97C0 17.86 4.28 22.87 10.1 23.79V15.43H7.06V11.97H10.1V9.33C10.1 6.33 11.89 4.67 14.62 4.67C15.52 4.68 16.41 4.76 17.3 4.9V7.84H15.79C14.84 7.71 13.97 8.38 13.85 9.33C13.83 9.46 13.83 9.58 13.84 9.71V11.96H17.16L16.63 15.42H13.84V23.78C19.65 22.87 23.94 17.86 23.94 11.97Z"
              fill="#4267B2"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="23.94" height="23.79" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </a>
      
        <a href="https://www.instagram.com/albionline/" target="_blank">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0)">
            <path
              d="M11.9 0C8.67 0 8.26 0.01 7 0.07C6.01 0.09 5.03 0.28 4.1 0.62C3.31 0.93 2.59 1.39 2 2C1.39 2.59 0.92 3.31 0.62 4.1C0.28 5.03 0.09 6 0.07 6.99C0.01 8.26 0 8.66 0 11.9C0 15.14 0.01 15.54 0.07 16.8C0.09 17.79 0.28 18.76 0.62 19.69C0.92 20.49 1.39 21.21 2 21.8C2.59 22.4 3.31 22.87 4.1 23.17C5.02 23.52 6 23.7 6.99 23.72C8.26 23.78 8.66 23.79 11.89 23.79C15.12 23.79 15.53 23.78 16.79 23.72C17.78 23.7 18.75 23.51 19.68 23.17C21.28 22.55 22.54 21.29 23.16 19.69C23.51 18.77 23.69 17.79 23.71 16.8C23.77 15.53 23.78 15.13 23.78 11.9C23.78 8.67 23.76 8.26 23.71 7C23.69 6.01 23.51 5.03 23.17 4.1C22.87 3.31 22.4 2.59 21.8 2C21.21 1.39 20.48 0.92 19.69 0.62C18.77 0.27 17.79 0.09 16.8 0.07C15.53 0.01 15.13 0 11.9 0ZM11.9 2.14C15.08 2.14 15.45 2.16 16.71 2.21C17.46 2.22 18.21 2.36 18.92 2.62C19.96 3.02 20.78 3.84 21.17 4.88C21.43 5.59 21.57 6.33 21.58 7.09C21.64 8.35 21.65 8.72 21.65 11.9C21.65 15.08 21.64 15.45 21.58 16.71C21.57 17.46 21.43 18.21 21.16 18.92C20.97 19.44 20.66 19.9 20.27 20.29C19.89 20.68 19.42 20.99 18.9 21.18C18.19 21.44 17.44 21.58 16.68 21.59C15.42 21.65 15.04 21.66 11.86 21.66C8.68 21.66 8.3 21.65 7.04 21.59C6.28 21.58 5.53 21.44 4.82 21.17C4.3 20.98 3.84 20.67 3.45 20.28C3.05 19.9 2.75 19.43 2.56 18.91C2.3 18.2 2.16 17.45 2.14 16.69C2.09 15.44 2.08 15.05 2.08 11.89C2.08 8.73 2.1 8.33 2.14 7.07C2.15 6.31 2.29 5.56 2.56 4.86C2.75 4.34 3.05 3.87 3.45 3.49C3.83 3.09 4.3 2.79 4.82 2.6C5.52 2.34 6.27 2.2 7.02 2.18C8.28 2.13 8.66 2.12 11.84 2.12L11.9 2.14ZM11.9 5.79C8.53 5.79 5.79 8.52 5.78 11.89C5.78 15.26 8.51 18 11.88 18.01C15.25 18.01 17.99 15.28 18 11.91C18 8.53 15.27 5.79 11.9 5.79ZM11.9 15.86C9.71 15.86 7.93 14.09 7.93 11.9C7.93 9.71 9.7 7.93 11.89 7.93C14.08 7.93 15.86 9.7 15.86 11.89C15.86 11.89 15.86 11.89 15.86 11.9C15.86 14.09 14.09 15.86 11.9 15.86ZM19.67 5.55C19.67 6.34 19.03 6.98 18.24 6.98C17.45 6.98 16.81 6.34 16.81 5.55C16.81 4.76 17.45 4.12 18.24 4.12C19.03 4.12 19.67 4.76 19.67 5.55Z"
              fill="#8A3AB9"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="23.78" height="23.79" fill="white" />
            </clipPath>
          </defs>
        </svg>
        </a>
      <a href="https://www.youtube.com/channel/UCto7Tt8vP_rmfp1CtEgUFaQ/videos" target="_blank">
        <svg  viewBox="0 -77 512.00213 512" width={24} height={24} >
          <path
            d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
            fill="#f00"
          />
          <path
            d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
            fill="#fff"
          />
        </svg>
        </a>
      
      <a href="https://www.linkedin.com/company/albi-online/" target="_blank">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
          <path
            d="M20.4491 20.4495H16.8931V14.8804C16.8931 13.5525 16.8694 11.8429 15.0436 11.8429C13.1915 11.8429 12.9081 13.2899 12.9081 14.7838V20.4491H9.35213V8.99696H12.7658V10.562H12.8137C13.1553 9.97787 13.649 9.49732 14.2421 9.17154C14.8353 8.84576 15.5057 8.68697 16.1819 8.71206C19.7861 8.71206 20.4506 11.0828 20.4506 14.167L20.4491 20.4495ZM5.33963 7.43162C4.19991 7.43181 3.27581 6.50799 3.27562 5.36828C3.27544 4.22856 4.19916 3.30446 5.33887 3.30428C6.47859 3.304 7.40269 4.22781 7.40287 5.36753C7.40297 5.91484 7.18566 6.43978 6.79872 6.82687C6.41179 7.21396 5.88694 7.43149 5.33963 7.43162ZM7.11769 20.4496H3.55791V8.99696H7.11759L7.11769 20.4496ZM22.2219 0.00174674H1.77103C0.804469 -0.00912826 0.0118125 0.765153 0 1.73171V22.2679C0.0114375 23.235 0.804 24.01 1.77094 23.9999H22.2219C23.1909 24.0119 23.9866 23.2368 24 22.2679V1.73012C23.9862 0.761684 23.1905 -0.0125033 22.2219 0.00015299"
            fill="#0A66C2"
          />
        </svg>
        </a>
    
    </div>
</div>
<div className="md:block subscribe flex-col justify-center items-center sm:flex-row md:flex-row lg:flex-col xl:flex-col 2xl:flex-col">
      <div className="form-group form-group w-full subs-form">
        <label for="email" class="subs-label">
          <span>Abonohu për të rejat</span>
          </label>
          
          <div className="input-group flex">
                  <div className="flex items-center py-1 bg-white px-2 space-x-2 rounded-full">
            <div className="input-group-prepend">
              <span className="bg-white py-2 px-2">
                <svg width="19.642" height="15.714" viewBox="0 0 19.642 15.714">
                  <path id="Icon_material-email" data-name="Icon material-email" d="M20.678,6H4.964A1.962,1.962,0,0,0,3.01,7.964L3,19.75a1.97,1.97,0,0,0,1.964,1.964H20.678a1.97,1.97,0,0,0,1.964-1.964V7.964A1.97,1.97,0,0,0,20.678,6Zm0,3.928-7.857,4.911L4.964,9.928V7.964l7.857,4.911,7.857-4.911Z" transform="translate(-3 -6)"></path>
                  </svg>
                  </span>
                  </div>
                  <input 
                   placeholder="Email"
                   className="w-6/12 py-2"
                   name="email" />
                  <div className=" ">
                    <span className="input-group-text text-right">Dërgo</span>
                    </div>
                    </div>
                    </div>
                    <div className="invalid-feedback">Please enter your email</div>
                    </div>


        {/* <h6 className="mb-4 flex justify-center md:justify-start">
       Subscribe to our newsletter
        </h6> 
        <h6 className="mb-4 flex justify-center md:justify-start">
        <input type="text" className="w-full border border-gray-300 bg-white rounded-full px-5 py-2" placeholder="Email"/>
        </h6>  */}
        
      </div>
{/*##########*/}
<div className="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto">
<p className="text-left socialicons">Mënyrat e pagesës</p>
	<div className="flex space-x-5">
  <img

  className="h-8 w-13"
    src="data:image/png;base64,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"
    alt="Visa"
  />
  <img
  className="h-8 w-13"
    src="data:image/png;base64,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"
    alt="VisaElectron"
  />
  <svg width={54} height={33} viewBox="0 0 54 33" fill="none">
    <rect width={54} height={33} fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0"
          transform="translate(0 -0.0113636) scale(0.0078125 0.0127841)"
        />
      </pattern>
      <image
        id="image0"
        width={128}
        height={80}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
  <svg width={53} height={29} viewBox="0 0 53 29" fill="none">
    <path
      d="M22.7894 27.7599C23.2659 27.1956 30.3254 23.8272 31.3228 22.2367L49.642 22.2367C51.5039 22.2367 53 20.8411 53 19.1274V3.10924C53 1.3853 51.4928 1.38493e-06 49.642 1.30937e-06L17.5696 0C15.7077 -7.60106e-08 14.2116 1.39556 14.2116 3.10923L14.2116 10.0871L16.8492 9.79973C16.9379 9.70738 16.9933 9.64581 17.0819 9.55346V6.47501C17.5252 6.57762 18.0129 6.60841 18.5116 6.52631C19.8969 6.30056 21.0162 5.28467 21.2711 4.00199C21.3708 3.52996 21.3376 3.06819 21.2268 2.64747L46.1954 2.64747C46.1622 2.83218 46.14 3.02714 46.14 3.22211C46.14 4.96657 47.6694 6.37239 49.5423 6.37239C49.7418 6.37239 49.9413 6.35187 50.1407 6.32108V15.8848C49.9413 15.854 49.7418 15.8335 49.5423 15.8335C47.6583 15.8335 46.14 17.2393 46.14 18.9838C46.14 19.1787 46.1622 19.3737 46.1954 19.5584L14.8211 19.5584C15.6856 18.4707 18.3897 17.2598 18.3897 17.2598C18.3897 17.2598 25.5821 16.6647 25.5821 13.2886C25.5821 13.1963 25.5821 13.1142 25.5711 13.0218C25.5711 13.0218 25.3383 10.4667 17.4477 12.5806L8.68148 13.5247C8.68148 13.5247 5.21981 14.5816 1.92834 17.4959H0.953088C0.432215 17.4959 4.85352e-07 17.8858 4.62299e-07 18.3783L0 25.3485C-2.11311e-08 25.8 0.36572 26.1694 0.842263 26.2207C4.25564 26.5594 15.6523 27.8728 17.5806 28.6424C17.891 28.7656 18.2013 28.8682 18.5337 28.9092C19.6198 29.0837 21.6146 29.1452 22.7894 27.7599Z"
      fill="black"
    />
    <path
      d="M42.0616 11.4621C42.0616 12.5049 42.9745 13.3502 44.1007 13.3502C45.2269 13.3502 46.1399 12.5049 46.1399 11.4621C46.1399 10.4193 45.2269 9.57401 44.1007 9.57401C42.9745 9.57401 42.0616 10.4193 42.0616 11.4621Z"
      fill="black"
    />
    <path
      d="M33.3732 4.2996C29.8601 4.2996 26.9232 6.57765 26.1807 9.62532C26.3691 9.71767 26.5353 9.81002 26.7127 9.9229C28.2974 10.9285 28.5856 12.2933 28.6299 12.7551C28.6521 12.9398 28.6632 13.1245 28.6632 13.3092C28.6632 13.9659 28.5302 14.8587 27.9982 15.7822C29.3392 17.106 31.2564 17.9371 33.3732 17.9371C37.4404 17.9371 40.743 14.8792 40.743 11.1132C40.743 7.34726 37.4404 4.2996 33.3732 4.2996Z"
      fill="black"
    />
  </svg>
  <svg width={38} height={35} viewBox="0 0 38 35" fill="none">
    <path
      d="M16.8341 26.9004C17.501 27.0379 17.8705 27.6846 17.685 28.2955C17.4794 28.9159 16.852 29.1903 16.2909 29.0264C15.6487 28.8201 15.3804 28.1968 15.5466 27.6583C15.7329 27.0869 16.285 26.7994 16.8341 26.9004Z"
      fill="black"
    />
    <path
      d="M16.3973 24.3705C17.3845 24.5519 18.0886 23.4962 17.5447 22.6848C17.1871 22.1654 16.4539 22.022 15.907 22.4456C15.176 23.0499 15.4778 24.1832 16.3973 24.3705Z"
      fill="black"
    />
    <path
      d="M16.834 17.5358C17.506 17.6741 17.8712 18.3303 17.6849 18.9302C17.4859 19.5433 16.86 19.8279 16.2908 19.6618C15.6545 19.4577 15.3795 18.8432 15.5464 18.293C15.7379 17.7172 16.2893 17.4356 16.834 17.5358Z"
      fill="black"
    />
    <path
      d="M12.9163 28.2955C13.1034 27.6795 12.7278 27.0364 12.0654 26.9004C11.5163 26.7994 10.9642 27.0869 10.7779 27.6583C10.6117 28.1968 10.88 28.8201 11.5223 29.0264C12.0833 29.1903 12.7107 28.9159 12.9163 28.2955Z"
      fill="black"
    />
    <path
      d="M12.7761 22.6848C13.3208 23.4977 12.6145 24.5519 11.6287 24.3705C10.7093 24.1832 10.4075 23.0499 11.1384 22.4456C11.6816 22.0249 12.4155 22.161 12.7761 22.6848Z"
      fill="black"
    />
    <path
      d="M12.9163 18.9302C13.1033 18.3281 12.7337 17.6733 12.0654 17.5358C11.5185 17.4356 10.9686 17.7202 10.7778 18.293C10.6087 18.8505 10.8956 19.4643 11.5229 19.6618C12.0691 19.825 12.7121 19.5594 12.9163 18.9302Z"
      fill="black"
    />
    <path
      d="M7.2968 26.9004C7.95919 27.0364 8.33472 27.6795 8.1477 28.2955C7.93908 28.9247 7.30798 29.1881 6.75363 29.0264C6.11136 28.8201 5.84312 28.1953 6.00928 27.6583C6.19332 27.0928 6.74171 26.7987 7.2968 26.9004Z"
      fill="black"
    />
    <path
      d="M7.6045 24.2622C8.18791 23.9498 8.37419 23.2321 8.0076 22.6848C7.454 21.8808 6.18734 22.1149 5.98244 23.0799C5.81032 23.982 6.7469 24.6924 7.6045 24.2622Z"
      fill="black"
    />
    <path
      d="M7.29666 17.5358C7.96726 17.6741 8.33385 18.3296 8.14757 18.9302C7.95086 19.5367 7.32796 19.8294 6.75349 19.6618C6.1127 19.4563 5.84371 18.8395 6.00912 18.293C6.19913 17.7231 6.74603 17.4348 7.29666 17.5358Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.2314 29.1471V17.4414C33.2314 16.8356 32.7307 16.344 32.1137 16.344L22.5765 16.344C21.9595 16.344 21.4588 16.8356 21.4588 17.4414V29.1471C21.4588 29.7529 21.9595 30.2445 22.5765 30.2445L32.1137 30.2445C32.7307 30.2445 33.2314 29.7529 33.2314 29.1471ZM23.6941 28.0497V18.5388L30.9961 18.5388V28.0497H23.6941Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.3098 3.29224V11.6617L34.6471 11.6617C36.4956 11.6617 38 13.1388 38 14.9539V31.7078C38 33.5229 36.4956 35 34.6471 35L3.35294 35C1.50435 35 0 33.5229 0 31.7078V14.9539C0 13.1388 1.50435 11.6617 3.35294 11.6617H4.76863V3.29223C4.76863 1.47712 6.27298 0 8.12157 0H17.9569C19.8055 0 21.3098 1.47712 21.3098 3.29224ZM3.35294 13.8565C2.73675 13.8565 2.23529 14.3489 2.23529 14.9539L2.23529 31.7078C2.23529 32.3128 2.73675 32.8052 3.35294 32.8052H34.6471C35.2633 32.8052 35.7647 32.3128 35.7647 31.7078V14.9539C35.7647 14.3489 35.2633 13.8565 34.6471 13.8565L3.35294 13.8565ZM16.625 2.33333H14.25V11.6667H16.625V2.33333Z"
      fill="black"
    />
  </svg>
</div>

</div>
{/*##########*/}
   </div>
    
  </div>

  <div className="container mx-auto text-center footercopyright">
    {/*<span>All authorized rights © Albi Online 2022</span>*/}
    <a
      className=""
      href="#"
    >
     All authorized rights © Albi Online {currentYear()}
    </a>
  </div>
</footer>


			
		</div>
	)
}