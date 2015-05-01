function Car(make, model, year, color){

  //car is an object. Define its characteristics using this. yourvalue.  When a car is created is will have these values.

  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

//Above are Properties a Car might have when it comes out of the factory.  These not going to change.
//e.g Serial number,  production batch, radio or cd?

  this.state =  'off';
  //boolean
  this.previousOwners = [];
  //array
  this.currentOwner = 'Manufacturer';
  //string?
  this.passengers = [];
  //array again?
  
  //Above are Behaviors -  e.g. unlock drive start brake might use after car leaves.  They are defined
  // using this and then = a default value.


 
}

//Protoypes being used to change values of behaviors.   Once a Car has been created.


Car.prototype.sale = function(newOwner){

// Protoype names like .sale work like executable commands or 'verbs' because they will do something.
// here .sale is a function that takes a value called newOwner.

//We are not defining any new behaviors? just making chages to the data stored about the car.
// When the car is sold we can invoke/call .sale and use push as its an array.
this.previousOwners.push(this.currentOwner);

//takes the value of charlie.  and passes it back to behavior.  

//In rl maybe would type or click 
//a button e.g. Sale, which would trigger a prompt for a new value .e.g. \charlie. t
// enter value into prompt and the operation runs and updates the car info.

this.currentOwner = 'Charlie';
};

Car.prototype.paint = function(newColor){
this.color = 'Blue';
};

//same here



Car.prototype.start = function(start){
this.state = 'on';
};

Car.prototype.off = function(off){
this.state = 'off';
};

//bolean type value but defined as a string 


Car.prototype.pickUp = function(passengers){
if (this.state === 'on') {
  this.passengers = ['john'];

}
};

//this is showing we can use conditionals in prototypes

Car.prototype.dropOff = function(state){
  this.passengers ='';
  if  (this.state === 'off'){
    this.passengers = ['john']

   }  ; }


module.exports=Car;