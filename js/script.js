var rightArrow = $('.arrow.right');

rightArrow.click(function() {
    var currentActive = $('.slider .active');
    currentActive.removeClass('active');

    if(currentActive.hasClass('last')) {
        // do la classe active al primo elemento
        $('.slider .first').addClass('active');
    }else {
        // do la classe active all'elemento successivo
        var nextImg = currentActive.next();
        nextImg.addClass('active');
    }
});


var leftArrow = $('.arrow.left');

leftArrow.click(function() {
    var currentActive = $('.slider .active');
    currentActive.removeClass('active');

    if(currentActive.hasClass('first')) {
        // se il primo elemento ha classe first 
        // do la classe active all'ultimo lemento che ha classe last
        $('.slider .last').addClass('active');
    }else {
        // do la classe active all'elemento precedente
        var prevImg = currentActive.next();
        prevImg.addClass('active');
    }
});