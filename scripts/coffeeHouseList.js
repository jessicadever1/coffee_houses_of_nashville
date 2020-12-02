import { useCoffeeHouses } from './coffeeHouseDataProvider.js'
import { coffeeHouseHTML } from './coffeeHouse.js'

export const coffeeHouseList = () => {
    const contentElement = document.querySelector(".list")
    const theHouses = useCoffeeHouses();

    for (const house of theHouses) {
        const houseObject = coffeeHouseHTML(house)
        contentElement.innerHTML += houseObject
    }
}