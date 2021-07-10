// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
var currentDay = document.getElementById('currentDay');

const m = moment(); //for easier use of moment


currentDay.textContent = m.format("dddd, MMMM Do YYYY");

//add class based on time
function currentTime() {    
    var time = moment().hour();    
    $(".time-block").each(function () {
        var eventTime = parseInt($(this).attr("id"));        
        if (eventTime < time) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");            
        }
        else if (eventTime === time) {
            $(this).addClass("present");
            $(this).removeClass("past");            
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past"); 
            $(this).removeClass("present");                       
        }
    })
}

//jquery to let all save buttons function based on class type
//could probably make this shorter with loops
$(document).ready(function() {
    $('button').click(function() {     
        //reads value of textarea and sets it to variable   
        var activity1 = jQuery("#9 > textarea").val();
        var activity2 = jQuery("#10 > textarea").val();
        var activity3 = jQuery("#11 > textarea").val();
        var activity4 = jQuery("#12 > textarea").val();
        var activity5 = jQuery("#13 > textarea").val();
        var activity6 = jQuery("#14 > textarea").val();
        var activity7 = jQuery("#15 > textarea").val();
        var activity8 = jQuery("#16 > textarea").val();
        var activity9 = jQuery("#17 > textarea").val();
        //stores each activity with a key based on its position in the day
        localStorage.setItem(1, activity1);
        localStorage.setItem(2, activity2);
        localStorage.setItem(3, activity3);
        localStorage.setItem(4, activity4);
        localStorage.setItem(5, activity5);
        localStorage.setItem(6, activity6);
        localStorage.setItem(7, activity7);
        localStorage.setItem(8, activity8);
        localStorage.setItem(9, activity9);
    });
    //sets areas on reload
    $("#9 .description").val(localStorage.getItem("1"));
    $("#10 .description").val(localStorage.getItem("2"));
    $("#11 .description").val(localStorage.getItem("3"));
    $("#12 .description").val(localStorage.getItem("4"));
    $("#13 .description").val(localStorage.getItem("5"));
    $("#14 .description").val(localStorage.getItem("6"));
    $("#15 .description").val(localStorage.getItem("7"));
    $("#16 .description").val(localStorage.getItem("8"));
    $("#17 .description").val(localStorage.getItem("9"));
});

currentTime();