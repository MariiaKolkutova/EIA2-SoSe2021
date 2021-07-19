namespace Endabgabe {

    //Fußballfeld gezeichnet 
    export function drawField(): void {
        //Fußballfeld
        crc2.beginPath();
        crc2.fillStyle = "rgb(117, 159, 105)";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.fill();
        crc2.closePath();

        //Mittelkreis
        crc2.beginPath();
        crc2.arc(450, 250, 70, 0, 2 * Math.PI, false);
        crc2.strokeStyle = "white";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();

        //Außenfeldlinie
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.moveTo(30, 30);
        crc2.lineTo(870, 30);
        crc2.lineTo(870, 470);
        crc2.lineTo(30, 470);
        crc2.lineTo(30, 30);
        crc2.stroke();
        crc2.closePath();

        //Mittellinie
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.moveTo(450, 30);
        crc2.lineTo(450, 470);
        crc2.closePath();
        crc2.stroke();

        //Torraum links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(30, 175, 50, 150);
        crc2.stroke();

        //Tor links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(5, 200, 25, 100);
        crc2.stroke();

        //Strafraum links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(30, 100, 120, 300);
        crc2.stroke();

        //Strafraumhalbkreis links
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.arc(150, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, false);
        crc2.stroke();

        //Torraum rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(820, 175, 50, 150);
        crc2.stroke();

        //Strafraum rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(750, 100, 120, 300);
        crc2.stroke();

        //Tor rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.rect(870, 200, 25, 100);
        crc2.stroke();

        //Strafraumhalbkreis rechts
        crc2.beginPath();
        crc2.strokeStyle = "white";
        crc2.arc(750, 250, 60, 1.5 * Math.PI, 0.5 * Math.PI, true);
        crc2.stroke();

    }
}
