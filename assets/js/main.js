/*
	Strongly Typed by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');

				// Total elements
				var totalElements = 13;

				// Prepare array for elements
				var elements = [];
				
				// Randomize
				for (let index = 1; index <= totalElements; index++) {
					// Add to array
					elements.push(index);
				}
				elements = elements.sort(function() {
					return .5 - Math.random();
				});
				console.log("Randomizer", elements);

				// Reinsert elements				
				for (let index = 1; index < totalElements; index++) {

					var element = $("#features" + elements[index - 1]);					
					element.insertBefore("#banner" + index);
					console.log("#features" + elements[index - 1], " before ", "#banner" + index);
					
				}

				// Append the last element
				var element = $("#features" + elements[totalElements - 1]);
				element.insertAfter("#banner" + (totalElements - 1));
				console.log("#features" + elements[totalElements - 1], " after  ", "#banner" + (totalElements - 1));

				
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);
