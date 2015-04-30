function Car(make, model, year, color, state){
  this.make = make;
  this.model = make;
  this.year = year;
  this.color = color
  this.state = state
}


Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;