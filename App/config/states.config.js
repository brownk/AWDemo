var App;
(function (App) {
    "use strict";

    var states = function () {
        return [
            {
                state: "main",
                config: {
                    url: "/",
                    templateUrl: 'app/home/home.tpl.html'
                },
                nav: {
                    title: "Home",
                    icon: ""
                }
            },
            {
                state: "jobs",
                config: {
                    url: "/jobs",
                    abstract: true,
                    template: "<div data-ui-view></div>"
                },
                nav: {
                    title: "Jobs",
                    icon: ""
                }
            },
            {
                state: "jobs.current",
                config: {
                    url: "",
                    templateUrl: 'app/jobs/list.tpl.html'
                }
            },
            {
                state: "jobs.details",
                config: {
                    url: "/{orderNumber}",
                    templateUrl: 'app/jobs/details.tpl.html'
                }
            },
            {
                state: "partners",
                config: {
                    url: "/partners",
                    templateUrl: 'app/partners/partners.tpl.html'
                },
                nav: {
                    title: "Partners",
                    icon: ""
                }
            },
            {
                state: "aboutUs",
                config: {
                    url: "/aboutUs",
                    templateUrl: 'app/aboutUs/aboutUs.tpl.html'
                },
                nav: {
                    title: "About Us",
                    icon: ""
                }
            },
            {
                state: "faq",
                config: {
                    url: "/faq",
                    templateUrl: 'app/faq/faqList.tpl.html'
                },
                nav: {
                    title: "FAQ",
                    icon: ""
                }
            }
        ];
    };

    App.services.constant("states", states());

    var app = angular.module("app");

    var statesConfig = function ($urlRouterProvider, $stateProvider, states) {
        states.forEach(function (s) {
            setState(s.state, s.config);
        });

        $urlRouterProvider.otherwise('/');
        $urlRouterProvider.when('', '/');

        function setState(state, definition) {
            definition.resolve = angular.extend(definition.resolve || {}, {});
            $stateProvider.state(state, definition);
            return $stateProvider;
        }
    };
    app.config(["$urlRouterProvider", "$stateProvider", "states", statesConfig]);
})(App || (App = {}));
//# sourceMappingURL=states.config.js.map
