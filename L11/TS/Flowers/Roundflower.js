"use strict";
var L11;
(function (L11) {
    class RoundFlower extends L11.FlowersNew {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            L11.crc2New.save();
            L11.crc2New.translate(this.x, y);
            L11.crc2New.scale(1.5, 1.5);
            L11.crc2New.fillStyle = "#473306";
            L11.crc2New.fillRect(0.4, 20, 0.8, -10);
            L11.crc2New.beginPath();
            L11.crc2New.arc(0, 0, 10, 0, 4 * Math.PI, true);
            L11.crc2New.fillStyle = "#B80F28";
            L11.crc2New.strokeStyle = "white";
            L11.crc2New.stroke();
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
                L11.crc2New.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
                L11.crc2New.fillStyle = "yellow";
                L11.crc2New.fill();
                L11.crc2New.restore();
            }
        }
    }
    L11.RoundFlower = RoundFlower;
})(L11 || (L11 = {}));
//# sourceMappingURL=Roundflower.js.map