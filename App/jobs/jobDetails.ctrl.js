var App;
(function (App) {
    "use strict";
    var controllerId = "jobDetailsCtrl";
    var JobDetailsCtrl = (function () {
        function JobDetailsCtrl($stateParams, currentJobsService) {
            this.$stateParams = $stateParams;
            this.currentJobsService = currentJobsService;
            this.jobOrderNumber = $stateParams.orderNumber;
            this.activate();
        }
        JobDetailsCtrl.prototype.activate = function () {
            this.job = this.currentJobsService.getById(this.jobOrderNumber);
        };
        JobDetailsCtrl.$inject = ["$stateParams", "currentJobsService"];
        return JobDetailsCtrl;
    })();
    App.controllers.controller(controllerId, JobDetailsCtrl);
})(App || (App = {}));
//# sourceMappingURL=jobDetails.ctrl.js.map
