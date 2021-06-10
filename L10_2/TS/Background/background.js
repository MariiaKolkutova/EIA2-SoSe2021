"use strict";
var L10_2;
(function (L10_2) {
    function drawBackground() {
        let gradient = L10_2.crc2New.createLinearGradient(0, 0, 0, L10_2.crc2New.canvas.height);
        gradient.addColorStop(0, "rgb(156, 228, 255)");
        gradient.addColorStop(L10_2.goldenNew, "white");
        gradient.addColorStop(1, "rgb(65, 128, 93)");
        L10_2.crc2New.fillStyle = gradient;
        L10_2.crc2New.fillRect(0, 0, L10_2.crc2New.canvas.width, L10_2.crc2New.canvas.height);
    }
    L10_2.drawBackground = drawBackground;
    function drawSun(_position) {
        let firstNumber = 10;
        let secondNumber = 80;
        let gradient = L10_2.crc2New.createRadialGradient(0, 0, firstNumber, 0, 0, secondNumber);
        //Farbverlauf
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 20%, 0)");
        L10_2.crc2New.save();
        L10_2.crc2New.translate(_position.x, _position.y);
        L10_2.crc2New.fillStyle = gradient;
        L10_2.crc2New.arc(0, 0, secondNumber, 0, 2 * Math.PI);
        L10_2.crc2New.fill();
        L10_2.crc2New.restore();
        console.log("Sun", _position);
    }
    L10_2.drawSun = drawSun;
    function drawMountains(_position, _min, _max, _color) {
        let stepMin = 50;
        let stepMax = 100;
        let x = 0;
        L10_2.crc2New.save();
        L10_2.crc2New.translate(_position.x, _position.y);
        L10_2.crc2New.beginPath();
        L10_2.crc2New.moveTo(0, 0);
        L10_2.crc2New.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax);
            let y = -_min - Math.random() * (_max - _min);
            L10_2.crc2New.lineTo(x, y);
        } while (x < L10_2.crc2New.canvas.width);
        L10_2.crc2New.lineTo(x, 0);
        L10_2.crc2New.closePath();
        //Farbverlauf/Gradient
        /*  let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
          gradient.addColorStop(0, _colorLow);
          gradient.addColorStop(0.7, _colorHigh);*/
        L10_2.crc2New.fillStyle = _color;
        L10_2.crc2New.fill();
        L10_2.crc2New.restore();
    }
    L10_2.drawMountains = drawMountains;
    function drawTree(_min, _max) {
        //Dreiecke untersch. Farben
        let treesColors = ["#182E1A", "#224225", "#356E3C"];
        //Variablen 
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let horizon = L10_2.crc2New.canvas.height * L10_2.goldenNew;
        //Log
        do {
            let y = -_min - Math.random() * (_max - _min);
            L10_2.crc2New.save();
            L10_2.crc2New.translate(x, y + (horizon + 30));
            //Stamm
            L10_2.crc2New.fillStyle = "#473306";
            L10_2.crc2New.fillRect(0, 0, 30, -40);
            let y1 = -40;
            let y2 = -100;
            for (let x = 0; x < 3; x++) {
                //Dreiecke -> 3, übereinander
                L10_2.crc2New.beginPath();
                L10_2.crc2New.moveTo(-50, y1);
                L10_2.crc2New.lineTo(80, y1);
                L10_2.crc2New.lineTo(15, y2);
                L10_2.crc2New.closePath();
                L10_2.crc2New.fillStyle = treesColors[x];
                L10_2.crc2New.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            L10_2.crc2New.restore();
        } while (x < L10_2.crc2New.canvas.width);
    }
    L10_2.drawTree = drawTree;
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=background.js.map