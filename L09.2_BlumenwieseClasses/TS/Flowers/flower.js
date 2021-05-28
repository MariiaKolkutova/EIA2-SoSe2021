"use strict";
var Bienen;
(function (Bienen) {
    class Flowers {
        constructor(_flowerType, _xPos, _yRandomMin, _yRandomMax) {
            this.x = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Bienen.crc2.save();
            Bienen.crc2.translate(this.x, y);
            Bienen.crc2.scale(1.5, 1.5);
            if (this.flowerType == 1) {
                for (let index = 0; index < 4; index++) {
                    Bienen.crc2.fillStyle = "#473306";
                    Bienen.crc2.fillRect(10.5, 4, 0.8, -10);
                    Bienen.crc2.fillStyle = "#86128A";
                    Bienen.crc2.beginPath();
                    Bienen.crc2.moveTo(10.8, -0.0);
                    Bienen.crc2.lineTo(14.1, -7.0);
                    Bienen.crc2.lineTo(21.8, -7.83);
                    Bienen.crc2.lineTo(16.2, -13.1);
                    Bienen.crc2.lineTo(17.5, -20.5);
                    Bienen.crc2.lineTo(10.8, -17.0);
                    Bienen.crc2.lineTo(4.12, -20.5);
                    Bienen.crc2.lineTo(5.5, -13.1);
                    Bienen.crc2.lineTo(0.1, -7.8);
                    Bienen.crc2.lineTo(7.5, -6.8);
                    Bienen.crc2.lineTo(10.8, -0);
                    Bienen.crc2.closePath();
                    Bienen.crc2.fill();
                }
                Bienen.crc2.restore();
            }
            else {
                Bienen.crc2.fillStyle = "#473306";
                Bienen.crc2.fillRect(0.4, 20, 0.8, -10);
                Bienen.crc2.beginPath();
                Bienen.crc2.arc(0, 0, 10, 0, 4 * Math.PI, true);
                Bienen.crc2.fillStyle = "#B80F28";
                Bienen.crc2.strokeStyle = "white";
                Bienen.crc2.stroke();
                Bienen.crc2.closePath();
                Bienen.crc2.fill();
                Bienen.crc2.restore();
            }
        }
    }
    Bienen.Flowers = Flowers;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=flower.js.map