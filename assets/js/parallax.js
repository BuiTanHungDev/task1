$(window).on('scroll', function() {
  $('.parallax').each(function() {
      var $section = $(this);
      var speed = $section.data('speed');
      var yPos = -($(window).scrollTop() / speed);
      
      $section.css('background-position-y', yPos + 'px');
  });
});
