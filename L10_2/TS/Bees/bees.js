"use strict";
var L10_2;
(function (L10_2) {
    class BeesNew extends L10_2.MovingAnimations {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            L10_2.crc2New.save();
            L10_2.crc2New.translate(this.posX, this.posY);
            L10_2.crc2New.scale(0.5, 0.5);
            L10_2.crc2New.beginPath();
            L10_2.crc2New.fillStyle = "#e87e41";
            L10_2.crc2New.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            L10_2.crc2New.fill();
            L10_2.crc2New.stroke();
            L10_2.crc2New.beginPath();
            L10_2.crc2New.lineWidth = 8;
            L10_2.crc2New.moveTo(0, -40);
            L10_2.crc2New.lineTo(0, 40);
            L10_2.crc2New.moveTo(20, -37);
            L10_2.crc2New.lineTo(20, 37);
            L10_2.crc2New.moveTo(40, -30);
            L10_2.crc2New.lineTo(40, 30);
            L10_2.crc2New.strokeStyle = "black";
            L10_2.crc2New.stroke();
            L10_2.crc2New.beginPath();
            L10_2.crc2New.lineWidth = 1;
            L10_2.crc2New.fillStyle = "white";
            L10_2.crc2New.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            L10_2.crc2New.fill();
            L10_2.crc2New.stroke();
            L10_2.crc2New.beginPath();
            L10_2.crc2New.fillStyle = "white";
            L10_2.crc2New.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            L10_2.crc2New.fill();
            L10_2.crc2New.stroke();
            L10_2.crc2New.beginPath();
            L10_2.crc2New.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI);
            L10_2.crc2New.fillStyle = "black";
            L10_2.crc2New.fill();
            L10_2.crc2New.beginPath();
            L10_2.crc2New.arc(-40, -10, 10, 0, 2 * Math.PI);
            L10_2.crc2New.fillStyle = "white";
            L10_2.crc2New.fill();
            L10_2.crc2New.closePath();
            L10_2.crc2New.restore();
        }
        update() {
            if (this.posX > L10_2.crc2New.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L10_2.crc2New.canvas.height || this.posY < L10_2.crc2New.canvas.height * 0.40) {
                this.velocityY = -this.velocityY;
            }
            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter++;
            this.draw();
        }
    }
    L10_2.BeesNew = BeesNew;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=bees.js.map