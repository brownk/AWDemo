var App;
(function (App) {
    "use strict";
    var controllerId = "newsCtrl";
    var NewsCtrl = (function () {
        function NewsCtrl(newsService) {
            this.newsService = newsService;
            this.activate();
        }
        NewsCtrl.prototype.activate = function () {
            this.newsArticles = this.newsService.getAll();
        };
        NewsCtrl.$inject = ["newsService"];
        return NewsCtrl;
    })();
    App.controllers.controller(controllerId, NewsCtrl);
})(App || (App = {}));
//# sourceMappingURL=news.ctrl.js.map
