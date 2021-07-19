"use strict";
var Endabgabe4;
(function (Endabgabe4) {
    class Referee extends Endabgabe4.Human {
        constructor(_position, _jerseyColor) {
            super(_position, _jerseyColor);
            this.velocity = 0.3;
            this.draw();
        }
        draw() {
            Endabgabe4.crc2.save();
            Endabgabe4.crc2.translate(this.position.x, this.position.y);
            Endabgabe4.crc2.beginPath();
            Endabgabe4.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            Endabgabe4.crc2.fillStyle = this.jerseyColor;
            Endabgabe4.crc2.strokeStyle = "black";
            Endabgabe4.crc2.lineWidth = 2.5;
            Endabgabe4.crc2.stroke();
            Endabgabe4.crc2.fill();
            Endabgabe4.crc2.closePath();
            Endabgabe4.crc2.beginPath();
            Endabgabe4.crc2.lineWidth = 3;
            Endabgabe4.crc2.moveTo(0, -10);
            Endabgabe4.crc2.lineTo(0, 10);
            Endabgabe4.crc2.moveTo(-6, -8);
            Endabgabe4.crc2.lineTo(-6, 8);
            Endabgabe4.crc2.moveTo(6, -8);
            Endabgabe4.crc2.lineTo(6, 8);
            Endabgabe4.crc2.strokeStyle = "black";
            Endabgabe4.crc2.stroke();
            Endabgabe4.crc2.restore();
        }
        update() {
            let diff = Endabgabe4.Vector.getDifference(Endabgabe4.ball.ballPos, this.position);
            if (Math.abs(diff.x) < 30 && Math.abs(diff.y) < 30) {
                //nothing
            }
            else {
                diff.scale(0.005);
                this.position.add(diff);
            }
        }
    }
    Endabgabe4.Referee = Referee;
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=referees.js.map