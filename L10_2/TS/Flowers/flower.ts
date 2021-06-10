namespace L10_2 {

    export class FlowersNew {
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
        //
        }
    }
    export class StarFlower extends FlowersNew {
        draw(): void {

            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            
            crc2New.save();
            crc2New.translate(this.x, y);
            crc2New.scale(1.5, 1.5);
            crc2New.fillStyle = "#473306";
            crc2New.fillRect(10.5, 4, 0.8, -10);
            crc2New.fillStyle = "#86128A";
            crc2New.beginPath();
            crc2New.moveTo(10.8, -0.0);
            crc2New.lineTo(14.1, -7.0);
            crc2New.lineTo(21.8, -7.83);
            crc2New.lineTo(16.2, -13.1);
            crc2New.lineTo(17.5, -20.5);
            crc2New.lineTo(10.8, -17.0);
            crc2New.lineTo(4.12, -20.5);
            crc2New.lineTo(5.5, -13.1);
            crc2New.lineTo(0.1, -7.8);
            crc2New.lineTo(7.5, -6.8);
            crc2New.lineTo(10.8, -0);
            crc2New.closePath();
            crc2New.fill();
            crc2New.restore();
        }
    }

    export class RoundFlower extends FlowersNew {

        draw(): void {

            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);

            crc2New.save();
            crc2New.translate(this.x, y);
            crc2New.scale(1.5, 1.5);
            crc2New.fillStyle = "#473306";
            crc2New.fillRect(0.4, 20, 0.8, -10);
            crc2New.beginPath();
            crc2New.arc(0, 0, 10, 0, 4 * Math.PI, true);
            crc2New.fillStyle = "#B80F28";
            crc2New.strokeStyle = "white";
            crc2New.stroke();
            crc2New.closePath();
            crc2New.fill();
            crc2New.restore();

        }
    }

}