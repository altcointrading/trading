jQuery(document).ready(function(){
  jQuery(".homebox a").hover(function() {
    var inner = jQuery(this).html();
    inner = inner.toLowerCase().replace(/ /g,'').replace(/[^A-Za-z0-9]/g, 'x');
    //console.log(inner);
    var imgsrc = "/img/home/" + inner + ".jpg";
    jQuery("#wechselbox img").attr('src', imgsrc);
  });
});
