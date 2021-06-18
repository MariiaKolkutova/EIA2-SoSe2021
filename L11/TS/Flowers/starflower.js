"use strict";
var L11;
(function (L11) {
    class StarFlower extends L11.FlowersNew {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            L11.crc2New.save();
            L11.crc2New.translate(this.x, y);
            L11.crc2New.scale(1.5, 1.5);
            L11.crc2New.fillStyle = "#473306";
            L11.crc2New.fillRect(10.5, 4, 0.8, -10);
            L11.crc2New.fillStyle = "#86128A";
            L11.crc2New.beginPath();
            L11.crc2New.moveTo(10.8, -0.0);
            L11.crc2New.lineTo(14.1, -7.0);
            L11.crc2New.lineTo(21.8, -7.83);
            L11.crc2New.lineTo(16.2, -13.1);
            L11.crc2New.lineTo(17.5, -20.5);
            L11.crc2New.lineTo(10.8, -17.0);
            L11.crc2New.lineTo(4.12, -20.5);
            L11.crc2New.lineTo(5.5, -13.1);
            L11.crc2New.lineTo(0.1, -7.8);
            L11.crc2New.lineTo(7.5, -6.8);
            L11.crc2New.lineTo(10.8, -0);
            L11.crc2New.closePath();
            L11.crc2New.fill();
            L11.crc2New.restore();
        }
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 11) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 2;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
                L11.crc2New.save();
                L11.crc2New.translate(this.x, this.yPos);
                L11.crc2New.scale(1.5, 1.5);
                L11.crc2New.beginPath();
                L11.crc2New.arc(10.5, -11.5, this.nectarLength, 0, 2 * Math.PI);
                L11.crc2New.fillStyle = "yellow";
                L11.crc2New.fill();
                L11.crc2New.restore();
            }
        }
    }
    L11.StarFlower = StarFlower;
})(L11 || (L11 = {}));
//# sourceMappingURL=starflower.js.map