angular.module( 'cjPortfolioSite')

.directive('cjStarRating', function() {
	return {
		restrict: 'E',
		scope: {
			rating: '@',
			selectedColor: '@',
			unselectedColor: '@',
			starAssetSrc: '@' //note that the star asset must have a <g> element with a child element with id="base" (for recoloring)
		},
		link: function(scope, element, attrs) {
			var $el = $(element);

			//'constants'
			var numStars = 5;
			var starWidth = 32.0;
			var starHeight = 32.0;
			var starSpacing = 5.0; //pixels between stars (a la margin)

			//new snap canvas with appropriate dimensions
			$el.append('<svg width="' + ((numStars * (starWidth + starSpacing)) - starSpacing) + '" height="' + starHeight + '"></svg>');
			var canvas = Snap( $el.find('svg').get(0) );

			//load star asset
			Snap.load(scope.starAssetSrc, function(fragment) {
				var starElement, i, xPos;

				//default base to the selected color
				var starElement = fragment.select('g');
				starElement.select('#base').attr({ fill: (scope.selectedColor ? scope.selectedColor : "#f00") });

				//add clones of starElement with appropriate color and position (transform)
				for ( i = 0; i < numStars; i += 1 ) {
					if ( i == scope.rating ) {
						starElement.select('#base').attr({ fill: (scope.unselectedColor ? scope.unselectedColor : "#666") });
					}
					xPos = i * (starWidth + starSpacing);
					canvas.append( starElement.clone().transform( "t" + xPos + ",0" ) );
				}

				$el.append(canvas);
			});
		}
	};
});