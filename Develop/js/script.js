var todayDate = document.getElementById('currentDay');
var dateNow = moment().format('MMMM Do YYYY');
var timeSlot = document.getElementById('time-slot');
descriptEl = document.getElementById('description');

todayDate.innerText = dateNow;
var now = moment();
var timeB = parseInt(timeSlot.innerHTML);
console.log(timeB); 


const dateNew = new Date();
var hours = dateNew.getHours();
var newHours = parseInt(hours);

console.log(newHours);




$(".saveBtn").on("click", function(){
    var userPlan = $(this).siblings("textarea").val()
    var time = $(this).siblings("textarea").attr("id")
    console.log(userPlan, time)
})
  

// List:
// Input for description
// local storage
// save button: icon, button




