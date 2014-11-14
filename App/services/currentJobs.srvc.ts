module App {
	"use strict";
	export interface IJobOpening {
		date: Date;
		orderNumber: number;
		title: string;
		city: string;
		salary: string;
		additionalWageInfo?:string;
		workingHours: string;
		hoursPerWeek: string;
		workingDays: string;
		benifits: string;
		description: string;
		descriptionList?: string[];
		requirements: string[];
		emailContact: string;
	}
	var serviceId = "currentJobsService";
	export class CurrentJobsService {
		static $inject = [];
		constructor() {

		}

		public currentJobsList() {
			var jobs: IJobOpening[] = [
				{
					date: new Date(14,11,3),
					orderNumber:1001,
					title: "Customer Service Rep.",
					city: "Anywhere",
					salary: "47,000",
					workingHours: "8-5",
					hoursPerWeek: "40",
					workingDays: "M-F",
					benifits: "Some list of benifits",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. Praesent ultricies enim ac ipsum aliquet pellentesque. Nullam justo nunc, dignissim at convallis posuere, sodales eu orci.",
					descriptionList: ["Core Duty 1",
						"Core Duty 2",
						"Core Duty 3",
						"Core Duty 4",
						"Core Duty 5"],
					requirements: ["Requirment 1",
						"Requirment 2",
						"Requirment 3",
						"Requirment 4",
						"Requirment 5"],
					emailContact: "afakeEmail@gmail.com"	
				},
				{
					date: new Date(14, 11, 4),
					orderNumber: 1002,
					title: "General Manager",
					city: "Somewhere",
					salary: "45,000",
					workingHours: "8-5",
					hoursPerWeek: "40",
					workingDays: "M-F",
					benifits: "Some list of benifits",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. Praesent ultricies enim ac ipsum aliquet pellentesque. Nullam justo nunc, dignissim at convallis posuere, sodales eu orci.",
					descriptionList: ["Core Duty 1",
						"Core Duty 2",
						"Core Duty 3",
						"Core Duty 4",
						"Core Duty 5"],
					requirements: ["Requirment 1",
						"Requirment 2",
						"Requirment 3",
						"Requirment 4",
						"Requirment 5"],
					emailContact: "afakeEmail@gmail.com"
				},
				{
					date: new Date(14, 11, 4),
					orderNumber: 1003,
					title: "Service Desk Technician",
					city: "Nowhere",
					salary: "35,000",
					workingHours: "8-5",
					hoursPerWeek: "40",
					workingDays: "M-F",
					benifits: "Some list of benifits",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. Praesent ultricies enim ac ipsum aliquet pellentesque. Nullam justo nunc, dignissim at convallis posuere, sodales eu orci.",
					descriptionList: ["Core Duty 1",
						"Core Duty 2",
						"Core Duty 3",
						"Core Duty 4",
						"Core Duty 5"],
					requirements: ["Requirment 1",
						"Requirment 2",
						"Requirment 3",
						"Requirment 4",
						"Requirment 5"],
					emailContact: "afakeEmail@gmail.com"
				},
				{
					date: new Date(14, 11, 4),
					orderNumber: 1004,
					title: "Waiter/Bartender",
					city: "Everywhere",
					salary: "22,000",
					workingHours: "7-4",
					hoursPerWeek: "40",
					workingDays: "M-F",
					benifits: "Some list of benifits",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. Praesent ultricies enim ac ipsum aliquet pellentesque. Nullam justo nunc, dignissim at convallis posuere, sodales eu orci.",
					descriptionList: ["Core Duty 1",
						"Core Duty 2",
						"Core Duty 3",
						"Core Duty 4",
						"Core Duty 5"],
					requirements: ["Requirment 1",
						"Requirment 2",
						"Requirment 3",
						"Requirment 4",
						"Requirment 5"],
					emailContact: "afakeEmail@gmail.com"
				},
				{
					date: new Date(14, 11, 4),
					orderNumber: 1005,
					title: "Teacher",
					city: "Overthere",
					salary: "28,000",
					workingHours: "8-5",
					hoursPerWeek: "40",
					workingDays: "M-F",
					benifits: "Some list of benifits",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. Praesent ultricies enim ac ipsum aliquet pellentesque. Nullam justo nunc, dignissim at convallis posuere, sodales eu orci.",
					descriptionList: ["Core Duty 1",
						"Core Duty 2",
						"Core Duty 3",
						"Core Duty 4",
						"Core Duty 5"],
					requirements: ["Requirment 1",
						"Requirment 2",
						"Requirment 3",
						"Requirment 4",
						"Requirment 5"],
					emailContact: "afakeEmail@gmail.com"
				},
				{
					date: new Date(14, 11, 4),
					orderNumber: 1006,
					title: "Firefighter",
					city: "Underthere",
					salary: "58,000",
					workingHours: "9-6",
					hoursPerWeek: "40",
					workingDays: "M-F",
					benifits: "Some list of benifits",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. Praesent ultricies enim ac ipsum aliquet pellentesque. Nullam justo nunc, dignissim at convallis posuere, sodales eu orci.",
					descriptionList: ["Core Duty 1",
						"Core Duty 2",
						"Core Duty 3",
						"Core Duty 4",
						"Core Duty 5"],
					requirements: ["Requirment 1",
						"Requirment 2",
						"Requirment 3",
						"Requirment 4",
						"Requirment 5"],
					emailContact: "afakeEmail@gmail.com"
				},
				{
					date: new Date(14, 11, 4),
					orderNumber: 1007,
					title: "Astronaut",
					city: "Space",
					salary: "75,000",
					workingHours: "8-5",
					hoursPerWeek: "30",
					workingDays: "M-F",
					benifits: "Some list of benifits",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate eros nec odio egestas in dictum nisi vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse porttitor luctus imperdiet. Praesent ultricies enim ac ipsum aliquet pellentesque. Nullam justo nunc, dignissim at convallis posuere, sodales eu orci.",
					descriptionList: ["Core Duty 1",
						"Core Duty 2",
						"Core Duty 3",
						"Core Duty 4",
						"Core Duty 5"],
					requirements: ["Requirment 1",
						"Requirment 2",
						"Requirment 3",
						"Requirment 4",
						"Requirment 5"],
					emailContact: "afakeEmail@gmail.com"
				}
			];
			return jobs;
		}

		public getById(id: string) {
			var jobs = this.currentJobsList();
			var job = Enumerable.from(jobs).singleOrDefault((x: IJobOpening) => { return x.orderNumber === parseInt(id); });
			return job;
		}

	}
	App.services.service(serviceId, CurrentJobsService);
} 