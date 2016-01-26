describe('Ticket', function(){
  it("creates a ticket given the user inputted information", function() {
    var newTicket = new Ticket("Star Wars", "5:00 PM", "general");
    expect(newTicket.movieName).to.equal("Star Wars");
    expect(newTicket.movieTime).to.equal("5:00 PM");
    expect(newTicket.age).to.equal("general");
  });

  it("discounts the ticket price 20% for users 65 years old or older", function() {
    var newTicket = new Ticket("Star Wars", "5:00 PM", "senior");
    expect(newTicket.discount()).to.equal(8);
  });

  it("discounts the ticket price 20% for users 10 years old or younger", function() {
    var newTicket = new Ticket("Star Wars", "5:00 PM", "youth");
    expect(newTicket.discount()).to.equal(8);
  });

  it("discounts the ticket price 10% for users who choose to attend a film during matinee times", function(){
    var newTicket = new Ticket("Star Wars", "three", "general");
    expect(newTicket.matinee()).to.equal(9);
  });

  it("adds a fullTicket method to all tickets", function() {
    var newTicket = new Ticket("Star Wars - 'The Force Awakens'", "3:00 PM", "general");
    expect(newTicket.fullTicket()).to.equal("You chose to see Star Wars - 'The Force Awakens', at 3:00 PM, general admission")
  });
});
