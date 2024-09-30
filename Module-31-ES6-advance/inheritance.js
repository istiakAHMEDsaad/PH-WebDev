class Vehicle {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
  }
  description() {
    console.log(
      `Name: ${this.name}\nModel: ${this.model}\nPrice: ${this.price}`
    );
    console.log('Good mordan looking asthetic car');
  }
}

class Bus extends Vehicle {
  constructor(name, model, price, seat, size) {
    super(name, model, price);
    this.seat = seat;
    this.size = size;
  }
  route() {
    console.log(
      `Name: ${this.name}\nModel: ${this.model}\nPrice: ${this.price}\nTota seat: ${this.seat}\nSize: ${this.size}`
    );
    console.log('Be a safe journey');
  }
}

class Motorcycle extends Vehicle {
  constructor(name, model, price, threeWheel, twoWheel) {
    super(name, model, price);
    this.threeWheel = threeWheel;
    this.twoWheel = twoWheel;
  }

  helmet() {
    console.log(
      `Name: ${this.name}\nModel: ${this.model}\nPrice: ${this.price}\nThree wheel: ${this.threeWheel}\nTwo wheel: ${this.twoWheel}`
    );
    console.log("Dont't forget about helmet");
  }
}

console.log('==========For 1st vehicle==========');
const firstVehicle = new Vehicle('Toyota', 'max-x', 2300000);
firstVehicle.description();
console.log('===================================\n');

console.log('==========For 2nd vehicle==========');
const secondVehicle = new Bus(
  'Lavenda',
  'brtc',
  5000000,
  60,
  'double floor'
);
secondVehicle.route();
console.log('===================================\n');

console.log('==========For 3rd vehicle==========');
const thirdVehicle = new Motorcycle('Honda', 'r15', 350000, false, true);
thirdVehicle.helmet();
console.log('===================================\n');
