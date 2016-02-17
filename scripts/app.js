$(function(){
    var t=0;
    $(".yuan>li").css({background:"white"}).eq(0).css({background:"black"});
    $(document).click(function(e){
        e.stopPropagation();
    })
    $(".right1").click(function(){

       t++;
        if(t==4){
            t=3;
            return false;
        }
        $(".box").animate({marginLeft:-t*100+'%'},1000);
            $(".yuan>li").css({background:"white"}).eq(t).css({background:"black"});

    })
    $(".left1").click(function(){
        t--;
        if(t==-1){
            t=0;
            return false;}
        $(".box").animate({marginLeft: -t*100 + '%'},1000);
        $(".yuan>li").css({background:"white"}).eq(t).css({background:"black"});

    })
    //var tt,num;
    $(window).resize(function(){
        ll();

    });
    function ll(){
        if($(window).width()<760){
            $(".lbo").css("display","block");
            $(".lbo1").css("display","none");
            $(".container1").css("display","none");
            $(".container2").css("display","block");

        }else{
            $(".lbo").css("display","none");
            $(".lbo1").css("display","block");
            $(".container1").css("display","block");
            $(".container2").css("display","none");
        }
    }
    ll();
    // -------------------------------------------

  
 $(".biao").hover(function(){
         $(this).stop();
        $(this).find(".hiden").show();
        $(this).addClass("animated1");
    },function(){
         $(this).stop();
         $(this).removeClass("animated1");
         $(this).find(".hiden").hide();
    }
     )
// ---------------------------------------------------
   var Timerr;
        function aa(){
            for(var i=0;i<3;i++){
            var m=parseInt(Math.random()*700+100);
            var j2=parseInt(Math.random()*600+1200);
            var j=parseInt(Math.random()*1000+000);
            var j1=parseInt(Math.random()*300+300);
            var n=parseInt(Math.random()*10+(-10));
            $('.jb').prepend('<div><div><div><div><div></div></div></div></div></div>')
            $('.jb').children('div').eq(0).css({'left':j,'top':n})
            $('.jb').children('div').eq(0).animate({'left':j-j1,'top':480+20},j2)
            
            }
            }
            aa();
            setInterval(function(){
                aa();
                },300)
                setInterval(function(){
                    for(var jj=0;jj<$('.jb>div').size()/3;jj++){
                    $('.jb>div').eq($('.jb>div').size()-jj).remove();
                    }
                    
                    },300)
        








    //--------------------------------------------
    $(".dengyu").click(function(){
        $(".zhu").toggle();
    })


    //--------------------------------------
    var newtop;
    $('.biaoti').click(function(){
        v = $(this).index(".biaoti");

        var m1=$(".scroll1").offset().top;
        var m2=$(".scroll2").offset().top;
      if(v==0){
          newtop=m1;
      }else if(v==1){
          newtop=m2;
      }
        $({top: $(window).scrollTop()}).animate(
            {top: newtop},
            {
                duration: 700,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });
    $('.biaoti1').click(function(){
        v = $(this).index(".biaoti1");

        var m1=$(".scroll1").offset().top;
        var m2=$(".scroll2").offset().top;
        if(v==0){
            newtop=m1;
        }else if(v==1){
            newtop=m2;
        }
        $({top: $(window).scrollTop()}).animate(
            {top: newtop},
            {
                duration: 700,
                step: function() {
                    $(window).scrollTop(this.top);
                }
            }
        );
    });


});
