"use strict";
var Endabgabe;
(function (Endabgabe) {
    //separate Klasse 
    class Ball {
        constructor(_position) {
            this.ballKey = true;
            this.precisionChecker = 100;
            this.position = _position;
            this.draw();
        }
        get ballPos() {
            return this.position;
        }
        get getKey() {
            return this.ballKey;
        }
        setKey(_key) {
            this.ballKey = _key;
        }
        setnewPosition(_newPosition) {
            let distanceBall = Endabgabe.Vector.getdistance(_newPosition, this.position);
            let chosenPlayer = Endabgabe.players[this.playerIndex];
            let random = Math.random();
            let newX;
            let newY;
            if (random >= 0.5) {
                newX = _newPosition.x + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newX = _newPosition.x - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            random = Math.random();
            if (random >= 0.5) {
                newY = _newPosition.y + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newY = _newPosition.y - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            this.newPosition = new Endabgabe.Vector(newX, newY);
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = "white";
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
        }
        update() {
            if (Endabgabe.key == true) {
                let diff = Endabgabe.Vector.getDifference(this.newPosition, this.position);
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    Endabgabe.key = false;
                    this.checkEnviroment();
                }
                else {
                    diff.scale(0.03);
                    this.position.add(diff);
                    this.checkEnviroment();
                }
            }
            else {
                this.draw();
                this.checkEnviroment();
            }
            this.checkOut();
            this.checkGoal();
        }
        checkGoal() {
            if (this.position.x < 30) {
                if (this.position.y < 300 && this.position.y > 200) {
                    Endabgabe.scoreB++;
                    Endabgabe.scoreBDOMElement.innerHTML = String(Endabgabe.scoreB);
                    window.alert("Goal for Team B");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
            else if (this.position.x > 870) {
                if (this.position.y < 300 && this.position.y > 200) {
                    Endabgabe.scoreA++;
                    Endabgabe.scoreADOMElement.innerHTML = String(Endabgabe.scoreA);
                    window.alert("Goal for Team A");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
        }
        checkOut() {
            if (this.position.y > 470 || this.position.y < 30) {
                this.resetPosition();
            }
        }
        resetPosition() {
            this.position.set(Endabgabe.canvas.width / 2, Endabgabe.canvas.height / 2);
            this.newPosition.set(Endabgabe.canvas.width / 2, Endabgabe.canvas.height / 2);
        }
        checkEnviroment() {
            if (this.ballKey == true) {
                for (let index = 0; index < Endabgabe.players.length; index++) {
                    let chosenPlayer = Endabgabe.players[index];
                    if (chosenPlayer.distance < 10) {
                        this.playerIndex = index;
                        Endabgabe.posessionUpdate(index);
                        Endabgabe.animationKey = false;
                        this.ballKey = false;
                        Endabgabe.shootKey = true;
                        break;
                    }
                }
            }
        }
    }
    Endabgabe.Ball = Ball;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ball.js.map