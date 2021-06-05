namespace L10 {
    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka, Cristina Däschner

    //Klasse für Tiere -> die allgemeine Klasse 

    export class Animal {
        public name: string;
        public breed: string;
        public sound: string;

        public constructor(_name: string, _breed: string, _sound: string) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        //Methoden
        public sing(_foodStock: number): void {
            let animalNameDOM: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let songDOM: HTMLElement = <HTMLElement>document.querySelector("#songText");

            animalNameDOM.innerHTML = this.breed + "  " + this.name; /*dejenige Name und Tierart*/
            songDOM.innerHTML = "Old MacDonald had a Farm " + (this.sound + " ").repeat(5) + "<br>" + "And on his Farm he had some " + this.breed + "s," + (this.sound + " ").repeat(5) + "<br>";
            let munchingDOMElement: HTMLElement = <HTMLElement>document.querySelector("#munchingAnimal");
            munchingDOMElement.innerHTML = this.name + " eats " + _foodStock  /*wie viel das tier ist*/ + " kg. <br>";
        }
        /*was abgezogen wird*/
        public eat(_foodStock: number, _foodPos: number): void {
            amountStock[_foodPos].amount -= _foodStock;
            pDOM = <HTMLElement>document.querySelector("#animal" + _foodPos);
            pDOM.innerHTML = "You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left";
            console.log(this.name + " eats " + _foodStock + " kg. You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left");
            console.log(this.breed + " eats " + _foodStock + " kg. You have " + amountStock[_foodPos].amount + " kg " + amountStock[_foodPos].name + " left");
        }
    }

    //Subclassen
    export class Cow extends Animal {

        milkMaking: string = "milk maker";
        
        milkingCow(): void {
            console.log ("I'm " + this.milkMaking);
        }
    }

    export class Cat extends Animal {
        
        lookingCute: string = "looking cute, getting pet and lying around";
        
        doingNothing(): void {
            console.log ("I'm " + this.lookingCute);
        }
    }

    export class Pig extends Animal {
        lyingInDirt: string = "lying in dirt";
        
        lyingAround(): void {
            console.log ("I'm " + this.lyingInDirt);
        }
    }

    export class Horse extends Animal {
        runningAround: string = "running races";
        
        doingRaces(): void {
            console.log ("I'm " + this.runningAround);
        }
    }

    export class Sheep extends Animal {
        producingFleece: string = "producing fleeces";
        
        producingUsefulStuff(): void {
            console.log ("I'm " + this.producingFleece);
        }
    }

}