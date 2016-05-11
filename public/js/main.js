function toggleButton(btn) {
  var toggleClass = 'btn-hidden';

  if($('#' + btn).hasClass(toggleClass)) {
    $('#' + btn).removeClass(toggleClass);
  } else {
    $('#' + btn).addClass(toggleClass);
  }
}
