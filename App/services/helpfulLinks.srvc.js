var App;
(function (App) {
    "use strict";

    var serviceId = "helpfulLinksService";
    var HelpfulLinksService = (function () {
        function HelpfulLinksService() {
        }
        HelpfulLinksService.prototype.helpfulLinks = function () {
            //var links: ILink[] = [
            //	{
            //	},
            //	{
            //	},
            //	{
            //	}
            //];
            //return links;
        };
        HelpfulLinksService.$inject = [];
        return HelpfulLinksService;
    })();
    App.services.service(serviceId, HelpfulLinksService);
})(App || (App = {}));
//# sourceMappingURL=helpfulLinks.srvc.js.map
