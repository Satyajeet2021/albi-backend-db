import React,{useEffect,useState} from 'react';
import './Productfilter.css';

export default function Productfilter() {
  const [short, setShort] = useState(false);
  const [gender, setGender] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [price, setPrice] = useState(false);

const shortBtn=()=>{
  setShort(prev => !prev);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(false);
}
const genderBtn=()=>{
  setShort(false);
  setGender(prev => !prev);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(false); 
}
const categoryBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(prev => !prev);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(false); 
}
const brandBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(prev => !prev);
  setSize(false);
  setColor(false);
  setPrice(false); 
}
const sizeBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(prev => !prev);
  setColor(false);
  setPrice(false); 
}
const colorBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(prev => !prev);
  setPrice(false); 
}
const priceBtn=()=>{
  setShort(false);
  setGender(false);
  setCategory(false);
  setBrand(false);
  setSize(false);
  setColor(false);
  setPrice(prev => !prev); 
}


  return (
    <div>
  <div className='container mx-auto my-4'>
    <div class="mg-filter js-products-filter">
  <ul class="mg-filter__list">
  <li class={`mg-filter__list-item js-filter-option ${short?"active":"deactive"} `} data-target="#sort-products" >
  <div class="mg-filter__list-item-btn" onClick={(e) =>shortBtn()}>
  <div class="mg-filter__list-item-btn-title-container">
  Sort
  </div>
  <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy"/>
  </div>
  <div class={`mg-filter__list-item-btn-collapse-container ${short?"activ":"dactive"} `} id="sort-products">
  <div class="mg-filter__list-item-btn-collapse-container-item">
  <input type="radio" value="price_clause,ASC" name="sort_products_by"/>
  <span class="mg-filter__list-item-btn-collapse-container-item-content">Price(Lowest)</span>
  </div>
  <div class="mg-filter__list-item-btn-collapse-container-item">
  <input type="radio" value="price_clause,DESC" name="sort_products_by"/>
  <span class="mg-filter__list-item-btn-collapse-container-item-content">Price(Highest)</span>
  </div>
  <div class="mg-filter__list-item-btn-collapse-container-item">
  <input type="radio" value="new-in" name="sort_products_by"/>
  <span class="mg-filter__list-item-btn-collapse-container-item-content">New In</span>
  </div>
 </div>
  </li>

  <li class={`mg-filter__list-item js-filter-option ${gender?"active":"deactive"} `} data-target="#gender-fliter" >
  <div class="mg-filter__list-item-btn" onClick={(e) => genderBtn()}>
  <div class="mg-filter__list-item-btn-title-container">
  Gender
  </div>
  <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy"/>
  </div>
  <div class={`mg-filter__list-item-btn-collapse-container js-filter-container w-160 ${gender?"activ":"dactive"} `} id="gender-fliter">
  <ul class="mg-filter__sublist js-products-filter-sublist h-350r overflow-y-hidden">
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_gender" value="men"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Men</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_gender" value="women"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Women</span>
  </div>
  </button>
  </ul> </div>
  </li>

  <li class={`mg-filter__list-item js-filter-option ${category?"active":"deactive"}`} data-target="#product-categories" >
  <div class="mg-filter__list-item-btn" onClick={(e) => categoryBtn()}>
  <div class="mg-filter__list-item-btn-title-container">
  Categories
  </div>
  <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy"/>
  </div>
  <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${category?"activ":"dactive"} `} id="product-categories">
  <ul class="mg-filter__sublist js-products-filter-sublist">
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="67"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Swimwear</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="75"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Swim Shorts</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="68"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Swimsuits</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="95"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Swim Bra</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="94"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Bikini Bottoms</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="72"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Footwear</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="73"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Sliders</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="77"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Sneakers</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" checked="" name="filter_products_by_cat" value="62"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Clothing</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="64"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">T-shirts</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="78"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Shorts</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="1"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Shirts</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
   <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="74"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Polos</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="66"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Jeans</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="63"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Pants</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="86"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Dresses</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="124"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Skirts</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="100"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Jumpsuits</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="76"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Sweatshirts</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="70"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Accessories</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="79"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Bags</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="82"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Belts</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="71"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Caps &amp; Hats</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="81"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Socks</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="83"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Towels</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="80"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Wallets</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="89"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Underwear</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="90"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Boxer 3pack</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="119"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Bodysuit</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="96"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Bra</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="121"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Hipsters</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="120"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Thongs</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="125"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Nightwear</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="126"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Pyjamas</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="88"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Boots</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="69"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Hoodies</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="65"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Jackets &amp; Coats</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="147"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Bracelets</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="141"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Heels</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="153"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Jewllery</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="143"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Umbrellas</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="87"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Knitwear</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="148"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Ties</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="156"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Necklaces</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="140"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Bathrobe</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="154"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Rings</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="155"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Earrings</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="145"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Swimsuit</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="131"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Scarfs</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="138"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Bottles</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="146"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Gloves</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="152"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Suits</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="128"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Shoes</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_cat" value="157"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">Slippers</span>
  </div>
  </button>
  </ul> </div>
  </li>

  <li class={`mg-filter__list-item js-filter-option ${brand?"active":"deactive"}`} data-target="#product-brands" >
  <div class="mg-filter__list-item-btn" onClick={(e) => brandBtn()}>
  <div class="mg-filter__list-item-btn-title-container">
  Brands
  </div>
  <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy"/>
  </div>
  <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${brand?"activ":"dactive"} `} id="product-brands">
  <ul id="filter-brand" class="mg-filter__sublist js-products-filter-sublist">
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="boss" name="filter_products_by_brand" value="2996"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">BOSS</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="hugo" name="filter_products_by_brand" value="3007"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">HUGO</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="superdry" name="filter_products_by_brand" value="5302"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">SUPERDRY</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="scotch-soda" name="filter_products_by_brand" value="5094"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">SCOTCH &amp; SODA</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="karl-lagerfeld" name="filter_products_by_brand" value="4777"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">KARL LAGERFELD</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="diesel" name="filter_products_by_brand" value="6559"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">DIESEL</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="g-star-raw" name="filter_products_by_brand" value="8684"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">G-STAR RAW</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="balr" name="filter_products_by_brand" value="10452"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">BALR.</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="joop" name="filter_products_by_brand" value="6241"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">JOOP!</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" data-slug="preach" name="filter_products_by_brand" value="4664"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <span class="mg-filter__sublist-item-title">PREACH</span>
  </div>
  </button>
  </ul> </div>
  </li>

  <li class={`mg-filter__list-item js-filter-option ${size?"active":"deactive"}`} data-target="#product-sizes" >
  <div class="mg-filter__list-item-btn" onClick={(e) => sizeBtn()}>
  <div class="mg-filter__list-item-btn-title-container">
  Sizes
  </div>
  <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy"/>
  </div>
  <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${size?"activ":"dactive"} `} id="product-sizes">
    <ul id="filter-size" class="mg-filter__sublist js-products-filter-sublist">
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3018"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">XS</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3010"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">S</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3008"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">M</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="2997"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">L</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3035"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">XL</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3036"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">XXL</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3020"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">XXXL</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3354"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">36</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3366"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">37</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="18571"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">37½</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3072"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">38</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="18572"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">38½</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3074"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">39</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3173"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">40</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3165"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">41</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3051"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">42</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3207"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">43</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3047"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">44</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="24880"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">44,5</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="24877"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">42,5</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3211"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">45</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3295"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">46</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="5432"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">7</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="5841"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">8</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="18558"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">8½</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="5434"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">9</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="24879"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">37,5</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="22120"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">6</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="18555"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">6½</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="18557"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">7½</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="18559"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">9½</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4383"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">4XL</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
       <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4017"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">25/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6906"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">26/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4019"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">26/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6908"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">27/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4020"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">27/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="10241"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">28/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6742"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">28/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6689"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">29/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4021"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">29/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3187"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">30/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3298"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">30/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4095"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">30/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3189"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">31/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3025"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">31/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4014"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">31/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3311"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">32/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3012"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">32/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4272"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">32/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="5377"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">32/36</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="5379"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">32/38</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3190"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">33/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3016"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
       <span class="mg-filter__sublist-item-title">33/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="20379"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">33/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3305"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">34/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3191"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">34/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="20380"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">34/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3651"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">35/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3029"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">35/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3032"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">35/34</span>
      </div>
       </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3306"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">36/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3033"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">36/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3294"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">36/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4369"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">36/36</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="8688"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">36/40</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3193"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">38/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3192"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">38/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3195"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">38/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="7130"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">38/36</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6685"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">40/30</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3529"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">40/32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3299"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">40/34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="7131"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">40/36</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3109"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">32</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3198"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">34</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4806"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">3XL</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4778"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">1</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6711"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">2</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6863"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">3</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3790"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">OS</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3199"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">39-42</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3250"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">43-46</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6920"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">80</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4131"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">85</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3220"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">90</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3228"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">95</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3227"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">100</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3238"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">105</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3236"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">110</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="10375"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">115</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="6984"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">XXS</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="5398"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">2XL</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3049"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">48</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3102"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">50</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3104"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">52</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3004"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">54</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
       <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3108"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">56</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="4152"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">58</span>
      </div>
      </button>
      <button class="mg-filter__sublist-item">
      <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_size" value="3353"/>
      <div class="mg-filter__sublist-item-wrapper text-start">
      <div class="mg-filter__sublist-item-checkbox">
      </div>
      <span class="mg-filter__sublist-item-title">35</span>
      </div>
      </button>
      </ul>
  </div>
  </li>

  <li class={`mg-filter__list-item js-filter-option ${color?"active":"deactive"}`} >
  <div class="mg-filter__list-item-btn" onClick={(e) => colorBtn()}>
  <div class="mg-filter__list-item-btn-title-container">
  Colors
  </div>
  <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy"/>
  </div>
  <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${color?"activ":"dactive"} `} id="product-colors">
  <ul id="filter-color" class="mg-filter__sublist js-products-filter-sublist">
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15181"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" ></div>
  <span class="mg-filter__sublist-item-title">Multi Color</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15177"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#fed533'}}></div>
  <span class="mg-filter__sublist-item-title">Yellow</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15176"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#ffffff'}}></div>
  <span class="mg-filter__sublist-item-title">White</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15170"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#e7352b'}}></div>
  <span class="mg-filter__sublist-item-title">Red</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15163"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#8d429f'}}></div>
  <span class="mg-filter__sublist-item-title">Purple</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15162"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#f0728f'}}></div>
  <span class="mg-filter__sublist-item-title">Pink</span>
  </div>
   </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15161"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#f36b26'}}></div>
  <span class="mg-filter__sublist-item-title">Orange</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15160"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#808080'}}></div>
  <span class="mg-filter__sublist-item-title">Grey</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15159"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#7bba3c'}}></div>
  <span class="mg-filter__sublist-item-title">Green</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15158"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#825d41'}}></div>
  <span class="mg-filter__sublist-item-title">Brown</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15157"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#1790c8'}}></div>
  <span class="mg-filter__sublist-item-title">Blue</span>
  </div>
  </button>
  <button class="mg-filter__sublist-item">
  <input class="mg-filter__sublist-item-checkbox-fill" type="checkbox" name="filter_products_by_color" value="15154"/>
  <div class="mg-filter__sublist-item-wrapper">
  <div class="mg-filter__sublist-item-checkbox">
  </div>
  <div class="mg-filter__sublist-item-color" style={{backgroundColor: '#000000'}}></div>
  <span class="mg-filter__sublist-item-title">Black</span>
  </div>
  </button>
  </ul> </div>
  </li>

  <li class={`mg-filter__list-item js-filter-option ${price?"active":"deactive"}`} data-target="#product-price" >
  <div class="mg-filter__list-item-btn" onClick={(e) => priceBtn()}>
  <div class="mg-filter__list-item-btn-title-container">
  Price
  </div>
  <img alt="arrow pointing down" data-src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" class="mg-filter__list-item-arrow lazyloaded" src="https://maxx-group.com/wp-content/themes/maxx-group/src/img/down-arrow.svg" loading="lazy"/>
  </div>
  <div class={`mg-filter__list-item-btn-collapse-container js-filter-container ${price?"activ":"dactive"} `} id="product-price">
  <ul id="filter-price" class="mg-filter__sublist js-products-filter-sublist overflow-hidden h-auto pb-5">
  <div class="d-flex flex-column align-items-center px-3">
  <div id="filter-price-slider" class="jsr">
    <div class="jsr_rail"></div>
    <div class="jsr_slider" data-key="0" tabindex="1" style={{left: '0%'}}></div>
    <div class="jsr_slider" data-key="1" tabindex="1" style={{left: '100%'}}></div>
    <div class="jsr_bar" data-key="0" style={{left: '0%', width:'100%'}}></div>
    <div class="jsr_label" data-key="0" style={{left: '0%'}}>
          <span data-key="0">
            0
            
          </span>
        </div><div class="jsr_label" data-key="1" style={{left: '100%'}}>
          <span data-key="1">
            1500
            
          </span>
        </div><div class="jsr_label is-hidden" data-key="01" style={{left: '50%'}}>
          <span data-key="0">
            0
             - 
          </span>
        
          <span data-key="1">
            1500
            
          </span>
        </div></div>
  </div>
  </ul> </div>
  </li>

  <li class="mg-filter__list-item border-0" style={{backgroundColor: 'transparent'}}>
  <button class="mg-filter__btn_transparent px-4 clear js-filter-clear-btn">Clear</button>
  </li>

  <li class="mg-filter__list-item border-0" style={{backgroundColor: 'transparent'}}>
  <button class="mg-filter__btn_yellow px-4 js-filter-apply-btn">Apply</button>
  </li>

  </ul>
</div>
    </div>
    </div>
  )
}
