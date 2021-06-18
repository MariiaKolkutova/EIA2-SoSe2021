"use strict";
var L11;
(function (L11) {
    class FlowersNew {
        constructor(_flowerType, _xPos, _yRandomMin, _yRandomMax) {
            //
            this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
            this.nectarCounter = 0;
            this.nectarLength = 2;
            this.x = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            //
        }
        updateNectar() {
            //;
        }
    }
    L11.FlowersNew = FlowersNew;
})(L11 || (L11 = {}));
//# sourceMappingURL=flower.js.map