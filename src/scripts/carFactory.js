import ActivityLogger from "./activityLogger"

/*
    Author: Steve
    Name: carFactory.js
    Purpose: Produces a new car from a factory
*/
const CarFactory = (make, model) => {
    const newCar = {
        "make": make,
        "model": model,
        "drive": function () {
            console.log(`The ${this.make} ${this.model} goes VRROOOOOOOOOOMMMM!!!!!!!`)
        }
    }
    ActivityLogger.add(`Created a ${newCar.make} ${newCar.model}`)

    return newCar
}

export default CarFactory