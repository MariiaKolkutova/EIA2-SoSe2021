namespace L11 {

export class RoundFlower extends FlowersNew {

    public draw(): void {

        let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
        this.yPos = y;

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
            crc2New.arc(0, 0, this.nectarLength, 0, 2 * Math.PI);
            crc2New.fillStyle = "yellow";
            crc2New.fill();
            crc2New.restore();

        }
    }
}

}