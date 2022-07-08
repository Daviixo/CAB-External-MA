function createTemplate(){
    
    // This is to get the date and create its format

    var getDate = document.getElementById("dateTime").value;
    var getMinutes = document.getElementById("duration").value;

    getMinutes = parseInt(getMinutes);

    console.log("Duration: " + getMinutes + "mins")

    // console.log("Captured date: " + getDate);

    var date = new Date(getDate);
    currentMonth = date.getMonth();
    date = date.toString();
    console.log("GIVEN DATE: " + date);

    // console.log("Getting month... " + currentMonth);
    // console.log("My 1st DATE: " + date);
    // console.log("My 1st DATE 2: " + date.toISOString);

    // Example: Thu, 30 Jun 2022 22:49:00 GMT

    splitDate = date.split(" ");

    // console.log("SPLIT: " + splitDate);
    // console.log("SPLIT0: " + splitDate[0]);
    // console.log("SPLIT1: " + splitDate[1]);
    // console.log("SPLIT2: " + splitDate[2]);
    // console.log("SPLIT3: " + splitDate[3]);
    // console.log("SPLIT4: " + splitDate[4]);
    // console.log("SPLIT5: " + splitDate[5]);

    //Splitting the date

    splitWeekDay = splitDate[0].replace(",","");
    splitMonth = splitDate[1];
    splitDay = splitDate[2];
    splitYear = splitDate[3];
    splitTime = splitDate[4];
    splitTimezone = splitDate[5];

    // Let's now divide our time

    finalTime = splitDate[4].split(":");
    splitHour = finalTime[0];
    splitMinutes = finalTime[1];
    splitMinutesOne = splitMinutes[0];
    splitMinutesTwo = splitMinutes[1];

    // To double check the event's parameters

    // console.log("Final year: " + splitYear);
    // console.log("Final Month: " + splitMonth);
    // console.log("Final Month (#): " + currentMonth);
    // console.log("Final Day: " + splitDay);
    // console.log("Final Hour: " + splitHour);
    // console.log("Final Minutes One: " + splitMinutesOne);
    // console.log("Final Minutes Two: " + splitMinutesTwo);

    // console.log("HOUR: " + splitHour);
    // console.log("MINUTES: " + splitMinutes);

    finalSplitMinutes = splitMinutesOne + splitMinutesTwo;

    var d = new Date(splitYear,currentMonth,splitDay,splitHour,finalSplitMinutes);
    var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    var mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    var da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    var wd = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);
    var ti = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: true, minute: '2-digit'}).format(d);

    console.log("Final date: " + mo + " " + da + ", " + ye + ", " + ti + " UTC");

    // Let's now add the minutes to the current date.

    createNewDate = addHours(d,getMinutes);

    console.log("Test NEW DATE START: " + createNewDate);

    // We'll now add the correct format to the "TO" time.
    // =========== THIS IS JUST TO HELP ME IDENTIFY STUFF =================

    console.log("\nNEW STUFF\n")

    var new_date = new Date(createNewDate);
    new_currentMonth = new_date.getMonth();
    new_date = new_date.toString();

    console.log("new_DATE: " + new_date);

    // console.log("Getting month... " + currentMonth);
    // console.log("My 1st DATE: " + date);
    // console.log("My 1st DATE 2: " + date.toISOString);

    // Example: Thu, 30 Jun 2022 22:49:00 GMT

    new_splitDate = new_date.split(" ");
    // console.log("SPLIT: " + new_splitDate);
    // console.log("SPLIT0: " + new_splitDate[0]);
    // console.log("SPLIT1: " + new_splitDate[1]);
    // console.log("SPLIT2: " + new_splitDate[2]);
    // console.log("SPLIT3: " + new_splitDate[3]);
    // console.log("SPLIT4: " + new_splitDate[4]);
    // console.log("SPLIT5: " + new_splitDate[5]);

    //Splitting the date

    new_splitWeekDay = new_splitDate[0].replace(",","");
    new_splitMonth = new_splitDate[1];
    new_splitDay = new_splitDate[2];
    new_splitYear = new_splitDate[3];
    new_splitTime = new_splitDate[4];
    new_splitTimezone = new_splitDate[5];

    // Let's now divide our time

    new_finalTime = new_splitDate[4].split(":");
    new_splitHour = new_finalTime[0];
    new_splitMinutes = new_finalTime[1];
    new_splitMinutesOne = new_splitMinutes[0];
    new_splitMinutesTwo = new_splitMinutes[1];

    // To double check the event's parameters

    // console.log("Final year: " + new_splitYear);
    // console.log("Final Month: " + new_splitMonth);
    // console.log("Final Month (#): " + new_currentMonth);
    // console.log("Final Day: " + new_splitDay);
    // console.log("Final Hour: " + new_splitHour);
    // console.log("Final Minutes One: " + new_splitMinutesOne);
    // console.log("Final Minutes Two: " + new_splitMinutesTwo);

    new_finalSplitMinutes = new_splitMinutesOne + new_splitMinutesTwo;

    console.log("HOUR: " + new_splitHour);
    console.log("new_finalSplitMinutes: " +  new_finalSplitMinutes);

    var new_d = new Date(new_splitYear,currentMonth,new_splitDay,new_splitHour,new_finalSplitMinutes);
    var new_ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new_d);
    var new_mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(new_d);
    var new_da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(new_d);
    var new_wd = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(new_d);
    var new_ti = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: true, minute: '2-digit'}).format(new_d);

    console.log("new_Final format: " + new_mo + " " + new_da + ", " + new_ye + ", " + new_ti + " UTC");

    //alert("MA: " + mo + " " + da + ", " + ye + ", " + ti + " UTC to " + new_ti + " UTC")

    var selected = [];
    for (var option of document.getElementById('products').options)
    {
        if (option.selected) {
            selected.push(" " + option.value);
        }
    }

    console.log("MA: " + mo + " " + da + ", " + ye + ", " + ti + " UTC to " + new_ti + " UTC");

    maDate = "MA: " + mo + " " + da + ", " + ye + ", " + ti + " UTC to " + new_ti + " UTC"

    console.log("These are the products selected: " + selected);

    var winPrint = window.open('MA', '', 'left=0,top=0,width=450,height=800,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<title>CAB MA Template</title><br><strong> CAB MA Template</strong><br><br>' + maDate

    );

}

function addHours(change_date, addMinutes){

    var newDate = new Date(change_date);
    newDate.setMinutes(newDate.getMinutes() + addMinutes);
    return newDate;

}