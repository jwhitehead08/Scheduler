var todayDate = document.getElementById('currentDay');
var dateNow = moment().format('MMMM Do YYYY');
var timeSlot = document.getElementById('time-slot');
descriptEl = document.getElementById('description');

todayDate.innerText = dateNow;
var now = moment();
var timeB = parseInt(timeSlot.innerHTML);
console.log(timeB); 


var hours = moment().hours()


console.log(hours);




$(".saveBtn").on("click", function(){
    var userPlan = $(this).siblings("textarea").val()
    var time = $(this).siblings("textarea").attr("id")
    console.log(userPlan, time)
    localStorage.setItem(time, userPlan)
})

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
  

// List:
// Input for description
// local storage
// save button: icon, button




