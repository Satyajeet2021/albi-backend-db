import React,{useEffect,useState} from 'react';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import './Checkout.css';
import {postCheckout} from "../../action";
import {useDispatch,useSelector} from "react-redux";

import { useNavigate } from "react-router-dom";
import Delivery from '../Delivery';
import { useForm } from "react-hook-form";
import axios from "../../helper/axios"



export default function Checkout(){
      const orderIdGen = Math.floor(1000000000+Math.random()*9000000000);
      const transId    = Math.floor(100000000000000+Math.random()*900000000000000)+(Math.random() + 1).toString(36).substring(7);
      const orderId    = "OD"+orderIdGen;
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
        const auth = useSelector(state=>state?.productData?.users);


          const navigate = useNavigate();
          const [fname,setfname] = useState();
          const [lname,setlname] = useState();
          const [email,setemail] = useState();
          const [password,setPassword] = useState();
          const [confermPassword,setConfermPassword] = useState();
          const [address,setaddress] = useState();
          const [city,setcity] = useState();
          const [phoneNumber,setphoneNumber] = useState();
          const [anyComment,setanyComment] = useState();
          const [paymentParams,setPaymentParams] = useState([]);
          // const [paymentMethod,setpaymentMethod] = useState("cod");
          const [productList,setproductList] = useState([]);
          const dispatch = useDispatch()
          const cartData = useSelector(state=>state.cart?.cartItems);
          

        //   const [deliverMode,setdeliverMode] = useState(0);
          const [deliverMode,setdeliverMode] = useState(["t","x",3]);
          const [paymentMode,setpaymentMode] = useState("");
          const [paymentModex,setpaymentModex] = useState("");
          const [deliverModex,setdeliverModex] = useState("");
          

          const extra = 3;

            const cart = useSelector((state) => state.cart);
            var sum=0;
            var finalObj = [];
            for(var item in cart.cartItems){
                finalObj.push(cart.cartItems[item]);
            } 
            
            for (let key in cart.cartItems) {
                sum += cart.cartItems[key].totalPrice; 
            } 

            const vendorIdData = cart?.cartItems[0]?.vendorId;
            
            
            const DeliveryMode=(e)=>{
                // setdeliverMode('')
                setdeliverMode({...deliverMode, [e.target.name]: e.target.value})
                console.log("-----data-----------", e);
                // setdeliverMode(e.target.value);
                console.log("-----deliverMode-----------", deliverMode.shippingMethod);
                console.log("-----deliverMode1-----------", deliverMode.shippingMethod1);
               }

            const checkoutData=async(datax)=>{ 
                if(paymentMode==""){
                    setpaymentModex("Please select payment method");
                }else if(deliverMode?.length<0 || deliverMode==null){
                    setdeliverModex("Please Delivery Mode method");
                }else{
                var data={fname:datax.fname,
                          lname:datax.lname,
                          email:auth?.user.email,
                          // confermPassword:datax.passwordConfirm,
                          address:datax.address1,
                          city:datax.city,
                          phoneNumber:datax.phone,
                          anyComment:anyComment,
                          paymentMode:paymentMode,
                          productList:finalObj,
                          deliverMode:finalObj[0].totalPrice>50?0:3,
                          vendorId:vendorIdData,
                          oid:paymentParams?.oid,
                          transId: paymentParams?.transId,
                        };
                          
                //console.log("---------checkout data--------------", data)
                // const res = dispatch(postCheckout(data)); 
                // console.log("DISPATCH RESPONSE DATA =============>",res)
                const res = await axios.post(`/checkout`, { data });
                console.log("RESSSSSSSSSSSSSSSS",res.data)

      if (res.status === 200) {
                 if(paymentMode==="credit_card"){
                 document.getElementById("pymntForm").submit();
                }else{
                    // if(paymentParams?.transId?.length>0){
                 // navigate("/order-success?transId="+paymentParams?.transId);   
                    // }else{
                    navigate("/order-success");   
                    // }
                }
            }else{
                    alert("Something went wrong!")
                }
             }
            }

            
            const radioHandler = (event) => {
                // console.log("event value =====", event.target.value)
                setdeliverMode(event.target.value)
                // if(cartData[0].totalPrice < 50) {
                     
                //     setdeliverMode(parseInt(3));
                // }else{
                // setdeliverMode(parseInt(0));
                // }

                if(event.target.value=="transportCharge"){

                }
                
            };

            const radioPaymentMode = (event) => {
                console.log("------radioPaymentMode------------",event.target.value);
                setpaymentMode(event.target.value);

                
            };
const paymentApiData=async()=>{
    var ttlPrice = cartData[0].totalPrice>50?parseFloat(cartData[0].totalPrice): parseFloat(cartData[0].totalPrice + deliverMode[2]).toFixed(2)
      
     //const data = {clientId:"530000136",transId:transId,oid:orderId,amount:parseFloat(cartData[0].totalPrice + deliverMode).toFixed(2)}
     // const data = {clientId:"530015548",transId:transId,oid:orderId,amount:parseFloat(cartData[0].totalPrice + deliverMode).toFixed(2)}
     const data = {clientId:"530015548",transId:transId,oid:orderId,amount:ttlPrice}
    // var res = await axios.post("https://management.albionline.com/generatehash/",data);
    var res = await axios.post("https://management.albicommerce.com/generateHash.php",data);
    // var res = await axios.get("https://management.albionline.com/generatehash/");
    setPaymentParams(res.data);

}

useEffect(()=>{
    paymentApiData();
},[])



  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit(checkoutData)}>
      <div className='container mx-auto'>
      <div className="CheckoutForm pl-4 pr-4">
    <div className="HeadingTitle">
        <h1>Faturimi dhe dërgimi</h1>
    </div>
    <div className="w-full">
        <div className="w-12/12">
            <div className="Checkout__address-actions">
                <h4 className="Checkout__address-actions__title">TË DHËNAT PERSONALE</h4>
             {/*   <button className="Checkout__address-actions__delivery hidden lg:block">Ship to another address</button>
                <button className="Checkout__address-actions__delivery hidden lg:block">Register as a business</button>*/}
            </div>
        </div>
    </div>
    <div className="flex flex-col lg:flex-row w-full formsection">
        <div className="w-full lg:w-6/12 leftsection">
            <div className="form-group form-group">
                <label for="billingFirstName" className="">Emri </label>
                <input id="billingFirstName" name="fname" type="text" className="form-control form-control" ref={register} onChange={inputsHandler} value={inputField.fname} {...register("fname", { required: true})}/>
                 {errors.fname && <span className='validationError'>Firstname is Required</span>}
            </div>
              <div id="fname" className="invalid-feedback">Name is required</div>
        <div className="form-group form-group">
            <label for="billingLastName" className="">Mbiemri</label>
            <input id="billingLastName" name="lname" type="text" className="form-control form-control" ref={register} onChange={inputsHandler} value={inputField.lname} {...register("lname", { required: true})}/>
                 {errors.lname && <span className='validationError'>Surname is Required</span>}
        </div>
        {/*<div className="form-group form-group">
            <label for="email" className="">Email</label>
            <input id="email" name="email" type="text" className="form-control form-control" onChange={inputsHandler} value={inputField.email} {...register("email", { required: true})}/>
                 {errors.email && <span className='validationError'>Email is Required</span>}
        </div>*/}
       {/* <div className="form-group form-group">
            <label for="password" className="">Fjalëkalimi</label>
            <input id="password" name="password" type="password" className="form-control form-control" onChange={inputsHandler} value={inputField.password} {...register("password", { required: true})}/>
                 {errors.password && <span className='validationError'>Password is Required</span>}
        </div>*/}
        {/* <div className="form-group form-group">
        <label for="passwordConfirm" className="">Confirm Password</label>
            <input id="passwordConfirm" name="passwordConfirm" type="password" className="form-control form-control" onChange={inputsHandler} value={inputField.passwordConfirm} {...register("passwordConfirm", { required: true})}/>
                 {errors.passwordConfirm && <span className='validationError'>Confirm Password is Required</span>}
        </div> */}
        <div className="form-group form-group">
            <label for="billingAddress" className="">Adresa</label>
            <input id="billingAddress" name="address1" type="text" className="form-control form-control" ref={register} onChange={inputsHandler} value={inputField.address1} {...register("address1", { required: true})}/>
                 {errors.address1 && <span className='validationError'>Address is Required</span>}
        </div>
        <div className="form-group form-group">
            <div className="form-group">
                <label for="billing.city" className="">Qyteti</label>
                <select id="city" className="form-control" ref={register} onChange={inputsHandler} value={inputField.city} {...register("city", { required: true})}>
                    <option value="" selected="">Zgjidhni qytetin</option>
                    <option value="Prishtina">Prishtina</option>
                    <option value="Prizren">Prizren</option>
                    <option value="Ferizaj">Ferizaj</option>
                    <option value="Pejë">Pejë</option>
                    <option value="Gjakovë">Gjakovë</option>
                    <option value="Gjilan">Gjilan</option>
                    <option value="Mitrovicë">Mitrovicë</option>
                    <option value="Vushtrri">Vushtrri</option>
                    <option value="Suharekë">Suharekë</option>
                    <option value="Rahovec">Rahovec</option>
                    <option value="Drenas">Drenas</option>
                    <option value="Podujeva">Podujeva</option>
                    <option value="Lipjan">Lipjan</option>
                    <option value="Malishevë">Malishevë</option>
                    <option value="Kamenicë">Kamenicë</option>
                    <option value="Viti">Viti</option>
                    <option value="Deçan">Deçan</option>
                    <option value="Istog">Istog</option>
                    <option value="Klinë">Klinë</option>
                    <option value="Skenderaj">Skenderaj</option>
                    <option value="Dragash">Dragash</option>
                    <option value="Fushë Kosovë">Fushë Kosovë</option>
                    <option value="Kaçanik">Kaçanik</option>
                    <option value="Shtime">Shtime</option>
                    <option value="Obiliq">Obiliq</option>
                    <option value="Leposaviq">Leposaviq</option>
                    <option value="Graçanicë">Graçanicë</option>
                    <option value="Han i Elezit">Han i Elezit</option>
                    <option value="Zveçan">Zveçan</option>
                    <option value="Shtërpcë">Shtërpcë</option>
                    <option value="Novobërdë">Novobërdë</option>
                    <option value="Zubin">Zubin</option>
                    <option value="Junik">Junik</option>
                    <option value="Mamusha">Mamusha</option>
                    <option value="Ranillug">Ranillug</option>
                    <option value="Kllokoti">Kllokoti</option>
                    <option value="Parteshi">Parteshi</option>
                </select>
            
                 {errors.city && <span className='validationError'>City is Required</span>}
            </div>
        </div>
        <div className="PhoneField">
            <div className="form-group form-group">
                <label for="registerTelephone" className="">Numri i telefonit</label>
            <div className="PhoneField__wrapper">
                <select id="registerPrefixTelephone" className="PhoneField__wrapper--select form-control" aria-invalid="false">
                    <option value="+383" selected="">🇽🇰+383</option>
                    <option value="+355">🇦🇱+355</option>
                    <option value="+93">🇦🇫+93</option>
                    <option value="+358">🇦🇽+358</option>
                    <option value="+213">🇩🇿+213</option>
                    <option value="+1684">🇦🇸+1684</option>
                    <option value="+376">🇦🇩+376</option>
                    <option value="+244">🇦🇴+244</option>
                    <option value="+1264">🇦🇮+1264</option>
                    <option value="+672">🇦🇶+672</option>
                    <option value="+1268">🇦🇬+1268</option>
                    <option value="+54">🇦🇷+54</option>
                    <option value="+374">🇦🇲+374</option>
                    <option value="+297">🇦🇼+297</option>
                    <option value="+61">🇦🇺+61</option>
                    <option value="+43">🇦🇹+43</option>
                    <option value="+994">🇦🇿+994</option>
                    <option value="+1242">🇧🇸+1242</option>
                    <option value="+973">🇧🇭+973</option>
                    <option value="+880">🇧🇩+880</option>
                    <option value="+1246">🇧🇧+1246</option>
                    <option value="+375">🇧🇾+375</option>
                    <option value="+32">🇧🇪+32</option>
                    <option value="+501">🇧🇿+501</option>
                    <option value="+229">🇧🇯+229</option>
                    <option value="+1441">🇧🇲+1441</option>
                    <option value="+975">🇧🇹+975</option>
                    <option value="+591">🇧🇴+591</option>
                    <option value="+387">🇧🇦+387</option>
                    <option value="+267">🇧🇼+267</option>
                    <option value="+47">🇧🇻+47</option>
                    <option value="+55">🇧🇷+55</option>
                    <option value="+246">🇮🇴+246</option>
                    <option value="+673">🇧🇳+673</option>
                    <option value="+359">🇧🇬+359</option>
                    <option value="+226">🇧🇫+226</option>
                    <option value="+257">🇧🇮+257</option>
                    <option value="+855">🇰🇭+855</option>
                    <option value="+237">🇨🇲+237</option>
                    <option value="+1">🇨🇦+1</option>
                    <option value="+238">🇨🇻+238</option>
                    <option value="+345">🇰🇾+345</option>
                    <option value="+236">🇨🇫+236</option>
                    <option value="+235">🇹🇩+235</option>
                    <option value="+56">🇨🇱+56</option>
                    <option value="+86">🇨🇳+86</option>
                    <option value="+61">🇨🇽+61</option>
                    <option value="+61">🇨🇨+61</option>
                    <option value="+57">🇨🇴+57</option>
                    <option value="+269">🇰🇲+269</option>
                    <option value="+242">🇨🇬+242</option>
                    <option value="+243">🇨🇩+243</option>
                    <option value="+682">🇨🇰+682</option>
                    <option value="+506">🇨🇷+506</option>
                    <option value="+225">🇨🇮+225</option>
                    <option value="+385">🇭🇷+385</option>
                    <option value="+53">🇨🇺+53</option>
                    <option value="+357">🇨🇾+357</option>
                    <option value="+420">🇨🇿+420</option>
                    <option value="+45">🇩🇰+45</option>
                    <option value="+253">🇩🇯+253</option>
                    <option value="+1767">🇩🇲+1767</option>
                    <option value="+1849">🇩🇴+1849</option>
                    <option value="+593">🇪🇨+593</option>
                    <option value="+20">🇪🇬+20</option>
                    <option value="+503">🇸🇻+503</option>
                    <option value="+240">🇬🇶+240</option>
                    <option value="+291">🇪🇷+291</option>
                    <option value="+372">🇪🇪+372</option>
                    <option value="+251">🇪🇹+251</option>
                    <option value="+500">🇫🇰+500</option>
                    <option value="+298">🇫🇴+298</option>
                    <option value="+679">🇫🇯+679</option>
                    <option value="+358">🇫🇮+358</option>
                    <option value="+33">🇫🇷+33</option>
                    <option value="+594">🇬🇫+594</option>
                    <option value="+689">🇵🇫+689</option>
                    <option value="+262">🇹🇫+262</option>
                    <option value="+241">🇬🇦+241</option>
                    <option value="+220">🇬🇲+220</option>
                    <option value="+995">🇬🇪+995</option>
                    <option value="+49">🇩🇪+49</option>
                    <option value="+233">🇬🇭+233</option>
                    <option value="+350">🇬🇮+350</option>
                    <option value="+30">🇬🇷+30</option>
                    <option value="+299">🇬🇱+299</option>
                    <option value="+1473">🇬🇩+1473</option>
                    <option value="+590">🇬🇵+590</option>
                    <option value="+1671">🇬🇺+1671</option>
                    <option value="+502">🇬🇹+502</option>
                    <option value="+44">🇬🇬+44</option>
                    <option value="+224">🇬🇳+224</option>
                    <option value="+245">🇬🇼+245</option>
                    <option value="+592">🇬🇾+592</option>
                    <option value="+509">🇭🇹+509</option>
                    <option value="+672">🇭🇲+672</option>
                    <option value="+379">🇻🇦+379</option>
                    <option value="+504">🇭🇳+504</option>
                    <option value="+852">🇭🇰+852</option>
                    <option value="+36">🇭🇺+36</option>
                    <option value="+354">🇮🇸+354</option>
                    <option value="+91">🇮🇳+91</option>
                    <option value="+62">🇮🇩+62</option>
                    <option value="+98">🇮🇷+98</option>
                    <option value="+964">🇮🇶+964</option>
                    <option value="+353">🇮🇪+353</option>
                    <option value="+44">🇮🇲+44</option>
                    <option value="+972">🇮🇱+972</option>
                    <option value="+39">🇮🇹+39</option>
                    <option value="+1876">🇯🇲+1876</option>
                    <option value="+81">🇯🇵+81</option>
                    <option value="+44">🇯🇪+44</option>
                    <option value="+962">🇯🇴+962</option>
                    <option value="+7">🇰🇿+7</option>
                    <option value="+254">🇰🇪+254</option>
                    <option value="+686">🇰🇮+686</option>
                    <option value="+850">🇰🇵+850</option>
                    <option value="+82">🇰🇷+82</option>
                    <option value="+965">🇰🇼+965</option>
                    <option value="+996">🇰🇬+996</option>
                    <option value="+856">🇱🇦+856</option>
                    <option value="+371">🇱🇻+371</option>
                    <option value="+961">🇱🇧+961</option>
                    <option value="+266">🇱🇸+266</option>
                    <option value="+231">🇱🇷+231</option>
                    <option value="+218">🇱🇾+218</option>
                    <option value="+423">🇱🇮+423</option>
                    <option value="+370">🇱🇹+370</option>
                    <option value="+352">🇱🇺+352</option>
                    <option value="+853">🇲🇴+853</option>
                    <option value="+389">🇲🇰+389</option>
                    <option value="+261">🇲🇬+261</option>
                    <option value="+265">🇲🇼+265</option>
                    <option value="+60">🇲🇾+60</option>
                    <option value="+960">🇲🇻+960</option>
                    <option value="+223">🇲🇱+223</option>
                    <option value="+356">🇲🇹+356</option>
                    <option value="+692">🇲🇭+692</option>
                    <option value="+596">🇲🇶+596</option>
                    <option value="+222">🇲🇷+222</option>
                    <option value="+230">🇲🇺+230</option>
                    <option value="+262">🇾🇹+262</option>
                    <option value="+52">🇲🇽+52</option>
                    <option value="+691">🇫🇲+691</option>
                    <option value="+373">🇲🇩+373</option>
                    <option value="+377">🇲🇨+377</option>
                    <option value="+976">🇲🇳+976</option>
                    <option value="+382">🇲🇪+382</option>
                    <option value="+1664">🇲🇸+1664</option>
                    <option value="+212">🇲🇦+212</option>
                    <option value="+258">🇲🇿+258</option>
                    <option value="+95">🇲🇲+95</option>
                    <option value="+264">🇳🇦+264</option>
                    <option value="+674">🇳🇷+674</option>
                    <option value="+977">🇳🇵+977</option>
                    <option value="+31">🇳🇱+31</option>
                    <option value="+599">+599</option>
                    <option value="+687">🇳🇨+687</option>
                    <option value="+64">🇳🇿+64</option>
                    <option value="+505">🇳🇮+505</option>
                    <option value="+227">🇳🇪+227</option>
                    <option value="+234">🇳🇬+234</option>
                    <option value="+683">🇳🇺+683</option>
                    <option value="+672">🇳🇫+672</option>
                    <option value="+1670">🇲🇵+1670</option>
                    <option value="+47">🇳🇴+47</option>
                    <option value="+968">🇴🇲+968</option>
                    <option value="+92">🇵🇰+92</option>
                    <option value="+680">🇵🇼+680</option>
                    <option value="+970">🇵🇸+970</option>
                    <option value="+507">🇵🇦+507</option>
                    <option value="+675">🇵🇬+675</option>
                    <option value="+595">🇵🇾+595</option>
                    <option value="+51">🇵🇪+51</option>
                    <option value="+63">🇵🇭+63</option>
                    <option value="+64">🇵🇳+64</option>
                    <option value="+48">🇵🇱+48</option>
                    <option value="+351">🇵🇹+351</option>
                    <option value="+1939">🇵🇷+1939</option>
                    <option value="+974">🇶🇦+974</option>
                    <option value="+40">🇷🇴+40</option>
                    <option value="+7">🇷🇺+7</option>
                    <option value="+250">🇷🇼+250</option>
                    <option value="+262">🇷🇪+262</option>
                    <option value="+590">🇧🇱+590</option>
                    <option value="+290">🇸🇭+290</option>
                    <option value="+1869">🇰🇳+1869</option>
                    <option value="+1758">🇱🇨+1758</option>
                    <option value="+590">🇲🇫+590</option>
                    <option value="+508">🇵🇲+508</option>
                    <option value="+1784">🇻🇨+1784</option>
                    <option value="+685">🇼🇸+685</option>
                    <option value="+378">🇸🇲+378</option>
                    <option value="+239">🇸🇹+239</option>
                    <option value="+966">🇸🇦+966</option>
                    <option value="+221">🇸🇳+221</option>
                    <option value="+381">🇷🇸+381</option>
                    <option value="+248">🇸🇨+248</option>
                    <option value="+232">🇸🇱+232</option>
                    <option value="+65">🇸🇬+65</option>
                    <option value="+421">🇸🇰+421</option>
                    <option value="+386">🇸🇮+386</option>
                    <option value="+677">🇸🇧+677</option>
                    <option value="+252">🇸🇴+252</option>
                    <option value="+27">🇿🇦+27</option>
                    <option value="+211">🇸🇸+211</option>
                    <option value="+500">🇬🇸+500</option>
                    <option value="+34">🇪🇸+34</option>
                    <option value="+94">🇱🇰+94</option>
                    <option value="+249">🇸🇩+249</option>
                    <option value="+597">🇸🇷+597</option>
                    <option value="+47">🇸🇯+47</option>
                    <option value="+268">🇸🇿+268</option>
                    <option value="+46">🇸🇪+46</option>
                    <option value="+41">🇨🇭+41</option>
                    <option value="+963">🇸🇾+963</option>
                    <option value="+886">🇹🇼+886</option>
                    <option value="+992">🇹🇯+992</option>
                    <option value="+255">🇹🇿+255</option>
                    <option value="+66">🇹🇭+66</option>
                    <option value="+670">🇹🇱+670</option>
                    <option value="+228">🇹🇬+228</option>
                    <option value="+690">🇹🇰+690</option>
                    <option value="+676">🇹🇴+676</option>
                    <option value="+1868">🇹🇹+1868</option>
                    <option value="+216">🇹🇳+216</option>
                    <option value="+90">🇹🇷+90</option>
                    <option value="+993">🇹🇲+993</option>
                    <option value="+1649">🇹🇨+1649</option>
                    <option value="+688">🇹🇻+688</option>
                    <option value="+256">🇺🇬+256</option>
                    <option value="+380">🇺🇦+380</option>
                    <option value="+971">🇦🇪+971</option>
                    <option value="+44">🇬🇧+44</option>
                    <option value="+1">🇺🇸+1</option>
                    <option value="+598">🇺🇾+598</option>
                    <option value="+998">🇺🇿+998</option>
                    <option value="+678">🇻🇺+678</option>
                    <option value="+58">🇻🇪+58</option>
                    <option value="+84">🇻🇳+84</option>
                    <option value="+1284">🇻🇬+1284</option>
                    <option value="+1340">🇻🇮+1340</option>
                    <option value="+681">🇼🇫+681</option>
                    <option value="+967">🇾🇪+967</option>
                    <option value="+260">🇿🇲+260</option>
                    <option value="+263">🇿🇼+263</option>
                </select>
                <input id="registerTelephone" type="text" className="PhoneField__wrapper--field form-control form-control-custom form-control" name="phone" ref={register}  onChange={inputsHandler} value={inputField.phone} {...register("phone", { required: true})}/>
            </div>
                 {errors.phone && <span className='validationError'>Phone is Required</span>}
        </div>
    </div>
    <div className="form-group form-group">
        <label for="comment" className="">Komenti juaj</label>
        <textarea id="comment" name="comment" placeholder="Na shkruani këtu për më shumë informata" className="form-control form-control" aria-invalid="false"
        onChange={(e)=>setanyComment(e.target.value)} ></textarea>
        <div id="comment" className="invalid-feedback"></div>
    </div>
</div>
    <div className="w-full lg:w-6/12 rightsection">
    {/* <div class="Checkout__address-actions">
        <button class="Checkout__address-actions__delivery w-100 mr-0 block lg:hidden ">Ship to another address</button>
        <button class="Checkout__address-actions__delivery w-100 mr-0 block lg:hidden">Register as a business</button>
    </div> */}
        <div className="ShippingMethod" onChange={radioHandler}>
            <h4 className="ShippingMethod__title"> MËNYRA E TRANSPORTIT</h4>
            <span className="validationError">{deliverModex}</span>

            <div className="ShippingMethod__item">
                <label for="pm-free_shipping:3">
                    <input id="pm-free_shipping:3" name="shippingMethod" hidden="hidden" type="radio" className="form-check-input" value={["t",3]} defaultChecked/>
                    <span className="name">Transporti standard</span>
                    <span className="price">{cartData[0]?.totalPrice>50?"0.00":"3.00"} {process.env.REACT_APP_CURRENCY}</span>
                </label>
            </div>


            <div className="ShippingMethod__item">
                <label for="pm-free_shipping:4">
                    <input id="pm-free_shipping:4" name="shippingMethod" hidden="hidden" type="radio" className="form-check-input" value={["p",0]} />
                    <span className="name">Merre në dyqan</span>
                    <span className="price">0.00 {process.env.REACT_APP_CURRENCY}</span>
                </label>
            </div>

        </div>


        <div className="PaymentMethod" onChange={radioPaymentMode}>
            <h4 className="PaymentMethod__title">MËNYRA E PAGESËS</h4>
                <div className="PaymentMethod__item">
                    <label for="pm-procredit">
                        {/* <input id="pm-procredit" name="paymentMethod" type="radio" className="form-check-input" value="procredit" checked="checked"/> */}
                        {/* <input id="" type="radio" name="paymentMethod" value="procredit"/> */}
                        <input id="pm-procredit" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="credit_card" />
                        <div className="name">
                            <span>Kartelë Bankare</span>
                            <p>Ju mund të paguani me Visa, Visa Electron dhe MasterCard me të gjitha kartat e bankave vendore dhe ndërkombëtare. Pagesat online janë 100% të sigurta përmes Bankës kombëtare Tregëtare.</p>
                        </div>
                        <span className="procredit-icon"></span>
                    </label>
                </div>
                {/*<div className="PaymentMethod__item">
                    <label for="pm-other_payment">
                        <input id="pm-other_payment" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="POS"/>
                     
                            <div className="name">
                                <span>POS</span>
                                <p>TJu mund të paguani me Debit/Kredit kartë nga secila bankë përmes POS-it, të cilin do t'jua sjell postieri në momentin e pranimit të dërgesës.</p>
                            </div>
                            <span className="other_payment-icon"></span>
                    </label>
                </div>
                <div className="PaymentMethod__item">
                    <label for="pm-other_payment_teb">
                        <input id="pm-other_payment_teb" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="MIS"/>
                        <div className="name">
                            <span>Këste me Starcard</span>
                            <p>Ju mund të paguani me këste përmes kredit kartës së bankës TEB. Postieri do t'jua sjell POS-in në momentin e pranimit të dërgesës.</p>
                        </div>
                        <span className="other_payment_teb-icon"></span>
                    </label>
                </div>
                <div className="PaymentMethod__item">
                    <label for="pm-other_payment_raiffaisen">
                        <input id="pm-other_payment_raiffaisen" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="MIBC"/>
                        <div className="name">
                            <span>Këste me Bonus kartë</span>
                            <p>Ju mund të paguani me këste përmes kredit kartës së bankës Raiffeisen. Postieri do t'jua sjell POS-in në momentin e pranimit të dërgesës.</p>
                        </div>
                        <span className="other_payment_raiffaisen-icon"></span>
                    </label>
                </div>*/}
                
                {deliverMode[0]=="t"?
                <div className="PaymentMethod__item">
                    <label for="pm-cod">
                        {/* <input id="pm-cod" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="cod" onChange={(e)=>setpaymentMethod(e.target.value)}/> */}
                        <input id="pm-cod" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="cod" />
                        <div className="name">
                            <span>Me para në dorë</span>
                            <p>Ju mund të paguani me para në dorë në momentin që postieri ju sjell dërgesën.</p>
                        </div>

                        <span className="cod-icon"></span>
                    </label>
                </div>:""}

                <div><br/>
                    <span className="validationError">{paymentModex}</span>
                </div>
        </div>
    <div className="OrderDetails">
        <div className="OrderDetails__table">
            <h4 className="OrderDetails__table__title">Përmbledhja e shportës</h4>
                <div className="OrderDetails__table__thead">
                    <strong className="half">Produkti</strong>
                    <strong>Sasia</strong>
                    <strong>Çmimi</strong>
                </div>

                {console.log("cartData === ", cartData)}

                {cartData.map((dtt)=>(
                <div className="OrderDetails__table__item">
                    <div className="OrderDetails__table__item__name">
                        <div className="OrderDetails__table__item_image">
                            <img src={dtt?.images[0]} alt="cG9zdDoyNzgwMTE="/></div>
                            <span className="half" style={{width:"100%"}}>{dtt?.name}  -   {dtt?.size}</span>
                        </div>
                        <span>{dtt?.quantity}</span>
                        <div className="ProductPrices">
                         <h4 className="regular">{parseFloat((dtt?.sale_price > 0? dtt?.sale_price:dtt?.regular_price).toFixed(2))} {process.env.REACT_APP_CURRENCY}</h4> 
                        </div>
                    </div>))}
                    
                </div>
            </div>
            <div className="ApplyCoupon">
                <div className="ApplyCoupon__form">
                    <div className="mb-0 w-100 form-group">
                        <label for="coupon" className="">Kodi i kuponit</label>
                            <input id="coupon" name="coupon" type="text" className="ApplyCoupon__input form-control" aria-invalid="false" value=""/>
                            <div className="invalid-feedback"></div>
                        
                    </div>
                    <button type="button" className="ApplyCoupon__btn btn btn-secondary">APLIKO</button>
                </div>
            </div>
        </div>
</div>
    <div className="flex w-full mob-flex-col">
    <div className="w-full lg:w-6/12"></div>
    <div className="w-full lg:w-6/12 mob-pad">
        <div className="CheckoutFooter">
            <div className="row">
                <div className="ml-auto col-md-6">
                    <div className="agreement mt-4 TermAndConditions form-check">
                        <label for="termsAndConditions" className="">
                            <input id="termsAndConditions" name="tc" type="checkbox" className="form-check-input" ref={register} onChange={inputsHandler} value={inputField.tc} {...register("tc", { required: true})}/>
                                
                                <span><a href="/terms-conditions" >Pajtohem me kushtet e blerjes</a>
                            <div className="invalid-feedback">Please confirm your agreement to the terms and conditions</div>
                            </span>
                            <br/>
                            {errors.tc && <span className='validationErrorTC'>Terms and conditions is Required</span>}
                        </label>
                    </div>
                    <div className="mt-4 Subscribe form-check">
                        <label for="abonohu" className="">
                            <input name="abonohu" id="abonohu" type="checkbox" className="form-check-input"/>Abonohu për të rejat
                        </label>
                    </div>
                    <div className="CartTotal">
                        <div className="CartTotal__Price">
                            <div>Totali <strong>{parseFloat(cartData[0].totalPrice>50?cartData[0].totalPrice:cartData[0].totalPrice+parseInt(deliverMode[2])).toFixed(2)} {process.env.REACT_APP_CURRENCY}</strong></div>
                            <span>Përfshirë TVSH </span>
                        </div>
                        <div className="DefaultButton full-mob ">

                            <button aria-current="page" className="btn btn-success active" type="submit">POROSIT TANI</button>
                        </div>
                    </div>
                    {/* <div className="TransportInformation">
                        <p>Transporti: <span>Falas</span></p>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
      </div>
    </form>

{/*<form method="post" id="pymntForm" action="https://entegrasyon.asseco-see.com.tr/fim/est3Dgate">*/}
                                

    {paymentMode==="credit_card"? 
         <form method="post" id="pymntForm" action="https://pgw.bkt-ks.com/fim/est3Dgate">
       {/* <form method="post" id="pymntForm" action="https://entegrasyon.asseco-see.com.tr/fim/est3Dgate"> */}
        <input type="hidden" name="clientid" value={paymentParams?.clientId} />
        <input type="hidden" name="amount" value={paymentParams?.amount} />
        <input type="hidden" name="islemtipi" value={paymentParams?.transactionType} />
        <input type="hidden" name="taksit" value={paymentParams?.instalment} />
        <input type="hidden" name="oid" value={paymentParams?.oid} />
        <input type="hidden" name="okUrl" value={paymentParams?.okUrl} />
        <input type="hidden" name="failUrl" value={paymentParams?.failUrl} />
        <input type="hidden" name="rnd" value={paymentParams?.rnd} />
        <input type="hidden" name="hash" value={paymentParams?.hashstr} />
        <input type="hidden" name="storetype" value={paymentParams?.storetype} />
        <input type="hidden" name="lang" value={paymentParams?.lang} />
        <input type="hidden" name="currency" value={paymentParams?.currencyVal} />
        </form>:""}
      <Footer/>
    </>
  )
}
 