"use strict";
var Endabgabe4;
(function (Endabgabe4) {
    class Human {
        constructor(_position, _jerseyColor) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }
        get playerPosition() {
            return this.position;
        }
        draw() {
            //polymorphie
        }
        update() {
            //polymorphie
        }
        setJersey(_color) {
            this.jerseyColor = _color;
        }
    }
    Endabgabe4.Human = Human;
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=human.js.map