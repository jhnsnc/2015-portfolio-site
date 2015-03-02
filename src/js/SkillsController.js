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
			pageTitle: 'Skills'
		}
	});
}])

.controller( 'SkillsController', [ '$scope', function( $scope ) {
}]);