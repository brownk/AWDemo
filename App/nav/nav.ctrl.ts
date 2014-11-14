module App {
	"use strict";
	var controllerId = "navbar";
	class NavCtrl {
		public stateRoutes:{}[] = [];
		static $inject = ["states", ];
		constructor(private states) {
			this.activate();
		}

		activate() {
			angular.forEach(this.states, (state, key) => {
				if (state.nav) {
					this.stateRoutes.push(state);
				}
			});
		}
	}
	App.controllers.controller(controllerId, NavCtrl);
} 