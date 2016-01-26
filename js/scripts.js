function Ticket(movieName, movieTime, age) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.age = age;
}


// Ticket.prototype.discount = function() {
//   if(this.age === "senior" || this.age === "youth"){
//     return ticketPrice = 8;
//   }
// }
//
// Ticket.prototype.matinee = function() {
//   if(this.movieTime === "three") {
//     return ticketPrice = 9;
//   }
// }

Ticket.prototype.fullTicket = function() {
  return "You chose to see " + this.movieName + ", at " + this.movieTime + ", " + this.age + " admission";
}

Ticket.prototype.displayPrice = function() {
  var ticketPrice = 10;
  if (this.age === "senior" || this.age === "youth" && this.movieTime=== "3:00 PM") {
    ticketPrice -= 3;
  } else if (this.age=== "senior" || this.age === "youth") {
    ticketPrice -= 2;
  } else if (this.movieTime === "3:00 PM") {
    ticketPrice -= 1;
  }
  return "Your order total is " + ticketPrice + " dollars";
}


$(document).ready(function (){
  $("form#new-ticket").submit(function(event) {
    // debugger;
    event.preventDefault();

    var inputtedMovie = $("select#movieTitle").val();
    var inputtedTime = $("select#movieTime").val();
    var inputtedAge = $("select#age").val();
    var movieTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    // $("select#movieTitle").val("");
    // $("select#movieTime").val("");
    // $("select#age").val("");


    $("ul#ticketList").append("<li><span class='ticket'>" + movieTicket.fullTicket() + "</span></li>");

    $("ul#ticketPrice").append("<li><span class='price'>" + movieTicket.displayPrice() + "</span></li>");

    $(".ticketDisplay").show();


  });
});
