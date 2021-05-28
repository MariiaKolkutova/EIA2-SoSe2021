"use strict";
var Bienen;
(function (Bienen) {
    function drawBackground() {
        let gradient = Bienen.crc2.createLinearGradient(0, 0, 0, Bienen.crc2.canvas.height);
        gradient.addColorStop(0, "rgb(156, 228, 255)");
        gradient.addColorStop(Bienen.golden, "white");
        gradient.addColorStop(1, "rgb(65, 128, 93)");
        Bienen.crc2.fillStyle = gradient;
        Bienen.crc2.fillRect(0, 0, Bienen.crc2.canvas.width, Bienen.crc2.canvas.height);
    }
    Bienen.drawBackground = drawBackground;
    function drawSun(_position) {
        let firstNumber = 10;
        let secondNumber = 80;
        let gradient = Bienen.crc2.createRadialGradient(0, 0, firstNumber, 0, 0, secondNumber);
        //Farbverlauf
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 20%, 0)");
        Bienen.crc2.save();
        Bienen.crc2.translate(_position.x, _position.y);
        Bienen.crc2.fillStyle = gradient;
        Bienen.crc2.arc(0, 0, secondNumber, 0, 2 * Math.PI);
        Bienen.crc2.fill();
        Bienen.crc2.restore();
        console.log("Sun", _position);
    }
    Bienen.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        Bienen.crc2.save();
        Bienen.crc2.translate(_position.x, _position.y);
        Bienen.crc2.beginPath();
        Bienen.crc2.moveTo(0, 0);
        Bienen.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            Bienen.crc2.lineTo(x, y);
        } while (x < Bienen.crc2.canvas.width);
        Bienen.crc2.lineTo(x, 0);
        Bienen.crc2.closePath();
        //Farbverlauf/Gradient
        /*  let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
          gradient.addColorStop(0, _colorLow);
          gradient.addColorStop(0.7, _colorHigh);*/
        Bienen.crc2.fillStyle = _color;
        Bienen.crc2.fill();
        Bienen.crc2.restore();
    }
    Bienen.drawMountains = drawMountains;
    function drawTree(_min, _max) {
        //Dreiecke untersch. Farben
        let treesColors = ["#182E1A", "#224225", "#356E3C"];
        //Variablen 
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let horizon = Bienen.crc2.canvas.height * Bienen.golden;
        //Log
        do {
            let y = -_min - Math.random() * (_max - _min);
            Bienen.crc2.save();
            Bienen.crc2.translate(x, y + (horizon + 30));
            //Stamm
            Bienen.crc2.fillStyle = "#473306";
            Bienen.crc2.fillRect(0, 0, 30, -40);
            let y1 = -40;
            let y2 = -100;
            for (let x = 0; x < 3; x++) {
                //Dreiecke -> 3, übereinander
                Bienen.crc2.beginPath();
                Bienen.crc2.moveTo(-50, y1);
                Bienen.crc2.lineTo(80, y1);
                Bienen.crc2.lineTo(15, y2);
                Bienen.crc2.closePath();
                Bienen.crc2.fillStyle = treesColors[x];
                Bienen.crc2.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Bienen.crc2.restore();
        } while (x < Bienen.crc2.canvas.width);
    }
    Bienen.drawTree = drawTree;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=background.js.map