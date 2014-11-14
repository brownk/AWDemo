var App;
(function (App) {
    "use strict";
    var controllerId = "faqCtrl";
    var FaqCtrl = (function () {
        function FaqCtrl(faqService) {
            this.faqService = faqService;
            this.activate();
        }
        FaqCtrl.prototype.activate = function () {
            this.faqsJobPrep = this.faqService.getAllJobPrep();
            this.faqsCareerQuest = this.faqService.getAllCareerQuest();
        };

        FaqCtrl.prototype.showAnswer = function (faq) {
            debugger;
            if (faq) {
                faq.show = true;
            }
            return faq;
        };
        FaqCtrl.$inject = ["faqService"];
        return FaqCtrl;
    })();
    App.controllers.controller(controllerId, FaqCtrl);
})(App || (App = {}));
//# sourceMappingURL=faq.ctrl.js.map
