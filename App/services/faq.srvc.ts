module App {
	"use strict";

	export interface IFaq {
		question: string;
		answer: string;
		show: boolean;

	}

	var serviceId = "faqService";

	export class FaqService {
		static $inject = [];

		constructor() {

		}

		public getAllJobPrep() {
			var faqs: IFaq[] = [
				{
					question: "What workshops do you offer?",
					answer: "We offer a wide variety of Job Prep Workshops including Online Applications, Resume Basics, and Interviewing with Confidence. We also offer Orientations for our services and WorkKeys Assessments.",
					show: false
				},
				{
					question: "Where are the workshops held?",
					answer: "All of our workshops are held at the Alliance Worknet in the EDD office located at 629 12th Street in Modesto.",
					show: false
				},
				{
					question: "Is there a charge for the workshops?",
					answer: "All of our workshops are free and open to the public.",
					show: false
				},
				{
					question: "How do I schedule a workshop?",
					answer: "Call: 209-558-WORK (9675) and our receptionist will schedule you for any workshops of interest.",
					show: false
				},
				{
					question: "Will attending the Alliance Worknet Job Prep Workshops affect my unemployment benefits?",
					answer: "Our classes are offered to help you do an effective job search. They are not vocational training's or classes that would interfere with the job search EDD requires for unemployment benefits",
					show: false
				}
			];
			return faqs;
		}

		public getAllCareerQuest() {
			var faqs: IFaq[] = [
				{
					question: "How many appointments do I have to go to before I get enrolled (start services)?",
					answer: "The Orientation appointment is your first appointment where we explain the program in detail. The Eligibility appointment is usually the second appointment where you bring in the documentation required by law to determine if you meet the program qualifications. The third appointment will be the WorkKeys assessment. The Fourth will be an individual appointment with your Youth Advisor to process enrollment. It seems like a lot but it is great practice for the hard work of trying to find a job!!",
					show: false
				},
				{
					question: "What does CareerQuest do for me once I am enrolled?",
					answer: "Careerquest Youth Advisors will determine your individual service strategy with you based on what goals you need to achieve in the areas of education, employment and overcoming personal barriers. Careerquest is designed to increase your chances of getting hired and continuing your education through advising, training, and preparation.Careerquest does not \"give\" you a job.",
					show: false
				},
				{
					question: "What does low income mean and who's proof of income do I have to provide?",
					answer: "Low income is determined by the Federal Government each year. We will give you a guideline at the Orientation. You are required to bring proof of income for you and possibility your family members you live with to the second appointment, Eligibility. Proof of income is defined as: check stubs, award letters from SSI, UIB, or other government programs, and/or printouts from employers or Social Security Administration.",
					show: false
				},
				{
					question: "What if I already have a job or am already enrolled in college?",
					answer: "We can still help with other goals you might have depending on your individual situation. Come to an Orientation to find out more!",
					show: false
				},
				{
					question: "How long before I get a job?",
					answer: "Careerquest will work with you to prepare you for getting hired by any employer in our local area. However, no program can guarantee you a job. We help you present yourselves according to employer's expectations so you can be the #1 candidate for the job!",
					show: false
				}
			];

			return faqs;
		}

	}
	App.services.service(serviceId, FaqService);
}