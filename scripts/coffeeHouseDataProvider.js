const coffeeHouses = [

    {
        img: "jam_logo.png",
        name: "The Jam",
        website: "https://nashvillejamco.com/",
        address: `2806 Columbine Place
        Nashville, TN 37204`,
        phone_number: "(615) 942-6465",
        menu_link:"https://nashvillejamco.com/pages/menu"
    },

    {
        img: "the_well_logo.png",
        name: "The Well",
        website: "https://wellcoffeehouse.com/",
        address: `690 East Old Hickory Blvd
        Brentwood, TN 37027`,
        phone_number: "615-457-2684",
        menu_link:"https://wellcoffeehouse.com/wp-content/uploads/2020/11/well_drinks_and_food_menu_holiday_2020.pdf"
    },

    {
        img: "red_bicycle.png",
        name: "Red Bicycle",
        website: "https://redbicyclecoffee.com/",
        address: `2190 Nolensville Pike
        Suite E
        Nashville, TN 37211`,
        phone_number: "(615) 454-2738",
        menu_link:"https://redbicyclewoodbine.square.site/"
    },

    {
        img: "crema.png",
        name: "Crema",
        website: "https://crema-coffee.com/",
        address: `15 Hermitage Ave.
        Nashville, TN 37210`,
        phone_number: "615 -255 - 8311",
        menu_link:"https://crema-coffee.com/menu"
    },

    {
        img: "Nashville_roast.jpeg",
        name: "Nashville Roast Coffee",
        website: "https://www.nashvilleroast.com/",
        address: `311 Old Stone Bridge Rd, 
        Goodlettsville, TN 37072`,
        phone_number: "(615) 945-4711",
        menu_link:"https://www.nashvilleroast.com/"
    },

    {
        img: "frothy_monkey.jpg",
        name: "Frothy Monkey",
        website: "https://frothymonkey.com/",
        address: `125 5th Ave S, 
        Franklin, TN 37064`,
        phone_number: "(615) 600-4756",
        menu_link:"https://frothymonkey.com/menu/"
    },

    {
        img: "bongo_java.jpeg",
        name: "Bongo Java",
        website: "https://www.bongojava.com/",
        address: `2007 Belmont Blvd, 
        Nashville, TN 37212`,
        phone_number: "(615) 385-5282",
        menu_link:"https://www.bongojava.com/bongo-java/menu/"
    },

    {
        img: "Steadfast_Logo.jpg",
        name: "Steadfast Coffee",
        website: "https://steadfast.coffee/",
        address: `603 Taylor St, 
        Nashville, TN 37208`,
        phone_number: "(615) 891-7424",
        menu_link:"https://steadfast.coffee/collections/all"
    },

    {
        img: "dose.jpg",
        name: "Dose Coffee",
        website: "http://dosenashville.com/location/",
        address: `3431 Murphy Rd, 
        Nashville, TN 37203`,
        phone_number: "(615) 457-1300",
        menu_link:"http://dosenashville.com/menu"
    },

    {
        img: "zoes.jpeg",
        name: "Zoes Coffee",
        website: "http://www.samandzoes.com/",
        address: `525 Heather Pl, 
        Nashville, TN 37204`,
        phone_number: "(615) 385-2676",
        menu_link:"http://www.samandzoes.com/menu-breakfast-and-lunch.html"
    },

    {
        img: "slow_hand.jpg",
        name: "Slow Hand Coffee",
        website: "https://www.facebook.com/SlowHandCoffeeandBakeshop/",
        address: `1012 Gallatin Ave, 
        Nashville, TN 37206`,
        phone_number: "(615) 730-8032",
        menu_link:"https://www.facebook.com/SlowHandCoffeeandBakeshop/"
    },

    {
        img: "the_horn.png",
        name: "The Horn",
        website: "http://orderthehorncoffee.com/",
        address: `619 Murfreesboro Pike, Nashville, TN 37210`,
        phone_number: "(615) 397-1977",
        menu_link:"https://themenustar3.com/webspace/menus.php?code=orderthehorncoffee.com"
    }

]

export const useCoffeeHouses = () => {
    return coffeeHouses.slice()
}