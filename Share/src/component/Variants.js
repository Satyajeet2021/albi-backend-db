import React from "react";
import Select from "react-select";

const products = [
//   { size: "Select option"},
  { size: "small", color: "https://appapi.albionline.com/vendorImages/AUv0Mjf9V-5543650-57_1.jpg"},
  { size: "small", color: "https://appapi.albionline.com/vendorImages/oX812PCN1-5543651-39_1.jpg"},
  { size: "medium", color: "https://appapi.albionline.com/vendorImages/oX812PCN1-5543651-39_1.jpg"},
  { size: "large", color: "https://appapi.albionline.com/vendorImages/oX812PCN1-5543651-39_1.jpg"},
  { size: "large", color: "https://appapi.albionline.com/vendorImages/AUv0Mjf9V-5543650-57_1.jpg"}
];

export default function App() {
  const [size, setSize] = React.useState();
  const [color, setColor] = React.useState();
  const [material, setMaterial] = React.useState();

  const sizeOptions = products
    .map((p) => p.size)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((size) => ({ label: size, value: size }));

  const colorOptions = products
    .filter((p) => size && p.size === size.value)
    .map((p) => p.color)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((color) => ({ label: color, value: color }));

    console.log("----------colorOptions----------", colorOptions);
    
  const materialOptions = products
    .filter(
      (p) => size && p.size === size.value && color && p.color === color.value
    )
    .map((p) => p.material)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((material) => ({ label: material, value: material }));

  return (
    
    <div className="App">

<div className="text-md font-semibold border-b border-dotted border-gray-300 flex space-x-4 items-center py-5">
						<p className="text-md text-gray-400">Color</p>
						{/* {answer_array.map(dt=>(

						<p className="font-normal p-2 rounded-full border-1 w-7 h-7 border-dotted border-red-600" style={{backgroundColor:`#${dt}`}}></p>
						))} */}
            {colorOptions?.map((colorimg, i)=>(
            <p className="font-normal p-2 rounded-full border-1 w-7 h-7 border-dotted border-red-600 product-color-img">
                <img src={colorimg.value} className={i} />
            </p>
            ))}
			</div>
			<div className="text-md font-semibold border-b border-gray-300 flex space-x-4 items-center py-5">
				<p className="text-md text-gray-400">Size</p>
                <Select value={size} onChange={setSize} options={sizeOptions} />
						 {/* <select className="w-auto px-2 text-gray-500">
						 	<option>Select Option</option>
						 	<option>S</option>
						 	<option>M</option>
						 	<option>L</option>
						 	<option>XL</option>
						 	<option>XXL</option>
						 </select> */}
			</div>





      {/* <Select value={size} onChange={setSize} options={sizeOptions} />
{colorOptions?.map((colorimg, i)=>(
            <p className="font-normal p-2 rounded-full border-1 w-7 h-7 border-dotted border-red-600 product-color-img">
                <img src={colorimg.value} className={i} />
            </p>
            ))} */}

    </div>
  );
}
