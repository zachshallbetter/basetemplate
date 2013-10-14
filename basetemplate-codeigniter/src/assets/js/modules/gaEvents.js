define(['jquery', 'tweenmax'], function($, TweenMax) {
	
	var Analytics = (function() {

		function trackEvent(element,category,action,opt_label) {
			
			$(element).on('click', function() {

				_gaq.push([
					'_trackEvent', 
					category, 
					action,
					opt_label
				]);

			});
		}

		return { 
			trackEvent: trackEvent
		};

	})();

	return Analytics;

});

