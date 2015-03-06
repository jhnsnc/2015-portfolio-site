angular.module( 'cjPortfolioSite', [
	'cjPortfolioSite.about',
	'cjPortfolioSite.work',
	'cjPortfolioSite.skills',
	'cjPortfolioSite.contact',
	'ui.router'
])

.config( ['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise( '/about' );
}])

.run( function run() {	
})

.controller( 'AppController', ['$scope', '$location', function AppController( $scope, $location) {
	//console message
	console.log("  ,ggg,        gg                                       ,g, \n"+
				"  dP\"\"Y8b       88           ,dPYb, ,dPYb,               888 \n"+
				"  Yb, `88       88           IP'`Yb IP'`Yb               888 \n"+
				"   `\"  88       88           I8  8I I8  8I               888 \n"+
				"       88aaaaaaa88           I8  8' I8  8'               I8I \n"+
				"       88\"\"\"\"\"\"\"88   ,ggg,   I8 dP  I8 dP    ,ggggg,     I8I \n"+
				"       88       88  i8\" \"8i  I8dP   I8dP    dP\"  \"Y8gg\"  `8' \n"+
				"       88       88  I8, ,8I  I8P    I8P    i8'    ,8I        \n"+
				"       88       Y8, `YbadP' ,d8b,_ ,d8b,_ ,d8,   ,d8'    ,8, \n"+
				"       88       `Y8888P\"Y8888P'\"Y888P'\"Y88P\"Y8888P\"      `8' "); //Hello! ascii art
	console.log("============================================================"); //divider
	console.log("Thanks for opening up the console, but all the code here is uglified! \n"+
				" You may be more interested in my source code: ");
	console.log("http://github.com/jhnsnc/2015-portfolio-site");

	//update title
	$scope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
		$scope.activeState = toState.name;
		if ( angular.isDefined( toState.data.pageTitle) ) {
			$scope.pageTitle = toState.data.pageTitle + " | Chris Johnson";
		}
		if ( angular.isDefined( toState.data.bannerText) ) {
			$scope.bannerText = toState.data.bannerText;
		}
	})
}]);