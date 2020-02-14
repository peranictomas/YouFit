$( document ).ready(function()
{
    var sound = new Audio("../sounds/next.mp3");
    var $btn = $("#btn");
    var $btn2 = $("#btn2");
    var $t1 = $("#timer1");
    var $t2 = $("#timer2");
    var $t3 = $("#timer3");
    var $t4 = $("#timer4");
    var $time1;
    var $time2;
    var $time3;
    var $time4;
    var $total;
    var $mins;
    var $secs;
    var $timer;
    var $timer2;

    $btn.click(function() {
        $time1 = parseInt($($t1).val());
        $time2 = parseInt($($t2).val());
        $time3 = parseInt($($t3).val());
        $time4 = parseInt($($t4).val());
        $total = $time1 + $time2 + $time3 + $time4;

        $mins = ($total - ($total%60))/60;
        $secs = ($total%60)+1;
        $timer2 = $mins+":"+$secs;

        $btn.attr("disabled", true);
        // taken from: https://stackoverflow.com/questions/41035992/jquery-countdown-timer-for-minutes-and-seconds
        var interval = setInterval(function() {

            var $test1 = false;
            var $test2 = false;
            var $test3 = false;
            var $test4 = false;
            $timer = $timer2.split(':');
            var minutes = parseInt($timer[0], 10);
            var seconds = parseInt($timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            $("#output").html(minutes + ':' + seconds);
            $timer2 = minutes + ':' + seconds;
            if($total == $time2+$time3+$time4 && $test1==false)
            {
                //PLAY HERE
                sound.play();
                $test1=true;
            }
            if($total == $time3+$time4 && $test2==false)
            {
                //PLAY HERE
                sound.play();
                $test2=true;
            }
            if($total == $time4 && $test3==false)
            {
                //PLAY HERE
                sound.play();
                $test3=true;
            }
            if($total == 0 && $test4==false)
            {
                $test4=true;
            }
            if(minutes<0)
            {
                $("#output").html("0:00");
                $btn.attr("disabled", false);
            }
            $total--;
        }, 1000);
    });

    $btn2.click(function() {
        $time1 = 0;
        $time2 = 0;
        $time3 = 0;
        $time4 = 0;
        $total = 0;
        $mins = 0;
        $secs = 0;
        $timer2 = $mins+":"+$secs

        $("#output").html("0:00");
    });
});