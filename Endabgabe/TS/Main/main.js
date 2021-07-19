"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Zusammengearbeitet mit: Huu Thien Phan Ngoc, Mona Kabelka, Christina Däschner, Timur Yildirim 
    //alles wird geladen
    window.addEventListener("load", handleLoad);
    // export let golden: number = 0.62;
    /*enumeration von vier Hauptaufgaben des Spielers,
    Variablen um Unterscheiden in welcher Spielphase der Spieler sich befinden,
    wie eine Variable, eindeutung wo der spieler sich befindet*/
    let Task;
    (function (Task) {
        Task[Task["lookForBall"] = 0] = "lookForBall";
        Task[Task["walkToBall"] = 1] = "walkToBall";
        Task[Task["shootBall"] = 2] = "shootBall";
        Task[Task["walkToOrigin"] = 3] = "walkToOrigin";
        Task[Task["changePlayer"] = 4] = "changePlayer";
    })(Task = Endabgabe.Task || (Endabgabe.Task = {}));
    Endabgabe.animationKey = true;
    Endabgabe.shootKey = false;
    Endabgabe.players = [];
    Endabgabe.scoreA = 0;
    Endabgabe.scoreB = 0;
    function handleLoad() {
        //HTML PARAGRAPHEN
        Endabgabe.speedPlayer = document.querySelector("#speedPlayer");
        Endabgabe.precPlayer = document.querySelector("#precPlayer");
        Endabgabe.numberPlayer = document.querySelector("#numberPlayer");
        Endabgabe.teamPlayer = document.querySelector("#teamPlayer");
        Endabgabe.posession = document.querySelector("#posession");
        Endabgabe.speedSub = document.querySelector("#speedSubstitute");
        Endabgabe.precSub = document.querySelector("#precSubstitute");
        Endabgabe.numberSub = document.querySelector("#numberSubstitute");
        Endabgabe.teamSub = document.querySelector("#teamSubstitute");
        //HTML ELEMENTE
        Endabgabe.form = document.querySelector("#formLeft");
        Endabgabe.subPlayerDOMElement = document.querySelector("#subPlayer");
        Endabgabe.scoreADOMElement = document.querySelector("#scoreA");
        Endabgabe.scoreBDOMElement = document.querySelector("#scoreB");
        Endabgabe.changeBtn = document.querySelector("#changeBtn");
        //EVENT LISTENER
        Endabgabe.subPlayerDOMElement.addEventListener("change", Endabgabe.subChange);
        Endabgabe.changeBtn.addEventListener("click", Endabgabe.exchangePlayer);
        document.addEventListener("keydown", Endabgabe.switchForm);
        Endabgabe.form.addEventListener("change", Endabgabe.handleChange);
        //CANVAS
        Endabgabe.canvas = document.querySelector("canvas");
        Endabgabe.canvas.addEventListener("click", shootBall);
        Endabgabe.crc2 = Endabgabe.canvas.getContext("2d");
        Endabgabe.canvas.width = 900;
        Endabgabe.canvas.height = 500;
        //CALL ALL FUNCTIONS
        Endabgabe.drawField();
        Endabgabe.imageData = Endabgabe.crc2.getImageData(0, 0, Endabgabe.canvas.width, Endabgabe.canvas.height);
        Endabgabe.ball = new Endabgabe.Ball(new Endabgabe.Vector(Endabgabe.canvas.width * 0.5, Endabgabe.canvas.height * 0.5));
        createPlayer();
        createReferees();
        Endabgabe.handleChange();
        Endabgabe.formIntoHTML(0);
        animate();
    }
    //Funktion um die Spieler zu kreieren 
    //14 Spieler pro jedes Team, 11+3 Auswechsel, mit dem Index alle durchgehen und nacheinnder erstellen  
    // wenn Index kleiner als 11 ist -> Onfield Players 
    /*var Player mit dem Typ player, neues Objekt von der Klasser Player erstellt,
    vorbestimmte position x, y aus der vorbestimmten Position aus dem Array nach der Reheinfolge bestimmt, für Team1 */
    //New Player ist ein realles objekt von dem spieler, erbt alles vom human 
    //Properties den Playern zugeordnet SetProperties
    // ins Human die Player gepusht, damit die Information übertragen wird 
    //HUMANS.push(player) -> überall verändern!!!
    // wenn mehr als 11 Spielers für ein team bereits erstellt, Offfield Players 
    function createPlayer() {
        for (let indexA = 0; indexA < 2; indexA++) {
            //A
            for (let indexB = 0; indexB < 11; indexB++) {
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam1[indexB].x, Endabgabe.positionsTeam1[indexB].y), "red", true, randomNumber, "A"));
                }
                else {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam2[indexB].x, Endabgabe.positionsTeam2[indexB].y), "blue", true, randomNumber, "B"));
                }
            }
        }
        for (let indexA = 0; indexA < 2; indexA++) {
            //B
            for (let indexB = 11; indexB < 14; indexB++) {
                console.log(indexB);
                let randomNumber = Math.floor(1 + Math.random() * (50 - 1));
                if (indexA == 0) {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam1[indexB].x, Endabgabe.positionsTeam1[indexB].y), "red", false, randomNumber, "A"));
                }
                else {
                    Endabgabe.players.push(new Endabgabe.Player(new Endabgabe.Vector(Endabgabe.positionsTeam2[indexB].x, Endabgabe.positionsTeam2[indexB].y), "blue", false, randomNumber, "B"));
                }
            }
        }
    }
    function createReferees() {
        Endabgabe.players.push(new Endabgabe.Referee(new Endabgabe.Vector(450, 150), "white"));
        Endabgabe.players.push(new Endabgabe.Linereferee(new Endabgabe.Vector(680, 15), "pink"));
        Endabgabe.players.push(new Endabgabe.Linereferee(new Endabgabe.Vector(230, 485), "pink"));
    }
    // Funktion um Ball zu schießen, klicken auf Felld 
    //MouseEvent -> um drauf klicken zu können 
    function shootBall(_event) {
        console.log(Endabgabe.shootKey);
        //shootKey == true --> darf man auf dem Felld klicken und somit Ball "schießen" 
        if (Endabgabe.shootKey == true) {
            //macht das Verhältnis des felldes bei der Veränderung der maßen wieder normal/ proportional
            let rect = Endabgabe.canvas.getBoundingClientRect();
            //Verweist auf die Position wo man auf dem felld geklcikt hat und speichert die daten 
            let mouse = new Endabgabe.Vector(_event.clientX - rect.left, _event.clientY - rect.top);
            // ist im Player vorhanden
            Endabgabe.key = true; // ist im Player vorhanden
            //neue Position vom Ball übertragen (da wo man hingeklcikt hat)
            Endabgabe.ball.setnewPosition(mouse);
            //Animation wird wieder gestartet, key auf true gesetzt 
            Endabgabe.animationKey = true;
            // man kann den Ball nicht anklicken bzw auf dem Felld klicken während der Ball rollt bzw. die Animation rollt 
            Endabgabe.shootKey = false;
            animate();
        }
    }
    //Animation - Bild für Bild wird gezeichnet 60 mal pro sec damit es flüßig abläuft  
    function animate() {
        // wenn animationkey true ist
        if (Endabgabe.animationKey == true) {
            //Frame für Frames animiert 
            requestAnimationFrame(animate);
            Endabgabe.crc2.clearRect(0, 0, Endabgabe.crc2.canvas.width, Endabgabe.crc2.canvas.height);
            Endabgabe.crc2.putImageData(Endabgabe.imageData, 0, 0);
            //Alle Spieler Updaten und animieren auf einmal
            for (let index = 0; index < Endabgabe.players.length; index++) {
                Endabgabe.players[index].update();
                Endabgabe.players[index].draw();
            }
            Endabgabe.ball.update();
            Endabgabe.ball.draw();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=main.js.map