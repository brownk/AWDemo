var App;
(function (App) {
    "use strict";
    var directiveId = "awFaq";

    function awDirective() {
        var directive = {};
        directive.restrict = "EA";
        directive.scope = {
            faq: "="
        };
        directive.controller = function ($scope) {
            $scope.showAnswer = function () {
                if ($scope.faq.show) {
                    $scope.faq.show = false;
                } else {
                    $scope.faq.show = true;
                }
            };
        };
        directive.replace = true;
        directive.templateUrl = "App/directives/faq.tpl.html";

        return directive;
    }
    ;
    App.directives.directive(directiveId, [function () {
            return awDirective();
        }]);
})(App || (App = {}));
//# sourceMappingURL=faq.dir.js.map
