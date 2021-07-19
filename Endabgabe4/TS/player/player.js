"use strict";
var Endabgabe4;
(function (Endabgabe4) {
    class Player extends Endabgabe4.Human {
        constructor(_position, _jerseyColor, _onField, _jerseyNumber, _team) {
            super(_position, _jerseyColor);
            this.task = Endabgabe4.Task.lookForBall;
            this.radius = 80;
            this.onField = _onField;
            this.velocity = 0.5;
            this.jerseyNumber = _jerseyNumber;
            this.origin = this.position.copy();
            this.team = _team;
        }
        get playerOrigin() {
            return this.origin;
        }
        get jerseyNumberPlayer() {
            return this.jerseyNumber;
        }
        get playerSpeed() {
            return this.velocity;
        }
        get distance() {
            return this.distancePlayerBall;
        }
        get playerPrecision() {
            return this.precision;
        }
        get playerOnField() {
            return this.onField;
        }
        get playerTeam() {
            return this.team;
        }
        setOnField(_onField) {
            this.onField = _onField;
        }
        setOrigin(_position) {
            this.origin = _position;
        }
        setProperties(_minSpeed, _maxSpeed, _minPrecision, _maxPrecision) {
            this.precision = _minPrecision + Math.random() * (_maxPrecision - _minPrecision);
            this.velocity = _minSpeed + Math.random() * (_maxSpeed - _minSpeed);
        }
        setDistance() {
            let ballPos = Endabgabe4.ball.ballPos;
            this.distancePlayerBall = Endabgabe4.Vector.getdistance(ballPos, this.position);
        }
        draw() {
            Endabgabe4.crc2.beginPath();
            Endabgabe4.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Endabgabe4.crc2.fillStyle = this.jerseyColor;
            Endabgabe4.crc2.fill();
            Endabgabe4.crc2.textAlign = "center";
            Endabgabe4.crc2.fillStyle = "black";
            Endabgabe4.crc2.fillText(String(this.jerseyNumber), this.position.x, this.position.y);
            Endabgabe4.crc2.closePath();
        }
        changePlayer(_position) {
            this.newPosition = _position;
            console.log(this.newPosition);
            this.task = Endabgabe4.Task.changePlayer;
        }
        update() {
            if (this.onField == true) {
                this.setDistance();
                switch (this.task) {
                    case Endabgabe4.Task.lookForBall:
                        if (this.distancePlayerBall < this.radius) {
                            this.task = Endabgabe4.Task.walkToBall;
                        }
                        break;
                    case Endabgabe4.Task.walkToBall:
                        if (this.distancePlayerBall > this.radius) {
                            this.task = Endabgabe4.Task.walkToOrigin;
                        }
                        else {
                            if (this.distancePlayerBall < 10) {
                                this.task = Endabgabe4.Task.shootBall;
                            }
                            this.movePlayer(Endabgabe4.ball.ballPos);
                        }
                        break;
                    case Endabgabe4.Task.shootBall:
                        console.log("shoot", this.jerseyNumber);
                        if (this.distancePlayerBall > 20 || (Endabgabe4.ball.getKey) == false) {
                            console.log(this.jerseyNumber);
                            Endabgabe4.ball.setKey(true);
                            this.task = Endabgabe4.Task.walkToOrigin;
                        }
                        break;
                    case Endabgabe4.Task.walkToOrigin:
                        console.log(this.jerseyNumber);
                        this.movePlayer(this.origin);
                        if (Endabgabe4.Vector.getdistance(this.origin, this.position) < 1) {
                            this.task = Endabgabe4.Task.lookForBall;
                        }
                        break;
                    case Endabgabe4.Task.changePlayer:
                        this.movePlayer(this.newPosition);
                        if (Endabgabe4.Vector.getdistance(this.newPosition, this.position) < 1) {
                            if (this.position.y > 470 || this.position.y < 30) {
                                this.setOnField(false);
                                this.task = Endabgabe4.Task.lookForBall;
                            }
                            else {
                                this.setOnField(true);
                                this.task = Endabgabe4.Task.lookForBall;
                            }
                        }
                        break;
                    // case Task
                }
            }
        }
        movePlayer(_positon) {
            let playerDistance = Endabgabe4.Vector.getdistance(_positon, this.position);
            let playerDiffernce = Endabgabe4.Vector.getDifference(_positon, this.position);
            let ratio = this.velocity / playerDistance;
            playerDiffernce.scale(ratio);
            this.position.add(playerDiffernce);
            this.draw();
        }
    }
    Endabgabe4.Player = Player;
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=player.js.map