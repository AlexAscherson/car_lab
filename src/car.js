function Car(make, model, year, color, state, previousOwners, currentOwner){
  this.make = make;
  this.model = make;
  this.year = year;
  this.color = color;
  this.state = state;
  this.previousOwners = previousOwners;
  this.currentOwner = currentOwner;
}


Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;