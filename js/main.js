$(document).ready(function() {
    $("div[name=animate]").each(function() {
        animateDiv($(this));
    });
});

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height();
    var w = $(window).width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv(x) {
    var newq = makeNewPosition();
    $(x).animate({
        top: newq[0],
        left: newq[1]
    }, function() {
        animateDiv(x);
    });

};
