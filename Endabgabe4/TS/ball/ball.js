"use strict";
var Endabgabe4;
(function (Endabgabe4) {
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
            let distanceBall = Endabgabe4.Vector.getdistance(_newPosition, this.position);
            let chosenPlayer = Endabgabe4.players[this.playerIndex];
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
            this.newPosition = new Endabgabe4.Vector(newX, newY);
        }
        draw() {
            Endabgabe4.crc2.beginPath();
            Endabgabe4.crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            Endabgabe4.crc2.fillStyle = "white";
            Endabgabe4.crc2.fill();
            Endabgabe4.crc2.closePath();
        }
        update() {
            if (Endabgabe4.key == true) {
                let diff = Endabgabe4.Vector.getDifference(this.newPosition, this.position);
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    Endabgabe4.key = false;
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
                    Endabgabe4.scoreB++;
                    Endabgabe4.scoreBDOMElement.innerHTML = String(Endabgabe4.scoreB);
                    window.alert("Goal for Team B");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
            else if (this.position.x > 870) {
                if (this.position.y < 300 && this.position.y > 200) {
                    Endabgabe4.scoreA++;
                    Endabgabe4.scoreADOMElement.innerHTML = String(Endabgabe4.scoreA);
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
            this.position.set(Endabgabe4.canvas.width / 2, Endabgabe4.canvas.height / 2);
            this.newPosition.set(Endabgabe4.canvas.width / 2, Endabgabe4.canvas.height / 2);
        }
        checkEnviroment() {
            if (this.ballKey == true) {
                for (let index = 0; index < Endabgabe4.players.length; index++) {
                    let chosenPlayer = Endabgabe4.players[index];
                    if (chosenPlayer.distance < 10) {
                        this.playerIndex = index;
                        Endabgabe4.posessionUpdate(index);
                        Endabgabe4.animationKey = false;
                        this.ballKey = false;
                        Endabgabe4.shootKey = true;
                        break;
                    }
                }
            }
        }
    }
    Endabgabe4.Ball = Ball;
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=ball.js.map