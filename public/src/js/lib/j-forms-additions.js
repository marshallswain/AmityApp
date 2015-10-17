$(document).ready(function() {

	/***************************************/
	/* Show password */
	/***************************************/
	$("#show-pass").on("change", function(){
		$("#show-pass").is(":checked") ? $("#password").attr("type", "text") : $("#password").attr("type", "password");
	});
	/***************************************/
	/* end show password */
	/***************************************/

	/***************************************/
	/* Enabled input */
	/***************************************/
	$('#check-enable-input').on('change', function() {
		if ( $('#check-enable-input').is(':checked') ) {
			$('#enable-input').attr('disabled', false).parent().removeClass('disabled-view');
		} else {
			$('#enable-input').attr('disabled', true).parent().addClass('disabled-view');
		};
	});
	/***************************************/
	/* end enabled input */
	/***************************************/

	/***************************************/
	/* Enabled button */
	/***************************************/
	$('#check-enable-button').on('change', function() {
		if ( $('#check-enable-button').is(':checked') ) {
			$('#enable-button').attr('disabled', false).removeClass('disabled-view');
		} else {
			$('#enable-button').attr('disabled', true).addClass('disabled-view');
		};
	});
	/***************************************/
	/* end enabled button */
	/***************************************/

	/***************************************/
	/* Select conditions */
	/***************************************/
	// Arrays
	$models = [];
	$colors = [];

	// start select № 2
	// Car models
	$models['VO']  = ['V70', 'XC60', 'XC90'];
	$models['VW']  = ['Golf', 'Polo', 'Scirocco', 'Touareg'];
	$models['BMW'] = ['M6', 'X5', 'Z3'];
	// end select № 2

	// start select № 3
	// Model colors for 'VO'
	$colors['V70']	 = ['black', 'white'];
	$colors['XC60']	 = ['green', 'orange'];
	$colors['XC90']	 = ['brown', 'red'];

	// Model colors for 'VW'
	$colors['Golf']		= ['purple', 'yellow'];
	$colors['Polo']		= ['grey', 'indigo'];
	$colors['Scirocco']	= ['blue', 'teal', 'cyan'];
	$colors['Touareg']	= ['red', 'black', 'orange', 'brown'];

	// Model colors for 'BMW'
	$colors['M6'] = ['orange', 'brown', 'red', 'indigo', 'cyan'];
	$colors['X5'] = ['white', 'green', 'cyan'];
	$colors['Z3'] = ['teal', 'purple', 'cyan'];
	// end select № 3

	// If first select is changed
	$( "#car" ).change(function () {

		// If next selects have values
		// Clear next selects
		if ( $("#car-model option").length) {
			$("#car-model option:gt(0)").remove();
		}
		if ( $("#car-model-color option").length) {
			$("#car-model-color option:gt(0)").remove();
		}

		// Get the "car" value from the current select
		$( "#car option:selected" ).each(function() {
			$car_val = $( this ).val();
		});

		// Get the "car models" values
		$car = $models[$car_val];

		// if "car models" exists
		// Add values to the next select
		if ( $car ) {
			for ($i = 0; $i < $car.length; $i++) {
				$opt = '<option value="' + $car[$i] + '">' + $car[$i] + '</option>';
				$('#car-model').append($opt);
			}
		}
	});

	// If second select is changed
	$( "#car-model" ).change(function () {

		// If next select has value
		// Clear next select
		if ( $("#car-model-color option").length) {
			$("#car-model-color option:gt(0)").remove();
		}

		// Get the "car model" value from the current select
		$( "#car-model option:selected" ).each(function() {
			$car_model_val = $( this ).val();
		});

		// Get the "car models colors" values
		$color = $colors[$car_model_val];

		// if "car models colors" exists
		// Add values to the next select
		if ( $color ) {
			for ($i = 0; $i < $color.length; $i++) {
				$opt = '<option value="' + $color[$i] + '">' + $color[$i] + '</option>';
				$("#car-model-color").append($opt);
			}
		}
	});
	/***************************************/
	/* end select conditions */
	/***************************************/

	/***************************************/
	/* Hidden elements checkbox */
	/***************************************/
	$('#show-elements-checkbox').on('change', function() {
		if ( $('#show-elements-checkbox').is(':checked') ) {
			$('.hidden-elements').removeClass('hidden');
		} else {
			$('.hidden-elements').addClass('hidden');
		};
	});
	/***************************************/
	/* end hidden elements checkbox */
	/***************************************/

	/***************************************/
	/* Hidden elements select */
	/***************************************/
	$( "#show-elements-select" ).change(function () {

		// Variables
		var
			$value 	 = "",
			$field_1 = $("#field-1"),
			$field_2 = $("#field-2");

		// Get the value
		$( "#show-elements-select option:selected" ).each(function() {
			$value = $( this ).val();
		});

		// Display fields according to the value
		if ( $value == 'none' ) {
			if ( !$field_1.hasClass("hidden") ) $field_1.addClass("hidden");
			if ( !$field_2.hasClass("hidden") ) $field_2.addClass("hidden");
		};
		if ( $value == 'field-1' ) {
			if ( $field_1.hasClass("hidden") ) $field_1.removeClass("hidden");
			if ( !$field_2.hasClass("hidden") ) $field_2.addClass("hidden");
		};
		if ( $value == 'field-2' ) {
			if ( $field_2.hasClass("hidden") ) $field_2.removeClass("hidden");
			if ( !$field_1.hasClass("hidden") ) $field_1.addClass("hidden");
		};
		if ( $value == 'field-1-2' ) {
			if ( $field_1.hasClass("hidden") ) $field_1.removeClass("hidden");
			if ( $field_2.hasClass("hidden") ) $field_2.removeClass("hidden");
		};
	}).change();
	/***************************************/
	/* end hidden elements select */
	/***************************************/
	
	/***************************************/
	/* Checkbox conditions */
	/***************************************/
	/* Subscribe checkbox condition */
	$('#subscribe').change(function () {

		if ($('#subscribe').is(':checked')) {
			$('.subscribe').removeClass('disabled-view');
			$('.subscribe input[type="checkbox"]').removeAttr('disabled');
		} else {
			$('.subscribe').addClass('disabled-view');
			$('.subscribe input[type="checkbox"]').attr('disabled', 'true').removeAttr('checked');
		}

	}).change();
	/* end Subscribe checkbox condition */

	/***************************************/
	/* end Checkbox conditions */
	/***************************************/

});