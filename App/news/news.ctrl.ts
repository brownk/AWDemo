module App {
	"use strict";
	var controllerId = "newsCtrl";
	class NewsCtrl {
		public newsArticles: INewsArticle[];
		static $inject = ["newsService"];
		constructor(private newsService: NewsService) {
			this.activate();
			
		}

		activate() {
			this.newsArticles = this.newsService.getAll();
		}
	}
	App.controllers.controller(controllerId, NewsCtrl);
} 