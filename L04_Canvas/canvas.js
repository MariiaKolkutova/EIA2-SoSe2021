"use strict";
var canvas;
(function (canvas_1) {
    window.addEventListener("load", handelLoad);
    let canvas;
    let crc2;
    let canvasColour = ["black", "lavendel", "purple", "red", "grey"];
    function handelLoad() {
        canvas = document.getElementById("myCanvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        for (let index = 0; index < 40; index++) {
            let firstNumber = Math.floor(Math.random() * Math.floor(canvas.width));
            let secondNumber = Math.floor(Math.random() * Math.floor(canvas.height));
            let thrirdNumber = Math.floor(Math.random() * Math.floor(5));
            let fourthNumber = Math.floor(Math.random() * Math.floor(4));
            //Kreis
            crc2.beginPath();
            crc2.arc(firstNumber, secondNumber, 40, 0, fourthNumber * Math.PI, true);
            crc2.strokeStyle = canvasColour[thrirdNumber];
            crc2.stroke();
            //Path
            let path = new Path2D();
            path.arc(firstNumber, secondNumber, 40, 0, 2 * Math.PI);
            crc2.stroke(path);
        }
        for (let index = 0; index < 40; index++) {
            let firstNumber = Math.floor(Math.random() * Math.floor(canvas.width));
            let secondNumber = Math.floor(Math.random() * Math.floor(canvas.height));
            let thrirdNumber = Math.floor(Math.random() * Math.floor(5));
            let fourthNumber = Math.floor(Math.random() * Math.floor(4));
            //Linien
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.arc(firstNumber, secondNumber, 40, 0, fourthNumber * Math.PI, true);
            crc2.strokeStyle = canvasColour[thrirdNumber];
            crc2.stroke();
        }
    }
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map