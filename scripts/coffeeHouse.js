export const coffeeHouseHTML = (coffeeHouse) => {
    return `
        <article class="shop">
            <img class="shop__img" src="./images/${coffeeHouse.img}">
            <div><a  href="${coffeeHouse.website}"><h2>${coffeeHouse.name}</h2></a></div>
            <div class="shop__address">${coffeeHouse.address}</div>
            <div class="shop__phone-number">${coffeeHouse.phone_number}</div>
            <div class="shop__menu"><a href="${coffeeHouse.menu_link}">Menu</a></div>
        </article>
    `
}