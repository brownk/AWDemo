module App {
	"use strict";
	export interface IPartner {
		name: string;
		image?: string;
		alt?: string;
		url: string;
		address?: string;
		city?: string;
		state?: string;
		zip?: string;
		phone?: string;
	}
	var serviceId = "partnersService";
	export class PartnersService {
		static inject = [];
		constructor() {

		}

		public oneStopPartners() {
			var oneStopPartners: IPartner[] = [
				{
					name: "Alliance Small Business Development Center",
					url: "http://www.alliancesbdc.com/",
					address: "1220 10th Street - Suite 102",
					city: "Modesto",
					state: "CA",
					zip: "95354",
					phone: "(209) 567-4910 - Main",
					image: "assets/logo-sbdc-top.jpg",
					alt: "SBDC"
				},
				{
					name: "Disability Resource Agency for Independent Living",
					url: "http://www.edd.ca.gov/",
					address: "629 12th Street ",
					city: "Modesto",
					state: "CA",
					zip: "95354",
					phone: "(209) 576-6118 - Main",
					image: "assets/logo-heading_edd.gif",
					alt: "EDD"
				}
			];
			return oneStopPartners;
		}

		public organizationalPartners() {
			var organizationalPartners: IPartner[] = [
				{
					name: "Center for Human Services",
					url: "http://www.centerforhumanservices.org/edible/index.html",
					address: "1700 McHenry Village Way, Suite 11",
					city: "Modesto",
					state: "CA",
					zip: "95350",
					phone: "(209) 526-1476 - Main"
				},
				{
					name: "Disability Resource Agency for Independent Living",
					
					url: "",
					address: "920 12th Street",
					city: "Modesto",
					state: "CA",
					zip: "95354",
					phone: "(209) 521-7260"
				}
			];
			return organizationalPartners;
		}

		public educationPartners() {
			var educationPartners: IPartner[] = [
				{
					name: "Adelante High School",
					url: "http://www.rjuhsd.k12.ca.us/Domain/117",
					address: "6200 Claus Road",
					city: "Riverbank",
					state: "CA",
					zip: "95367",
					phone: "(209) 869-1891 ext.201"
				},
				{
					name: "Argus & Endeavor High School",
					url: "http://argus.ceres.k12.ca.us/",
					address: "1717 Sylvan Avenue",
					city: "Modest",
					state: "CA",
					zip: "95355",
					phone: "(209) 556-1800"
				},
				{
					name: "Fred C. Beyer High School",
					url: "http://beyer.monet.k12.ca.us/",
					address: "6200 Claus Road",
					city: "Riverbank",
					state: "CA",
					zip: "95367",
					phone: "(209) 576-4311"
				},
				{
					name: "Central Valley High School",
					url: "http://cvhsweb.ceres.k12.ca.us/",
					address: "4033 S. Central Avenue",
					city: "Ceres",
					state: "CA",
					zip: "95307",
					phone: "(209) 556-1900 "
				}
			];

			return educationPartners;
		}
	}

	App.services.service(serviceId, PartnersService);
}