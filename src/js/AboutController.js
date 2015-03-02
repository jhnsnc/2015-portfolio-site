angular.module( 'cjPortfolioSite.about', [
	'ui.router'
])

.config( ['$stateProvider', function( $stateProvider ) {
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutController',
				templateUrl: '/assets/partials/about.html'
			}
		},
		data: {
			pageTitle: 'About'
		}
	});
}])

.controller( 'AboutController', [ '$scope', function( $scope ) {
}]);