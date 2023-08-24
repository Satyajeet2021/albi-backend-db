import React,{useState} from 'react';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import './Checkout.css';
import {postCheckout} from "../../action";
import {useDispatch,useSelector} from "react-redux";

import { useNavigate } from "react-router-dom";

export default function Checkout(){
const navigate = useNavigate();

          const [fname,setfname] = useState();
          const [lname,setlname] = useState();
          const [email,setemail] = useState();
          const [password,setPassword] = useState()
          const [confermPassword,setConfermPassword] = useState();
          const [address,setaddress] = useState();
          const [city,setcity] = useState();
          const [phoneNumber,setphoneNumber] = useState();
          const [anyComment,setanyComment] = useState();
          const [paymentMethod,setpaymentMethod] = useState("cod");
          const [productList,setproductList] = useState([]);

          const dispatch = useDispatch()


            const cart = useSelector((state) => state.cart);
            var sum=0;
            var finalObj = [];
            for(var item in cart.cartItems){
                finalObj.push(cart.cartItems[item]);
            } 
            
            for (let key in cart.cartItems) {
                sum += cart.cartItems[key].totalPrice;
            }

            const checkoutData=()=>{
                var data={fname,lname,email,confermPassword,address,city,phoneNumber,anyComment,paymentMethod,productList:finalObj}
                console.log(data)
                dispatch(postCheckout(data));
                 // navigate("/order-success");
            }


  
 
  return (
    <>
    <Header/>
      <div className='container mx-auto'>
      <div className="CheckoutForm">
    <div className="HeadingTitle">
        <h1>Billing and shipping</h1>
    </div>
    <div className="w-full">
        <div className="w-6/12">
            <div className="Checkout__address-actions">
                <h4 className="Checkout__address-actions__title">Personal info</h4>
                <button className="Checkout__address-actions__delivery hidden lg:block">Ship to another address</button>
                <button className="Checkout__address-actions__delivery hidden lg:block">Register as a business</button>
            </div>
        </div>
    </div>
    <div className="flex flex-col lg:flex-row w-full formsection">
        <div className="w-full lg:w-6/12 leftsection">
            <div className="form-group form-group">
                <label for="billingFirstName" className="">First Name</label>
                <input id="billingFirstName" name="billing.firstName" type="text" className="form-control form-control" onChange={(e)=>setfname(e.target.value)}/>
            <div id="firstName" className="invalid-feedback">Name is required</div>
        </div>
        <div className="form-group form-group">
            <label for="billingLastName" className="">Last Name</label>
            <input id="billingLastName" name="billing.lastName" type="text" className="form-control form-control" onChange={(e)=>setlname(e.target.value)}/>
            <div id="lastName" className="invalid-feedback">Last name is required</div>
        </div>
        <div className="form-group form-group">
            <label for="email" className="">Email</label>
            <input id="email" name="email" type="email" className="form-control form-control" onChange={(e)=>setemail(e.target.value)}/>
            <div id="email" className="invalid-feedback">Please write your email</div>
        </div>
        <div className="form-group form-group">
            <label for="password" className="">Password</label>
            <input id="password" name="password" type="password" className="form-control form-control" onChange={(e=>setPassword(e.target.value))}/>
            <div id="password" className="invalid-feedback">Please type your new password</div>
        </div>
        <div className="form-group form-group">
            <input id="passwordConfirm" name="passwordConfirm" type="password" className="form-control form-control" onChange={(e=>setConfermPassword(e.target.value))}/>
            <label for="passwordConfirm" className="">Confirm Password</label>
            <div id="passwordConfirm" className="invalid-feedback">Please type your new password</div>
        </div>
        <div className="form-group form-group">
            <label for="billingAddress" className="">Address</label>
            <input id="billingAddress" name="billing.address1" type="text" className="form-control form-control" onChange={(e)=>setaddress(e.target.value)}/>
            <div id="address1" className="invalid-feedback">Address is required</div>
        </div>
        <div className="form-group form-group">
            <div className="form-group">
                <label for="billing.city" className="">City</label>
                <select id="billing.city" className="form-control" onChange={(e)=>setcity(e.target.value)}>
                    <option value="" selected="">Select your city</option>
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
            <div id="city" className="invalid-feedback">City name is required</div>
            </div>
        </div>
        <div className="PhoneField">
            <div className="form-group form-group">
                <label for="registerTelephone" className="">Phone Number</label>
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
                <input id="registerTelephone" type="text" className="PhoneField__wrapper--field form-control form-control-custom form-control"  onChange={(e)=>setphoneNumber(e.target.value)}/>
                <div id="phone" className="invalid-feedback">Phone number is required</div>
            </div>
        </div>
    </div>
    <div className="form-group form-group">
        <label for="comment" className="">Your comment</label>
        <textarea id="comment" name="comment" placeholder="Write us for further information" className="form-control form-control" aria-invalid="false"
        onChange={(e)=>setanyComment(e.target.value)} ></textarea>
        <div id="comment" className="invalid-feedback"></div>
    </div>
</div>
    <div className="w-full lg:w-6/12 rightsection">
    <div class="Checkout__address-actions">
        <button class="Checkout__address-actions__delivery w-100 mr-0 block lg:hidden ">Ship to another address</button>
        <button class="Checkout__address-actions__delivery w-100 mr-0 block lg:hidden">Register as a business</button>
    </div>
        <div className="ShippingMethod">
            <h4 className="ShippingMethod__title">Delivery method</h4>
            <div className="ShippingMethod__item">
                <label for="pm-free_shipping:3">
                    <input id="pm-free_shipping:3" name="shippingMethod" hidden="hidden" type="radio" className="form-check-input" value="free_shipping:3" checked="checked"/>
                    <span className="name">Free shipping</span>
                    <span className="price">0.00 €</span>
                </label>
            </div>
        </div>
        <div className="PaymentMethod">
            <h4 className="PaymentMethod__title">Payment method</h4>
            <div className="PaymentMethod__item">
                <label for="pm-procredit">
                    <input id="pm-procredit" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="procredit" checked="checked"/>
                    <div className="name">
                        <span>Credit Card</span>
                        <p>You can pay online through your local or international Debit/Credit Card. That can be VISA, VISA Electron or MasterCard. Payments are 100% secure through ProCredit Bank.</p>
                    </div>
                    <span className="procredit-icon"></span>
                </label>
            </div>
        <div className="PaymentMethod__item">
            <label for="pm-other_payment">
                <input id="pm-other_payment" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="other_payment"/>
                    <div className="name">
                        <span>POS</span>
                        <p>The courier will bring the POS machine upon delivery so you can pay with Debit/Credit Card.</p>
                    </div>
                    <span className="other_payment-icon"></span>
            </label>
        </div>
        <div className="PaymentMethod__item">
            <label for="pm-other_payment_teb">
                <input id="pm-other_payment_teb" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="other_payment_teb"/>
                <div className="name">
                    <span>Monthly installments with StarCard</span>
                    <p>You can pay by monthly installments through TEB Bank’s Credit Card. The courier will bring the POS machine upon delivery.</p>
                </div>
                <span className="other_payment_teb-icon"></span>
            </label>
        </div>
        <div className="PaymentMethod__item">
            <label for="pm-other_payment_raiffaisen">
                <input id="pm-other_payment_raiffaisen" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="other_payment_raiffaisen"/>
                <div className="name">
                    <span>Monthly installments with Bonus Card</span>
                    <p>You can pay by monthly installments through Raiffeisen Bank’s Credit Card. The courier will bring the POS machine upon delivery.</p>
                </div>
                <span className="other_payment_raiffaisen-icon"></span>
            </label>
        </div>
        <div className="PaymentMethod__item">
            <label for="pm-cod">
                <input id="pm-cod" name="paymentMethod" hidden="hidden" type="radio" className="form-check-input" value="cod" onChange={(e)=>setpaymentMethod(e.target.value)}/>
                <div className="name">
                    <span>Cash on delivery</span>
                    <p>You can pay with cash upon delivery.</p>
                </div>
                <span className="cod-icon"></span>
            </label>
        </div>
    </div>
    <div className="OrderDetails">
        <div className="OrderDetails__table">
            <h4 className="OrderDetails__table__title">Cart summary</h4>
                <div className="OrderDetails__table__thead">
                    <strong className="half">Product</strong>
                    <strong>Amount</strong>
                    <strong>Price</strong>
                </div>

                {finalObj.map((dtt)=>(
                <div className="OrderDetails__table__item">
                    <div className="OrderDetails__table__item__name">
                        <div className="OrderDetails__table__item_image">
                            <img src={dtt?.productImg} alt="cG9zdDoyNzgwMTE="/></div>
                            <span className="half">{dtt?.productName}</span>
                        </div>
                        <span>{dtt?.qty}</span>
                        <div className="ProductPrices">
                            <h4 className="regular">{dtt?.totalPrice.toFixed(2)} €</h4>
                        </div>
                    </div>))}
                    
                </div>
            </div>
            <div className="ApplyCoupon">
                <div className="ApplyCoupon__form">
                    <div className="mb-0 w-100 form-group">
                        <label for="coupon" className="">Coupon code</label>
                            <input id="coupon" name="coupon" type="text" className="ApplyCoupon__input form-control" aria-invalid="false" value=""/>
                            <div className="invalid-feedback"></div>
                        
                    </div>
                    <button type="button" className="ApplyCoupon__btn btn btn-secondary">Apply</button>
                </div>
            </div>
        </div>
</div>
    <div className="flex w-full">
    <div className="w-full lg:w-6/12"></div>
    <div className="w-full lg:w-6/12">
        <div className="CheckoutFooter">
            <div className="row">
                <div className="ml-auto col-md-6">
                    <div className="agreement mt-4 TermAndConditions form-check">
                        <label for="termsAndConditions" className="">
                            <input name="termsAndConditions" id="termsAndConditions" type="checkbox" className="form-check-input"/>I agree with<a href="/en/terms-conditions">Terms&amp;Conditions</a>
                            <div className="invalid-feedback">Please confirm your agreement to the terms and conditions</div>
                        </label>
                    </div>
                    <div className="mt-4 Subscribe form-check">
                        <label for="abonohu" className="">
                            <input name="abonohu" id="abonohu" type="checkbox" className="form-check-input"/>Subscribe to our new <span>sletter</span>
                        </label>
                    </div>
                    <div className="CartTotal">
                        <div className="CartTotal__Price">
                            <div>Total<strong>{sum.toFixed(2)} €</strong></div>
                            <span>Including VAT</span>
                        </div>
                        <div className="DefaultButton full-mob ">
                            <button aria-current="page" className="btn btn-success active" onClick={(e)=>checkoutData()}>Place order</button>
                        </div>
                    </div>
                    <div className="TransportInformation">
                        <p>Shipping: <span>Free</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
      </div>
      <Footer/>
    </>
  )
}
 