"use strict";
var Bienen;
(function (Bienen) {
    class Bees {
        constructor(_position, _velocity, _randomScale) {
            this.randomNumber = (Math.floor(Math.random() * 2000) + 1000);
            this.counter = 0;
            this.posX = _position.x;
            this.posY = _position.y;
            this.randomScale = _randomScale;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            Bienen.crc2.save();
            Bienen.crc2.translate(this.posX, this.posY);
            Bienen.crc2.scale(0.5, 0.5);
            Bienen.crc2.beginPath();
            Bienen.crc2.fillStyle = "#e87e41";
            Bienen.crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            Bienen.crc2.fill();
            Bienen.crc2.stroke();
            Bienen.crc2.beginPath();
            Bienen.crc2.lineWidth = 8;
            Bienen.crc2.moveTo(0, -40);
            Bienen.crc2.lineTo(0, 40);
            Bienen.crc2.moveTo(20, -37);
            Bienen.crc2.lineTo(20, 37);
            Bienen.crc2.moveTo(40, -30);
            Bienen.crc2.lineTo(40, 30);
            Bienen.crc2.strokeStyle = "black";
            Bienen.crc2.stroke();
            Bienen.crc2.beginPath();
            Bienen.crc2.lineWidth = 1;
            Bienen.crc2.fillStyle = "white";
            Bienen.crc2.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            Bienen.crc2.fill();
            Bienen.crc2.stroke();
            Bienen.crc2.beginPath();
            Bienen.crc2.fillStyle = "white";
            Bienen.crc2.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            Bienen.crc2.fill();
            Bienen.crc2.stroke();
            Bienen.crc2.beginPath();
            Bienen.crc2.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI);
            Bienen.crc2.fillStyle = "black";
            Bienen.crc2.fill();
            Bienen.crc2.beginPath();
            Bienen.crc2.arc(-40, -10, 10, 0, 2 * Math.PI);
            Bienen.crc2.fillStyle = "white";
            Bienen.crc2.fill();
            Bienen.crc2.closePath();
            Bienen.crc2.restore();
        }
        update() {
            if (this.posX > Bienen.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > Bienen.crc2.canvas.height || this.posY < Bienen.crc2.canvas.height * 0.40) {
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
    Bienen.Bees = Bees;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=bees.js.map