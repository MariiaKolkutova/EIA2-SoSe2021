namespace Endabgabe {
    export class Referee extends Human {

        constructor(_position: Vector, _jerseyColor: string) {
            super(_position, _jerseyColor);
            this.velocity = 0.3;
            this.draw();
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            crc2.fillStyle = this.jerseyColor;
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2.5;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.lineWidth = 3;
            crc2.moveTo(0, -10);
            crc2.lineTo(0, 10);
            crc2.moveTo(-6, -8);
            crc2.lineTo(-6, 8);
            crc2.moveTo(6, -8);
            crc2.lineTo(6, 8);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.restore();
        }

        public update(): void {
            let diff: Vector = Vector.getDifference(ball.ballPos, this.position);
            if (Math.abs(diff.x) < 30 && Math.abs(diff.y) < 30) {
                //nothing
            }
            else {
                diff.scale(0.005);
                this.position.add(diff);

            }
        }
    }

}