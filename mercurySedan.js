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
        if(this.passenger + number < this.maximumPassengers){
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
let mercury = new Car('Mercury', 'A28 Sedan', '1965','Blue', 50000);
//let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(mercury);

mercury.start();
mercury.loadPassenger(5);
mercury.scheduleServiceNow(mercury.mileage);
mercury.setNumberofWheels(4);
console.log(mercury);