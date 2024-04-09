
$(document).ready(function(){
        $(".box").eq(0).addClass("ch_bg"); 
        $(".content").eq(0).show();

    $(".box").click(function(){
        var _index = $(this).index();
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
        
        var top_s =  480 * _index * (-1); 
        $(".content").animate({top:top_s},1000);

    });
});


