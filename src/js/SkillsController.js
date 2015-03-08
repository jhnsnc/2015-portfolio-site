angular.module( 'cjPortfolioSite.skills', [
	'ui.router'
])

.config( ['$stateProvider', function( $stateProvider ) {
	$stateProvider.state( 'skills', {
		url: '/skills',
		views: {
			"main": {
				controller: 'SkillsController',
				templateUrl: '/assets/partials/skills.html'
			}
		},
		data: {
			pageTitle: 'Skills',
			bannerText: 'Skills'
		}
	});
}])

.controller( 'SkillsController', [ '$scope', function( $scope ) {
	var languagesSection = {
			name: "Programming Languages",
			skills: [
				{ name: "HTML", rating: 5 },
				{ name: "CSS", rating: 5 },
				{ name: "JavaScript", rating: 5 },
				{ name: "ActionScript (Flash)", rating: 5 },
				{ name: "PHP", rating: 3 },
				{ name: "Java", rating: 3 },
				{ name: "C++", rating: 3 }
			]
		};
	var frontEndSection = {
			name: "Front-End Skills",
			skills: [
				{ name: "jQuery", rating: 5 },
				{ name: "JSON/XML", rating: 5 },
				{ name: "AngularJS", rating: 4 },
				{ name: "Polymer", rating: 3 },
				{ name: "Bootstrap", rating: 5 },
				{ name: "Snap/Rafael (SVG)", rating: 3 },
				{ name: "SASS", rating: 5 },
				{ name: "LESS", rating: 3 },
				{ name: "Wordpress", rating: 4 },
				{ name: "SEO", rating: 3 },
				{ name: "image compression", rating: 5 }
			]
	}
	var generalDevelopmentSection = {
			name: "General Development Skills",
			skills: [
				{ name: "RESTful Services", rating: 4 },
				{ name: "Agile", rating: 5 },
				{ name: "Scrum/Kanban", rating: 4 },
				{ name: "Git", rating: 4 },
				{ name: "SVN", rating: 4 },
				{ name: "command line", rating: 3 },
				{ name: "Grunt", rating: 4 },
				{ name: "Gulp", rating: 3 }
			]
	}
	var designSection = {
			name: "Design Software",
			skills: [
				{ name: "Adobe Photoshop", rating: 3 },
				{ name: "GIMP", rating: 5 },
				{ name: "Adobe Illustrator", rating: 4 },
				{ name: "Inkscape", rating: 4 },
				{ name: "Adobe Fireworks", rating: 5 },
				{ name: "Adobe Flash", rating: 5 }
			]
	}
	var miscellaneousSection = {
			name: "Miscellaneous",
			skills: [
				{ name: "Spanish", rating: 5 },
				{ name: "instruction/pedagogy", rating: 5 },
				{ name: "audio editing", rating: 3 }
			]
	}

	$scope.skillSections = [
			languagesSection,
			frontEndSection,
			generalDevelopmentSection,
			designSection,
			miscellaneousSection
		];
}]);