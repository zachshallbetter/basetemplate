define(['modules/pageControl'], function(PageControl) {


	var LocationControl = (function() {

		function currentHash() {
			var url = window.location.hash.substring(1);
			return url;
		}

		function setHash( page ) {
			location.hash = page;
		}

		function hasHash() {
			var hash = window.location.hash.substring(1);

			if (!hash || hash === '#' || hash === '#undefined') {
				return false;
			} else {
				return true;
			}
		}

		return { 
			currentHash: currentHash,
			setHash: setHash,
			hasHash: hasHash
		};

	})();

	return LocationControl;

});

