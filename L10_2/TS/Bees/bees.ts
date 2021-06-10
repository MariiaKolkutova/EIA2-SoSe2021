namespace L10_2 {

    export class BeesNew extends MovingAnimations {
        posX: number;
        posY: number;
        velocityX: number;
        velocityY: number;
        randomScale: number;
        randomNumber: number = (Math.floor(Math.random() * 2000) + 1000);
        counter: number = 0;

        constructor( _position: Vector, _velocity: Vector, _randomScale: number) {
            super(_position, _velocity);
        }

        draw(): void {
           
            crc2New.save();
            crc2New.translate(this.posX, this.posY);

            crc2New.scale(0.5, 0.5);
            crc2New.beginPath();
            crc2New.fillStyle = "#e87e41";
            crc2New.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            crc2New.fill();
            crc2New.stroke();

            crc2New.beginPath();
            crc2New.lineWidth = 8;
            crc2New.moveTo(0, -40);
            crc2New.lineTo(0, 40);
            crc2New.moveTo(20, -37);
            crc2New.lineTo(20, 37);
            crc2New.moveTo(40, -30);
            crc2New.lineTo(40, 30);
            crc2New.strokeStyle = "black";
            crc2New.stroke();

            crc2New.beginPath();
            crc2New.lineWidth = 1;
            crc2New.fillStyle = "white";
            crc2New.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            crc2New.fill();
            crc2New.stroke();

            crc2New.beginPath();
            crc2New.fillStyle = "white";
            crc2New.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            crc2New.fill();
            crc2New.stroke();

            crc2New.beginPath();
            crc2New.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI );
            crc2New.fillStyle = "black";
            crc2New.fill();

            crc2New.beginPath();
            crc2New.arc(-40, -10, 10, 0, 2 * Math.PI);
            crc2New.fillStyle = "white";
            crc2New.fill();
            crc2New.closePath();

            crc2New.restore();

        }

        update(): void {

            if (this.posX > crc2New.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > crc2New.canvas.height || this.posY < crc2New.canvas.height * 0.40) {
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
            this.counter ++;

            this.draw();
        }
    }

}