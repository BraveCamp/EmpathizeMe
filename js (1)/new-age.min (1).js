/*!
 * Start Bootstrap - New Age v4.0.0-alpha (http://startbootstrap.com/template-overviews/new-age)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-new-age/blob/master/LICENSE)
 */
!function(a){"use strict";a('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=a(this.hash);if((n=n.length?n:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:n.offset().top-48},1e3,"easeInOutExpo"),!1}}),a("body").scrollspy({target:"#mainNav",offset:54}),a(".navbar-collapse>ul>li>a").click(function(){a(".navbar-collapse").collapse("hide")}),a(window).scroll(function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")})}(jQuery);