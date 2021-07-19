"use strict";
var Endabgabe;
(function (Endabgabe) {
    //Klasse= Vector 
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        //Difference, Unterschied zwischen x/y -> für Ball, nicht die Distanz  
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        //Distanz zwischen Spieler_Ball 
        static getdistance(_v0, _v1) {
            let distanceX = _v0.x - _v1.x;
            let distanceY = _v0.y - _v1.y;
            return Math.hypot(distanceX, distanceY);
        }
        //Werte werden von den Atributen gespichert 
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Skaliert?
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        //addiert? auf ein Vektor 
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        //Ursprungsposition wird gespeichert, 
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Endabgabe.Vector = Vector;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=vector.js.map