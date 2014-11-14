var App;
(function (App) {
    "use strict";
    var controllerId = "partnersCtrl";
    var PartnersController = (function () {
        function PartnersController(partnersService) {
            this.partnersService = partnersService;
            this.educationPartners = this.partnersService.educationPartners();
            this.organizationalPartners = this.partnersService.organizationalPartners();
            this.oneStopPartners = this.partnersService.oneStopPartners();
            this.activate();
        }
        PartnersController.prototype.activate = function () {
        };
        PartnersController.$inject = ["partnersService"];
        return PartnersController;
    })();
    App.controllers.controller(controllerId, PartnersController);
})(App || (App = {}));
//# sourceMappingURL=partners.ctrl.js.map
