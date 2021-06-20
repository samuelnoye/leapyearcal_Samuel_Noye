 isLeap = () => {

     let yr = document.getElementById("year").value;
     if (yr == "") {
         clear();
         window.alert(yr + " Year not entered");
     } else if (yr <= 0) {
         clear();
         window.alert(yr + " Year invalid");

     } else {
         if (yr % 4 === 0) {
             if (yr % 100 === 0) {
                 if (yr % 400 == 0) {

                     document.getElementById("result").innerHTML = yr + " is a Leap year.";

                 } else {

                     document.getElementById("result").innerHTML = yr + " is Not a leap year.";
                 }
             } else {
                 document.getElementById("result").innerHTML = yr + " is a Leap year.";
             }
         } else {
             document.getElementById("result").innerHTML = yr + " is Not a leap year.";
         }

     }

 }



 clear = () => {

     document.getElementById("result").innerHTML = "";
 }

 document.getElementById("submit").addEventListener("click", isLeap);