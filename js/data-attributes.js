$(document).ready(function() {
  $('[data-color]').each(function(i) {
    $(this).css('color', $(this).data('color'));
  });

  $('[data-font]').each(function(i) {
    $(this).css('font-family', $(this).data('font'));
  })

  $('[id]').each(function(i) {
    $(this).attr('name', $(this).attr('id'));
  })

  $('[name]').each(function(i) {
    $(this).attr('id', $(this).attr('name'));
  })
});
