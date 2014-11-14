var app = angular.module('app', [
    'app.services',
    "ngSanitize",
    "ngAnimate",
    "ui.router",
    'app.filters',
    'app.common',
    'app.controllers',
    'app.directives'
]).run(appStart).config([
    "$locationProvider", function ($locationProvider) {
        //$locationProvider.html5Mode(true);
    }]);

var appStart = function () {
};

var App;
(function (App) {
    App.common = angular.module('app.common', []);
    App.controllers = angular.module('app.controllers', []);
    App.directives = angular.module('app.directives', []);
    App.services = angular.module('app.services', []);
    App.filters = angular.module('app.filters', []);
})(App || (App = {}));
//# sourceMappingURL=app.js.map
