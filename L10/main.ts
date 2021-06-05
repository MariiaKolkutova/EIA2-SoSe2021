namespace L10 {

    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka, Cristina Däschner und Timur Yildirim

    export let counter: number = 0;
    export let pDOM: HTMLElement;

    export interface StocksLeft {
        name: string;
        amount: number;
    }

    //damit man die komplette Länge mit der For schleife durhgehen kann und man die Position vom Food dazugehörige zum Tier weiss
    export let amountStock: StocksLeft[] = [{
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

    export function handleLoad(): void {
        //Buttons
        document.querySelector("#dayUpdate")?.addEventListener("click", farmDay);
        document.querySelector("#stockUpdate")?.addEventListener("click", stockUpdate);
        farmDay();
    }

    export function farmDay(): void {
        let cow: Cow = new Cow ("Sarah", "Cow", "Mooo");
        cow.eat(50, 0);
        cow.sing(50);
        cow.milkingCow();
        console.log(cow);

        //settimeout nicht überall gleich, geht immer weiter wartet nicht bis eins zu ende ist, immer 5000++

        let cat: Cat = new Cat ("Barsik", "Cat", "Nya");
        console.log(cat);
        setTimeout(function (): void {
            cat.eat(2, 1);
            cat.sing(2);
            cat.doingNothing();
        },         5000);

        let pig: Pig  = new Pig ("Schweini", "Pig", "Oink");
        console.log(pig);
        setTimeout(function (): void {
            pig.eat(40, 2);
            pig.sing(40);
            pig.lyingAround();
        },         10000);

        let horse: Horse = new Horse ("Spirit", "Horse", "Wieher");
        console.log(horse);
        setTimeout(function (): void {
            horse.eat(40, 3);
            horse.sing(40);
            horse.doingRaces();
        },         15000);

        let sheep: Sheep = new Sheep("Fleck", "Sheep", "Määh");
        console.log(sheep);
        setTimeout(function (): void {
            sheep.eat(20, 4);
            sheep.sing(20);
            sheep.producingUsefulStuff();
        },         20000);

        //Counter
        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#dayCounter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;

    }
    //kann auch weg,  
    export function stockUpdate(): void {
        let defaultStock: number[] = [500, 20, 400, 400, 200];
        for (let index: number = 0; index < defaultStock.length; index++) {
            amountStock[index].amount = defaultStock[index];
            pDOM = <HTMLElement>document.querySelector("#animal" + index);
            pDOM.innerHTML = "You have " + amountStock[index].amount + " kg " + amountStock[index].name + " left";
        }
    }
}