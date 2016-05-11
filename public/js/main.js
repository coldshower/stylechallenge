function toggleButton(btn) {
  var toggleClass = 'btn-hidden';

  if($('#' + btn).hasClass(toggleClass)) {
    $('#' + btn).removeClass(toggleClass);
  } else {
    $('#' + btn).addClass(toggleClass);
  }
}

// jquery just for style challenge!


$('.add-hotel').on('click', function() {
	setTimeout(function(){
		$('.lorem-hotel').html('Hotel Mulberry');
	}, 300);
	
});

var restClicks = 0;
$('.add-rest').on('click', function() {
	
	setTimeout(function() {
		if (restClicks === 0) {
			$('.lorem-rest').append('<li>Marc Forgione</li>');
		} else if (restClicks === 1) {
			$('.lorem-rest').append('<li>Tamarind</li>');
		} else if (restClicks === 2) {
			$('.lorem-rest').append('<li>The Capital Grille</li>');
		}
		restClicks += 1;
	}, 300);
	
	
});

var actClicks = 0;
$('.add-act').on('click', function() {
	
	setTimeout(function() {
		if (actClicks === 0) {
			$('.lorem-act').append('<li>Mahayana Temple Buddhist Association</li>');
		} else if (actClicks === 1) {
			$('.lorem-act').append('<li>Scott\'s Pizza Tours</li>');
		} else if (actClicks === 2) {
			$('.lorem-act').append('<li>Blue Man Group</li>');
		}
		actClicks += 1;
	}, 300);
	
	
});
