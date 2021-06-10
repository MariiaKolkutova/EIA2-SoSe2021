"use strict";
var L10_2;
(function (L10_2) {
    class CloudNew extends L10_2.MovingAnimations {
        constructor(_position, _velocity) {
            //Parameter für die Klasse 
            super(_position, _velocity);
            this.velocityX = 0.5;
            this.velocityY = 0.1;
        }
        draw() {
            L10_2.crc2New.save();
            L10_2.crc2New.translate(this.posX, this.posY);
            L10_2.crc2New.beginPath();
            L10_2.crc2New.moveTo(-115, -20);
            L10_2.crc2New.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            L10_2.crc2New.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            L10_2.crc2New.bezierCurveTo(135, 50, 135, 20, 105, 0);
            L10_2.crc2New.bezierCurveTo(165, -60, 85, -70, 55, -50);
            L10_2.crc2New.bezierCurveTo(35, -95, -35, -80, -35, -50);
            L10_2.crc2New.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            L10_2.crc2New.lineWidth = 2;
            L10_2.crc2New.fillStyle = "white";
            L10_2.crc2New.fill();
            L10_2.crc2New.strokeStyle = "white";
            L10_2.crc2New.closePath();
            L10_2.crc2New.stroke();
            L10_2.crc2New.restore();
        }
        //Die Wollen werden immer neu updated, mit der Position 
        update() {
            if (this.posX > L10_2.crc2New.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L10_2.crc2New.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            // this.draw();
        }
    }
    L10_2.CloudNew = CloudNew;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=cloud.js.map