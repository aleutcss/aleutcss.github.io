Zepto(function($){
  $('[data-hide]').hide();
  $('[data-toggle-next]').on('click', function(event) {
  	event.preventDefault();
  	/* Act on the event */
	$(this).next().toggle();
  });
})
