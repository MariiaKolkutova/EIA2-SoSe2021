"use strict";
var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.addEventListener("click", setInfoBox);
        document.body.addEventListener("keyup", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let coordinates = "X coords: " + x + ", Y coords: " + y;
        let theTarget = _event.target;
        let span = document.querySelector("span");
        span.innerHTML = coordinates + theTarget;
        span.style.left = x + "px";
        span.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=a3.js.map