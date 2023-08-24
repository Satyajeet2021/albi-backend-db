import React, { useEffect, useState } from 'react';
import './Productfilter.css';
import { useDispatch, useSelector } from "react-redux";
import axios from "../helper/axios";
import MultiRangeSlider from "./MultiRangeSlider";
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

export default function Productmobilefilter(props) {
    const [filterMenu, setFilterMenu] = useState(false);
    const [highPrice, setHighPrice] = useState(false);
    const [lowPrice, setLowPrice] = useState(false);
    const [newIn, setNewIn] = useState(false);
   const [categoryCheck,setCategoryCheck] = useState([]);
 
 const [brandCheck,setBrandCheck] = useState([]);
 
 const [sizeCheck,setSizeCheck] = useState([]);
 const [gtPrice,setGtPrice] = useState();
 const [ltPrice,setLtPrice] = useState();
 const [sortPrice,setSortPrice] = useState("");

  const setCategoryPush=(e)=>{ 
  setCategoryCheck(oldArray => [...oldArray,e] ); 
  }

 const setBrandPush=(e)=>{ 
  setBrandCheck(oldArray => [...oldArray,e] ); 
 }
 
 const setSizePush=(e)=>{ 
  setSizeCheck(oldArray => [...oldArray,e] ); 
 }

 const setPricePush=(min,max)=>{ 
  // setPriceCheck(oldArray => [...oldArray,e] ); 
  setGtPrice(min)
  setLtPrice(max)
 }

 const setSortPush=(e)=>{  
  setSortPrice(e)
 }
 


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
 const renderCategories = (categories) => {
        let myCategories = [];
        var i = 0
        for (let category of categories) {
            // console.log(category)
            myCategories.push(
                
                <div className="" key={category.name}>
                    {
                        category.parentId ? 
                            category.name
                             : 
                             <div>
                                <button class="mg-filter__sublist-item">
                                <input class="mg-filter__sublist-item-checkbox-fill"
                                type="checkbox"
                                name="filter_products_by_cat" 
                                onChange={(e)=>props.setCategoryPushData(category.unqId)}
                                />
                                <div class="mg-filter__sublist-item-wrapper">
                                    <div class="mg-filter__sublist-item-checkbox"></div>
                                    <span class="mg-filter__sublist-item-title">{category.name}</span>
                                </div>
                            </button>
                            </div>

                    }
                    {i + 1 && category.children.length > 0 ? (
                        <div>
                           {renderCategories(category.children)}
                        </div>   
                                         
                        
                        ) : null}
                </div> 
            );
        }
        return myCategories;
    }

    const sizeValue =[{"sizeKey":"XS"},{"sizeKey":"S"},{"sizeKey":"M"},{"sizeKey":"L"},{"sizeKey":"XL"},{"sizeKey":"XXL"},{"sizeKey":"XXXL"},{"sizeKey":"36"},{"sizeKey":"37"},{"sizeKey":"37½"},{"sizeKey":"38"},{"sizeKey":"38½"},{"sizeKey":"39"},{"sizeKey":"40"},{"sizeKey":"41"},{"sizeKey":"42"},{"sizeKey":"43"},{"sizeKey":"44"},{"sizeKey":"5"},{"sizeKey":"5"},{"sizeKey":"45"},{"sizeKey":"46"},{"sizeKey":"7"},{"sizeKey":"8"},{"sizeKey":"8½"},{"sizeKey":"9"},{"sizeKey":"5"},{"sizeKey":"6"},{"sizeKey":"6½"},{"sizeKey":"7½"},{"sizeKey":"9½"},{"sizeKey":"4XL"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"38"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"40"},{"sizeKey":"32"},{"sizeKey":"30"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"30"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"36"},{"sizeKey":"32"},{"sizeKey":"34"},{"sizeKey":"3XL"},{"sizeKey":"1"},{"sizeKey":"2"},{"sizeKey":"3"},{"sizeKey":"OS"},{"sizeKey":"42"},{"sizeKey":"46"},{"sizeKey":"80"},{"sizeKey":"85"},{"sizeKey":"90"},{"sizeKey":"95"},{"sizeKey":"100"},{"sizeKey":"105"},{"sizeKey":"110"},{"sizeKey":"115"},{"sizeKey":"XXS"},{"sizeKey":"2XL"},{"sizeKey":"48"},{"sizeKey":"50"},{"sizeKey":"52"},{"sizeKey":"54"},{"sizeKey":"56"},{"sizeKey":"58"},{"sizeKey":"35"}]

    return (
        <>
            <div className='col-filter'>
                <div className='container mx-auto my-4 collection'>
                    <div class="mg-filter js-products-filter">
                        <button class="mg-filter__btn_yellow px-4" onClick={() => setFilterMenu(true)} >Filter</button>
                    </div>
                </div>
            </div>
            <div className={filterMenu ? "filterss MobileNavigationContent MobileNavigationContent--open block lg:hidden mobile-display mobile-new-navigation" : "MobileNavigationContent MobileNavigationContent--open block lg:hidden"}>
                <div className="MobileNavigationContent__wrapper">
                    <div className="mobile-nav-tab">
                        <button className="close" onClick={() => setFilterMenu(!filterMenu)}></button>
                        <div className="mobile-menu sort"> Sort By </div>

{/*---------------------------------------*/}
                         <div style={{display: "flex",justifyContent:"space-between",marginBottom: "5px"}}>
            <div class="mg-filter__list-item-btn-collapse-container-item">
              <input type="radio"
                     value="price_clause,ASC"
                     name="sort_products_by" 
                     onChange={(e)=>props.setSortPushData("lowToHigh")}
                     />
              <span class="mg-filter__list-item-btn-collapse-container-item-content">Çmimi(Lowest)</span>
            </div>
            <div class="mg-filter__list-item-btn-collapse-container-item">
              <input type="radio"
                     value="price_clause,DESC"
                     name="sort_products_by" 
                     onChange={(e)=>props.setSortPushData("highToLow")}
                     />
              <span class="mg-filter__list-item-btn-collapse-container-item-content">Çmimi(Highest)</span>
            </div> 
          </div>
{/*---------------------------------------*/}
                         <Accordion atomic={true}>

      <AccordionItem title="Categories">
        <div>
        {categoryValue?.categories?.categoryList?.length > 0 ? renderCategories(categoryValue?.categories?.categoryList) : null} 
        </div>
      </AccordionItem>

    {/*  <AccordionItem title="Sizes">
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
      </AccordionItem>*/}

      <AccordionItem title="Brands">
        {vendroBrand?.map((vndrBrnd)=>(
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
              ))}
      </AccordionItem>

    </Accordion>
                        <div className="tab-section-1 ">
                            <div className="tab-menu">
                              
                                {/*<div className="mobile-menu sort"> Filter By </div>
                                <>
                                  <p><label> Category &nbsp; </label></p>
                                     {categoryValue?.categories?.categoryList?.length > 0 ? renderCategories(categoryValue?.categories?.categoryList) : null} 
                                     </>
                                <hr />
                                <div>
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
                                </div>

                                <div>
                                    {vendroBrand?.map((vndrBrnd)=>(
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
              ))}
                                </div>*/}
                                <div className=''> 
                  <MultiRangeSlider
                    min={0}
                    max={1500} 
                     onChange={(e)=>props.setPricePushData(e.min,e.max)}
                    // onChange={(e)=>props.setPricePushData()}
                    style={{width:"300px"}}
                  />
              </div>
                    

                                <div class="mg-filter js-products-filter" onClick={() => setFilterMenu(!filterMenu)}>
                                    <button class="mg-filter__btn_yellow px-4"  
                                        style={{marginTop:"60px"}}
                                        onClick={(e)=>props.filterBtn()}> Apliko 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
