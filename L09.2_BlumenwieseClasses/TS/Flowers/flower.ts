namespace Bienen {
    export class Flowers {
        x: number;
        flowerType: number;
        yRandomMin: number;
        yRandomMax: number;

        constructor(_flowerType: number, _xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.x = _xPos;
            this.flowerType = _flowerType;

            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        draw(): void {

            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            crc2.save();
            crc2.translate(this.x, y);
            crc2.scale(1.5, 1.5);

            if (this.flowerType == 1) {
                for (let index: number = 0; index < 4; index++) {

                    crc2.fillStyle = "#473306";
                    crc2.fillRect(10.5, 4, 0.8, -10);
                    crc2.fillStyle = "#86128A";

                    crc2.beginPath();
                    crc2.moveTo(10.8, -0.0);
                    crc2.lineTo(14.1, -7.0);
                    crc2.lineTo(21.8, -7.83);
                    crc2.lineTo(16.2, -13.1);
                    crc2.lineTo(17.5, -20.5);
                    crc2.lineTo(10.8, -17.0);
                    crc2.lineTo(4.12, -20.5);
                    crc2.lineTo(5.5, -13.1);
                    crc2.lineTo(0.1, -7.8);
                    crc2.lineTo(7.5, -6.8);
                    crc2.lineTo(10.8, -0);
                    crc2.closePath();
                    crc2.fill();

                }
                crc2.restore();
            }

            else {

                crc2.fillStyle = "#473306";
                crc2.fillRect(0.4, 20, 0.8, -10);

                crc2.beginPath();

                crc2.arc(0, 0, 10, 0, 4 * Math.PI, true);
                crc2.fillStyle = "#B80F28";
                crc2.strokeStyle = "white";
                crc2.stroke();
                crc2.closePath();
                crc2.fill();

                crc2.restore();
            }
        }
    }
}