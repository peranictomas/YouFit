
$("#clearWorkout").click(function () {
    $("#addWorkout").attr("disabled", false);
    var $tr1 = $("#tr1");
    var $tr2 = $("#tr2");
    var $tr3 = $("#tr3");

    $tr1.find("td").remove();
    $tr2.find("td").remove();
    $tr3.find("td").remove();
});

$("#addWorkout").click(function(){

    var $tr1 = $("#tr1");
    var $tr2 = $("#tr2");
    var $tr3 = $("#tr3");
    var $first=$('option[name=optradio1]:selected').val();
    var $second=$('option[name=optradio2]:selected').val();
    var $third=$('option[name=optradio3]:selected').val();

    if($first == 'chest') {
        $tr1.append("<td>Chest Press</td>");
        $tr2.append("<td>Chest Fly's</td>");
        $tr3.append("<td>Cable Crossovers</td>");
    } else if ($first == 'back') {
        $tr1.append("<td>Lat Pull Down</td>");
        $tr2.append("<td>Seated Row</td>");
        $tr3.append("<td>Pull Up</td>");
    } else if ($first == 'legs') {
        $tr1.append("<td>Squats</td>");
        $tr2.append("<td>Leg Press</td>");
        $tr3.append("<td>Calves Raises</td>");
    }

    if ($second == 'arms') {
        $tr1.append("<td>Bicep Curl</td>");
        $tr2.append("<td>Tricep Pushdown</td>");
        $tr3.append("<td>Tricep Extension</td>");
    } else if ($second == 'core') {
        $tr1.append("<td>Crunches</td>");
        $tr2.append("<td>Sit-ups</td>");
        $tr3.append("<td>Leg Raises</td>");
    } else if ($second == 'cardio') {
        $tr1.append("<td>Box Jumps</td>");
        $tr2.append("<td>Burpee's</td>");
        $tr3.append("<td>Mountain Climbers</td>");
    }

    if ($third == 'mass') {
        $tr1.append("<td>3 SETS 5 REPS (Heavy Weight)</td>");
        $tr2.append("<td>3 SETS 5 REPS (Heavy Weight)</td>");
        $tr3.append("<td>3 SETS 5 REPS (Heavy Weight)</td>");
    } else if ($third == 'weight') {
        $tr1.append("<td>3 SETS 8 REPS (Moderate Weight)</td>");
        $tr2.append("<td>3 SETS 8 REPS (Moderate Weight)</td>");
        $tr3.append("<td>3 SETS 8 REPS (Moderate Weight)</td>");
    } else if ($third == 'condition') {
        $tr1.append("<td>5 SETS 8 REPS (Light Weight)</td>");
        $tr2.append("<td>5 SETS 8 REPS (Light Weight)</td>");
        $tr3.append("<td>5 SETS 8 REPS (Light Weight)</td>");
    }
    $("#addWorkout").attr("disabled", true);
});