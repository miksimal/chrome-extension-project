let priorityToday = ""; // today's priority!

function getEncouragement() { // pushes the priority into the encouragement header "inner HTML"
   if (priorityToday) {
      document.getElementById("encouragement").innerHTML  = `${priorityToday}`;
   } else document.getElementById("encouragement").innerHTML  = ``;
}

function changePriority() { // updates priorityToday with input value, saves to local storage, calls getEncouragement

   priorityToday = document.getElementById("priority-input").value;
      
   document.forms["priority-form"].reset(); // clears the form after submission
   
   document.getElementById("priority-form").style.display = 'none'; // hide form after submit

   document.getElementById("reset-form").style.display = 'block'; // show reset button
   
   getEncouragement();

}

document.getElementById("priority-form").addEventListener('submit', function(e) {
    
   e.preventDefault(); // prevents page refresh

    changePriority();

 });


 document.getElementById("reset-form").addEventListener('submit', function(e) { // reset button
    
    e.preventDefault(); // prevents page refresh

    priorityToday = ""; // sets priorityToday to empty string (which is falsy)
    
    document.getElementById("priority-form").style.display = 'block'; // display form

    document.getElementById("reset-form").style.display = 'none'; // hide reset button

    getEncouragement(); // updates the inner HTML, showing the encouragement to do current top priority

 });
