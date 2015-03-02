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
			pageTitle: 'Work'
		}
	});
}])

.controller( 'WorkController', [ '$scope', function( $scope ) {
}]);