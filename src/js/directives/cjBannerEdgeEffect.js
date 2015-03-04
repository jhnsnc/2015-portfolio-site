angular.module( 'cjPortfolioSite')

.directive('cjBannerEdgeEffect', function() {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			//NOTE: All math is done for a 100x100 square for simplicity.
			//		Since all effect graphics are SVG, there is no quality loss when scaling.
			//		Corners are numbered 1-4 with number 1 being top-left and number 4 being bottom-left (like the border-radius CSS attribute).

			//"constants"
			var numTrianglesPerCorner = 5;
			var particleDurationMin = 10000;
			var particleDurationMax = 20000;
			var particleFillColor = "#1A1A1A";
			var particleFillOpacity = 0.08;
			var dimensionsOffsetVariation = 0.45; //[0.0-1.0], higher value allows for more truly random results
			var dimensionsLegMinimum = 0.04; //smallest percent length or width for triangle legs

			var $el = $(element);
			var canvas, particles;

			function init() {
				var i, j, triangle, polyPoints, dimensions, particle;

				//create SVG canvas (100x100 viewbox)
				$el.append('<svg viewBox="0 0 100 100" preserveAspectRatio="none"></svg>');
				$el.find('svg').filter(':first').css({
						position: "absolute",
						left: 0,
						top: 0,
						width: "100%",
						height: "100%"
					});
				if ( $el.css('position') !== "relative" && $el.css('position') !== "absolute" && $el.css('position') !== "fixed" ) {
					$el.css({ position: "relative" });
				}
				canvas = Snap( $el.find('svg').get(0) );

				//create and initialize particles
				particles = [];
				for ( i = 1; i <= 4; i += 1 ) { //corners
					for ( j = 0; j < numTrianglesPerCorner; j += 1 ) { //triangles
						//new particle
						particle = {
								corner: i
							};

						//get shape data based on corner
						switch ( particle.corner ) {
							case 1: //top-left
								polyPoints = [0,0,100,0,0,100];
								particle.cx = 0;
								particle.cy = 0;
								break;
							case 2: //top-right
								polyPoints = [100,0,100,100,0,0];
								particle.cx = 100;
								particle.cy = 0;
								break;
							case 3: //bottom-right
								polyPoints = [100,100,0,100,100,0];
								particle.cx = 100;
								particle.cy = 100;
								break;
							case 4: //bottom-left
								polyPoints = [0,100,0,0,100,100];
								particle.cx = 0;
								particle.cy = 100;
								break;
						}

						//make the polygon and set initial transform
						triangle = canvas.polygon(polyPoints);
						triangle.attr({
								fill: particleFillColor,
								fillOpacity: particleFillOpacity
							});
						particle.triangle = triangle;

						dimensions = getRandomParticleDimensions();
						triangle.transform( "S" + dimensions.w + "," + dimensions.l + "," + particle.cx + "," + particle.cy );

						//add the particle and start animating
						particles.push( particle );
						restartParticle( particle.triangle );
					}
				}
			}

			function getRandomParticleDimensions() {
				var l, w; //~[dimensionsLegMinimum-1.00), w weighted based on l

				l = Math.random();
				w = ((1.0 - dimensionsOffsetVariation) * (1.0 - l)) + Math.random() * dimensionsOffsetVariation;
				//apply min leg dimensions
				l = dimensionsLegMinimum + (l * (1 - dimensionsLegMinimum));
				w = dimensionsLegMinimum + (w * (1 - dimensionsLegMinimum));

				return { l: l, w: w };
			}

			function restartParticle(triangle) {
				var particle = _.findWhere( particles, { triangle: triangle } );

				var dimensions = getRandomParticleDimensions();

				triangle.stop().animate({
						transform: "S" + dimensions.w + "," + dimensions.l + "," + particle.cx + "," + particle.cy
					}, particleDurationMin + (Math.random() * (particleDurationMax - particleDurationMin)),
					mina.easeinout,
					function() {
						restartParticle(this);
					}
				);
			}

			init();
		}
	};
});