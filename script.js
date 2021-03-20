
class Car {
    color;
    wheels;
    engineVolume;
    constructor(_color, _wheels, _engineVolume) {
        this.color = _color;
        this.wheels = _wheels;
        this.engineVolume = _engineVolume;
    }

    static carInfo(frais) {
        frais = ` color is ${frais.color}  her wheels are ${frais.wheels} and her engine volume is ${frais.engineVolume}`
        return frais
    }
}
let cardetails = new Car('red', 3649, '245/40ZR20',)
console.log(Car.carInfo(cardetails));







class sheve extends Car {
    name;
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static sheveStr(myinfo) {
        let myShevrolet = `the car ${myinfo.name} and the  ${super.carInfo(cardetails)}`
        return myShevrolet
    }
}
let sheveDetails = new sheve('shevrolet camaro')
console.log(sheve.sheveStr(sheveDetails));






class lambo extends Car {
    name;
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static lamboStr(mylambo) {
        let mylamborgini = `the car ${mylambo.name} and the  ${super.carInfo(cardetails)}`
        return mylamborgini
    }
}
let lamboStr = new sheve('lambo aventador')
console.log(lambo.lamboStr(lamboStr));







class Bugatti extends Car {
    name;
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static bugattiStr(mybuga) {
        let mybugatti = `the car ${mybuga.name} and the  ${super.carInfo(cardetails)}`
        return mybugatti
    }
    get returnCapsLock() {
        return this.capLockName()
    }

    set banana(theValue) {
        console.log(theValue);
    }

    capLockName() {
        let upperName = this.name.toUpperCase()
        return upperName
    }
}
let bugattichir = new Bugatti('bugatti chiron')
console.log(Bugatti.bugattiStr(bugattichir));
console.log(bugattichir.returnCapsLock);









class BrandNewCars extends Car {
    name;
    constructor(_name, _color, _wheels, _engineVolume) {
        super(_color, _wheels, _engineVolume);
        this.name = _name
    }
    static findeTheBigge(objectArray) {
        let biggest;

        for (const car of objectArray) {
            if (biggest === undefined) {
                biggest = car;
            } else if (car.engineVolume > biggest.engineVolume) {
                biggest = car;
            }
        }

        return biggest;
    }


}
let redCar = new BrandNewCars('shevrolet camero', 'red', '245/40ZR20', 3200,)
let BlackCar = new BrandNewCars('bugatti', 'black', '245/40ZR20', 4000,)
let greenCar = new BrandNewCars('lambo', 'green', '245/40ZR20', 3649,)
let yelloCar = new BrandNewCars('lambo', 'yello', '245/40ZR20', 6000,)
console.log(BrandNewCars.findeTheBigge([redCar, BlackCar, greenCar, yelloCar]));








let nameInput = document.getElementById('nameInput')
let colorInput = document.getElementById('colorInput')
let priceInput = document.getElementById('priceInput')

function addToTable() {
    let tableForm = {
        carBrand: nameInput.value,
        carColor: colorInput.value,
        carPrice: priceInput.value,

    }

    document.getElementById('mainTable').innerHTML += `
<tr>
<td> ${tableForm.carBrand} </td>
<td> ${tableForm.carColor} </td>
<td> ${tableForm.carPrice} </td>
</tr>
`
}
document.getElementById('tableButton').addEventListener('click',addToTable)
