define(['jquery', 'modules/locationControl', 'tweenmax'], function($, LocationControl) {
	
	var PageControl = (function() {

		console.log('pagecontrol');

		var $main = $('#main'),
			$pages = $main.children('.page'),
			$navigation = $pages.children('.page-navigation');

		function select( page ) {

			history.pushState(page, '', '#' + page);

			console.log('change to: ' + page );

			$main.find('.current').addClass('last');
			$main.find('.page').removeClass('current');
			$main.find('#' + page).addClass('current');
			
			setTimeout(function() {
				$pages.removeClass('last');
			}, 2000);

			require(['views/' + page]);

			LocationControl.setHash( page );

		}

		function current() {
			var page = $main.find('page.current');
			return page;
		}

		return { 
			select: select,
			current: current
		};

	})();

	return PageControl;

});

