"use strict";
var L10;
(function (L10) {
    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka, Cristina Däschner und Timur Yildirim
    L10.counter = 0;
    //damit man die komplette Länge mit der For schleife durhgehen kann und man die Position vom Food dazugehörige zum Tier weiss
    L10.amountStock = [{
            name: "Hay",
            amount: 500
        },
        {
            name: "fish",
            amount: 20
        },
        {
            name: "Corn",
            amount: 400
        },
        {
            name: "Oat",
            amount: 400
        },
        {
            name: "Grass",
            amount: 200
        }
    ];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        //Buttons
        document.querySelector("#dayUpdate")?.addEventListener("click", farmDay);
        document.querySelector("#stockUpdate")?.addEventListener("click", stockUpdate);
        farmDay();
    }
    L10.handleLoad = handleLoad;
    function farmDay() {
        let cow = new L10.Cow("Sarah", "Cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);
        cow.milkingCow();
        console.log(cow);
        //settimeout nicht überall gleich, geht immer weiter wartet nicht bis eins zu ende ist, immer 5000++
        let cat = new L10.Cat("Barsik", "Cat", "Nya");
        console.log(cat);
        setTimeout(function () {
            cat.eat(2, 1);
            cat.sing(2);
            cat.doingNothing();
        }, 5000);
        let pig = new L10.Pig("Schweini", "Pig", "Oink");
        console.log(pig);
        setTimeout(function () {
            pig.eat(40, 2);
            pig.sing(40);
            pig.lyingAround();
        }, 10000);
        let horse = new L10.Horse("Spirit", "Horse", "Wieher");
        console.log(horse);
        setTimeout(function () {
            horse.eat(40, 3);
            horse.sing(40);
            horse.doingRaces();
        }, 15000);
        let sheep = new L10.Sheep("Fleck", "Sheep", "Määh");
        console.log(sheep);
        setTimeout(function () {
            sheep.eat(20, 4);
            sheep.sing(20);
            sheep.producingUsefulStuff();
        }, 20000);
        //Counter
        let dayCounter = document.querySelector("#dayCounter");
        L10.counter++;
        dayCounter.innerHTML = "Day: " + L10.counter;
    }
    L10.farmDay = farmDay;
    //kann auch weg,  
    function stockUpdate() {
        let defaultStock = [500, 20, 400, 400, 200];
        for (let index = 0; index < defaultStock.length; index++) {
            L10.amountStock[index].amount = defaultStock[index];
            L10.pDOM = document.querySelector("#animal" + index);
            L10.pDOM.innerHTML = "You have " + L10.amountStock[index].amount + " kg " + L10.amountStock[index].name + " left";
        }
    }
    L10.stockUpdate = stockUpdate;
})(L10 || (L10 = {}));
//# sourceMappingURL=main.js.map