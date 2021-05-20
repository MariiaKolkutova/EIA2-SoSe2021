"use strict";
var Farm;
(function (Farm) {
    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka, Cristina Däschner und Timur Yildirim
    let counter = 0;
    let pDOM;
    //damit man die komplette Länge mit der For schleife durhgehen kann und man die Position vom Food dazugehörige zum Tier weiss
    let amountStock = [{
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
    //Klasse für Tiere -> die allgemeine Klasse
    class Animal {
        constructor(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        //Methoden
        sing(_foodStock) {
            let animalNameDOM = document.querySelector("#animalName");
            let songDOM = document.querySelector("#songText");
            animalNameDOM.innerHTML = this.breed + "  " + this.name; /*dejenige Name und Tierart*/
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(5) + "<br>" + "And on his Farm he had some " + this.breed + "s," + (this.sound + " ").repeat(5) + "<br>";
            let munchingDOMElement = document.querySelector("#munchingAnimal");
            munchingDOMElement.innerHTML = this.name + " eats " + _foodStock /*wie viel das tier ist*/ + " kg. <br>";
        }
        /*was abgezogen wird*/
        eat(_foodStock, _foodPos) {
            amountStock[_foodPos].amount -= _foodStock;
            pDOM = document.querySelector("#animal" + _foodPos);
            pDOM.innerHTML = "You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left";
            console.log(this.name + " eats " + _foodStock + " kg. You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left");
            console.log(this.breed + " eats " + _foodStock + " kg. You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left");
        }
    }
    function farmDay() {
        let cow = new Animal("Sarah", "Cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);
        console.log(cow);
        //settimeout nicht überall gleich, geht immer weiter wartet nicht bis eins zu ende ist, immer 5000++
        let cat = new Animal("Barsik", "Cat", "Nya");
        console.log(cat);
        setTimeout(function () {
            cat.eat(2, 1);
            cat.sing(2);
        }, 5000);
        let pig = new Animal("Schweini", "Pig", "Oink");
        console.log(pig);
        setTimeout(function () {
            pig.eat(40, 2);
            pig.sing(40);
        }, 10000);
        let horse = new Animal("Spirit", "Horse", "Wieher");
        console.log(horse);
        setTimeout(function () {
            horse.eat(40, 3);
            horse.sing(40);
        }, 15000);
        let sheep = new Animal("Fleck", "Sheep", "Määh");
        console.log(sheep);
        setTimeout(function () {
            sheep.eat(20, 4);
            sheep.sing(20);
        }, 20000);
        //Counter
        let dayCounter = document.querySelector("#dayCounter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
    }
    //kann auch weg,  
    function stockUpdate() {
        let defaultStock = [500, 20, 400, 400, 200];
        for (let index = 0; index < defaultStock.length; index++) {
            amountStock[index].amount = defaultStock[index];
            pDOM = document.querySelector("#animal" + index);
            pDOM.innerHTML = "You have " + amountStock[index].amount + " kg " + amountStock[index].name + " left";
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=farm.js.map