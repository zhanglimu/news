
//news-详情
$(function(){
	$("[name='teamBody']").click(function(){
		window.location.href="news_details.html";
	})
})
// 现有彩票
$(function(){
    $("#tab>li:first").addClass("se");
    $("#tab_content>div:not(:first)").hide();
    $("#tab>li").click(function(){
        $("#tab_content").children(":eq("+$(this).index()+")").show().siblings().hide();
        $(this).addClass().addClass("se").siblings().removeClass("se")
    });
});
$(function(){
    $("#tabb>li:first").addClass("se");
    $("#tabb_content>div:not(:first)").hide();
    $("#tabb>li").click(function(){
        $("#tabb_content").children(":eq("+$(this).index()+")").show().siblings().hide();
        $(this).addClass().addClass("se").siblings().removeClass("se")
    });
});
// 交易记录
$(function(){
    $("#menu>li:first").addClass("se");
    $("#menu_content>div:not(:first)").hide();
    $("#menu>li").click(function(){
        $("#menu_content").children(":eq("+$(this).index()+")").show().siblings().hide();
        $(this).addClass().addClass("se").siblings().removeClass("se")
    });
});
//naver
$(function(){
    $("#naver>li:first").addClass("se");
    $("#naver_content>div:not(:first)").hide();
    $("#naver>li").click(function(){
        $("#naver_content").children(":eq("+$(this).index()+")").show().siblings().hide();
        $(this).addClass().addClass("se").siblings().removeClass("se")
    });
});
//刷新图片转换
$(function(){
        $(".refresh").click(function(){
            $(".refresh").attr('src','img/refresh1.png');
            setTimeout(function(){
           $(".refresh").attr('src','img/refresh.png');
    }, 500);
        });
    });
$(function(){
        $(".refreshing").click(function(){
            $(".refreshing").attr('src','img/refresh1.png');
            setTimeout(function(){
           
       
           $(".refreshing").attr('src','img/refresh.png');
        
    }, 500);
   
        });
    });
// 排行榜
$(function() {
    var $this = $("#news");
    var scrollTimer;
    $this.hover(function() {clearInterval(scrollTimer);}, 
    function() {scrollTimer = setInterval(function() {
        scrollNews($this);}, 2000);
    }).trigger("mouseleave");

    function scrollNews(obj) {
    var $self = obj.find("ul");
    var lineHeight = $self.find("li:first").height();
        $self.animate({"marginTop": -lineHeight + "px"}, 600, function() {
            $self.css({marginTop: 0}).find("li:first").appendTo($self);
        })
    }
});

//遮罩层买入
$(document).ready(function () {
    $(function () {
        $("[name='keep_activator']").click(function () {
            $('#keep_overlay').fadeIn('fast', function () {
                $('#keep_box').animate({ 'top': '150px' }, 500);
            });
        });
        $('#keep_boxclose').click(function () {
            $('#keep_box').animate({ 'top': '-500px' }, 500, function () {
                $('#keep_overlay').fadeOut('fast');
            });
        });
        $(".keep_sure, .keep_cancel").click(function(){
            $('#keep_box').animate({ 'top': '-500px' }, 500, function () {
                $('#keep_overlay').fadeOut('fast');
            });
        });
    });
});
$(document).ready(function () {
    $(function () {
        $("[name='sell_activator']").click(function () {
            $('#sell_overlay').fadeIn('fast', function () {
                $('#sell_box').animate({ 'top': '150px' }, 500);
            });
        });
        $('#sell_boxclose').click(function () {
            $('#sell_box').animate({ 'top': '-500px' }, 500, function () {
                $('#sell_overlay').fadeOut('fast');
            });
        });
        $(".sell_sure, .sell_cancel").click(function(){
            $('#sell_box').animate({ 'top': '-500px' }, 500, function () {
                $('#sell_overlay').fadeOut('fast');
            });
        });
    });
});
//兑换
$(function () {
        $("[name='gift']").click(function () {
            $('#overlaygift').fadeIn('fast', function () {
                $('#boxgift').animate({ 'top': '150px' }, 500);
            });
        });
        $('#boxclosegift').click(function () {
            $('#boxgift').animate({ 'top': '-500px' }, 500, function () {
                $('#overlaygift').fadeOut('fast');
            });
        });
        $(".giftleft").click(function(){
            $('#boxgift').animate({ 'top': '-500px' }, 500, function () {
                $('#overlaygift').fadeOut('fast');
            });
        });
        $(".giftright").click(function(){
            $('#boxgift').animate({ 'top': '-500px' }, 500, function () {
                $('#overlaygift').fadeOut('fast');
            });
            alert("兑换成功");
        });
    });


// button
    $(function () {
        $("[name='button_sign']").click(function () {
            $('#sign_overlay').fadeIn('fast', function () {
                $('#sign_box').animate({ 'top': '150px' }, 500);
            });
        });
        $('#sign_boxclose').click(function () {
            $('#sign_box').animate({ 'top': '-500px' }, 500, function () {
                $('#sign_overlay').fadeOut('fast');
            });
        });
        $(".sign_cancel").click(function(){
            $('#sign_box').animate({ 'top': '-500px' }, 500, function () {
                $('#sign_overlay').fadeOut('fast');
            });
        });
        $(".sign_sure").click(function(){
        	window.location.href="game.html";
            $('#sign_box').animate({ 'top': '-500px' }, 500, function () {
                $('#sign_overlay').fadeOut('fast');
            });
        });
    });
    
    //悬浮二维码
$(function(){
    // 页面浮动面板
    $("#floatPanel a.arrow").eq(0).click(function(){
        $("html,body").animate({scrollTop :0}, 300);
        return false;
    });
    $("#floatPanel a.arrow").eq(1).click(function(){
        $("html,body").animate({scrollTop : $(document).height()}, 300);
        return false;
    });

    var panel = $(".popPanel"); 
    var w = panel.outerWidth();
    
    $(".qrcode").hover(function(){
        panel.css("width","0px").show();
        panel.animate({"width" : w + "px"},300);
    },function(){
        panel.animate({"width" : "0px"},300);
    }); 
});
    //签到
    $(function () {
        $(".check_click,#floatPanel1").click(function () {
            $('#check_overlay').fadeIn('fast', function () {
                $('#check_box').animate({ 'top': '150px' }, 500);
            });
        });
        $('#check_boxclose').click(function () {
            $('#check_box').animate({ 'top': '-1000px' }, 500, function () {
                $('#check_overlay').fadeOut('fast');
            });
        });
        $(".signbutton").click(function(){
            $('#check_box').animate({ 'top': '-1000px' }, 500, function () {
                $('#check_overlay').fadeOut('fast');
            });
        });
    });
    //队员信息
    $(function () {
        $(".data").click(function () {
            $('#player_overlay').fadeIn('fast', function () {
                $('#player_box').animate({ 'top': '150px' }, 500);
                $(document.body).css("overflow","hidden");
            });
        });
        $('#player_boxclose').click(function () {
            $('#player_box').animate({ 'top': '-1000px' }, 500, function () {
                $('#player_overlay').fadeOut('fast');
                $(document.body).css("overflow","auto");
            });
        });
    });
    //队员赛迹
    $(function () {
        $(".data1").click(function () {
            $('#track_overlay').fadeIn('fast', function () {
                $('#track_box').animate({ 'top': '150px' }, 500);
                $(document.body).css("overflow","hidden");
            });
        });
        $('#track_boxclose').click(function () {
            $('#track_box').animate({ 'top': '-1000px' }, 500, function () {
                $('#track_overlay').fadeOut('fast');
                $(document.body).css("overflow","auto");
            });
        });
        var ttr;
        $("[name='tr']").click(function (e) {
        	if(!ttr){
        		ttr = $(e.currentTarget); 
            	ttr.css("background-color", "#cef4ce");   //tr点击换色
        	}else{
        		ttr.css("background-color","#fff");
        		ttr = $(e.currentTarget); 
            	ttr.css("background-color", "#cef4ce");
        	}
            
        });
    });
//操盘手推荐
    $(function () {
        $("#trader").click(function () {
            $('#trader_overlay').fadeIn('fast', function () {
                $('#trader_box').animate({ 'top': '50px' }, 500);
            });
        });
        $('#trader_boxclose').click(function () {
            $('#trader_box').animate({ 'top': '-1000px' }, 500, function () {
                $('#trader_overlay').fadeOut('fast');
            });
        });
        
    });
    
    //联赛
    $(function () {
        $(".lian").click(function () {
            $('#lian_overlay').fadeIn('fast', function () {
                $('#lian_box').animate({ 'top': '150px' }, 500);
            });
        });
        $('#lian_boxclose,.lian_cancle,.lian_sure').click(function () {
            $('#lian_box').animate({ 'top': '-1000px' }, 500, function () {
                $('#lian_overlay').fadeOut('fast');
            });
        });
		var lli = $('#lian_box li');   //筛选li点2下变色
			lli.click(function(){
			var filter = $(this).attr("filter");
		if ( filter == "1" ) {
		 	$(this).removeClass('active');
		  	$(this).attr("filter","0");
		}
		else {
			$(this).addClass('active');;
			$(this).attr("filter","1");
		}
			return false;
		});
    });
    //切换昨今明
$(function(){
	$(".ytm>button:first").addClass("ytm_se");
	$("#ytm_tab>div:not(:first)").hide();
	$(".ytm>button").click(function(){
		var div = $("#ytm_tab").children(":eq("+$(this).index()+")");
		div.show().siblings().hide();
		$(this).addClass().addClass("ytm_se").siblings().removeClass("ytm_se")
	});
});

//输入框水印效果
$(function() {
	var map=new Array();
	$.Watermark = {
		ShowAll:function(){
			for (var i=0;i<map.length;i++){
				if(map[i].obj.val()==""){
					map[i].obj.val(map[i].text);					
					map[i].obj.css("color",map[i].WatermarkColor);
				}else{
				    map[i].obj.css("color",map[i].DefaultColor);
				}
			}
		},
		HideAll:function(){
			for (var i=0;i<map.length;i++){
				if(map[i].obj.val()==map[i].text)
					map[i].obj.val("");					
			}
		}
	}
	
	$.fn.Watermark = function(text,color) {
		if(!color)
			color="#aaa";
		return this.each(
			function(){		
				var input=$(this);
				var defaultColor=input.css("color");
				map[map.length]={text:text,obj:input,DefaultColor:defaultColor,WatermarkColor:color};
				function clearMessage(){
					if(input.val()==text)
						input.val("");
					input.css("color",defaultColor);
				}

				function insertMessage(){
					if(input.val().length==0 || input.val()==text){
						input.val(text);
						input.css("color",color);	
					}else
						input.css("color",defaultColor);				
				}

				input.focus(clearMessage);
				input.blur(insertMessage);								
				input.change(insertMessage);
				
				insertMessage();
			}
		);
	};
	$(function(){
		$("#bet").Watermark("请输入投注额")
	})
});

//右侧悬浮china
$(function(){
    $("#ta>li:first").addClass("se");
    $("#ta_content>div:not(:first)").hide();
    $("#ta>li").click(function(){
        $("#ta_content").children(":eq("+$(this).index()+")").show().siblings().hide();
        $(this).addClass().addClass("se").siblings().removeClass("se")
    });
});
//china阵容，操盘手
$(function(){
    $("#hand>li:first").addClass("se");
    $("#hand_content>div:not(:first)").hide();
    $("#hand>li").click(function(){
        $("#hand_content").children(":eq("+$(this).index()+")").show().siblings().hide();
        $(this).addClass().addClass("se").siblings().removeClass("se")
    });
});

