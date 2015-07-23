import React from 'react';
import AppConst from "../constants/AppConst";
import AppActions from "../actions/Actions";

class ProductItem extends React.Component {

	updateProduct(event) {
		alert('update');
	}

	removeProduct(event) {
		AppActions.removeProduct(this.props.product);
	}

	render() {		
		return (
			<div class="productItem">
				<span>{this.props.product.title}</span>
				<button onClick={this.updateProduct.bind(this)}>Update</button>|
				<button onClick={this.removeProduct.bind(this)}>Remove</button>
			</div>
		)
	}  
};

export default ProductItem; 