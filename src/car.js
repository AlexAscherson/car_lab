function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
  this.make = make;
  this.model = make;
  this.year = year;
  this.color = color;
  this.state = state;
  this.previousOwners = previousOwners;
  this.currentOwner = currentOwner;
  this.passengers = passengers;
 
}


Car.prototype.sale = function(newOwner){
this.previousOwners.push(this.currentOwner);
this.currentOwner = 'Charlie';
};

Car.prototype.paint = function(newColor){
this.color = 'Blue';
};


module.exports=Car;