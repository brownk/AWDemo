var App;
(function (App) {
    "use strict";
    var controllerId = "currentJobsCtrl";
    var CurrentJobsCtrl = (function () {
        function CurrentJobsCtrl(currentJobsService) {
            this.currentJobsService = currentJobsService;
            this.activate();
        }
        CurrentJobsCtrl.prototype.activate = function () {
            this.currentJobs = this.currentJobsService.currentJobsList();
        };
        CurrentJobsCtrl.$inject = ["currentJobsService"];
        return CurrentJobsCtrl;
    })();
    App.controllers.controller(controllerId, CurrentJobsCtrl);
})(App || (App = {}));
//# sourceMappingURL=currentJobs.ctrl.js.map
