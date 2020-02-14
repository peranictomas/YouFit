
$( document ).ready(function()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date").setAttribute("max", today);

    var $name = $("#user");
    var $weight = $("#weight");
    var $date = $("#date");
    var $btn1 = $("#btn1");
    var $btn2 = $("#btn2");
    var $btn3 = $("#btn3");
    var $output = $("#output");
    var click_event = $.support.touch ? "tap" : "click";
    var dbSupported=("indexedDB" in window) ? true : false;

    function showPopup(message) {
        $output.html("<p>" + message + "</p>").parent().show(1000);
        setTimeout(  function() { $output.parent().fadeOut(1000);}, 2000 );
    };

    if (dbSupported)
    {
        var openRequest=window.indexedDB.open("YouFit", 1);
        openRequest.onupgradeneeded = function(event) {
            console.log("DB upgrading");
            db=openRequest.result;
            if (!db.objectStoreNames.contains("Athletes")) {
                db.createObjectStore("Athletes", {keyPath:"time"});
            }
        };
        openRequest.onsuccess=function(event) {
            console.log("DB success");
            db=openRequest.result;
        };
        openRequest.onerror=function(event) {
            console.log("DB error");
            console.dir(event);
        };
    }
    $btn1.on(click_event,function () {
        var currentdate = new Date();
        var datetime = "" + currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        var name = $name.val();
        var weight = $weight.val();
        var date = $date.val();
        var errMsg="";

        if(name.length<1)
        {
            errMsg += 'Athlete name cannot be empty <br>';
        }
        if(weight.length<1 || parseInt(weight) < 0)
        {
            errMsg += 'Athlete weight cannot be empty or negative <br>';
        }
        if(date=="")
        {
            errMsg += 'Date cannot be empty';
        }
        if(errMsg.length>1){
            showPopup(errMsg);
            return true;
        }
        var athlete = {time:datetime, name:name, weight:weight, date:date};

        var transaction = db.transaction(["Athletes"], "readwrite");

        transaction.oncomplete = function (event) {
            console.log("Transaction Complete");
        };

        transaction.onerror=function (event) {
            console.log("Transaction Failed");
        };
        var storeRequest = transaction.objectStore("Athletes").add(athlete);
        storeRequest.onsuccess =function() {
            showPopup("Athlete Info Saved");
        };
        storeRequest.onerror=function() {
            showPopup("Database Error: cannot save Info");
        };
        $name.val("");
        $weight.val("");
        $date.val("");
        setTimeout(function()
        {
            location.reload();
        }, 750);
    });

    $btn2.on(click_event, function(){
        var name = $name.val();
        if (name.length<1)
        {
            showPopup("name cannot be empty");
            return true;
        }

        var transaction = db.transaction(['Athletes'], 'readonly');
        var objectStore = transaction.objectStore('Athletes');

        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor)
            {
                if(cursor.value.name == name)
                {
                    $("#output").prepend("<p><strong>Name:</strong> "+cursor.value.name+" <strong>      Weight:</strong> "+cursor.value.weight+" <strong>       Date:</strong> "+cursor.value.date+"</p>")
                }
                cursor.continue();
            }
            else
            {
                console.log('Entries all displayed.');
            }
        };
        $name.val("");
    });
    $btn3.on(click_event, function(){
        $output.find("p").remove();
    });
});