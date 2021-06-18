"use strict";
var L11;
(function (L11) {
    function drawBackground() {
        let gradient = L11.crc2New.createLinearGradient(0, 0, 0, L11.crc2New.canvas.height);
        gradient.addColorStop(0, "rgb(156, 228, 255)");
        gradient.addColorStop(L11.goldenNew, "white");
        gradient.addColorStop(1, "rgb(65, 128, 93)");
        L11.crc2New.fillStyle = gradient;
        L11.crc2New.fillRect(0, 0, L11.crc2New.canvas.width, L11.crc2New.canvas.height);
    }
    L11.drawBackground = drawBackground;
    function drawSun(_position) {
        let firstNumber = 10;
        let secondNumber = 80;
        let gradient = L11.crc2New.createRadialGradient(0, 0, firstNumber, 0, 0, secondNumber);
        //Farbverlauf
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 20%, 0)");
        L11.crc2New.save();
        L11.crc2New.translate(_position.x, _position.y);
        L11.crc2New.fillStyle = gradient;
        L11.crc2New.arc(0, 0, secondNumber, 0, 2 * Math.PI);
        L11.crc2New.fill();
        L11.crc2New.restore();
        console.log("Sun", _position);
    }
    L11.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        L11.crc2New.save();
        L11.crc2New.translate(_position.x, _position.y);
        L11.crc2New.beginPath();
        L11.crc2New.moveTo(0, 0);
        L11.crc2New.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            L11.crc2New.lineTo(x, y);
        } while (x < L11.crc2New.canvas.width);
        L11.crc2New.lineTo(x, 0);
        L11.crc2New.closePath();
        //Farbverlauf/Gradient
        /*  let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
          gradient.addColorStop(0, _colorLow);
          gradient.addColorStop(0.7, _colorHigh);*/
        L11.crc2New.fillStyle = _color;
        L11.crc2New.fill();
        L11.crc2New.restore();
    }
    L11.drawMountains = drawMountains;
    function drawTree(_min, _max) {
        //Dreiecke untersch. Farben
        let treesColors = ["#182E1A", "#224225", "#356E3C"];
        //Variablen 
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let horizon = L11.crc2New.canvas.height * L11.goldenNew;
        //Log
        do {
            let y = -_min - Math.random() * (_max - _min);
            L11.crc2New.save();
            L11.crc2New.translate(x, y + (horizon + 30));
            //Stamm
            L11.crc2New.fillStyle = "#473306";
            L11.crc2New.fillRect(0, 0, 30, -40);
            let y1 = -40;
            let y2 = -100;
            for (let x = 0; x < 3; x++) {
                //Dreiecke -> 3, übereinander
                L11.crc2New.beginPath();
                L11.crc2New.moveTo(-50, y1);
                L11.crc2New.lineTo(80, y1);
                L11.crc2New.lineTo(15, y2);
                L11.crc2New.closePath();
                L11.crc2New.fillStyle = treesColors[x];
                L11.crc2New.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            L11.crc2New.restore();
        } while (x < L11.crc2New.canvas.width);
    }
    L11.drawTree = drawTree;
})(L11 || (L11 = {}));
//# sourceMappingURL=background.js.map