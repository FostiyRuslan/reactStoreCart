import React from 'react';
import ProductList from './components/ProductList'
import ProductStore from './stores/ProductStore'
import AddProductForm from './components/AddProductForm'

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			products: ProductStore.getProducts()
		};
	}

	_onChange() {
		this.setState({
			products: ProductStore.getProducts()
		});
	}

	componentDidMount() {
    	ProductStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
    	ProductStore.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		return (
			<div>
				<AddProductForm />
				<ProductList products={this.state.products} />
			</div>
		)
	}  
}

React.render(
	<App />,
	document.body
);