$(document).ready(function () {
    // Add click event handler for the envelope
    $('.envelope').click(function () {
        $('.card').stop().animate({
            top: '-90px' // Move the card up
        }, 'slow');
    });

    // Optional: Add hover effect for better interaction
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '0'
        }, 'slow');
    });
});