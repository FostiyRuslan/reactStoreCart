import React from 'react';
import AppConst from "../constants/AppConst";
import AppActions from "../actions/Actions";
import ProductItem from './ProductItem'

class ProductList extends React.Component {	

	render() {
		return (
			<div class="productList">{
				this.props.products.map(function (product, index) {
					return <ProductItem product={product} />					
				}, this)
			}</div>
		)
	}  
};

export default ProductList; 