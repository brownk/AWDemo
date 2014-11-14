module App {
	"use strict";
	var controllerId = "partnersCtrl";
	class PartnersController {

		educationPartners: IPartner[];
		organizationalPartners: IPartner[];
		oneStopPartners: IPartner[];

		static $inject = ["partnersService"];
		constructor(private partnersService: PartnersService) {
			this.educationPartners = this.partnersService.educationPartners();
			this.organizationalPartners = this.partnersService.organizationalPartners();
			this.oneStopPartners = this.partnersService.oneStopPartners();
			this.activate();
		}

		activate() {
			
		}
	}
	App.controllers.controller(controllerId, PartnersController);
} 