define(['jquery', 'modules/misc', 'modules/formControl', 'filepicker'], function($, Misc, FormControl) {

	var FileUpload = (function() {

		var Uploaded = {},
			processing = false,
			uploadCallback;

		// Upload modal
		function upload( el, position ) {
			if (!processing) {

				Uploaded.location = $(el);
				Uploaded.position = position;

				filepicker.pick({
					mimetypes: ['image/*'],
					container: 'modal',
					services:['COMPUTER', 'WEBCAM']
				},
				function(upload){
					Uploaded.image = upload.url;
					_convert(el);
				},
				function(error){
					_error(error);
				});
			}

			Misc.inkStyle();

		}

		// Convert image to proper size and format
		function _convert() {
			Misc.loading.start(Uploaded.location);
			processing = true;

			filepicker.convert(Uploaded.image, {
				width: 250, 
				height: 250,
				format: 'jpg',
				fit: 'crop',
				align: 'faces'
			},
			function(upload){
				Uploaded.image = (upload.url);
				_success();
			},
			function(error){
				_error(error);
			},
			function(progress){
			});
		}

		function _error( data ) {

			//alert(data.toString());

			Uploaded.location.addClass('fail');
		}

		function _success() {
			processing = false;
			
			Misc.loading.stop(Uploaded.location, Uploaded.location.empty());

			Uploaded.location.prepend('<img src="' + Uploaded.image + '" class="uploadedImage">')
				.removeClass('error fail')
				.addClass('success');

			//Misc.processing.enablepload();

			Uploaded.location.parent().find('.status')
				.removeClass('error')
				.addClass('success')
				.text('File Attached');

			FormControl.setField(Uploaded.position + 'photo', Uploaded.image);

		}

		return { 
			upload : upload
		};

	})();

	return FileUpload;

});

