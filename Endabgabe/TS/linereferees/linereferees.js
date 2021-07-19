"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Linereferee extends Endabgabe.Human {
        constructor(_position, _jerseyColor) {
            super(_position, _jerseyColor);
            this.velocity = 0.5;
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
            if (this.position.x == 450) {
                this.velocity = -this.velocity;
            }
            if (this.position.x == 50) {
                this.velocity = -this.velocity;
            }
            if (this.position.x == 850) {
                this.velocity = -this.velocity;
            }
            this.position.x += this.velocity;
        }
    }
    Endabgabe.Linereferee = Linereferee;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=linereferees.js.map