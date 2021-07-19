"use strict";
var Endabgabe;
(function (Endabgabe) {
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
            let chosenPlayer = Endabgabe.players[index];
            chosenPlayer.setProperties(Number(valuesGlobal[0]), Number(valuesGlobal[1]), Number(valuesGlobal[2]), Number(valuesGlobal[3]));
            if (index < 22) {
                if (index < 11) {
                    Endabgabe.players[index].setJersey(valuesGlobal[4]);
                    Endabgabe.players[index].draw();
                }
                else {
                    Endabgabe.players[index].setJersey(valuesGlobal[5]);
                    Endabgabe.players[index].draw();
                }
            }
            else {
                if (index < 25) {
                    Endabgabe.players[index].setJersey(valuesGlobal[4]);
                    Endabgabe.players[index].draw();
                }
                else {
                    Endabgabe.players[index].setJersey(valuesGlobal[5]);
                    Endabgabe.players[index].draw();
                }
            }
        }
    }
    Endabgabe.handleChange = handleChange;
    function exchangePlayer() {
        let chosenPlayer = Endabgabe.players[playerIndex];
        let chosenSub = Endabgabe.players[subIndex];
        if (playerIndex != subIndex) {
            if (chosenTeam == "A") {
                subA[Endabgabe.subPlayerDOMElement.selectedIndex] = String(playerIndex);
                console.log(subA);
            }
            else {
                subB[Endabgabe.subPlayerDOMElement.selectedIndex] = String(playerIndex);
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
    Endabgabe.exchangePlayer = exchangePlayer;
    function updateSelect() {
        if (chosenTeam == "A") {
            Endabgabe.subPlayerDOMElement.innerHTML = "<option value=" + subA[0] + ">Team A: Sub.1</option><option value=" + subA[1] + ">Team A: Sub.2</option><option value=" + subA[2] + ">Team A: Sub.3</option>";
        }
        if (chosenTeam == "B") {
            Endabgabe.subPlayerDOMElement.innerHTML = "<option value=" + subB[0] + ">Team B: Sub.1</option><option value=" + subB[1] + ">Team B: Sub.2</option><option value=" + subB[2] + ">Team B: Sub.3</option>";
        }
        subChange();
        // console.log(playerIndex);
        // formIntoHTML(playerIndex);
    }
    function posessionUpdate(_index) {
        let chosenPlayer = Endabgabe.players[_index];
        Endabgabe.posession.innerHTML = "Posession Player:" + chosenPlayer.jerseyNumberPlayer + " Team:" + chosenPlayer.playerTeam;
        // updateSelect();
    }
    Endabgabe.posessionUpdate = posessionUpdate;
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
    Endabgabe.switchForm = switchForm;
    function formIntoHTML(_index) {
        let chosenPlayer = Endabgabe.players[_index];
        Endabgabe.speedPlayer.innerHTML = (chosenPlayer.playerSpeed).toFixed(2);
        Endabgabe.precPlayer.innerHTML = (chosenPlayer.playerPrecision).toFixed(2);
        Endabgabe.numberPlayer.innerHTML = String(chosenPlayer.jerseyNumberPlayer);
        Endabgabe.teamPlayer.innerHTML = String(chosenPlayer.playerTeam);
        chosenTeam = chosenPlayer.playerTeam;
        updateSelect();
    }
    Endabgabe.formIntoHTML = formIntoHTML;
    function subChange() {
        subIndex = Number(Endabgabe.subPlayerDOMElement.value);
        let chosenSub = Endabgabe.players[subIndex];
        Endabgabe.speedSub.innerHTML = (chosenSub.playerSpeed).toFixed(2);
        Endabgabe.precSub.innerHTML = (chosenSub.playerPrecision).toFixed(2);
        Endabgabe.numberSub.innerHTML = String(chosenSub.jerseyNumberPlayer);
        Endabgabe.teamSub.innerHTML = String(chosenSub.playerTeam);
    }
    Endabgabe.subChange = subChange;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=form.js.map