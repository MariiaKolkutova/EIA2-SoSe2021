"use strict";
var Endabgabe4;
(function (Endabgabe4) {
    window.addEventListener("load", handleLoad);
    let Task;
    (function (Task) {
        Task[Task["lookForBall"] = 0] = "lookForBall";
        Task[Task["walkToBall"] = 1] = "walkToBall";
        Task[Task["shootBall"] = 2] = "shootBall";
        Task[Task["walkToOrigin"] = 3] = "walkToOrigin";
        Task[Task["changePlayer"] = 4] = "changePlayer";
    })(Task = Endabgabe4.Task || (Endabgabe4.Task = {}));
    Endabgabe4.animationKey = true;
    Endabgabe4.shootKey = false;
    Endabgabe4.players = [];
    Endabgabe4.scoreA = 0;
    Endabgabe4.scoreB = 0;
    function handleLoad() {
        //HTML PARAGRPAHEN
        Endabgabe4.speedPlayer = document.querySelector("#speedPlayer");
        Endabgabe4.precPlayer = document.querySelector("#precPlayer");
        Endabgabe4.numberPlayer = document.querySelector("#numberPlayer");
        Endabgabe4.teamPlayer = document.querySelector("#teamPlayer");
        Endabgabe4.posession = document.querySelector("#posession");
        Endabgabe4.speedSub = document.querySelector("#speedSubstitute");
        Endabgabe4.precSub = document.querySelector("#precSubstitute");
        Endabgabe4.numberSub = document.querySelector("#numberSubstitute");
        Endabgabe4.teamSub = document.querySelector("#teamSubstitute");
        //HTML ELEMENTE
        Endabgabe4.form = document.querySelector("#formLeft");
        Endabgabe4.subPlayerDOMElement = document.querySelector("#subPlayer");
        Endabgabe4.scoreADOMElement = document.querySelector("#scoreA");
        Endabgabe4.scoreBDOMElement = document.querySelector("#scoreB");
        Endabgabe4.changeBtn = document.querySelector("#changeBtn");
        //EVENT LISTENER
        Endabgabe4.subPlayerDOMElement.addEventListener("change", Endabgabe4.subChange);
        Endabgabe4.changeBtn.addEventListener("click", Endabgabe4.exchangePlayer);
        document.addEventListener("keydown", Endabgabe4.switchForm);
        Endabgabe4.form.addEventListener("change", Endabgabe4.handleChange);
        //CANVAS
        Endabgabe4.canvas = document.querySelector("canvas");
        Endabgabe4.canvas.addEventListener("click", shootBall);
        Endabgabe4.crc2 = Endabgabe4.canvas.getContext("2d");
        Endabgabe4.canvas.width = 900;
        Endabgabe4.canvas.height = 500;
        //CALL ALL FUNCTIONS
        Endabgabe4.drawField();
        Endabgabe4.imageData = Endabgabe4.crc2.getImageData(0, 0, Endabgabe4.canvas.width, Endabgabe4.canvas.height);
        Endabgabe4.ball = new Endabgabe4.Ball(new Endabgabe4.Vector(Endabgabe4.canvas.width * 0.5, Endabgabe4.canvas.height * 0.5));
        createPlayer();
        createReferees();
        Endabgabe4.handleChange();
        Endabgabe4.formIntoHTML(0);
        animate();
    }
    function createPlayer() {
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 0; indexB < 11; indexB++) {
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe4.players.push(new Endabgabe4.Player(new Endabgabe4.Vector(Endabgabe4.positionsTeam1[indexB].x, Endabgabe4.positionsTeam1[indexB].y), "red", true, randomNumber, "A"));
                }
                else {
                    Endabgabe4.players.push(new Endabgabe4.Player(new Endabgabe4.Vector(Endabgabe4.positionsTeam2[indexB].x, Endabgabe4.positionsTeam2[indexB].y), "blue", true, randomNumber, "B"));
                }
            }
        }
        for (let indexA = 0; indexA < 2; indexA++) {
            for (let indexB = 11; indexB < 14; indexB++) {
                console.log(indexB);
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe4.players.push(new Endabgabe4.Player(new Endabgabe4.Vector(Endabgabe4.positionsTeam1[indexB].x, Endabgabe4.positionsTeam1[indexB].y), "red", false, randomNumber, "A"));
                }
                else {
                    Endabgabe4.players.push(new Endabgabe4.Player(new Endabgabe4.Vector(Endabgabe4.positionsTeam2[indexB].x, Endabgabe4.positionsTeam2[indexB].y), "blue", false, randomNumber, "B"));
                }
            }
        }
    }
    function createReferees() {
        Endabgabe4.players.push(new Endabgabe4.Referee(new Endabgabe4.Vector(450, 150), "white"));
        Endabgabe4.players.push(new Endabgabe4.Linereferee(new Endabgabe4.Vector(680, 15), "pink"));
        Endabgabe4.players.push(new Endabgabe4.Linereferee(new Endabgabe4.Vector(230, 485), "pink"));
    }
    function shootBall(_event) {
        console.log(Endabgabe4.shootKey);
        if (Endabgabe4.shootKey == true) {
            let rect = Endabgabe4.canvas.getBoundingClientRect();
            let mouse = new Endabgabe4.Vector(_event.clientX - rect.left, _event.clientY - rect.top);
            Endabgabe4.key = true;
            Endabgabe4.ball.setnewPosition(mouse);
            Endabgabe4.animationKey = true;
            Endabgabe4.shootKey = false;
            animate();
        }
    }
    function animate() {
        if (Endabgabe4.animationKey == true) {
            requestAnimationFrame(animate);
            Endabgabe4.crc2.clearRect(0, 0, Endabgabe4.crc2.canvas.width, Endabgabe4.crc2.canvas.height);
            Endabgabe4.crc2.putImageData(Endabgabe4.imageData, 0, 0);
            for (let index = 0; index < Endabgabe4.players.length; index++) {
                Endabgabe4.players[index].update();
                Endabgabe4.players[index].draw();
            }
            Endabgabe4.ball.update();
            Endabgabe4.ball.draw();
        }
    }
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=main.js.map