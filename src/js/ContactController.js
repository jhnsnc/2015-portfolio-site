angular.module( 'cjPortfolioSite.contact', [
	'ui.router'
])

.config( ['$stateProvider', function( $stateProvider ) {
	$stateProvider.state( 'contact', {
		url: '/contact',
		views: {
			"main": {
				controller: 'ContactController',
				templateUrl: '/assets/partials/contact.html'
			}
		},
		data: {
			pageTitle: 'Contact',
			bannerText: 'Contact'
		}
	});
}])

.controller( 'ContactController', [ '$scope', function( $scope ) {
}]);