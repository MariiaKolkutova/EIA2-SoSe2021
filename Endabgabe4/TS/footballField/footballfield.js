"use strict";
var Endabgabe4;
(function (Endabgabe4) {
    function drawField() {
        //Fußballfeld
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.fillStyle = "rgb(117, 159, 105)";
        Endabgabe4.crc2.fillRect(0, 0, Endabgabe4.canvas.width, Endabgabe4.canvas.height);
        Endabgabe4.crc2.fill();
        Endabgabe4.crc2.closePath();
        //Mittelkreis
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.arc(450, 250, 70, 0, 2 * Math.PI, false);
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.fill();
        Endabgabe4.crc2.stroke();
        Endabgabe4.crc2.closePath();
        //Außenfeldlinie
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.moveTo(30, 30);
        Endabgabe4.crc2.lineTo(870, 30);
        Endabgabe4.crc2.lineTo(870, 470);
        Endabgabe4.crc2.lineTo(30, 470);
        Endabgabe4.crc2.lineTo(30, 30);
        Endabgabe4.crc2.stroke();
        Endabgabe4.crc2.closePath();
        //Mittellinie
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.moveTo(450, 30);
        Endabgabe4.crc2.lineTo(450, 470);
        Endabgabe4.crc2.closePath();
        Endabgabe4.crc2.stroke();
        //Torraum links
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.rect(30, 175, 50, 150);
        Endabgabe4.crc2.stroke();
        //Tor links
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.rect(5, 200, 25, 100);
        Endabgabe4.crc2.stroke();
        //Strafraum links
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.rect(30, 100, 120, 300);
        Endabgabe4.crc2.stroke();
        //Strafraumhalbkreis links
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.arc(150, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        Endabgabe4.crc2.stroke();
        //Torraum rechts
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.rect(820, 175, 50, 150);
        Endabgabe4.crc2.stroke();
        //Strafraum rechts
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.rect(750, 100, 120, 300);
        Endabgabe4.crc2.stroke();
        //Tor rechts
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.rect(870, 200, 25, 100);
        Endabgabe4.crc2.stroke();
        //Strafraumhalbkreis rechts
        Endabgabe4.crc2.beginPath();
        Endabgabe4.crc2.strokeStyle = "white";
        Endabgabe4.crc2.arc(750, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        Endabgabe4.crc2.stroke();
    }
    Endabgabe4.drawField = drawField;
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=footballfield.js.map