"use strict";
var L10_2;
(function (L10_2) {
    class FlowersNew {
        constructor(_flowerType, _xPos, _yRandomMin, _yRandomMax) {
            this.x = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            //
        }
    }
    L10_2.FlowersNew = FlowersNew;
    class StarFlower extends FlowersNew {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            L10_2.crc2New.save();
            L10_2.crc2New.translate(this.x, y);
            L10_2.crc2New.scale(1.5, 1.5);
            L10_2.crc2New.fillStyle = "#473306";
            L10_2.crc2New.fillRect(10.5, 4, 0.8, -10);
            L10_2.crc2New.fillStyle = "#86128A";
            L10_2.crc2New.beginPath();
            L10_2.crc2New.moveTo(10.8, -0.0);
            L10_2.crc2New.lineTo(14.1, -7.0);
            L10_2.crc2New.lineTo(21.8, -7.83);
            L10_2.crc2New.lineTo(16.2, -13.1);
            L10_2.crc2New.lineTo(17.5, -20.5);
            L10_2.crc2New.lineTo(10.8, -17.0);
            L10_2.crc2New.lineTo(4.12, -20.5);
            L10_2.crc2New.lineTo(5.5, -13.1);
            L10_2.crc2New.lineTo(0.1, -7.8);
            L10_2.crc2New.lineTo(7.5, -6.8);
            L10_2.crc2New.lineTo(10.8, -0);
            L10_2.crc2New.closePath();
            L10_2.crc2New.fill();
            L10_2.crc2New.restore();
        }
    }
    L10_2.StarFlower = StarFlower;
    class RoundFlower extends FlowersNew {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            L10_2.crc2New.save();
            L10_2.crc2New.translate(this.x, y);
            L10_2.crc2New.scale(1.5, 1.5);
            L10_2.crc2New.fillStyle = "#473306";
            L10_2.crc2New.fillRect(0.4, 20, 0.8, -10);
            L10_2.crc2New.beginPath();
            L10_2.crc2New.arc(0, 0, 10, 0, 4 * Math.PI, true);
            L10_2.crc2New.fillStyle = "#B80F28";
            L10_2.crc2New.strokeStyle = "white";
            L10_2.crc2New.stroke();
            L10_2.crc2New.closePath();
            L10_2.crc2New.fill();
            L10_2.crc2New.restore();
        }
    }
    L10_2.RoundFlower = RoundFlower;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=flower.js.map