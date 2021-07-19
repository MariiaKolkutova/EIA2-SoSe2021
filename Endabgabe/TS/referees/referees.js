"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Referee extends Endabgabe.Human {
        constructor(_position, _jerseyColor) {
            super(_position, _jerseyColor);
            this.velocity = 0.3;
            this.draw();
        }
        draw() {
            Endabgabe.crc2.save();
            Endabgabe.crc2.translate(this.position.x, this.position.y);
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Endabgabe.crc2.fillStyle = this.jerseyColor;
            Endabgabe.crc2.strokeStyle = "black";
            Endabgabe.crc2.lineWidth = 2.5;
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.fill();
            Endabgabe.crc2.closePath();
            Endabgabe.crc2.beginPath();
            Endabgabe.crc2.lineWidth = 3;
            Endabgabe.crc2.moveTo(0, -10);
            Endabgabe.crc2.lineTo(0, 10);
            Endabgabe.crc2.moveTo(-6, -8);
            Endabgabe.crc2.lineTo(-6, 8);
            Endabgabe.crc2.moveTo(6, -8);
            Endabgabe.crc2.lineTo(6, 8);
            Endabgabe.crc2.strokeStyle = "black";
            Endabgabe.crc2.stroke();
            Endabgabe.crc2.restore();
        }
        update() {
            let diff = Endabgabe.Vector.getDifference(Endabgabe.ball.ballPos, this.position);
            if (Math.abs(diff.x) < 30 && Math.abs(diff.y) < 30) {
                //nothing
            }
            else {
                diff.scale(0.005);
                this.position.add(diff);
            }
        }
    }
    Endabgabe.Referee = Referee;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=referees.js.map