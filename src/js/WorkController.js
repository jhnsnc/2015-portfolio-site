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
			linkText: "More Info",
			thumbnailImage: "/assets/images/portfolio-screenshot-gamereye-trainer.jpg",
			shortDescription: "Overwolf App",
			tech: "JavaScript, Overwolf, Tobii EyeX (eye tracker)",
			description: "This app won me second place in the Overwolf 2014 Sentry Challenge. It allows "+
				"users to configure hotspots on screen with their Tobii EyeX eye-tracking device. The "+
				"app then reminds the user periodically to look at the hotspots during gameplay. I "+
				"enjoyed the process of bringing together multiple APIs to make this app work."
		}, {
			name: "Destinations CU",
			category: "bancvue",
			link: "https://www.destinationscu.org/",
			linkText: "Visit Site",
			thumbnailImage: "/assets/images/portfolio-screenshot-destinations.jpg",
			shortDescription: "Credit Union Website",
			tech: "HTML, CSS, CSS animations, jQuery, in-house CMS",
			description: "This site just feels crisp and clean all around. It includes some nice CSS "+
				"effects (see the images on the category pages, the downstream online banking login, "+
				"etc). Using a CSS pre-processor (SASS) made it easy to color code each category. I "+
				"also coded the custom animation for the homepage slider (though the content has "+
				"changed since launch)."
		}, {
			name: "War of 1812",
			category: "freelance",
			link: "http://warof1812.thinkport.org/",
			linkText: "Visit Site",
			thumbnailImage: "/assets/images/portfolio-screenshot-war-of-1812.jpg",
			shortDescription: "Educational Website",
			tech: "Custom MVC JavaScript, HTML, CSS, some Flash fallbacks",
			description: "Another programmer and I were contracted to build this site for organizing "+
				"educational resources, including several interactives. The JavaScript for the site is "+
				"handled through a simple custom MVC setup. I was responsible for the main page structure, "+
				"the homepage, the \"Overview\" page, the \"Field Trips\" page, and the map interactive."
		}, {
			name: "Missouri Valley FCU",
			category: "bancvue",
			link: "https://www.movfcu.org/",
			linkText: "Visit Site",
			thumbnailImage: "/assets/images/portfolio-screenshot-movfcu.jpg",
			shortDescription: "Credit Union Website",
			tech: "HTML, CSS, jQuery, in-house CMS, PHP:TAL",
			description: "MOVFCU was one of my quickest builds for a full financial institution site "+
				"(~90 pages). The main build took 53 hours and client revisions took another 16. The "+
				"curvy sidebar and homepage banner caused some styling issues, but the rest of the site "+
				"came together quickly, especially considering I was working with a different designer "+
				"than normal."
		}, {
			name: "Atlantic Regional FCU",
			category: "bancvue",
			link: "https://www.atlanticregional.com/",
			linkText: "Visit Site",
			thumbnailImage: "/assets/images/portfolio-screenshot-atlantic-regional.jpg",
			shortDescription: "Credit Union Website",
			tech: "HTML, CSS, jQuery, JavaScript, in-house CMS",
			description: "This was the first site I created at BancVue. Features that jump to mind are the "+
				"unique footer, the dropdowns in the primary nav, and the customized locations map. "+
				"Working with a new team and new CMS was difficult, but we communicated frequently "+
				 "and purposefully and the site turned out well as a result."
		}, {
			name: "RaidNight",
			category: "personal",
			link: "http://www.overwolf.com/apps/tsgw2_contest/#!appId=capdejledaclghdgimahamnldhibdkiofaaamdjg",
			linkText: "More Info",
			thumbnailImage: "/assets/images/portfolio-screenshot-raid-night.jpg",
			shortDescription: "Overwolf App",
			tech: "JavaScript, Overwolf, TeamSpeak, Polymer, XPAPI",
			description: "RaidNight was my entry in the 2014 Overwolf TeamSpeak App Contest. Using Polymer "+
				"in an Overwolf app caused some strange conflicts, but I appreciated the subtle UI "+
				"improvements it offered. I ended up implementing nearly all of my planned features and "+
				"even though it didn't place in the contest, I found it very useful for leading guild raids."
		}, {
			name: "Shadow of a Thought",
			category: "personal",
			link: "http://gamejolt.com/games/shooter/shadow-of-a-thought/33167/",
			linkText: "Play Now",
			thumbnailImage: "/assets/images/portfolio-screenshot-shadow-of-a-thought.jpg",
			shortDescription: "Flash Game",
			tech: "Flash, Flex, ActionScript 3, Photoshop, FL Studio (music)",
			description: "This was my entry for the Ludum Dare 30 game jam. For this particular game jam, "+
				"participants are given a prompt and then have 48 hours to complete a game. No outside help "+
				"is allowed, so this game (including all design, art, music, and content) represents 48 "+
				"hours of my work. Given the limitations, I'm rather satisfied with the result."
		}, {
			name: "Saving Smith Island",
			category: "freelance",
			link: "http://smithisland.thinkport.org/",
			linkText: "Visit Site",
			thumbnailImage: "/assets/images/portfolio-screenshot-saving-smith-island.jpg",
			shortDescription: "Educational Website",
			tech: "Custom MVC JavaScript, HTML, CSS, some Flash fallbacks",
			description: "This site was meant to serve as an educational interactive for teaching writing "+
				"skills with additional resources for student and teachers. The client had very specific "+
				"expectations about feature support, which meant a lot of work customizing JS plugins, "+
				"coding Flash fallbacks, and debugging cross-browser."
		}, {
			name: "Metropolitan National Bank",
			category: "bancvue",
			link: "https://www.metronationalbank.com/",
			linkText: "Visit Site",
			thumbnailImage: "/assets/images/portfolio-screenshot-metro-national.jpg",
			shortDescription: "Bank Website",
			tech: "HTML, CSS, jQuery, JavaScript, in-house CMS, PHP:TAL",
			description: "Metropolitan was a difficult client. We received a lot of feedback from "+
				"different departments (much of which was directly contradictory). Even with the requirement "+
				"to splinter some pages off to different domains, we managed to keep the site coherent "+
				"and the client happy."
		}, {
			name: "Impossible Carrot",
			category: "personal",
			link: "http://gamejolt.com/games/other/impossible-carrot/52482/",
			linkText: "Play Now",
			thumbnailImage: "/assets/images/portfolio-screenshot-impossible-carrot.jpg",
			shortDescription: "Flash Game",
			tech: "Flash, Flex, ActionScript 3, XML",
			description: "I made this game just for fun a few years back. I wanted to create a devilishly "+
				"difficult game that I could enjoy testing while improving my Flash skills. My design goal "+
				"was a rising/falling intensity of gameplay that reflected the music. My primary technical "+
				"goal was to push the limits of how many non-trivial particles I could make Flash handle."
		}
	];

	$scope.showItemDetails = function(item) {
		$scope.selectedItem = item;

		$scope.showItemDetailsPopup = true;
	}

	$scope.closeItemDetails = function() {
		$scope.showItemDetailsPopup = false;
	}

	$scope.portfolioItems = portfolioItems;
}]);