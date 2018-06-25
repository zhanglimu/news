//判断谷歌浏览器
$(function(){
var explorer =navigator.userAgent ;
//ie 
if (explorer.indexOf("MSIE") >= 0) {
//alert("ie");
}
//Chrome
else if(explorer.indexOf("Chrome") >= 0){
//alert("Chrome");
$("#layout").css({"top":"150px","margin-bottom":"100px"});
}
//firefox 
else if (explorer.indexOf("Firefox") >= 0) {
//alert("Firefox");
}
//Opera
else if(explorer.indexOf("Opera") >= 0){
//alert("Opera");
}
//Safari
else if(explorer.indexOf("Safari") >= 0){
//alert("Safari");
} 
//Netscape
else if(explorer.indexOf("Netscape")>= 0) { 
//alert('Netscape'); 
} 
});
//切换当前和历史 
$(function(){
	$("#menu>li:first").addClass("se");
	$("#content>div:not(:first)").hide();
	$("#menu>li").click(function(){
		$("#content").children(":eq("+$(this).index()+")").show().siblings().hide();
		$(this).addClass().addClass("se").siblings().removeClass("se")
	});
});

//点击添加彩票

    $(function(){
        $("#fade").hide();
        $("[name='hover']").click(function(){
            $("#fade,.hover").fadeToggle()
        });
        $(".okbtn").click(function(){
            $("#fade").fadeToggle();
        });
        $(".cancel").click(function(){
            $("#fade").hide();
            $(".hover").show();
        });
        $(".modify").click(function(){
            $("#fade").fadeToggle()
        });
    });

//点击选中td

jQuery(function(){
$("[name='home']").hide(); //所有的input隐藏
    var list = jQuery('.optionslist td');
        list.click(function(){
        $(this).children().toggle(); //点击后对应的input显示 
         var dotoggle = $(this).attr("dotoggle");
         if ( dotoggle == "1" ) {
         jQuery(this).removeClass('active');
          $(this).attr("dotoggle","0");
          }
          else {
           jQuery(this).addClass('active');
          $(this).attr("dotoggle","1");
         }
                return false;
        });
// 阻止事件冒泡
    $("[name='home']").click(function(event){
        event.stopPropagation();
    }); 
});
//下拉数据详情
    // $(function(){
    //     $(".content_bhtable").hide();
    //     $("#di").click(function(){
    //         if($("#di").attr('src') == 'image/xiangxia.png'){
    //             $("#di").attr('src','image/xiangshang.png');
    //         }else{
    //             $("#di").attr('src','image/xiangxia.png');
    //         }
    //         $(".content_bhtable").fadeToggle();
    //     });
    // });
$(function(){
    var hide = true;
    $(".content_bhTable").hide();
    $("[name='bh_data']").click(function(){
        $(this).next().fadeToggle();
        if(hide){
            $(".jiahao").css("border","none");
            $(".jiahao").children().hide();
             $(this).parent().parent().parent().next().hide();

             // $("#hhhh").remove();
        }else{
            $(".jiahao").css("border","1px solid #ddd");
            $(".jiahao").children().show();
             $(this).parent().parent().parent().next().show();
             // $(this).parent().parent().parent().append("<div id='hhhh'>i am  a div</div>");
        }
        hide = !hide;
    });
});


// 点击查询input变色
    $(function(){
        $("#input_focus").bind({
            focus:function(){
                $(this).css("color","#000")
                if (this.value == this.defaultValue){
                this.value="";
                }
            },
            blur:function(){
                $(this).css("color","#999")
                if (this.value == ""){
                this.value = this.defaultValue;
                }
            }
        }); 
    });
// 点击加号添加减号删除
    $(function(){
        $(".del_qrcode").click(function(){
            $(".qrcode").remove();
        });
    });
    $(function(){
        $(".deleter").click(function(){
            $("#Match_point,.consultation").remove();
        });
    });
    $(function(){
        $(".hover_add").click(function(){
            //$("#my-form").prepend("<div>123</div>");
            $("#add").append("<div>123</div>");
        });
    });
    $(function(){
        //图片转换
        $("#rig").click(function(){
            $("#rig").attr('src','image/realtime1.png');
            setTimeout(function(){
            $("#rig").attr('src','image/realtime.png');
        
        }, 500);
   
        });
    });
// 滑出新闻
$(function(){
    $(".hover_right").hide();
	$(".news").unbind().click(function(){
		$(".hover_right").css("right","-40%").animate({"right":"0px"},500).show();
	});
    $(".right_del").unbind().click(function(){
        $(".hover_right").css("right","-40%").animate({"right":"0px"},500).hide();
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
// 选中历史列表
// $(function(){
//     $("#content li").click(function(){
//         $(this).css("background","#ddd")
//     })
// });
//遮罩层保存
$(document).ready(function () {
    $(function () {
        $('#keep_activator').click(function () {
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
//遮罩层查询
$(document).ready(function () {
    $(function () {
        $('#activator').click(function () {
            $('#overlay').fadeIn('fast', function () {
                $('#box').animate({ 'top': '150px' }, 500);
            });
        });
        $('#boxclose').click(function () {
            $('#box').animate({ 'top': '-500px' }, 500, function () {
                $('#overlay').fadeOut('fast');
            });
        });
        $(".button_sure, .button_cancel").click(function(){
            $('#box').animate({ 'top': '-500px' }, 500, function () {
                $('#overlay').fadeOut('fast');
            });
        });
    });
});
//遮罩层删除li
$(document).ready(function () {
    $(function () {
        var delimg= $(".del").parent();
        var li;
        $('.del').click(function () {
            li = $(this).parent();
            $('#del_overlay').fadeIn('fast', function () {
                $('#del_box').animate({ 'top': '150px' }, 500);
            });
        });
        $('#del_boxclose').click(function () {
            $('#del_box').animate({ 'top': '-500px' }, 500, function () {
                $('#del_overlay').fadeOut('fast');
            });
        });
        $(".del_sure").click(function(){
            $('#del_box').animate({ 'top': '-500px' }, 500, function () {
                $('#del_overlay').fadeOut('fast');
            });
            li.remove();
        });
        $(".del_cancel").click(function(){
            $('#del_box').animate({ 'top': '-500px' }, 500, function () {
                $('#del_overlay').fadeOut('fast');
            });
        });
    });
});