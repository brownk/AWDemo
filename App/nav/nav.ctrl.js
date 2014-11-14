var App;
(function (App) {
    "use strict";
    var controllerId = "navbar";
    var NavCtrl = (function () {
        function NavCtrl(states) {
            this.states = states;
            this.stateRoutes = [];
            this.activate();
        }
        NavCtrl.prototype.activate = function () {
            var _this = this;
            angular.forEach(this.states, function (state, key) {
                if (state.nav) {
                    _this.stateRoutes.push(state);
                }
            });
        };
        NavCtrl.$inject = ["states"];
        return NavCtrl;
    })();
    App.controllers.controller(controllerId, NavCtrl);
})(App || (App = {}));
//# sourceMappingURL=nav.ctrl.js.map
