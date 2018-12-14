//    var iframe = document.querySelector('iframe');
//    var player = new Vimeo.Player(iframe);
//
//    player.setVolume(1);
//
//    player.on('play', function() {
//        console.log('played the video!');
//    });
//    

//    var figure = $(".vimeo").hover( hoverVideo, hideVideo );

  
//    function hoverVideo(e) {  
//        player.play();
//
//    }
//
//    function hideVideo(e) {
//      player.pause();
//    }
   
  //  circletype active
  

  // stretch code
  
$.fn.strech_text = function(){
    var elmt          = $(this),
        cont_width    = elmt.width(),
        txt           = elmt.html(),
        one_line      = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char       = elmt.text().length,
        spacing       = cont_width/nb_char,
        txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width < cont_width){
        var  char_width     = txt_width/nb_char,
             ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ;
      console.log("Yes a thing");
  
        one_line.css({'letter-spacing': ltr_spacing});
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};


$(document).ready(function () {
    $('.stretch').each(function(){
        $(this).strech_text();
    });
});
  