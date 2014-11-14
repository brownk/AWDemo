module App {
	"use strict";
	var controllerId = "jobDetailsCtrl";
	class JobDetailsCtrl {
		private jobOrderNumber: string;
		public job: IJobOpening;
		static $inject = ["$stateParams","currentJobsService"];
		constructor(private $stateParams, private currentJobsService: CurrentJobsService) {
			this.jobOrderNumber = $stateParams.orderNumber;
			this.activate();
		}

		activate() {
		    this.job = this.currentJobsService.getById(this.jobOrderNumber);
		}
	}
	App.controllers.controller(controllerId, JobDetailsCtrl);
} 