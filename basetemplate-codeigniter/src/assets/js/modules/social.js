define(['jquery'], function($) {
	
	var Social = (function() {

		function facebook() {
			// Preload Facebook API
			$('body').append('<div id="fb-root"></div>');

			window.fbAsyncInit = function() {
				// init the FB JS SDK
				FB.init({
					appId      : 379843035461069, // App ID from the App Dashboard
					channelUrl : 'http://datalandia.lamp.14four.com', // Channel File for x-domain communication
					status     : true, // check the login status upon init?
					cookie     : true, // set sessions cookies to allow your server to access the session?
					xfbml      : true  // parse XFBML tags on this page?
				});

			};

			// Load the FB SDK source Asynchronously
			(function(d, debug){
				var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement('script'); js.id = id; js.async = true;
				js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
				ref.parentNode.insertBefore(js, ref);
			}(document, /*debug*/ false));

			$('.facebook').on('click', function(e) {
				e.preventDefault();
				
				FB.ui({
					method: 'feed',
					name: 'Datalandify Yourself',
					link: 'http://datalandia.lamp.14four.com/',
					picture: 'http://datalandia.lamp.14four.com/assets/img/box.png',
					caption: 'http://datalandia.lamp.14four.com/',
					description: 'I datalandified myself'
				});

			});
		}

		function google() {

			window.___gcfg = {
				lang: 'en-US'
			};

			(function() {
				var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
				po.src = 'https://apis.google.com/js/plusone.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
			})();

			$('.google').on('click', function(e) {

				e.preventDefault();

				console.log('google');

				window.open('https://plus.google.com/share?url=http://datalandia.lamp.14four.com','content=INSERT_MESSAGE_HERE_WITH_URL_IF_YOU_WANT','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
				return false;

			});
		}

		function twitter() {
			// Load the Twitter SDK source Asynchronously
			window.twttr = (function (d,s,id) {
				var t, js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
				js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
				return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f); } });
			}(document, "script", "twitter-wjs"));

			twttr.ready(function (twttr) {});

			$('.current .twitter').on('click', '.overlay', function() {
				$(this).siblings('a').get(0).click();
			});
		}

		(function init() {

			facebook();
			twitter();
			google();

		})();

	})();

	return Social;

});

