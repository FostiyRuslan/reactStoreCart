import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConst from "../constants/AppConst";

class AppActions {
	addProduct(product) {
		AppDispatcher.handleAction({
			action: AppConst.ADD_PRODUCT,
			product: product
		});
	}

	removeProduct(product) {
		AppDispatcher.handleAction({
			action: AppConst.REMOVE_PRODUCT,
			product: product
		});
	}

	updateProduct(product) {
		AppDispatcher.handleAction({
			action: AppConst.UPDATE_PRODUCT,
			product: product
		});
	}
};

export default new AppActions;