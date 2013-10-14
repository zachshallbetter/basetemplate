define(['jquery', 'validation'], function($) {

	var $form = $('form');
	
	var FormControl = (function() {

		function submit() {
			var data = $form.serialize();
			//$.post('/forms/request', data).done(_handleSuccess);
			console.log(data);
		}

		function _handleSuccess( response ) {
			$form.hide();
			$thanks.show();
		}

		function setField( fieldID, content ) {
			$field = $('#information form').find('#' + fieldID);

			if ($field.val().length > 0) {
				$field.val('');
			}

			$field.val(content);
		}

		function checkFields() {
			var values = false;

			$(arguments).each(function(num, obj) {
				
				var $field = $form.find('#' + obj);

				console.log($field);

				if ($field.val().length > 0) {
					values = true;
				} else {
					// $field.addClass('error');
					values = false;
				}

			});

			if (values) {
				return true;
			}

		}

		function validation() {

			$form.validationEngine({
				showPrompts: false,
				focusFirstField : false,
				prettySelect : true,
				scroll: false
			});

			//Check form validation
            $form.bind('jqv.form.result', function(event, errorFound) {
                if(errorFound) {
                    $form.find('.error-message').show();

                } else {

                   $form.find('.error-message').hide();

                }	
            });

            // Check field validation
            $form.bind('jqv.field.result', function(event, field, errorFound, prompText) {

              if(errorFound) {

                field.addClass('error');

              } else {

                field.removeClass('error');

              }

            });

		}

		return { 
			submit : submit,
			setField : setField,
			checkFields : checkFields,
			validation : validation
		};

	})();

	return FormControl;

});

