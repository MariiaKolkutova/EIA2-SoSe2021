"use strict";
var L10_2;
(function (L10_2) {
    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka und Cristina Däschner
    L10_2.goldenNew = 0.62;
    let flowers = [];
    let imageData;
    //Array für die Superklasse
    let movingAnimations = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        L10_2.crc2New = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(25);
        createBackground();
        createFlowers();
        createCloud();
        imageData = L10_2.crc2New.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        L10_2.drawBackground();
        L10_2.drawSun({ x: L10_2.crc2New.canvas.width / 4, y: L10_2.crc2New.canvas.height * 0.12 });
        L10_2.drawMountains({ x: 0, y: L10_2.crc2New.canvas.height * L10_2.goldenNew }, 200, 300, "#616161");
        L10_2.drawMountains({ x: 0, y: L10_2.crc2New.canvas.height * L10_2.goldenNew }, 150, 200, "#a1a1a1");
        L10_2.drawTree(0, 15);
    }
    function createFlowers() {
        let x = 0;
        do {
            let flowerType = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new L10_2.StarFlower(Math.floor(Math.random() * 2) + 1, x, 50 + (L10_2.crc2New.canvas.height * L10_2.goldenNew), L10_2.crc2New.canvas.height * 0.9));
            }
            else {
                flowers.push(new L10_2.RoundFlower(Math.floor(Math.random() * 2) + 1, x, 50 + (L10_2.crc2New.canvas.height * L10_2.goldenNew), L10_2.crc2New.canvas.height * 0.9));
            }
            x += 10 + Math.random() * (50 - 10);
        } while (x < L10_2.crc2New.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            movingAnimations.push(new L10_2.BeesNew({ x: L10_2.crc2New.canvas.width / 25, y: L10_2.crc2New.canvas.height * L10_2.goldenNew }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        movingAnimations.push(new L10_2.CloudNew({ x: L10_2.crc2New.canvas.width * .10, y: L10_2.crc2New.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movingAnimations.push(new L10_2.CloudNew({ x: L10_2.crc2New.canvas.width * .5, y: L10_2.crc2New.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        L10_2.crc2New.clearRect(0, 0, L10_2.crc2New.canvas.width, L10_2.crc2New.canvas.height);
        L10_2.crc2New.putImageData(imageData, 0, 0);
        for (let index = 0; index < movingAnimations.length; index++) {
            movingAnimations[index].update();
            movingAnimations[index].draw();
        }
    }
})(L10_2 || (L10_2 = {}));
//# sourceMappingURL=main.js.map