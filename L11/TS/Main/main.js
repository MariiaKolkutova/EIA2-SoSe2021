"use strict";
var L11;
(function (L11) {
    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka und Cristina Däschner
    window.addEventListener("load", handleLoad);
    L11.goldenNew = 0.62;
    let flowers = [];
    let imageData;
    //Array für die Superklasse
    let movingAnimations = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        L11.crc2New = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(25);
        createBackground();
        createFlowers();
        createCloud();
        imageData = L11.crc2New.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        L11.drawBackground();
        L11.drawSun({ x: L11.crc2New.canvas.width / 4, y: L11.crc2New.canvas.height * 0.12 });
        L11.drawMountains({ x: 0, y: L11.crc2New.canvas.height * L11.goldenNew }, 200, 300, "#616161");
        L11.drawMountains({ x: 0, y: L11.crc2New.canvas.height * L11.goldenNew }, 150, 200, "#a1a1a1");
        L11.drawTree(0, 15);
    }
    function createFlowers() {
        let x = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new L11.StarFlower(Math.floor(Math.random() * 2) + 1, x, 50 + (L11.crc2New.canvas.height * L11.goldenNew), L11.crc2New.canvas.height * 0.9));
            }
            else {
                flowers.push(new L11.RoundFlower(Math.floor(Math.random() * 2) + 1, x, 50 + (L11.crc2New.canvas.height * L11.goldenNew), L11.crc2New.canvas.height * 0.9));
            }
            x += 10 + Math.random() * (50 - 10);
        } while (x < L11.crc2New.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            movingAnimations.push(new L11.BeesNew({ x: L11.crc2New.canvas.width / 25, y: L11.crc2New.canvas.height * L11.goldenNew }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        movingAnimations.push(new L11.CloudNew({ x: L11.crc2New.canvas.width * .10, y: L11.crc2New.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movingAnimations.push(new L11.CloudNew({ x: L11.crc2New.canvas.width * .5, y: L11.crc2New.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        L11.crc2New.clearRect(0, 0, L11.crc2New.canvas.width, L11.crc2New.canvas.height);
        L11.crc2New.putImageData(imageData, 0, 0);
        for (let index = 0; index < flowers.length; index++) {
            flowers[index].updateNectar();
        }
        for (let index = 0; index < movingAnimations.length; index++) {
            movingAnimations[index].update();
            movingAnimations[index].draw();
        }
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=main.js.map