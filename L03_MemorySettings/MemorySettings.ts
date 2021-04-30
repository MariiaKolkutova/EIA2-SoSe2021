namespace MemoryGame {

    //var
    let foundPairs: number;
    let amountOfPairs: number = 0;
    let allCards: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let cardsArray: string[] = [];
    let cardsSpace: HTMLElement = <HTMLElement>document.querySelector("#memoryField");
    let savingCards: HTMLElement[] = [];
    let startButton: HTMLElement;
    let form: HTMLElement;
    let properties: string[] = [];
    
    //Timer
    let seconds: number = 0;
    let minutes: number = 0;
    let hours: number = 0;
    let timer: HTMLElement = <HTMLElement>document.querySelector("#timer");

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        startButton = <HTMLElement>document.querySelector("#startButton");
        form = <HTMLElement>document.querySelector("#formElement");
        form.addEventListener("change", handleChange);
        startButton.addEventListener("click", createCardboard);
        cardsSpace = <HTMLDivElement>document.querySelector("#memoryField");
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let data: FormData = new FormData(document.forms[0]);
        properties = [];

        for (let entry of data) {
            properties.push(String(entry[1]));
            console.log(properties);
        }
    }

    function createCardboard(): void {
        form.classList.add("hidden2");
        startButton.classList.add("hidden2");
        foundPairs = Number(properties[0]);
        console.log("Start funktioniert");
        for (let i: number = 0; i < 2; i++) {
            for (let m: number = 0; m < foundPairs; m++) {
                cardsArray.push(allCards[m]);
            }
        }

        cardsArray.sort(() => 0.5 - Math.random());
        cardsSpace.innerHTML = "";

        document.body.style.background = properties[2];
        document.body.style.fontFamily = properties[5];

        for (let index: number = 0; index < cardsArray.length; index++) {
            console.log(cardsArray.length);
            let cards: HTMLElement = document.createElement("div");
            cards.style.width = properties[1] + "px";
            cards.style.height = properties[1] + "px";
            cards.style.background = properties[4];
            cards.style.color = properties[3];
            cards.innerHTML = "<span>" + cardsArray[index] + "</span>";
            cardsSpace.appendChild(cards);
            cards.addEventListener("click", flipcards);
            let span: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            span[index].classList.add("hidden");
        }
        startTimer();
    }

    function flipcards(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        savingCards.push(target);
        savingCards[0].style.background = "white";
        savingCards[0].querySelector("span")?.classList.remove("hidden");

        if (savingCards.length == 2) {
            savingCards[1].style.background = "white";
            savingCards[1].querySelector("span")?.classList.remove("hidden");
            setTimeout(compareCards, 2000);
        }
    }

    function compareCards(): void {
        let spanValue0: string = <string>savingCards[0].querySelector("span")?.innerHTML;
        let spanValue1: string = <string>savingCards[1].querySelector("span")?.innerHTML;
        if (spanValue0 == spanValue1) {
            savingCards[0].classList.add("hidden");
            savingCards[1].classList.add("hidden");
            savingCards = [];
            amountOfPairs++;
            checkTheWinner();
        }
        else
            if (spanValue0 != spanValue1) {
                savingCards[0].style.background = properties[4];
                savingCards[1].style.background = properties[4];
                savingCards[0].querySelector("span")?.classList.add("hidden");
                savingCards[1].querySelector("span")?.classList.add("hidden");
                savingCards = [];
            }
    }
    function startTimer(): void {
        setInterval(function (): void {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            timer.innerHTML = hours + ":" + minutes + ":" + seconds;
        },          1000);
    }
    function checkTheWinner(): void {
        if (amountOfPairs == foundPairs) {
            window.alert("Glückwunsch" + "Spielzeit beträgt: " + hours + ":" + minutes + ":" + seconds + " Drücke F5");
            //stoptimer
        }
    }
}