console.log('\'Allo \'Allo!');


$('#menu').click(function(){
	'use strict';
	$('#menu').toggleClass('active');

});

$('#slider').slick({
	nextArrow: '<a class="next"></a>',
	prevArrow: '<a class="prev"></a>'
});

