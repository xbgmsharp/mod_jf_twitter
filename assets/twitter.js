window.addEvent('domready', function() {
	$(document).ready(function() {
	    $('.tw_rail').cycle({
			fx: 'fade',
			speed: 'fast',
			timeout: 0,
			next: '#tw_next',
			prev: '#tx_previous'
		});
	});
});
