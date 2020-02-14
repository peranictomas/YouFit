//Source for the diet that we used for our project
//https://www.goodhousekeeping.com/health/diet-nutrition/g4351/1200-calorie-diet-plan/
$.ajax({
    url:'https://api.jsonbin.io/b/5cadfaa285438b0272f4f2d6',
    //the actual json file is provided if the website is down
    //url:'7DayDiet.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
        var day=1;
        for(var i=0; i<7; i++){

            $("#container").append('<div id="font2" >Day '+day+'</div>');
            $("#container").append('<hr>');
            $("#container").append('<div id="'+i+'">Breakfast: '+data["meals"].day[i].b.recipe+'</div>');
            $("#container").append('<br>');
            $("#container").append('<div id="'+i+'">Lunch: '+data["meals"].day[i].l.recipe+'</div>');
            $("#container").append('<br>');
            $("#container").append('<div id="'+i+'">Dinner: '+data["meals"].day[i].d.recipe+'</div>');
            $("#container").append('<br>');
            day++;
        }
    }
});