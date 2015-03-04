angular.module( 'cjPortfolioSite')

.directive('cjLogoCoin', function() {
	return {
		restrict: 'E',
		scope: {
			logoSrc: '@',
			logoScale: '@'
		},
		link: function(scope, element, attrs) {
			var $el = $(element);

			//"constants"
			var coinWidth = 150;
			var coinHeight = 150;
			var logoScaleY = 0.85;
			var logoColor = "#D1AA1B";
			var logoHighlightOpacity = 0.4;
			var logoShadowOpacity = 0.4;

			//new snap canvas with appropriate dimensions
			$el.append('<svg width="' + coinWidth + '" height="' + coinHeight + '"></svg>');
			var canvas = Snap( $el.find('svg').get(0) );

			//load coin asset
			Snap.load("/assets/images/coin.svg", function(coinElement) {
				canvas.prepend( coinElement.select('*') );
			});

			//load icon asset
			Snap.load(scope.logoSrc, function(fragment) {
				var logoGroup, logoElement, boundingBox, xOffset, yOffset;

				logoGroup = canvas.group();
				logoElement = fragment.select('path');

				boundingBox = logoElement.getBBox();
				xOffset = (coinWidth / 2) - boundingBox.cx;
				yOffset = (coinHeight / 2) - boundingBox.cy;

				//highlight
				logoGroup.add( 
					logoElement.clone()
						.attr({ 
							fill: "#FFFFFF", 
							fillOpacity: logoHighlightOpacity
						})
						.transform( "S" + scope.logoScale + "," + (scope.logoScale * logoScaleY) + 
									"," + boundingBox.cx + "," + boundingBox.cy + 
									"T" + (xOffset + 1) + "," + (yOffset + 1) )
				);
				//shadow
				logoGroup.add( 
					logoElement.clone()
						.attr({ 
							fill: "#000000", 
							fillOpacity: logoShadowOpacity 
						})
						.transform( "S" + scope.logoScale + "," + (scope.logoScale * logoScaleY) + 
									"," + boundingBox.cx + "," + boundingBox.cy + 
									"T" + (xOffset - 1) + "," + (yOffset - 1) )
				);
				//normal
				logoGroup.add( 
					logoElement.clone()
						.attr({ 
							fill: logoColor, 
							fillOpacity: 1.0 
						})
						.transform( "S" + scope.logoScale + "," + (scope.logoScale * logoScaleY) + 
									"," + boundingBox.cx + "," + boundingBox.cy + 
									"T" + xOffset + "," + yOffset )
				);

				//done. add group
				canvas.append( logoGroup );
			});
		}
	};
});