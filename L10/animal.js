"use strict";
var L10;
(function (L10) {
    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka, Cristina Däschner
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
            L10.amountStock[_foodPos].amount -= _foodStock;
            L10.pDOM = document.querySelector("#animal" + _foodPos);
            L10.pDOM.innerHTML = "You have " + L10.amountStock[_foodPos].amount + " kg " + L10.amountStock[_foodPos].name + " left";
            console.log(this.name + " eats " + _foodStock + " kg. You have " + L10.amountStock[_foodPos].amount + " kg " + L10.amountStock[_foodPos].name + " left");
            console.log(this.breed + " eats " + _foodStock + " kg. You have " + L10.amountStock[_foodPos].amount + " kg " + L10.amountStock[_foodPos].name + " left");
        }
    }
    L10.Animal = Animal;
    //Subclassen
    class Cow extends Animal {
        constructor() {
            super(...arguments);
            this.milkMaking = "milk maker";
        }
        milkingCow() {
            console.log("I'm " + this.milkMaking);
        }
    }
    L10.Cow = Cow;
    class Cat extends Animal {
        constructor() {
            super(...arguments);
            this.lookingCute = "looking cute, getting pet and lying around";
        }
        doingNothing() {
            console.log("I'm " + this.lookingCute);
        }
    }
    L10.Cat = Cat;
    class Pig extends Animal {
        constructor() {
            super(...arguments);
            this.lyingInDirt = "lying in dirt";
        }
        lyingAround() {
            console.log("I'm " + this.lyingInDirt);
        }
    }
    L10.Pig = Pig;
    class Horse extends Animal {
        constructor() {
            super(...arguments);
            this.runningAround = "running races";
        }
        doingRaces() {
            console.log("I'm " + this.runningAround);
        }
    }
    L10.Horse = Horse;
    class Sheep extends Animal {
        constructor() {
            super(...arguments);
            this.producingFleece = "producing fleeces";
        }
        producingUsefulStuff() {
            console.log("I'm " + this.producingFleece);
        }
    }
    L10.Sheep = Sheep;
})(L10 || (L10 = {}));
//# sourceMappingURL=animal.js.map