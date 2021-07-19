"use strict";
var Endabgabe4;
(function (Endabgabe4) {
    let valuesGlobal = [];
    let playerIndex = 0;
    let subIndex;
    let chosenTeam;
    let subA = ["22", "23", "24"];
    let subB = ["25", "26", "27"];
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        valuesGlobal = [];
        for (let entry of formData) {
            console.log(entry[1]);
            valuesGlobal.push(String(entry[1]));
        }
        for (let index = 0; index < 28; index++) {
            let chosenPlayer = Endabgabe4.players[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 22) {
                if (index < 11) {
                    Endabgabe4.players[index].setJersey(valuesGlobal[4]);
                    Endabgabe4.players[index].draw();
                }
                else {
                    Endabgabe4.players[index].setJersey(valuesGlobal[5]);
                    Endabgabe4.players[index].draw();
                }
            }
            else {
                if (index < 25) {
                    Endabgabe4.players[index].setJersey(valuesGlobal[4]);
                    Endabgabe4.players[index].draw();
                }
                else {
                    Endabgabe4.players[index].setJersey(valuesGlobal[5]);
                    Endabgabe4.players[index].draw();
                }
            }
        }
    }
    Endabgabe4.handleChange = handleChange;
    function exchangePlayer() {
        let chosenPlayer = Endabgabe4.players[playerIndex];
        let chosenSub = Endabgabe4.players[subIndex];
        if (playerIndex != subIndex) {
            if (chosenTeam == "A") {
                subA[Endabgabe4.subPlayerDOMElement.selectedIndex] = String(playerIndex);
                console.log(subA);
            }
            else {
                subB[Endabgabe4.subPlayerDOMElement.selectedIndex] = String(playerIndex);
                console.log(subB);
            }
            let originPlayer = chosenPlayer.playerOrigin.copy();
            let originSub = chosenSub.playerOrigin.copy();
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
    Endabgabe4.exchangePlayer = exchangePlayer;
    function updateSelect() {
        if (chosenTeam == "A") {
            Endabgabe4.subPlayerDOMElement.innerHTML = "<option value=" + subA[0] + ">Team A: Sub.1</option><option value=" + subA[1] + ">Team A: Sub.2</option><option value=" + subA[2] + ">Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            Endabgabe4.subPlayerDOMElement.innerHTML = "<option value=" + subB[0] + ">Team B: Sub.1</option><option value=" + subB[1] + ">Team B: Sub.2</option><option value=" + subB[2] + ">Team B: Sub.3</option>";
        }
        subChange();
        // console.log(playerIndex);
        // formIntoHTML(playerIndex);
    }
    function posessionUpdate(_index) {
        let chosenPlayer = Endabgabe4.players[_index];
        Endabgabe4.posession.innerHTML = "Posession Player:" + chosenPlayer.jerseyNumberPlayer + " Team:" + chosenPlayer.playerTeam;
        // updateSelect();
    }
    Endabgabe4.posessionUpdate = posessionUpdate;
    function switchForm(_event) {
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
    Endabgabe4.switchForm = switchForm;
    function formIntoHTML(_index) {
        let chosenPlayer = Endabgabe4.players[_index];
        Endabgabe4.speedPlayer.innerHTML = (chosenPlayer.playerSpeed).toFixed(2);
        Endabgabe4.precPlayer.innerHTML = (chosenPlayer.playerPrecision).toFixed(2);
        Endabgabe4.numberPlayer.innerHTML = String(chosenPlayer.jerseyNumberPlayer);
        Endabgabe4.teamPlayer.innerHTML = String(chosenPlayer.playerTeam);
        chosenTeam = chosenPlayer.playerTeam;
        updateSelect();
    }
    Endabgabe4.formIntoHTML = formIntoHTML;
    function subChange() {
        subIndex = Number(Endabgabe4.subPlayerDOMElement.value);
        let chosenSub = Endabgabe4.players[subIndex];
        Endabgabe4.speedSub.innerHTML = (chosenSub.playerSpeed).toFixed(2);
        Endabgabe4.precSub.innerHTML = (chosenSub.playerPrecision).toFixed(2);
        Endabgabe4.numberSub.innerHTML = String(chosenSub.jerseyNumberPlayer);
        Endabgabe4.teamSub.innerHTML = String(chosenSub.playerTeam);
    }
    Endabgabe4.subChange = subChange;
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=form.js.map