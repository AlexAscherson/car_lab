function Car(make, model, year, color, state){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.state =  'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];

 
}


Car.prototype.sale = function(newOwner){
this.previousOwners.push(this.currentOwner);
this.currentOwner = 'Charlie';
};

Car.prototype.paint = function(newColor){
this.color = 'Blue';
};

Car.prototype.start = function(start){
this.state = 'on';
};


module.exports=Car;