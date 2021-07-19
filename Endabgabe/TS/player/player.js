"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Player = Subklasse von Human, erbt davon
    class Player extends Endabgabe.Human {
        /*Spieler 1 pos(new Vect) = vec1
        -> vectoren werden intern von typscript/javascript fest gespichert,
        wir verweisen nur drauf, auf die vectoren, Spieler sind auch zwischen gespeichert,
         alle Objekte werden nur verwiesen, nicht zwischen gespeichert
         => komplexe datentypen: refrenzieren, es wird nur auf einen Speicher REFERIERT!!!, nichts gespeichert,
        es wurd schon bereits zwischegespeichert, verweisen, im externen speicher, "SCHUBLADE" */
        //Primitive datentypen: speichert es zum beispiel in variablen
        //Die Position wird ein mal gesetzt und mit Copy gespeichert 
        constructor(_position, _jerseyColor, _onField, _jerseyNumber, _team) {
            super(_position, _jerseyColor);
            //Private_ nur innerhalb der Klasse, kein dritter kann drauf direkt zugreiffen, nur indirekt
            //indirekt nur mit set und get
            //bei enum der Task es begint mit lookForBall
            this.task = Endabgabe.Task.lookForBall;
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
            let ballPos = Endabgabe.ball.ballPos;
            this.distancePlayerBall = Endabgabe.Vector.getdistance(ballPos, this.position);
        }
        draw() {
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = this.jerseyColor;
            Endabgabe.crc2.fill();
            Endabgabe.crc2.textAlign = "center";
            Endabgabe.crc2.fillStyle = "black";
            Endabgabe.crc2.fillText(String(this.jerseyNumber), this.position.x, this.position.y);
            Endabgabe.crc2.closePath();
        }
        changePlayer(_position) {
            this.newPosition = _position;
            console.log(this.newPosition);
            this.task = Endabgabe.Task.changePlayer;
        }
        update() {
            if (this.onField == true) {
                this.setDistance();
                switch (this.task) {
                    case Endabgabe.Task.lookForBall:
                        if (this.distancePlayerBall < this.radius) {
                            this.task = Endabgabe.Task.walkToBall;
                        }
                        break;
                    case Endabgabe.Task.walkToBall:
                        if (this.distancePlayerBall > this.radius) {
                            this.task = Endabgabe.Task.walkToOrigin;
                        }
                        else {
                            if (this.distancePlayerBall < 10) {
                                this.task = Endabgabe.Task.shootBall;
                            }
                            this.movePlayer(Endabgabe.ball.ballPos);
                        }
                        break;
                    case Endabgabe.Task.shootBall:
                        console.log("shoot", this.jerseyNumber);
                        if (this.distancePlayerBall > 20 || (Endabgabe.ball.getKey) == false) {
                            console.log(this.jerseyNumber);
                            Endabgabe.ball.setKey(true);
                            this.task = Endabgabe.Task.walkToOrigin;
                        }
                        break;
                    case Endabgabe.Task.walkToOrigin:
                        console.log(this.jerseyNumber);
                        this.movePlayer(this.origin);
                        if (Endabgabe.Vector.getdistance(this.origin, this.position) < 1) {
                            this.task = Endabgabe.Task.lookForBall;
                        }
                        break;
                    case Endabgabe.Task.changePlayer:
                        this.movePlayer(this.newPosition);
                        if (Endabgabe.Vector.getdistance(this.newPosition, this.position) < 1) {
                            if (this.position.y > 470 || this.position.y < 30) {
                                this.setOnField(false);
                                this.task = Endabgabe.Task.lookForBall;
                            }
                            else {
                                this.setOnField(true);
                                this.task = Endabgabe.Task.lookForBall;
                            }
                        }
                        break;
                    // case Task
                }
            }
        }
        movePlayer(_positon) {
            let playerDistance = Endabgabe.Vector.getdistance(_positon, this.position);
            let playerDiffernce = Endabgabe.Vector.getDifference(_positon, this.position);
            let ratio = this.velocity / playerDistance;
            playerDiffernce.scale(ratio);
            this.position.add(playerDiffernce);
            this.draw();
        }
    }
    Endabgabe.Player = Player;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=player.js.map