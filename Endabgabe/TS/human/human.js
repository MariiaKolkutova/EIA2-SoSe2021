"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Human = Superklasse, alles bezieht sich drauf, Grundaufbau  
    class Human {
        //Constructor wird nur einmal Aufgerufen 
        constructor(_position, _jerseyColor) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }
        //public= öffentlich, man bekommnt die Position die bei protected bei human entsteht/ gespeichert wird 
        get playerPosition() {
            return this.position;
        }
        //Auf draw(): in allen subklassen verweist durch Polymorphie 
        draw() {
            //polymorphie
        }
        //Auf update(): in allen subklassen verweist durch Polymorphie 
        update() {
            //polymorphie
        }
        setJersey(_color) {
            this.jerseyColor = _color;
        }
    }
    Endabgabe.Human = Human;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=human.js.map