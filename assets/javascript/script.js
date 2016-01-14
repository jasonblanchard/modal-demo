$(document).ready(function() {

  $('.reveal').on('click', function() {
    var modal = "<div class='modal-wrapper'><div class='modal'><button class='close-modal'>x</button><div class='modal-content'>Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</div></div></div>";
    $('body').append(modal);
  });
});

$(document).on('click', '.close-modal', function() {
  $('.modal-wrapper').remove();
});
