"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Fußballfeld gezeichnet 
    function drawField() {
        //Fußballfeld
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.fillStyle = "rgb(117, 159, 105)";
        Endabgabe.crc2.fillRect(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.crc2.fill();
        Endabgabe.crc2.closePath();
        //Mittelkreis
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.arc(450, 250, 70, 0, 2 * Math.PI, false);
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.fill();
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.closePath();
        //Außenfeldlinie
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.moveTo(30, 30);
        Endabgabe.crc2.lineTo(870, 30);
        Endabgabe.crc2.lineTo(870, 470);
        Endabgabe.crc2.lineTo(30, 470);
        Endabgabe.crc2.lineTo(30, 30);
        Endabgabe.crc2.stroke();
        Endabgabe.crc2.closePath();
        //Mittellinie
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.moveTo(450, 30);
        Endabgabe.crc2.lineTo(450, 470);
        Endabgabe.crc2.closePath();
        Endabgabe.crc2.stroke();
        //Torraum links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(30, 175, 50, 150);
        Endabgabe.crc2.stroke();
        //Tor links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(5, 200, 25, 100);
        Endabgabe.crc2.stroke();
        //Strafraum links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(30, 100, 120, 300);
        Endabgabe.crc2.stroke();
        //Strafraumhalbkreis links
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.arc(150, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        Endabgabe.crc2.stroke();
        //Torraum rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(820, 175, 50, 150);
        Endabgabe.crc2.stroke();
        //Strafraum rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(750, 100, 120, 300);
        Endabgabe.crc2.stroke();
        //Tor rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.rect(870, 200, 25, 100);
        Endabgabe.crc2.stroke();
        //Strafraumhalbkreis rechts
        Endabgabe.crc2.beginPath();
        Endabgabe.crc2.strokeStyle = "white";
        Endabgabe.crc2.arc(750, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        Endabgabe.crc2.stroke();
    }
    Endabgabe.drawField = drawField;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=footballfield.js.map