$(document).ready(function() {
    var lastId,menu=$('.indexmenu'),
    topMenuHeight = menu.outerHeight(),
    menuitems=menu.find("a"),
    scrollItems = menuitems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    menuitems.click(function(e){
        var href = $(this).attr("href");
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 800);
        e.preventDefault();
    });
  
  // Bind to scroll
    $(window).scroll(function(){
      // Get container scroll position
      var fromTop = $(this).scrollTop()+topMenuHeight;
      // Get id of current scroll item
      var cur = scrollItems.map(function(){
        
        if ($(this).offset().top < fromTop)
          return this;
      });
      // Get the id of the current element
      
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";
      if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuitems
          .parent().removeClass('active')
          .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
  });
    $('.resume .wrap').smoove({moveY:'40%'});
    $('.skill .wrap').smoove({moveY:'45%'});
    $('.contact .wrap').smoove({moveY:'60%'});
});
