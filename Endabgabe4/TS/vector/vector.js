"use strict";
var Endabgabe4;
(function (Endabgabe4) {
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static getdistance(_v0, _v1) {
            let distanceX = _v0.x - _v1.x;
            let distanceY = _v0.y - _v1.y;
            return Math.hypot(distanceX, distanceY);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Endabgabe4.Vector = Vector;
})(Endabgabe4 || (Endabgabe4 = {}));
//# sourceMappingURL=vector.js.map