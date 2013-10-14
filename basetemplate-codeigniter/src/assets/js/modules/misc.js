define(['jquery', 'TweenMax'], function($) {

	var Misc = (function() {

		// Loading indicator
		var loading = {

			start : function( el ) {

				$(el).empty().append('<img src="/assets/img/loading.gif" class="loading">');
				
				processing.disableUpload( el );
			},

			stop : function( el, callback ) {
				$(el).find('.loading').fadeOut('fast', function() {
					return callback;
				});
				
				processing.enableUpload( el );

			}
		};

		return { 
			loading : loading,
		};

	})();

	return Misc;

});

