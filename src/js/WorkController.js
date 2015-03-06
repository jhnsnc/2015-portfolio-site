angular.module( 'cjPortfolioSite.work', [
	'ui.router'
])

.config( ['$stateProvider', function( $stateProvider ) {
	$stateProvider.state( 'work', {
		url: '/work',
		views: {
			"main": {
				controller: 'WorkController',
				templateUrl: '/assets/partials/work.html'
			}
		},
		data: {
			pageTitle: 'Work',
			bannerText: 'Projects'
		}
	});
}])

.controller( 'WorkController', [ '$scope', function( $scope ) {
	var portfolioItems = [
		{
			name: "GamerEye Trainer",
			category: "personal",
			link: "http://www.overwolf.com/sentry-challenge-2014/#prize02",
			thumbnailImage: "/assets/images/portfolio-screenshot-gamereye-trainer.jpg",
			shortDescription: "Overwolf App",
			tech: "JavaScript, Overwolf, Tobii EyeX (eye tracker)",
			description: "This app won me second place in the Overwolf 2014 Sentry Challenge app contest."+
				"It allows users to configure hotspots on screen with their Tobii EyeX eye tracking "+
				"hardware. The app then reminds the user periodically to look at the hotspots during "+
				"gameplay. It was a fun project that involved bringing together features from several APIs."
		}, {
			name: "Shadow of a Thought",
			category: "personal",
			link: "http://gamejolt.com/games/shooter/shadow-of-a-thought/33167/",
			thumbnailImage: "/assets/images/portfolio-screenshot-shadow-of-a-thought.jpg",
			shortDescription: "Flash Game",
			tech: "Flash, Flex, ActionScript 3, Photoshop, FL Studio (music)",
			description: "This was my entry for the Ludum Dare 30 game jam. That means that this entire "+
				"game (including ALL assets) was created based on a prompt, from concept to completion, "+
				"within 48 hours by me. This was not the first game jam I had participated in, but I "+
				"am pleased with what I was able to accomplish with this one."
		}, {
			name: "Destinations CU",
			category: "bancvue",
			link: "https://www.destinationscu.org/",
			thumbnailImage: "/assets/images/portfolio-screenshot-destinations.jpg",
			shortDescription: "Credit Union Website",
			tech: "HTML, CSS, CSS animations, jQuery, in-house CMS",
			description: "This site just feels crisp and clean all around. It includes some nice CSS "+
				"effects (see the images on the category pages, the downstream online banking login, "+
				"etc). Using a CSS pre-processor (SASS) made it easy to color code each category. I "+
				"also coded the custom animation for the homepage slider (though the content has "+
				"changed since launch)."
		}, {
			name: "Missouri Valley FCU",
			category: "bancvue",
			link: "https://www.movfcu.org/",
			thumbnailImage: "/assets/images/portfolio-screenshot-movfcu.jpg",
			shortDescription: "Credit Union Website",
			tech: "HTML, CSS, jQuery, in-house CMS, PHP:TAL",
			description: "MOVFCU was one of my quickest builds for a full financial institution site "+
				"(90 pages). The main build took 53 hours and client revisions took another 16. The "+
				"curvy sidebar and homepage banner caused some styling issues, but the rest of the site "+
				"came together quickly, especially considering I was working with a different designer "+
				"than normal."
		}, {
			name: "Metropolitan National Bank",
			category: "bancvue",
			link: "https://www.metronationalbank.com/",
			thumbnailImage: "/assets/images/portfolio-screenshot-metro-national.jpg",
			shortDescription: "Bank Website",
			tech: "HTML, CSS, jQuery, JavaScript, in-house CMS, PHP:TAL",
			description: "Metropolitan was a difficult client. They were in the middle of restructuring "+
				"and so we received a lot of feedback from different departments (much of which was "+
				"directly contradictory). Even with the demand to splinter some pages off to different "+
				"domains, we managed to keep the site coherent and the client happy."
		}, {
			name: "Atlantic Regional FCU",
			category: "bancvue",
			link: "https://www.atlanticregional.com/",
			thumbnailImage: "/assets/images/portfolio-screenshot-atlantic-regional.jpg",
			shortDescription: "Credit Union Website",
			tech: "HTML, CSS, jQuery, JavaScript, in-house CMS",
			description: "This was the first site I created at BancVue. Features that jump to mind are the "+
				"unique footer, the dropdowns in the primary nav, and the customized locations map. "+
				"Working with a new team and new CMS was difficult, but we communicated frequently "+
				 "and purposefully and the site turned out well as a result."
		}, {
			name: "Impossible Carrot",
			category: "personal",
			link: "http://gamejolt.com/games/other/impossible-carrot/52482/",
			thumbnailImage: "/assets/images/portfolio-screenshot-impossible-carrot.jpg",
			shortDescription: "Flash Game",
			tech: "Flash, Flex, ActionScript 3, XML",
			description: "I made this game just for fun a few years back. I wanted to create a devilishly "+
				"difficult game that I could enjoy testing while improving my Flash skills. My design goal "+
				"was a rising/falling intensity of gameplay that reflected the music. My technical goals were "+
				"to push the limits of how many non-trivial particles I could make Flash handle and to "+
				"improve my asset management in Flash."
		}, {
			name: "War of 1812",
			category: "freelance",
			link: "http://warof1812.thinkport.org/",
			thumbnailImage: "/assets/images/portfolio-screenshot-war-of-1812.jpg",
			shortDescription: "Educational Website",
			tech: "Custom MVC JavaScript, HTML, CSS, some Flash fallbacks",
			description: "Another programmer and I were contracted to build this site for organizing "+
				"educational resources, including several interactives. The JavaScript for the site is "+
				"handled through a custom minimal MVC setup. I was responsible for the main page structure, "+
				"the homepage, the overview page, the field trips page, and the map interactive."
		}, {
			name: "Saving Smith Island",
			category: "freelance",
			link: "http://smithisland.thinkport.org/",
			thumbnailImage: "/assets/images/portfolio-screenshot-saving-smith-island.jpg",
			shortDescription: "Educational Website",
			tech: "Custom MVC JavaScript, HTML, CSS, some Flash fallbacks",
			description: "This site is meant to serve as an educational writing interactive with additional "+
				"resources for student and teachers. The client had very specific expectations about feature "+
				"support, which meant a lot of custom work customizing JS plugins, coding Flash fallbacks, "+
				"and debugging cross-browser."
		}
	];

	$scope.portfolioItems = portfolioItems;
}]);