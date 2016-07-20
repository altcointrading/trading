jQuery(document).ready(function(){
  jQuery(".homebox a").hover(function() {
    var inner = jQuery(this).html();
    inner = inner.toLowerCase().replace(/ /g,'').replace(/[^A-Za-z0-9]/g, 'x');
    //console.log(inner);
    var imgsrc = "/img/home/" + inner + ".jpg";
    jQuery("#wechselbox img").attr('src', imgsrc);
  });//homebox
  // Knecht
  jQuery("#knecht img").mouseover(function(){
    jQuery(this).attr('src','/img/logo/logo_knecht_active.png');
  });
  jQuery("#knecht img").mouseout(function(){
    jQuery(this).attr('src','/img/logo/logo_knecht_inactive.png');
  });
  // Knechtreisen
  jQuery("#knechtreisen img").mouseover(function(){
    jQuery(this).attr('src','/img/logo/logo_knechtreisen_active.png');
  });
  jQuery("#knechtreisen img").mouseout(function(){
    jQuery(this).attr('src','/img/logo/logo_knechtreisen_inactive.png');
  });
  // Eurobus
  jQuery("#eurobus img").mouseover(function(){
    jQuery(this).attr('src','/img/logo/logo_eurobus_active.png');
  });
  jQuery("#eurobus img").mouseout(function(){
    jQuery(this).attr('src','/img/logo/logo_eurobus_inactive.png');
  });
  // Welti-Furrer
  jQuery("#weltifurrer img").mouseover(function(){
    jQuery(this).attr('src','/img/logo/logo_weltifurrer_active.png');
  });
  jQuery("#weltifurrer img").mouseout(function(){
    jQuery(this).attr('src','/img/logo/logo_weltifurrer_inactive.png');
  });
});
