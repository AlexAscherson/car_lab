function Car(make, model, year, color, state, previousOwners){
  this.make = make;
  this.model = make;
  this.year = year;
  this.color = color;
  this.state = state;
  this.previousOwners = previousOwners;
}


Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;