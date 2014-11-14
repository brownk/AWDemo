 module App {
	 "use strict";
	 var controllerId = "faqCtrl";
	 class FaqCtrl {
		 static $inject = ["faqService"];
		 public faqsJobPrep: IFaq[];
		 public faqsCareerQuest: IFaq[];
		 constructor(private faqService: FaqService) {
			 this.activate();
		 }

		 activate() {
			 this.faqsJobPrep = this.faqService.getAllJobPrep();
			 this.faqsCareerQuest = this.faqService.getAllCareerQuest();
		 }

		 public showAnswer(faq: IFaq) {
			 debugger;
			 if (faq) {
				 faq.show = true;
			 }
			 return faq;
		 }
	 }
	 App.controllers.controller(controllerId, FaqCtrl);
 }