var app = angular.module('app', [
	'app.services',
	"ngSanitize",
	"ngAnimate",
	"ui.router",
	'app.filters',
	'app.common',
	'app.controllers',
	'app.directives'
])
	.run(appStart)
	.config(["$locationProvider", $locationProvider => {
		//$locationProvider.html5Mode(true);
	}]);

var appStart = () => {

};

module App {
	export var common = angular.module('app.common', []);
	export var controllers = angular.module('app.controllers', []);
	export var directives = angular.module('app.directives', []);
	export var services = angular.module('app.services', []);
	export var filters = angular.module('app.filters', []);

	export interface IController { }

	export interface IDirective extends ng.IDirective { }

	export interface IFilter {
		filter(input: string): string;
	}

	export interface IService { }
}