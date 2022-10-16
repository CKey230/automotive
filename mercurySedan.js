//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");

class Car extends VehicleModule.Vehicle{
    constructor(make , model, year, color, mileage) {
        super(make , model, year, color, mileage);

        this.maximumPassangers = 5;
        this.passenger = 0;
        this.maxiumSpeed = 160;
        this.scheduleService = false;
        this.fuel = 10;
    }
    loadPassenger(number){
        if(this.passenger + number < this.maximumPassangers){
            this.availableRoom = true;
            this.passenger += number;
            return this.passenger;
        } else {
            console.log('There is no more room in this car');
            this.availableRoom = false;
        }
    }

    scheduleServiceNow (mileage) {
        if (mileage > 30000){
            this.timeforMaintenance = true;
            return this.timeForMaintenance;
        }
        else {
            return this.timeForMaintenance = false;
        }
    }
}

//this shows how to call from this module...
let mercury = new Car('Mercury', 'A28 Sedan', '1965','Blue', 0);
//let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(mercury);

mercury.setNumberOfWheels(4);
//mercury.loadPassenger(2);
//console.log('There are ${this.passenger} passengers.');
//mercury.loadPassenger(3);
//console.log('There are ${this.passenger} passengers.','line 34');
mercury.start();
mercury.scheduleServiceNow(mercury.mileage);
console.log(mercury.timeForMaintenance);