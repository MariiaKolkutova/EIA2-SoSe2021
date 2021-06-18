namespace L11 {

    export interface Vector {
        x: number;
        y: number;
    }

    export function drawBackground(): void {
        let gradient: CanvasGradient = crc2New.createLinearGradient(0, 0, 0, crc2New.canvas.height);
      
        gradient.addColorStop(0, "rgb(156, 228, 255)");
        gradient.addColorStop(goldenNew, "white");
        gradient.addColorStop(1, "rgb(65, 128, 93)");

        crc2New.fillStyle = gradient;
        crc2New.fillRect(0, 0, crc2New.canvas.width, crc2New.canvas.height);
    }

    export function drawSun(_position: Vector): void {
        let firstNumber: number = 10;
        let secondNumber: number = 80;
        let gradient: CanvasGradient = crc2New.createRadialGradient (0, 0, firstNumber, 0, 0, secondNumber);
        //Farbverlauf
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 20%, 0)");

        crc2New.save();
        crc2New.translate(_position.x, _position.y);
        crc2New.fillStyle = gradient;
        crc2New.arc(0, 0, secondNumber, 0, 2 * Math.PI);
        crc2New.fill();
        crc2New.restore();

        console.log("Sun", _position);
    }

    export function drawMountains(_position: Vector, _min: number, _max: number, _color: string): void {
        let stepMin: number = 50;
        let stepMax: number = 100;
        let x: number = 0;

        crc2New.save();
        crc2New.translate(_position.x, _position.y);

        crc2New.beginPath();
        crc2New.moveTo(0, 0);
        crc2New.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2New.lineTo(x, y);
        } while (x < crc2New.canvas.width);

        crc2New.lineTo(x, 0);
        crc2New.closePath();

        //Farbverlauf/Gradient
      /*  let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);*/

        crc2New.fillStyle = _color;
        crc2New.fill();

        crc2New.restore();
    }

    export function drawTree(_min: number, _max: number): void {
        //Dreiecke untersch. Farben
        let treesColors: string[] = [ "#182E1A", "#224225", "#356E3C"];
        //Variablen 
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        let horizon: number = crc2New.canvas.height * goldenNew;
        //Log
        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2New.save();
            crc2New.translate(x, y + (horizon + 30));
            //Stamm
            crc2New.fillStyle = "#473306";
            crc2New.fillRect(0, 0, 30, -40);
            let y1: number = -40;
            let y2: number = -100;
            for (let x: number = 0; x < 3; x++) {
                //Dreiecke -> 3, übereinander
                crc2New.beginPath();
                crc2New.moveTo(-50, y1);
                crc2New.lineTo(80, y1);
                crc2New.lineTo(15, y2);
                crc2New.closePath();
                crc2New.fillStyle = treesColors[x];
                crc2New.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2New.restore();
        }
        while (x < crc2New.canvas.width);
    }

}