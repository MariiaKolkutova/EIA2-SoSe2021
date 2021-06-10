namespace L10_2 {
   
    export class CloudNew  extends MovingAnimations {
        posX: number;
        posY: number; 
        velocityX: number = 0.5;
        velocityY: number = 0.1;

        constructor(_position: Vector, _velocity: Vector) {
            //Parameter für die Klasse 
           super(_position, _velocity); 
        }

        draw(): void {

            crc2New.save();
            crc2New.translate(this.posX, this.posY);
            crc2New.beginPath();
            crc2New.moveTo(-115, -20);
            crc2New.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            crc2New.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            crc2New.bezierCurveTo(135, 50, 135, 20, 105, 0);
            crc2New.bezierCurveTo(165, -60, 85, -70, 55, -50);
            crc2New.bezierCurveTo(35, -95, -35, -80, -35, -50);
            crc2New.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            crc2New.lineWidth = 2;
            crc2New.fillStyle = "white";
            crc2New.fill();
            crc2New.strokeStyle = "white";
            crc2New.closePath();
            crc2New.stroke();

            crc2New.restore();
        }
        
        //Die Wollen werden immer neu updated, mit der Position 
        update(): void {
           
            if (this.posX > crc2New.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2New.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
            
           // this.draw();
        }
    }
}