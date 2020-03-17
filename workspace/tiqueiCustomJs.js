  var url = document.URL
    url = url.substr(url.lastIndexOf('/') + 1) ;
   $('a[href$="'+url+'"]').removeClass("text-white");
   $('a[href$="'+url+'"]').addClass("active-horizontal-menu");