import React from 'react'
import {useParams} from "react-router-dom"

export default function SearchData() {
	const {productCode} = useParams();
	return (
		<div>
		<h1>Product data {productCode}</h1>
			
		</div>
	)
}