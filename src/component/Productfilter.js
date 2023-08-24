import React, { useEffect, useState,useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Productfilter.css';
import { useDispatch, useSelector } from "react-redux"
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import axios from "../helper/axios";


import MultiRangeSlider from "./MultiRangeSlider";

export default function Productfilter(props) {
  const [short, setShort] = useState(false);
  const [gender, setGender] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [price, setPrice] = useState(false); 
  const genderData = useSelector(state => state.category?.gender);


  console.log(gender)
  const femaleBrandData = [{brand:"WOMEN SECRET",status:""},
                         {brand:"TIMBERLAND",status:""},
                         {brand:"GEOX",status:""},
                         {brand:"SPRINGFIELD",status:""},
                         {brand:"MANGO",status:""},
                         {brand:"HUGO",status:""},
                         {brand:"REPLAY",status:""},
                         {brand:"GUESS",status:"Coming soon"},
                         {brand:"CARPISA",status:"Coming soon"},
                         {brand:"OLIVER WEBER",status:"Coming soon"},
                         // {img:"https://appapi.albionline.com/vbicon/active/XYZ.jpg",brand:"CHAUSSEA",status:"Coming soon"},
                         {brand:"XYZ",status:"Coming soon"},
                         {brand:"ORSAY",status:"Coming soon"},
                         {brand:"YAMAMAY",status:"Coming soon"},
                         {brand:"TOM TAILOR",status:"Coming soon"}]

  const maleBrandData = [{brand:"TIMBERLAND",status:""},
                         {brand:"GEOX",status:""},
                         {brand:"SPRINGFIELD",status:""},
                         {brand:"HUGO",status:""},
                         {brand:"REPLAY",status:""},
                         {brand:"WOMEN SECRET",status:""},
                         {brand:"GUESS",status:"Coming soon"},
                         {brand:"CARPISA",status:"Coming soon"}, 
                         {brand:"BOSS",status:"Coming soon"}, 
                         {brand:"XYZ",status:"Coming soon"},
                         {brand:"YAMAMAY",status:"Coming soon"},
                         {brand:"TOM TAILOR",status:"Coming soon"},
                         // {img:"https://appapi.albionline.com/vbicon/active/XYZ.jpg",brand:"CHAUSSEA",status:"Coming soon"},
                         {brand:"CELIO",status:"Coming soon"}] 
  const kidsBrandData = [{brand:"MANGO",status:""},
                         {brand:"TIMBERLAND",status:""},
                         {brand:"GEOX",status:""},
                         {brand:"OKAIDI",status:""},
                         // {img:XYZLogo,brand:"CHAUSSEA",status:"Coming soon"},
                         {brand:"GUESS",status:"Coming soon"}]

  const lifeBrandData = [{brand:"OZDILEK",status:"Coming soon"},
                         {brand:"WOMEN SECRET",status:""}]                                                 

const shortBtn=()=>{
  setShort(prev => !prev);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(false);
  localStorage.setItem("mylocalid","") 
}
const genderBtn=()=>{
  setShort(false);
  setGender(prev => !prev);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(false); 
  localStorage.setItem("mylocalid","") 
}
const categoryBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(prev => !prev);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(false); 
  localStorage.setItem("mylocalid","") 
}
const brandBtn=()=>{
  
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(prev => !prev);
  setSize(false);
  setColor(false);
  setPrice(false);
  localStorage.setItem("mylocalid","") 
}
const sizeBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(prev => !prev);
  setColor(false);
  setPrice(false); 
  localStorage.setItem("mylocalid","") 
}
const colorBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(prev => !prev);
  setPrice(false); 
  localStorage.setItem("mylocalid","") 
}
const priceBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(prev => !prev); 
  localStorage.setItem("mylocalid","") 
}

const sizeValue =[{"sizeKey":"XS"},{"sizeKey":"S"},{"sizeKey":"M"},{"sizeKey":"L"},{"sizeKey":"XL"},{"sizeKey":"XXL"},{"sizeKey":"XXXL"},{"sizeKey":"36"},{"sizeKey":"37"},{"sizeKey":"37½"},{"sizeKey":"38"},{"sizeKey":"38½"},{"sizeKey":"39"},{"sizeKey":"40"},{"sizeKey":"41"},{"sizeKey":"42"},{"sizeKey":"43"},{"sizeKey":"44"},{"sizeKey":"5"},{"sizeKey":"5"},{"sizeKey":"45"},{"sizeKey":"46"},{"sizeKey":"7"},{"sizeKey":"8"},{"sizeKey":"8½"},{"sizeKey":"9"},{"sizeKey":"5"},{"sizeKey":"6"},{"sizeKey":"6½"},{"sizeKey":"7½"},{"sizeKey":"9½"},{"sizeKey":"4XL"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"38"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"40"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"3XL"},{"sizeKey":"1"},{"sizeKey":"2"},{"sizeKey":"3"},{"sizeKey":"OS"},{"sizeKey":"42"},{"sizeKey":"46"},{"sizeKey":"80"},{"sizeKey":"85"},{"sizeKey":"90"},{"sizeKey":"95"},{"sizeKey":"100"},{"sizeKey":"105"},{"sizeKey":"110"},{"sizeKey":"115"},{"sizeKey":"XXS"},{"sizeKey":"2XL"},{"sizeKey":"48"},{"sizeKey":"50"},{"sizeKey":"52"},{"sizeKey":"54"},{"sizeKey":"56"},{"sizeKey":"58"},{"sizeKey":"35"}]


 // Our States
 const [value, setValue] =  React.useState([100,1500]);
  
 // Changing State when volume increases/decreases
 const rangeSelector = (event, newValue) => {
   setValue(newValue);
   console.log(newValue)
 };
 

 const [vendroBrand,setVendroBrand] = useState([]);
 const categoryValue = useSelector(state => state?.category);

 const getVendorBrand=async()=>{
  const res = await axios.get("/getVendor")
  setVendroBrand(res.data)
  console.log(res.data)
 }

 useEffect(()=>{
  getVendorBrand();
 },[])

 const closeAllDrop=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(false);
 }


 

     const renderCategories = (categories) => {
        let myCategories = [];
        var i = 0
        for (let category of categories) {
            // console.log(category)
            myCategories.push(
                
                <li className="ruby-menu-mega item" key={category.name}>
                    {
                        category.parentId ? 
                            category.name
                             : 

                            <button class="mg-filter__sublist-item">
                <input class="mg-filter__sublist-item-checkbox-fill"
                 type="checkbox"
                 name="filter_products_by_cat"
                 value="67"
                 onChange={(e)=>props.setCategoryPushData(category.unqId)}
                  />
                <div class="mg-filter__sublist-item-wrapper">
                  <div class="mg-filter__sublist-item-checkbox"></div>
                  <span class="mg-filter__sublist-item-title">{category.name}</span>
                </div>
              </button>
                    }
                    {i + 1 && category.children.length > 0 ? (
                        <div>
                           {renderCategories(category.children)}
                        </div>   
                                         
                        
                        ) : null}
                </li> 
            );
        }
        return myCategories;
    }

    // const sendFilter=async()=>{
      
    //   console.log(data);
    //   const res = await axios.post("/multifilter",data);
    //   }
  

  return (
    <div>
  <div className='container mx-auto my-4 collection'>
    <div class="mg-filter js-products-filter">
      <ul class="mg-filter__list">
        <li class={`mg-filter__list-item js-filter-option ${short?"active":"deactive"} `} data-target="#sort-products">
          <div class="mg-filter__list-item-btn" onClick={(e)=>shortBtn()}> <div class="mg-filter__list-item-btn-title-container"> Rendit </div>
            {/*<img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy" />*/}
          </div>
          <div class={`mg-filter__list-item-btn-collapse-container ${short?"activ":"dactive"} `} id="sort-products">
            <div class="mg-filter__list-item-btn-collapse-container-item">
              <input type="radio"
                     value="price_clause,ASC"
                     name="sort_products_by" 
                     onChange={(e)=>props.setSortPushData("lowToHigh")}
                     />
              <span class="mg-filter__list-item-btn-collapse-container-item-content">Çmimi - I ulët në të lartë</span>
            </div>
            <div class="mg-filter__list-item-btn-collapse-container-item">
              <input type="radio"
                     value="price_clause,DESC"
                     name="sort_products_by" 
                     onChange={(e)=>props.setSortPushData("highToLow")}
                     />
              <span class="mg-filter__list-item-btn-collapse-container-item-content">Çmimi - I lartë në të ulët</span>
            </div> 
          </div>
        </li> 






       {/* <li class={`mg-filter__list-item js-filter-option ${category?"active":"deactive"}`} data-target="#product-categories">
          <div class="mg-filter__list-item-btn" onClick={(e)=> categoryBtn()}> <div class="mg-filter__list-item-btn-title-container"> Kategoritë </div>
            <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy" />
          </div>
          <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${category?"activ":"dactive"} `} id="product-categories">
            <ul class="mg-filter__sublist js-products-filter-sublist">
            {categoryValue?.categories?.categoryList?.length > 0 ? renderCategories(categoryValue?.categories?.categoryList) : null}
             
            </ul>
          </div>
        </li>*/}





        <li class={`mg-filter__list-item js-filter-option ${brand?"active":"deactive"}`} data-target="#product-brands">
          <div class="mg-filter__list-item-btn" onClick={(e)=> brandBtn()}> <div class="mg-filter__list-item-btn-title-container"> Brendet </div>
            {/*<img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy" />*/}
          </div>
          <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${brand?"activ":"dactive"} `} id="product-brands">
            <ul id="filter-brand" class="mg-filter__sublist js-products-filter-sublist">
         {/*   {vendroBrand?.map((vndrBrnd)=>(
              <button class="mg-filter__sublist-item">
                <input class="mg-filter__sublist-item-checkbox-fill"
                       type="checkbox"
                       data-slug="boss"
                       name="filter_products_by_brand"
                       onChange={(e)=>props.setBrandPushData(vndrBrnd?.fname)}
                      />
                <div class="mg-filter__sublist-item-wrapper">
                  <div class="mg-filter__sublist-item-checkbox"></div>
                  <span class="mg-filter__sublist-item-title">{vndrBrnd?.fname}</span>
                </div>
              </button>             
              ))}*/}
              {genderData=="female"?
              femaleBrandData?.map((vndrBrnd)=>(
              <button class="mg-filter__sublist-item">
                <input class="mg-filter__sublist-item-checkbox-fill"
                       type="checkbox"
                       data-slug="boss"
                       name="filter_products_by_brand"
                       onChange={(e)=>props.setBrandPushData(vndrBrnd?.brand)}
                      />
                <div class="mg-filter__sublist-item-wrapper">
                  <div class="mg-filter__sublist-item-checkbox"></div>
                  <span class="mg-filter__sublist-item-title">{vndrBrnd?.brand}</span>
                </div>
              </button>             
              ))
              :""}

              {genderData=="male"?
              maleBrandData?.map((vndrBrnd)=>(
              <button class="mg-filter__sublist-item">
                <input class="mg-filter__sublist-item-checkbox-fill"
                       type="checkbox"
                       data-slug="boss"
                       name="filter_products_by_brand"
                       onChange={(e)=>props.setBrandPushData(vndrBrnd?.brand)}
                      />
                <div class="mg-filter__sublist-item-wrapper">
                  <div class="mg-filter__sublist-item-checkbox"></div>
                  <span class="mg-filter__sublist-item-title">{vndrBrnd?.brand}</span>
                </div>
              </button>             
              ))
              :""}

              {genderData=="kids"?
              kidsBrandData?.map((vndrBrnd)=>(
              <button class="mg-filter__sublist-item">
                <input class="mg-filter__sublist-item-checkbox-fill"
                       type="checkbox"
                       data-slug="boss"
                       name="filter_products_by_brand"
                       onChange={(e)=>props.setBrandPushData(vndrBrnd?.brand)}
                      />
                <div class="mg-filter__sublist-item-wrapper">
                  <div class="mg-filter__sublist-item-checkbox"></div>
                  <span class="mg-filter__sublist-item-title">{vndrBrnd?.brand}</span>
                </div>
              </button>             
              ))
              :""}

              {genderData=="life"?
              lifeBrandData?.map((vndrBrnd)=>(
              <button class="mg-filter__sublist-item">
                <input class="mg-filter__sublist-item-checkbox-fill"
                       type="checkbox"
                       data-slug="boss"
                       name="filter_products_by_brand"
                       onChange={(e)=>props.setBrandPushData(vndrBrnd?.brand)}
                      />
                <div class="mg-filter__sublist-item-wrapper">
                  <div class="mg-filter__sublist-item-checkbox"></div>
                  <span class="mg-filter__sublist-item-title">{vndrBrnd?.brand}</span>
                </div>
              </button>             
              ))
              :""}
              </ul>
          </div>
        </li>
        <li class={`mg-filter__list-item js-filter-option ${size?"active":"deactive"}`} data-target="#product-sizes">
          <div class="mg-filter__list-item-btn" onClick={(e)=> sizeBtn()}> <div class="mg-filter__list-item-btn-title-container"> Madhësitë </div>
            {/*<img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy" />*/}
          </div>







          <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${size?"activ":"dactive"} `} id="product-sizes">
            <ul id="filter-size" class="mg-filter__sublist js-products-filter-sublist">
              {sizeValue.map((szvlu)=>(
              <button class="mg-filter__sublist-item">
                <input class="mg-filter__sublist-item-checkbox-fill"
                       type="checkbox"
                       name="filter_products_by_size"
                       onChange={(e)=>props.setSizePushData(szvlu.sizeKey)} />
                <div class="mg-filter__sublist-item-wrapper text-start">
                  <div class="mg-filter__sublist-item-checkbox"></div>
                  <span class="mg-filter__sublist-item-title">{szvlu.sizeKey}</span>
                </div>
              </button>
              ))}
             
            </ul>
          </div> 
        </li> 
        <li class={`mg-filter__list-item js-filter-option ${price?"active":"deactive"}`} data-target="#product-price">
          <div class="mg-filter__list-item-btn" onClick={(e)=> priceBtn()}> <div class="mg-filter__list-item-btn-title-container"> Çmimi </div>
            {/*<img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy" />*/}
          </div>
          <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${price?"activ":"dactive"} `} id="product-price">
            <ul id="filter-price" class="mg-filter__sublist js-products-filter-sublist overflow-hidden h-auto pb-5">
              
              <div className='price-range'> 
                  <MultiRangeSlider
                    min={0}
                    max={1500} 
                     onChange={(e)=>props.setPricePushData(e.min,e.max)}
                    // onChange={(e)=>props.setPricePushData()}
                  />
              </div>
              
            </ul>
          </div>
        </li>
        <li class="mg-filter__list-item border-0" style={{backgroundColor: 'transparent'}}>
          <button class="mg-filter__btn_transparent px-4 clear js-filter-clear-btn">Pastro</button>
        </li>
        <li class="mg-filter__list-item border-0" style={{backgroundColor: 'transparent'}}>
          <button class="mg-filter__btn_yellow px-4 js-filter-apply-btn" onClick={(e)=>{props.filterBtn();closeAllDrop()}}>Apliko</button>
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}
