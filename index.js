function scrollToSection(scrollTarget){
    $('html, body').animate({
        scrollTop: $(scrollTarget).offset().top - ($('.header').outerHeight())
    }, 'slow', 'swing');
}

$('#want-to-start').click(()=>scrollToSection('.separator'));
$('#previous-work-nav').click(()=>scrollToSection('.gallery-section'));
$('#contact-nav').click(()=>scrollToSection('.contact-section'));
$('#us-nav').click(()=>scrollToSection('.about-section'));
$('#services-nav').click(()=>scrollToSection('.services-section'));
$('.logo').click(()=>$('html, body').animate({scrollTop: 0}, 'slow', 'swing'));
