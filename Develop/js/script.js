var todayDate = document.getElementById('currentDay');
var dateNow = moment().format('MMMM Do YYYY');
var timeSlot = document.getElementById('time-slot');
var now = moment();
var hours = moment().hours()

// Display today's date in header
todayDate.innerText = dateNow;


// set the user input to local storage
$(".saveBtn").on("click", function(){
    var userPlan = $(this).siblings("textarea").val()
    var time = $(this).siblings("textarea").attr("id")
    localStorage.setItem(time, userPlan)
})

// get local storage; change colors based on time of day
for (let i = 9; i < 18; i++) {
    var userPlan = localStorage.getItem(i)
    var time = "#"+i
    $(time).val(userPlan)
    if (i < hours) {
        $(time).addClass("past")
    } else if (i === hours) {
        $(time).addClass("present")
    } else {
        $(time).addClass("future")
    }
}
  




