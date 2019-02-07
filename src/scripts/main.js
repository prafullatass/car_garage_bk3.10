/*
    Author: Steve
    Name: main.js
    Purpose: Entry point of our application
*/
import CarFactory from "./carFactory"
import GarageManager from "./garage"
import ActivityLogger from "./activityLogger"
import printToDom from "./printToDOM"

// Create two cars using the function you imported
const mustang = CarFactory("Ford", "Mustang")
const accord = CarFactory("Honda", "Accord")

// Drive the cars for a while
console.log(mustang.drive("the grocery store"))
console.log(accord.drive("Indianapolis"))

// Park the cars in the garage
GarageManager.store(mustang)
GarageManager.store(accord)

const isAccordThere = GarageManager.retrieve({make: "Chevy", model: "Tahoe"})
console.log(isAccordThere)


console.table(GarageManager.inventory())


console.log(ActivityLogger.view())

printToDom(ActivityLogger.viewAsHTML(), ".logMessages")
printToDom(GarageManager.inventoryAsHTML(), ".garageInventory")
