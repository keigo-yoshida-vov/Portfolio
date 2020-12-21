$(function() {
    $('.home').on('click', function(){
        $('.cat').animate({
            opacity: "1"
        }, 0, 'none');
        $('#hand_p').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_i').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_l').animate({
            opacity: "0",
        }, 0, 'none');
    });
    
    $('.profile').on('click', function(){
        $('#hand_p').animate({
            opacity: "1"
        }, 0, 'none');
        $('.cat').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_i').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_l').animate({
            opacity: "0",
        }, 0, 'none');
    });

    $('.items').on('click', function(){
        $('#hand_i').animate({
            opacity: "1"
        }, 0, 'none');
        $('.cat').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_p').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_l').animate({
            opacity: "0",
        }, 0, 'none');
    });

    $('.links').on('click', function(){
        $('#hand_l').animate({
            opacity: "1",
        }, 0, 'none');
        $('.cat').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_p').animate({
            opacity: "0",
        }, 0, 'none');
        $('#hand_i').animate({
            opacity: "0",
        }, 0, 'none');
    });
});