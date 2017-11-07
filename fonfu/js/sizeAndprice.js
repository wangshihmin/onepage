/*衣服尺寸选择*/
//console.debug($(this).attr('alt'));//用来调试
  $(".attrs li span").click(function(){
        //var price=$("div.pro_price span").text();
        $(this).parents("ul").siblings("strong").text(  $(this).text() );
        //console.debug(allprice);//用来调试

        upd_price();
    })
  

    $(".attrs li").click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');

        $('.attrs_biaoqian113 strong').text( $(this).find('img').attr('alt'));
        $('#bigImg').attr({'src':$(this).find('img').attr('src')});
    })
/*衣服颜色切换*/

    $(".attrs ul li img").click(function(){
        var imgSrc = $(this).attr("src");
        var i = imgSrc.lastIndexOf(".");
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0,i);
        var imgSrc_small = imgSrc + unit;
        var imgSrc_big = imgSrc + unit;
        $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
        $("#thickImg").attr("href", imgSrc_big);
        var alt = $(this).attr("alt");
        $(".attrs b").text(alt);

        upd_price();
    });


$(".pro_title li").click(function(){
    $(this).addClass('selected').siblings('li').removeClass('selected');

    $('.pro_head_title strong').text($('.pro_title li.selected span').text());

    var attr = $(".attrs > .co > ul").eq($(this).index());
    attr.show().siblings('ul').hide();
    attr.children('li:eq(0)').trigger('click');

    var ssss = $(this).children('span');
    $("#pro_id").val(ssss.attr('alt'));
    $("div.pro_price span").text( ssss.attr('datavalue') );
    $("#allprice").val(ssss.attr('datavalue'));
    $("#base").val(ssss.attr('datavalue'));

    upd_price();
})


/*数量和价格联动*/
/*$(function(){
    var $span = $("div.pro_price span");
    var price = $span.text();
    $("#num_sort").change(function(){
        var num = $(this).val();
        var amount = num * price;
        $span.text( amount );
    }).change();
})*/
function addnumber(){
    $('#mun').val(parseInt($('#mun').val())+1);
    upd_price();
}

function minnumber(){
    if($('#mun').val()>1){
        $('#mun').val(parseInt($('#mun').val())-1);
        upd_price();
    }
}
function inputnumber(){
    var number=parseInt($('#mun').val());
    if(isNaN(number)||number<1){
        $('#mun').val('1');
        upd_price();
    }else{
        $('#mun').val(number);
    }
    upd_price();
}
jQuery(window).scroll(function() {
    var currTop = $(window).scrollTop()
    if (jQuery(this).scrollTop() > 1){
        var divTop = $("#zhiding").offset().top;
        if (currTop > divTop) {
            if (scroll) {
                jQuery('nav').addClass("sticky");
            }
        }else{
            jQuery('nav').removeClass("sticky");
        }
    }
    else{
        jQuery('nav').removeClass("sticky");
    }
});
