"use strict";
var L11;
(function (L11) {
    class BeesNew extends L11.MovingAnimations {
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
        }
        draw() {
            L11.crc2New.save();
            L11.crc2New.translate(this.posX, this.posY);
            L11.crc2New.scale(0.5, 0.5);
            L11.crc2New.beginPath();
            L11.crc2New.fillStyle = "#e87e41";
            L11.crc2New.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            L11.crc2New.fill();
            L11.crc2New.stroke();
            L11.crc2New.beginPath();
            L11.crc2New.lineWidth = 8;
            L11.crc2New.moveTo(0, -40);
            L11.crc2New.lineTo(0, 40);
            L11.crc2New.moveTo(20, -37);
            L11.crc2New.lineTo(20, 37);
            L11.crc2New.moveTo(40, -30);
            L11.crc2New.lineTo(40, 30);
            L11.crc2New.strokeStyle = "black";
            L11.crc2New.stroke();
            L11.crc2New.beginPath();
            L11.crc2New.lineWidth = 1;
            L11.crc2New.fillStyle = "white";
            L11.crc2New.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            L11.crc2New.fill();
            L11.crc2New.stroke();
            L11.crc2New.beginPath();
            L11.crc2New.fillStyle = "white";
            L11.crc2New.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            L11.crc2New.fill();
            L11.crc2New.stroke();
            L11.crc2New.beginPath();
            L11.crc2New.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI);
            L11.crc2New.fillStyle = "black";
            L11.crc2New.fill();
            L11.crc2New.beginPath();
            L11.crc2New.arc(-40, -10, 10, 0, 2 * Math.PI);
            L11.crc2New.fillStyle = "white";
            L11.crc2New.fill();
            L11.crc2New.closePath();
            L11.crc2New.restore();
        }
        update() {
            if (this.posX > L11.crc2New.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > L11.crc2New.canvas.height || this.posY < L11.crc2New.canvas.height * 0.40) {
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
            // this.draw();
        }
    }
    L11.BeesNew = BeesNew;
})(L11 || (L11 = {}));
//# sourceMappingURL=bees.js.map