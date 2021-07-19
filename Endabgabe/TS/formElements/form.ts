namespace Endabgabe {
  
   
    let valuesGlobal: string[] = [];
    let playerIndex: number = 0;
    let subIndex: number;
    let chosenTeam: string;
    let subA: string[] = ["22", "23", "24"];
    let subB: string[] = ["25", "26", "27"];

    export function handleChange(): void {
        let formData: FormData = new FormData(document.forms[0]);
        valuesGlobal = [];
        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }
        for (let index: number = 0; index < 28; index++) {
            let chosenPlayer: Player = <Player>players[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 22) {
                if (index < 11) {
                    players[index].setJersey(valuesGlobal[4]);
                    players[index].draw();
                }
                else {
                    players[index].setJersey(valuesGlobal[5]);
                    players[index].draw();
                }
            } else {
                if (index < 25) {
                    players[index].setJersey(valuesGlobal[4]);
                    players[index].draw();
                } else {
                    players[index].setJersey(valuesGlobal[5]);
                    players[index].draw();
                }
            }
        }
    }

    export function exchangePlayer(): void {
        let chosenPlayer: Player = <Player>players[playerIndex];
        let chosenSub: Player = <Player>players[subIndex];

        if (playerIndex != subIndex) {
            if (chosenTeam == "A") {
                subA[subPlayerDOMElement.selectedIndex] = String(playerIndex);
                console.log(subA);
            }
            else {
                subB[subPlayerDOMElement.selectedIndex] = String(playerIndex);
                console.log(subB);
            }
            let originPlayer: Vector = chosenPlayer.playerOrigin.copy();
            let originSub: Vector = chosenSub.playerOrigin.copy();
            chosenPlayer.setOrigin(originSub);
            chosenPlayer.changePlayer(chosenSub.playerPosition.copy());
            chosenSub.setOnField(true);
            chosenSub.setOrigin(originPlayer);
            chosenSub.changePlayer(chosenPlayer.playerPosition.copy());
            updateSelect();
            window.alert("Player: " + chosenPlayer.jerseyNumberPlayer + " switched with Player: " + chosenSub.jerseyNumberPlayer);
        }
        else {
            window.alert("You can't exchange the same Sub. Player");
        }
    }

    function updateSelect(): void {
        if (chosenTeam == "A") {
            subPlayerDOMElement.innerHTML = "<option value=" + subA[0] + ">Team A: Sub.1</option><option value=" + subA[1] + ">Team A: Sub.2</option><option value=" + subA[2] + ">Team A: Sub.3</option>";
        }

        if (chosenTeam == "B") {
            subPlayerDOMElement.innerHTML = "<option value=" + subB[0] + ">Team B: Sub.1</option><option value=" + subB[1] + ">Team B: Sub.2</option><option value=" + subB[2] + ">Team B: Sub.3</option>";
        }
        subChange();
        // console.log(playerIndex);
        // formIntoHTML(playerIndex);
    }

    export function posessionUpdate(_index: number): void {
        let chosenPlayer: Player = <Player>players[_index];
        posession.innerHTML = "Posession Player:" + chosenPlayer.jerseyNumberPlayer + " Team:" + chosenPlayer.playerTeam;
        // updateSelect();
    }

    export function switchForm(_event: KeyboardEvent): void {
        switch (_event.code) {
            case "ArrowLeft":
                playerIndex--;
                if (playerIndex < 0) {
                    playerIndex = 27;
                }
                formIntoHTML(playerIndex);
                break;


            case "ArrowRight":
                playerIndex++;
                if (playerIndex > 27) {
                    playerIndex = 0;
                }
                formIntoHTML(playerIndex);
        }
    }

    export function formIntoHTML(_index: number): void {
        let chosenPlayer: Player = <Player>players[_index];
        speedPlayer.innerHTML = (chosenPlayer.playerSpeed).toFixed(2);
        precPlayer.innerHTML = (chosenPlayer.playerPrecision).toFixed(2);
        numberPlayer.innerHTML = String(chosenPlayer.jerseyNumberPlayer);
        teamPlayer.innerHTML = String(chosenPlayer.playerTeam);
        chosenTeam = chosenPlayer.playerTeam;
        updateSelect();
    }

    export function subChange(): void {
        subIndex = Number(subPlayerDOMElement.value);
        let chosenSub: Player = <Player>players[subIndex];
        speedSub.innerHTML = (chosenSub.playerSpeed).toFixed(2);
        precSub.innerHTML = (chosenSub.playerPrecision).toFixed(2);
        numberSub.innerHTML = String(chosenSub.jerseyNumberPlayer);
        teamSub.innerHTML = String(chosenSub.playerTeam);
    }
}