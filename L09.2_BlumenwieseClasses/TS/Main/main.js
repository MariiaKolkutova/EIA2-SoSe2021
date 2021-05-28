"use strict";
var Bienen;
(function (Bienen) {
    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka und Cristina Däschner
    Bienen.golden = 0.62;
    let bienen = [];
    let flowers = [];
    let clouds = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Bienen.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(25);
        createBackground();
        createFlowers();
        createCloud();
        imageData = Bienen.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        Bienen.drawBackground();
        Bienen.drawSun({ x: Bienen.crc2.canvas.width / 4, y: Bienen.crc2.canvas.height * 0.12 });
        Bienen.drawMountains({ x: 0, y: Bienen.crc2.canvas.height * Bienen.golden }, 200, 300, "#616161");
        Bienen.drawMountains({ x: 0, y: Bienen.crc2.canvas.height * Bienen.golden }, 150, 200, "#a1a1a1");
        Bienen.drawTree(0, 15);
    }
    function createFlowers() {
        let x = 0;
        do {
            flowers.push(new Bienen.Flowers(Math.floor(Math.random() * 2) + 1, x, 50 + (Bienen.crc2.canvas.height * Bienen.golden), Bienen.crc2.canvas.height * 0.9));
            x += 10 + Math.random() * (50 - 10);
        } while (x < Bienen.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            bienen.push(new Bienen.Bees({ x: Bienen.crc2.canvas.width / 25, y: Bienen.crc2.canvas.height * Bienen.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        clouds.push(new Bienen.Cloud({ x: Bienen.crc2.canvas.width * .10, y: Bienen.crc2.canvas.height * .10 }));
        clouds.push(new Bienen.Cloud({ x: Bienen.crc2.canvas.width * .5, y: Bienen.crc2.canvas.height * .05 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Bienen.crc2.clearRect(0, 0, Bienen.crc2.canvas.width, Bienen.crc2.canvas.height);
        Bienen.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bienen.length; index++) {
            bienen[index].update();
        }
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(Bienen || (Bienen = {}));
//# sourceMappingURL=main.js.map