$(document).ready(function(){
    var shoutArray = [];
    var $results = $('#content');
    var $shoutDiv = $('<div>');

    var $shoutName = $('<h3>');
    var $shoutMsg = $('<p>');
    var i = 0;

    $('#newLove').hide();
    $('#oldLove').hide();
    $('#noBtn').hide();

    function newShout(array, i) {
        if(i < 0){
            i = 17;
        }
        if(i > 17){
            i = 0
        }
        $('#love').slideDown();
        $shoutName.text(shoutArray[i].name);
        $shoutMsg.text(shoutArray[i].shoutout);
        $shoutDiv.addClass('shoutdiv').append($shoutName).append($shoutMsg);
        $results.append($shoutDiv);
        $('#love').slideUp();
    }

    $('#showMe').on('click', function(e){
        e.preventDefault();
        $(this).hide();
        $('#newLove').show();
        $('#oldLove').show();
        $('#noBtn').show();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/shoutouts/'
        }).done(function(data){
            console.log('HEY!', data);
            shoutArray = data;
            console.log('Array!', shoutArray);
            newShout(shoutArray, 0);
        }).fail(function (jqXHR, textStatus, errorThrown){
            console.log('There was an error: ', errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
            newShout(shoutArray, i);
        });
        $('#newLove').on('click', function(e) {
            e.preventDefault();
            if(i < 0){
                i = 17;
            }
            if(i > 17){
                i = 0
            }
            $shoutDiv.empty();
            newShout(shoutArray, ++i);
        });
        $('#oldLove').on('click', function(e) {
            e.preventDefault();
            if(i < 0){
                i = 17;
            }
            if(i > 17){
                i = 0
            }
            $shoutDiv.slideDown();
            newShout(shoutArray, --i);
        });
    });
});



//
//data.forEach(function (elem) {
//    var $div = $('<div>');
//    var $h3 = $('<h3>');
//    var $p = $('<p>');
//    $h3.text(elem.name);
//    $p.text(elem.shoutout);
//    $div.append($h3).append($p);
//    $results.append($div);
//});
//if(elem.id == 1){
//    var $div = $('<div>');
//    var $h3 = $('<h3>');
//    var $p = $('<p>');
//    $h3.text(elem.name);
//    $p.text(elem.shoutout);
//    $div.append($h3).append($p);
//    $results.append($div);
//};
//
//$('#myCarousel').carousel({
//    interval:false // remove interval for manual sliding
//});
//
//// when the carousel slides, load the ajax content
//$('#myCarousel').on('slid', function (e) {
//
//    // get index of currently active item
//    var idx = $('#myCarousel .item.active').index();
//    var url = $('.item.active').data('url');
//
//    // ajax load from data-url
//    $('.item').html("wait...");
//    $('.item').load(url,function(result){
//        $('#myCarousel').carousel(idx);
//    });
//
//});
//
//// load first slide
//$('[data-slide-number=0]').load($('[data-slide-number=0]').data('url'),function(result){
//    $('#myCarousel').carousel(0);
//});



//if(typeof data == 'array') {
//    data.forEach(function (elem) {
//        console.log(elem);
//        $h3.text(elem.name);
//        $p.text(elem.shoutout);
//        //$results.append($h3).append($p);
//        $div.append($h3).append($p);
//        $results.append($div);
//    })
//} else{
//    $h3.text(data.name);
//    $p.text(data.shoutout);
//    //$results.append($h3).append($p);
//    $div.append($h3).append($p);
//    $results.append($div);
//}