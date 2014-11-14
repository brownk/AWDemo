module App {
	"use strict";
	export interface ILink {
		url: string;
		linkText: string;

	}

	var serviceId = "helpfulLinksService";
	class HelpfulLinksService {
		static $inject = [];
		constructor() {

		}

		public helpfulLinks() {
			//var links: ILink[] = [
			//	{

			//	},
			//	{

			//	},
			//	{

			//	}
			//];
			//return links;
		}
	}
	App.services.service(serviceId, HelpfulLinksService);
} 