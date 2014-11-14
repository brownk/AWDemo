module App {
	"use strict";
	var directiveId = "awFaq";
	

	function awDirective() {
		var directive: ng.IDirective = {};
		directive.restrict = "EA";
		directive.scope = {
			faq: "="
		}
		directive.controller = ($scope)=> {
			$scope.showAnswer = () => {
				if ($scope.faq.show) {
					
					$scope.faq.show = false;
				}
				else {
					$scope.faq.show = true;
				}
			}
		}
		directive.replace = true;
		directive.templateUrl = "App/directives/faq.tpl.html";
		

		return directive;
	};
	App.directives.directive(directiveId, [() => {
		return awDirective();
	}]);
} 