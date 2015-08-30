$(document).ready(function(){

    var $results = $('#content');

    $('#showMe').on('click', function(e){
        e.preventDefault();
        $(this).hide();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/shoutouts/1'
        }).done(function(data){
            console.log('HEY!', data);
            //var $div = $('<div>');
            //var $h3 = $('<h3>');
            //var $p = $('<p>');
            data.forEach(function (elem) {
                var $div = $('<div>');
                var $h3 = $('<h3>');
                var $p = $('<p>');
                $h3.text(elem.name);
                $p.text(elem.shoutout);
                $div.append($h3).append($p);
                $results.append($div);
            });
        }).fail(function (jqXHR, textStatus, errorThrown){
            console.log('There was an error: ', errorThrown);
        }).always(function(){
            console.log('Ajax Complete!');
        });

    })

});

//
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