import React from 'react';
import AppConst from "../constants/AppConst";
import AppActions from "../actions/Actions";

class ProductList extends React.Component {

	constructor() {
		super();
	}

	updateProduct(event) {
		alert('update');
	}

	removeProduct(event) {
		alert('remove');
	}

	render() {
		return (
			<div class="productList">{
				this.props.products.map(function (product, index) {
					return (
						<div class="productItem">
							<span>{product.title}</span>
							<button onClick={this.updateProduct}>Update</button>|
							<button onClick={this.removeProduct}>Remove</button>
						</div>
					)
				}, this)
			}</div>
		)
	}  
};

export default ProductList; 