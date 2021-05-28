namespace Bienen {

    export interface Vector {
        x: number;
        y: number;
    }

    export function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
      
        gradient.addColorStop(0, "rgb(156, 228, 255)");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "rgb(65, 128, 93)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawSun(_position: Vector): void {
        let firstNumber: number = 10;
        let secondNumber: number = 80;
        let gradient: CanvasGradient = crc2.createRadialGradient (0, 0, firstNumber, 0, 0, secondNumber);
        //Farbverlauf
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 20%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, secondNumber, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();

        console.log("Sun", _position);
    }

    export function drawMountains(_position: Vector, _min: number, _max: number, _color: string): void {
        let stepMin: number = 50;
        let stepMax: number = 100;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        //Farbverlauf/Gradient
      /*  let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);*/

        crc2.fillStyle = _color;
        crc2.fill();

        crc2.restore();
    }

    export function drawTree(_min: number, _max: number): void {
        //Dreiecke untersch. Farben
        let treesColors: string[] = [ "#182E1A", "#224225", "#356E3C"];
        //Variablen 
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        let horizon: number = crc2.canvas.height * golden;
        //Log
        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 30));
            //Stamm
            crc2.fillStyle = "#473306";
            crc2.fillRect(0, 0, 30, -40);
            let y1: number = -40;
            let y2: number = -100;
            for (let x: number = 0; x < 3; x++) {
                //Dreiecke -> 3, übereinander
                crc2.beginPath();
                crc2.moveTo(-50, y1);
                crc2.lineTo(80, y1);
                crc2.lineTo(15, y2);
                crc2.closePath();
                crc2.fillStyle = treesColors[x];
                crc2.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        }
        while (x < crc2.canvas.width);
    }

}