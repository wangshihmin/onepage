(function($){
    var intervalDate;
    var day,hour,min,sec;

    $.fn.extend({
        countDown: function(options){  
            var opts = $.extend({},defaults,options);
            this.each(function(){
                var $this = $(this);
                var nowTime = new Date().getTime();
                var startTime = new Date(opts.startTimeStr).getTime(); 
                var endTime = new Date(opts.endTimeStr).getTime();  
                endTime = endTime > startTime ? endTime : startTime;
                startTime = endTime > startTime ? startTime : endTime;

                intervalDate = setInterval(function(){
                    nowTime = new Date().getTime();
                    if(startTime >= nowTime){
                        $this.beforeAction(opts);
                        clearInterval(intervalDate);
                    }else if(endTime >= nowTime){
                        
                        var t = endTime - nowTime;
                        day = Math.floor(t/1000/60/60/24);
                        hour = Math.floor(t/1000/60/60%24);
                        min = Math.floor(t/1000/60%60);
                        sec = Math.floor(t/1000%60);
                        $(opts.daySelector).html($this.doubleNum(day));
                        $(opts.hourSelector).html($this.doubleNum(hour));
                        $(opts.minSelector).html($this.doubleNum(min));
                        $(opts.secSelector).html($this.doubleNum(sec));
                    }else{
                        $this.afterAction(opts);
                        clearInterval(intervalDate);
                    }
                },1000);

            });
        },
        doubleNum:function(num){ 
            if(num<10){
                return "0"+num;
            }else{
                return num+"";
            }
        },
        beforeAction:function(options){
            
           $(options.daySelector).parent().html("�q�д���");
        },
        afterAction:function(options){
            
            $(options.daySelector).parent().html("���ʵ���");
        }

    });

    var defaults = {
        startTimeStr: "2017/06/17 00:00:00",
        endTimeStr: "2017/06/17 23:59:59",
        daySelector:".day",
        hourSelector:".hour",
        minSelector:".min",
        secSelector:".sec"
    }


})(jQuery)

