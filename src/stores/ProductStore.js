import events from "events";
import AppDispatcher from "../dispatcher/AppDispatcher";
import * as AppConst from "../constants/AppConst";


class ProductStore extends events.EventEmitter {

	constructor() {
		super();
		this._products = [];
	}	

	emitChange() {
  		this.emit('change');
	}

	addChangeListener(callback) {
    	this.on('change', callback);
	}

	removeChangeListener(callback) {
    	this.removeListener('change', callback);
	}

	addProduct(product) {
		this._products.push(product);
	}

	getProducts() {
		return this._products;
	}

	updateProduct(product) {
		let index = this._products.indexOf(product);
		let oldProduct = this._products[index];

		for (let attr of oldProduct) {
			oldProduct[attr] = product[attr];			
		}
	}

	removeProduct(product) {
		let index = this._products.indexOf(product);

		this._products.splice(index, 1);
	}	
};



var productStore = new ProductStore();

AppDispatcher.register(event => {	
	switch(event.action.type) {
		case AppConst.ADD_PRODUCT:
			productStore.addProduct(event.action.product);
			break;
		case AppConst.REMOVE_PRODUCT:
			productStore.removeProduct(event.action.product);
			break;
		case AppConst.UPDATE_PRODUCT:
			productStore.updateProduct(event.action.product);
			break;
		default:
			return true;
	};

	productStore.emitChange();

	return true;
});

export default productStore;