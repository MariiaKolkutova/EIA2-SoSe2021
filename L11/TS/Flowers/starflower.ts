namespace L11 {

export class StarFlower extends FlowersNew {

    public draw(): void {

        let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
        this.yPos = y;

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
    public updateNectar(): void {

        this.nectarCounter++;
        if (this.nectarLength < 11) {
            if (this.nectarValue == this.nectarCounter) {
                this.nectarLength += 2;
                this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
            }
            crc2New.save();
            crc2New.translate(this.x, this.yPos);
            crc2New.scale(1.5, 1.5);
            crc2New.beginPath();
            crc2New.arc(10.5, -11.5, this.nectarLength, 0, 2 * Math.PI);
            crc2New.fillStyle = "yellow";
            crc2New.fill();
            crc2New.restore();

        }
    }
}
}