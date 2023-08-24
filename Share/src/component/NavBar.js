import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import {GetAllCategory} from "../action"
import logonew from '../assets/images/logonew.png';

export default function NavBar() {

const categoryValue = useSelector(state=>state?.category)
  const dispatch = useDispatch();
const data = {genderBased:categoryValue?.gender}
  useEffect(() => {
    dispatch(GetAllCategory(data));
  }, []);

   //  const renderCategories=(categoryData)=>{ 
   //  var categoriesList=[]; 
   //  for(var cate of categoryData){
   //    categoriesList?.push({
   //              label:cate?.name,
   //              value:cate?._id,
   //              parentId:cate?.parentId,
   //              children:cate?.children?.length>0 && renderCategories(cate?.children)
   //            });
   //   }
   //  return categoriesList;
   // }

 const renderCategories = (categories) => {
    let myCategories = [];
    var i=0 
    for (let category of categories) { 
    	// console.log(category)
      myCategories.push(
        <li className="ruby-menu-mega item"   key={category.name}>
          {
            category.parentId ? <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> : 
            <Link
              to={`/${category.slug}/${category.unqId}`}>
              {category?.children?.length>0 ?"":<img src={category?.categoryIcon} className="h-5 w-5"/>}
              <span className="px-1">{category.name}</span>
            </Link>
          }
          {i+1 && category.children.length > 0 ? (
          <div className="ruby-grid ruby-grid-lined">
              <div className="ruby-row  container mx-auto">
                <div className='ruby-col-10'>
                  <ul className="ColumnMenuLevel__list w-full bg-white">{renderCategories(category.children)}</ul>
                </div>
                <div className="ruby-col-2">
                  <div className="ColumnMenuLevel__btn_all ml-auto mr-0 mb-auto">
                    <a href="#" aria-current="page" className="active">
                      <div className="ColumnMenuLevel__btn_all__image">
                        <img src="https://albionline.com/static/media/image-3.3b9cbf9f.png" alt="asd" className="Image"/>
                      </div>
                      <div className="ColumnMenuLevel__btn_all__text">
                        <span>All</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>) : null}
        </li>
      );
    }
    return myCategories;
  }



	return ( 

<div className="ruby-menu-demo-header   mx-auto w-full">
      <div className="ruby-wrapper lg:container">
        <div>
        <button className="c-hamburger c-hamburger--htx visible-xs">
          <span></span>
        </button>
        <div className="LanguageSwitcher LanguageSwitcher--light hidden">
        <button>English
          <span className="LanguageSwitcher__icon" style={{marginLeft: "8px"}}>
            <svg width="14.395" height="14.395" viewBox="0 0 14.395 14.395">
              <path id="Icon_material-language" data-name="Icon material-language" d="M10.19,3a7.2,7.2,0,1,0,7.2,7.2A7.194,7.194,0,0,0,10.19,3Zm4.988,4.318H13.055a11.263,11.263,0,0,0-.993-2.562A5.779,5.779,0,0,1,15.178,7.318ZM10.2,4.468a10.139,10.139,0,0,1,1.375,2.85H8.823A10.139,10.139,0,0,1,10.2,4.468ZM4.627,11.637a5.63,5.63,0,0,1,0-2.879H7.059a11.887,11.887,0,0,0-.1,1.439,11.887,11.887,0,0,0,.1,1.439Zm.59,1.439H7.34a11.263,11.263,0,0,0,.993,2.562A5.748,5.748,0,0,1,5.217,13.076ZM7.34,7.318H5.217A5.748,5.748,0,0,1,8.333,4.756,11.263,11.263,0,0,0,7.34,7.318ZM10.2,15.926a10.139,10.139,0,0,1-1.375-2.85h2.749A10.139,10.139,0,0,1,10.2,15.926Zm1.684-4.29H8.513A10.589,10.589,0,0,1,8.4,10.2a10.5,10.5,0,0,1,.115-1.439h3.368A10.5,10.5,0,0,1,12,10.2,10.589,10.589,0,0,1,11.882,11.637Zm.18,4a11.263,11.263,0,0,0,.993-2.562h2.123A5.779,5.779,0,0,1,12.061,15.639Zm1.274-4a11.887,11.887,0,0,0,.1-1.439,11.887,11.887,0,0,0-.1-1.439h2.433a5.63,5.63,0,0,1,0,2.879Z" transform="translate(-3 -3)"></path>
            </svg>
          </span>
        </button>
      </div>
        </div>
        <div className="MobileNavigationContent MobileNavigationContent--open block lg:hidden">
    <div className="MobileNavigationContent__wrapper">
        <div className="MobileNavigationMenu">
            <ul>
                <div className="MobileNavigationLevel MobileNavigationLevel--open block lg:hidden">
                    <ul>
                        <li>
                            <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 11.842 11.842" enable-background="new 0 0 11.842 11.842"  className="MobileNavigationLevelItem--icon">
                                <path id="Path_747" fill="#FFFFFF" d="M5.921,0C2.6509,0,0,2.6509,0,5.921s2.6509,5.921,5.921,5.921s5.921-2.6509,5.921-5.921 C11.8381,2.6525,9.1895,0.0039,5.921,0z M3.047,6.818c-0.4971,0-0.9-0.4029-0.9-0.9c0-0.4971,0.4029-0.9,0.9-0.9 c0.4971,0,0.9,0.4029,0.9,0.9S3.5441,6.818,3.047,6.818C3.047,6.818,3.047,6.818,3.047,6.818z M5.917,6.818 c-0.4971,0-0.9-0.4029-0.9-0.9c0-0.4971,0.4029-0.9,0.9-0.9c0.4971,0,0.9,0.4029,0.9,0.9c0,0.4955-0.4005,0.8978-0.896,0.9H5.917z  M8.788,6.818c-0.4971,0-0.9-0.4029-0.9-0.9s0.4029-0.9,0.9-0.9c0.4971,0,0.9,0.4029,0.9,0.9l0,0 C9.688,6.4151,9.2851,6.818,8.788,6.818z"></path>
                            </svg>
                            <a href="/shop">Të gjitha</a>
                        </li>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div className='flex justify-start items-center'>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/09/bluze.svg" alt=""/>
                                    <span>Veshje</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                            <div className="MobileNavigationLevel-childrens animation-enter-done">
    <li>
        <img className="MobileNavigationLevelItem--icon" src="/static/media/te-tjera-white.1cbcda1d.svg"/>
        <a className="" href="/shop/tops">tops</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="/static/media/te-tjera-white.1cbcda1d.svg"/>
        <a className="" href="/shop/pizhame">Pizhame</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/04/suit2.svg"/>
        <a className="" href="/shop/kostum">kostum</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/Tbluze-white.svg"/>
        <a className="" href="/shop/tbluze">T Bluzë</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/bodysuit-white.150x150.svg"/>
        <a className="" href="/shop/trupore">Trupore </a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/pantallonat.svg"/>
        <a className="" href="/shop/pantallona">Pantallona</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/Jelek.svg"/>
        <a className="" href="/shop/jelek">Jelek</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/xhaketa.svg"/>
        <a className="" href="/shop/xhakete">Xhaketë </a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/Pallto-white.svg"/>
        <a className="" href="/shop/pallto">Pallto</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/xhinse.svg"/>
        <a className="" href="/shop/xhinse">Xhinse</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/kemishe.svg"/>
        <a className="" href="/shop/kemishe">Këmishë</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/bluze.svg"/>
        <a className="" href="/shop/bluze">Bluzë</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/fustan.svg"/>
        <a className="" href="/shop/fustan">Fustan</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/fund.svg"/>
        <a className="" href="/shop/fund">Fund</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/Kominoshe-white.svg"/>
        <a className="" href="/shop/kominoshe">Kominoshe</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/veshje-plazhi.svg"/>
        <a className="" href="/shop/veshje-plazhi">Veshje plazhi</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/xhup.svg"/>
        <a className="" href="/shop/xhup">Xhup</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/Pardesy-wh-ite.svg"/>
        <a className="" href="/shop/pardesy">Pardesy</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/triko.svg"/>
        <a className="" href="/shop/triko">Triko</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/pulover.svg"/>
        <a className="" href="/shop/pulover">Pulovër</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/strece.svg"/>
        <a className="" href="/shop/strece">Streçe</a>
    </li>
    <li>
        <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/03/pantollona-te-shkurte.svg"/>
        <a className="" href="/shop/pantallona-te-shkurte">Pantallona te shkurtër</a>
    </li>
</div>
                        </div>
                        {/* <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/09/kepuce.svg" alt=""/>
                                    <span>Këpucë</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/09/veshje-sportive.svg" alt=""/>
                                    <span>Sport</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/09/sutjenat-1.svg" alt=""/>
                                    <span>Të brendshme</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/09/ora-1.svg" alt=""/>
                                    <span>Aksesorë</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2021/09/aksesore-flokesh.svg" alt=""/>
                                    <span>Kozmetikë</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/bathroom-white-150x150-2.svg" alt=""/>
                                    <span>Banjo</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/bedroom-white-150x150-1.svg" alt=""/>
                                    <span>Dhomë gjumi</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="MobileNavigationLevelItem--span" data-active="false">
                                <div>
                                    <img className="MobileNavigationLevelItem--icon" src="https://management.albionline.com/wp-content/uploads/2022/03/kitchen-white-150x150-1.svg" alt=""/>
                                    <span>Kuzhinë</span>
                                </div>
                                <svg width="11.079" height="19.376" viewBox="0 0 11.079 19.376" fill="#fff">
                                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M15.879,18.985l7.326-7.332a1.379,1.379,0,0,1,1.956,0,1.4,1.4,0,0,1,0,1.961l-8.3,8.307a1.382,1.382,0,0,1-1.91.04L6.591,13.62a1.385,1.385,0,1,1,1.956-1.961Z" transform="translate(-11.246 25.564) rotate(-90)"></path>
                                </svg>
                            </div>
                        </div> */}
                    </ul>
                </div>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://market.albimall.com/">Hipermarketi</a>
                </li>
            </ul>
        </div>
        <div className="MobileNavigationIcons">
            <ul className="MobileNavigationIcons__list d-flex justify-content-center align-items-center">
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="/virtualtour" className='flex items-center justify-start'>
                        <svg id="_360-degrees" data-name="360-degrees" width="24" height="17.801" viewBox="0 0 24 17.801" fill="white" style={{marginRight: "5px"}}>
                            <path id="Path_565" data-name="Path 565" d="M308,152.854a.7.7,0,0,1-.088-1.4,15.358,15.358,0,0,0,5.6-1.7c1.272-.741,1.972-1.612,1.972-2.453a2.959,2.959,0,0,0-1.507-2.158.7.7,0,1,1,.8-1.159,4.151,4.151,0,0,1,2.117,3.317c0,1.382-.923,2.65-2.671,3.668a16.529,16.529,0,0,1-6.133,1.876A.747.747,0,0,1,308,152.854Zm0,0" transform="translate(-292.896 -137.121)"></path>
                            <path id="Path_566" data-name="Path 566" d="M11.829,145.963l-1.875-1.875a.7.7,0,0,0-.994.994l.548.548a16.941,16.941,0,0,1-5.487-1.417c-1.661-.8-2.614-1.817-2.614-2.792,0-.827.682-1.687,1.921-2.422a.7.7,0,1,0-.717-1.21C.453,139.068,0,140.47,0,141.421c0,1.56,1.211,3,3.411,4.06a18.711,18.711,0,0,0,6.322,1.583l-.774.774a.7.7,0,0,0,.994.994l1.875-1.875A.7.7,0,0,0,11.829,145.963Zm0,0" transform="translate(0 -131.237)"></path>
                            <path id="Path_567" data-name="Path 567" d="M96.429,94.684v-.169c0-.6-.365-.712-.855-.712-.3,0-.4-.267-.4-.534s.1-.534.4-.534c.338,0,.695-.044.695-.766,0-.517-.294-.641-.659-.641-.436,0-.659.107-.659.454,0,.3-.134.508-.65.508-.641,0-.721-.134-.721-.561,0-.695.5-1.594,2.03-1.594,1.131,0,1.986.41,1.986,1.612a1.564,1.564,0,0,1-.686,1.461,1.291,1.291,0,0,1,.908,1.309v.169c0,1.461-1.006,2.013-2.253,2.013-1.532,0-2.12-.935-2.12-1.683,0-.4.169-.508.659-.508.57,0,.712.125.712.463,0,.419.392.517.793.517C96.215,95.486,96.429,95.263,96.429,94.684Zm0,0" transform="translate(-89.065 -85.908)"></path>
                            <path id="Path_568" data-name="Path 568" d="M213.147,94.515v.08a2.188,2.188,0,0,1-4.373,0v-2.36c0-1.532.989-2.1,2.271-2.1,1.505,0,2.1.935,2.1,1.674,0,.428-.2.561-.65.561-.383,0-.721-.1-.721-.508,0-.338-.356-.517-.775-.517-.526,0-.837.276-.837.891v.8a1.424,1.424,0,0,1,1.113-.392A1.669,1.669,0,0,1,213.147,94.515Zm-2.984.178c0,.615.3.882.8.882s.793-.267.793-.882v-.08c0-.65-.294-.9-.8-.9a.715.715,0,0,0-.793.819Zm0,0" transform="translate(-198.987 -85.908)"></path>
                            <path id="Path_569" data-name="Path 569" d="M325.055,94.595v-2.36a2.188,2.188,0,0,1,4.373,0v2.36a2.188,2.188,0,0,1-4.373,0Zm2.984-2.36c0-.615-.3-.891-.8-.891s-.793.276-.793.891v2.36c0,.615.294.891.793.891s.8-.276.8-.891Zm0,0" transform="translate(-309.818 -85.908)"></path>
                            <path id="Path_570" data-name="Path 570" d="M411.461,4.219a2.109,2.109,0,1,1,2.109-2.109A2.112,2.112,0,0,1,411.461,4.219Zm0-2.812a.7.7,0,1,0,.7.7A.7.7,0,0,0,411.461,1.406Zm0,0" transform="translate(-390.163)"></path>
                        </svg>Vizitë Virtuale
                    </a>
                </li>
                <li>
                    <a href="/login" className='flex items-center justify-start'>
                        <svg width="18.52" height="22.526" viewBox="0 0 18.52 22.526" style={{marginRight: "5px"}}>
                            <path id="Path_18" data-name="Path 18" d="M2.005,84.548a9.4,9.4,0,0,1,18.52,0,16.361,16.361,0,0,1-18.52,0Zm4.407-14.8A4.853,4.853,0,1,1,11.265,74.6,4.858,4.858,0,0,1,6.412,69.748Z" transform="translate(-2.005 -64.895)" fill="#fff"></path>
                        </svg>Llogaria ime
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
        <img src={logonew} className="logomobile lg:hidden" alt="" srcset="" />
        <ul className="MobileHeaderTop__shop-nav block lg:hidden">
          <div className="MobileHeaderSearch">
            <button className="MobileHeaderSearch__icon">
              <img src="https://albionline.com/static/media/search-black.110c1cc7.svg" alt="" className="Image"/>
            </button>
          </div>
          <li className="MobileHeaderTop__shop-nav__list">
            <a href="/my-list">
              <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 24.5 22.5" >
                <g id="Path_17">
                  <path d="M12.2,22.5c-0.1,0-0.3,0-0.4-0.1c-2.1-1.2-4.1-2.5-5.9-4.1c-3.9-3.5-6-7.3-6-11C0,3.5,3,0.2,6.9,0c2.1,0,4,0.9,5.3,2.4 C13.6,0.9,15.5,0,17.5,0l0,0c3.9,0.2,6.9,3.4,6.9,7.4c0,3.7-2.1,7.5-6,11c-1.8,1.6-3.8,3-5.8,4.1C12.5,22.5,12.4,22.5,12.2,22.5z  M7,1C3.6,1.2,1,4,1,7.4c0,3.4,1.9,6.9,5.6,10.2c1.7,1.5,3.6,2.8,5.6,3.9c2-1.1,3.9-2.4,5.6-3.9c3.7-3.3,5.6-6.8,5.6-10.2 c0-3.4-2.6-6.2-6-6.4c-1.9,0-3.8,1-4.9,2.5l-0.4,0.6l-0.4-0.6C10.7,2,8.9,1,7,1z"></path></g></svg>
            </a>
          </li>
          <li className="MobileHeaderTop__shop-nav__profile">
            <a href="/login?redirect=%2F">
              <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 19.6 23.5" >
                <g>
                  <path d="M9.8,10.7c1.4,0,2.8-0.6,3.8-1.6c1-1,1.6-2.4,1.6-3.8c0-1.4-0.6-2.8-1.6-3.8c-1-1-2.4-1.6-3.8-1.6c0,0,0,0,0,0 C8.4,0,7,0.6,6,1.6c-1,1-1.6,2.4-1.6,3.8v0C4.5,8.3,6.9,10.7,9.8,10.7z M6.7,2.3C7.6,1.5,8.6,1,9.8,1c0,0,0,0,0,0 c1.2,0,2.3,0.5,3.1,1.3s1.3,1.9,1.3,3.1c0,1.2-0.5,2.3-1.3,3.1C12.1,9.3,11,9.7,9.8,9.7c-2.4,0-4.4-2-4.4-4.4 C5.5,4.2,5.9,3.1,6.7,2.3z"></path><path d="M19.6,20.1c-0.7-4.1-4-7.3-8.1-8.1c-2.6-0.5-5.2,0.1-7.4,1.7c-2.2,1.5-3.6,3.8-4.1,6.4L0,20.4l0.3,0.2 c2.9,2,6.2,2.9,9.5,2.9c3.3,0,6.7-1,9.5-2.9l0.3-0.2L19.6,20.1z M1.1,19.9c0.5-2.2,1.7-4.1,3.6-5.4c1.9-1.4,4.3-1.9,6.6-1.5 c3.6,0.6,6.4,3.4,7.2,6.9C13.3,23.4,6.3,23.4,1.1,19.9z"></path></g></svg>
            </a>
          </li>
          <li className="MobileHeaderTop__shop-nav__cart">
            <a className="" href="/my-cart">
              <svg id="Layer_1" x="0px" y="0px" viewBox="0 0 25.8 23.5" >
                <g>
                  <path d="M25.5,4c-0.2-0.3-0.6-0.5-1-0.5c0,0,0,0,0,0L5.4,3.7C5,1.6,4.7,0,4.7,0H0.5C0.2,0,0,0.2,0,0.5S0.2,1,0.5,1h3.4l2.5,14.4 c0.1,0.6,0.6,0.9,1.2,0.9c0,0,0,0,0,0h14.1c0,0,0,0,0,0c0.5,0,1-0.4,1.2-0.9l2.9-10.4C25.8,4.7,25.8,4.3,25.5,4z M21.9,15.2 c0,0.1-0.1,0.2-0.2,0.2h0H7.5h0c-0.1,0-0.2-0.1-0.2-0.1L5.5,4.7l19.1-0.1c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0.1c0,0.1,0.1,0.1,0,0.2 L21.9,15.2z"></path><path d="M9.4,18c-1.5,0-2.8,1.2-2.8,2.8s1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S10.9,18,9.4,18z M9.4,22.5c-1,0-1.8-0.8-1.8-1.8 S8.4,19,9.4,19c1,0,1.8,0.8,1.8,1.8S10.3,22.5,9.4,22.5z"></path><path d="M18.9,18c-1.5,0-2.8,1.2-2.8,2.8s1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S20.4,18,18.9,18z M18.9,22.5c-1,0-1.8-0.8-1.8-1.8 s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8S19.8,22.5,18.9,22.5z"></path></g></svg>
            </a>
          </li>
      </ul>

      <div className='Mobileheadermenu'>

      </div>
        <ul className="ruby-menu"> 
         
        {categoryValue?.categories?.categoryList?.length > 0 ? renderCategories(categoryValue?.categories?.categoryList) : null}
        <li>
          <input type="text" className="p-2 rounded-3xl w-2/12 border border-gray-100 text-gray-800 bg-gray-100 px-5 searchright" placeholder="Search"/>
          </li>
        </ul>
        
      </div>
</div>
	)
}