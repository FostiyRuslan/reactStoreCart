import flux from "flux";

var Dispatcher = flux.Dispatcher;


class AppDispatcher extends Dispatcher {

	constructor() {
		super();
	}

	handleAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
}

export default new AppDispatcher;