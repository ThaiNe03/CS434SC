!function(t){"use strict";function i(i,a,r,n){var e=new Object;e["num-fetch"]=a.attr("data-num-fetch"),e["num-excerpt"]=a.attr("data-num-excerpt"),e.order=a.attr("data-order"),e.orderby=a.attr("data-orderby"),e["thumbnail-size"]=a.attr("data-thumbnail-size"),e["portfolio-style"]=a.attr("data-port-style"),e["portfolio-size"]=a.attr("data-port-size"),e["portfolio-layout"]=a.attr("data-port-layout"),e.category=r||a.attr("data-category"),e.paged=n||1;var l=!1;i.slideUp(500,function(){l=!0}),i.siblings(".gdlr-pagination").slideUp(500,function(){t(this).remove()});var s=t('<div class="gdlr-now-loading"></div>');s.insertBefore(i),s.slideDown(),t.ajax({type:"POST",url:a.attr("data-ajax"),data:{action:"gdlr_get_portfolio_ajax",args:e},error:function(t,i,o){console.log(t,i,o)},success:function(a){s.css("background-image","none").slideUp(function(){t(this).remove()});var r=t(a).hide();l?o(i,r):setTimeout(function(){o(i,r)},500)}})}function o(i,o){i&&i.replaceWith(o),o.slideDown(),o.each(function(){t(this).hasClass("gdlr-pagination")&&t(this).children().gdlr_bind_portfolio_pagination()}),o.gdlr_fluid_video(),o.find(".gdlr-portfolio-item").gdlr_portfolio_hover(),o.find(".flexslider").gdlr_flexslider(),o.find(".gdlr-isotope").gdlr_isotope(),o.find('[data-rel="fancybox"]').gdlr_fancybox(),o.closest(".gdlr-portfolio-link-lightbox").length>0&&o.find("a[data-lightbox]").click(function(){return t(this).gdlr_portfolio_lightbox(),!1}),o.find("img").load(function(){t(window).trigger("resize")})}t.fn.gdlr_bind_portfolio_pagination=function(){t(this).click(function(){if(!t(this).hasClass("current")){var o=t(this).parent(".gdlr-pagination").siblings(".portfolio-item-holder"),a=t(this).parent(".gdlr-pagination").siblings(".gdlr-ajax-info"),r=t(this).parent(".gdlr-pagination").siblings(".portfolio-item-filter");return r&&(r=r.children(".active").attr("data-category")),i(o,a,r,t(this).attr("data-paged")),!1}})},t.fn.gdlr_portfolio_hover=function(){t(this).each(function(){var i=t(this);function o(){i.find(".portfolio-overlay-content").each(function(){t(this).css("margin-top",-t(this).height()/2)})}t(this).find(".portfolio-thumbnail").hover(function(){t(this).children("img").transition({scale:1.1,duration:200}),t(this).find(".portfolio-overlay").animate({opacity:.2},200),t(this).find(".portfolio-overlay-content").animate({opacity:1},200)},function(){t(this).children("img").transition({scale:1,duration:200}),t(this).find(".portfolio-overlay").animate({opacity:0},200),t(this).find(".portfolio-overlay-content").animate({opacity:0},200)}),o(),t(window).resize(function(){o()})})},t(document).ready(function(){t(".gdlr-portfolio-item").gdlr_portfolio_hover(),t(".portfolio-item-filter a").click(function(){return!t(this).hasClass("active")&&(t(this).addClass("active").siblings().removeClass("active"),i(t(this).parent(".portfolio-item-filter").siblings(".portfolio-item-holder"),t(this).parent(".portfolio-item-filter").siblings(".gdlr-ajax-info"),t(this).attr("data-category")),!1)}),t(".gdlr-pagination.gdlr-ajax .page-numbers").gdlr_bind_portfolio_pagination()})}(jQuery);