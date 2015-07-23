import React from 'react';
import AppConst from "../constants/AppConst";
import AppActions from "../actions/Actions";


class AddProductForm extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			price: '',
			description: ''
		};
	}

	addProduct(event) {
		event.preventDefault();

		AppActions.addProduct(this.state);
		this.setState({});
	}

	handleChange(event) {
		let fieldName = event.target.name;
		let stateValue = {};

		stateValue[fieldName] = event.target.value;
		this.setState(stateValue);
	}

	render() {
		return (
			<form onSubmit={this.addProduct.bind(this)}>
				<label>Title</label>
				<input type="text" name="title" onChange={this.handleChange.bind(this)} />
				<label>Price</label>
				<input type="text" name="price" onChange={this.handleChange.bind(this)} />
				<label>Description</label>
				<input type="text" name="description" onChange={this.handleChange.bind(this)} />
				<button>Add</button>
			</form>
		)		  		
	}

}

export default AddProductForm;