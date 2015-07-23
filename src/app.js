import React from 'react';
import ProductList from './components/ProductList'
import ProductStore from './stores/ProductStore'

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			products: ProductStore.getProducts()
		};
	}

	render() {
		return <ProductList products={this.state.products} />;
	}  
};

React.render(
	<App />,
	document.body
);