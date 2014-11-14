module App {
	"use strict";
	var controllerId = "currentJobsCtrl";
	class CurrentJobsCtrl {
		public currentJobs: IJobOpening[];

		static $inject = ["currentJobsService"];
		constructor(private currentJobsService: CurrentJobsService) {
			this.activate();
		}

		activate() {
			this.currentJobs = this.currentJobsService.currentJobsList();
		}
	}
	App.controllers.controller(controllerId, CurrentJobsCtrl);
} 