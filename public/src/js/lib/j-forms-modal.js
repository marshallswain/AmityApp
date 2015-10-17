$(document).ready(function(){

	/***************************************/
	/* Modal form */
	/***************************************/
	// Demo modal forms
	$('.modal-open').on('click', function() {

		// Set background
		if( !$('.modal-fill').length ) {
			$('body').append('<div class="modal-fill"></div>');
		}

		// Show modal form and background
		$modalForm = $($(this).attr('href'));
		$('.modal-fill').fadeIn();
		$modalForm.css('display', 'block').css('top', '50%').css('margin-top', -$modalForm.outerHeight()/2).fadeIn();

		return false;
	});

	// Close button
	$('.modal-close').on('click', function() {
		$('.modal-form').fadeOut();
		$('.modal-fill').fadeOut();
		return false;
	});
	/***************************************/
	/* end modal form */
	/***************************************/

});