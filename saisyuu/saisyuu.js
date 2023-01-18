
$('.slider').bxSlider({
    touchEnabled:false,
    mode: 'vertical',
    controls: false,
    auto: 'true',
    pager: false
});
function GethashID (hashIDName){
    if(hashIDName){
        //タブ設定
        $('.tab li').find('a').each(function() {
            var idName = $(this).attr('href');
            if(idName == hashIDName){
                var parentElm = $(this).parent();
                $('.tab li').removeClass("active");
                $(parentElm).addClass("active");

                $(".area").removeClass("is-active");
                $(hashIDName).addClass("is-active");
            }
        });
    }
}

//タブをクリックしたら
$('.tab a').on('click', function() {
    var idName = $(this).attr('href');
    GethashID (idName);
    return false;
});






var bar = new ProgressBar.Line(splash_text, {
    easing: 'easeInOut',
    duration: 1000,
    strokeWidth: 0.2,
    color: '#555',
    trailWidth: 0.2,
    trailColor: '#bbb',
    text: {
        style: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',
            transform:'translate(-50%,-50%)',
            'font-size':'1rem',
            color: '#fff',
        },
        autoStyleContainer: false
    },
    step: function(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});


bar.animate(1.0, function () {
    $("#splash").delay(500).fadeOut(800);
});



