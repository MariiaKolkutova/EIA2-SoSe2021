namespace L11 {

    //Komilitonen mit denen ich zusammengearbeitet habe: Huu Thien Phan Ngoc, Mona Kabelka und Cristina Däschner

    window.addEventListener("load", handleLoad);

    export let crc2New: CanvasRenderingContext2D;
    export let goldenNew: number = 0.62;
    let flowers: FlowersNew[] = [];
    let imageData: ImageData;
    //Array für die Superklasse
    let movingAnimations: MovingAnimations[] = [];

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2New = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        createBees(25);
        createBackground();
        createFlowers();
        createCloud();
        imageData = crc2New.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }

    function createBackground(): void {
        drawBackground();
        drawSun({ x: crc2New.canvas.width / 4, y: crc2New.canvas.height * 0.12 });
        drawMountains({ x: 0, y: crc2New.canvas.height * goldenNew }, 200, 300, "#616161");
        drawMountains({ x: 0, y: crc2New.canvas.height * goldenNew }, 150, 200, "#a1a1a1");
        drawTree(0, 15);
    }

    function createFlowers(): void {
        let x: number = 0;
        do {
            let flowerType: number = Math.floor(Math.random() * 2) + 1;
            if (flowerType == 1) {
                flowers.push(new StarFlower(Math.floor(Math.random() * 2) + 1, x, 50 + (crc2New.canvas.height * goldenNew), crc2New.canvas.height * 0.9));
            }
            else {
                flowers.push(new RoundFlower(Math.floor(Math.random() * 2) + 1, x, 50 + (crc2New.canvas.height * goldenNew), crc2New.canvas.height * 0.9));
            }

            x += 10 + Math.random() * (50 - 10);
        }
        while (x < crc2New.canvas.width);
    }

    function createBees(_nBee: number): void {
        for (let index: number = 0; index < _nBee; index++) {

            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX: number = (Math.random() - 0.5) * 5;
            let randomVelocityY: number = (Math.random() - 0.5) * 5;

            movingAnimations.push(new BeesNew({ x: crc2New.canvas.width / 25, y: crc2New.canvas.height * goldenNew }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }

    function createCloud(): void {
        movingAnimations.push(new CloudNew({ x: crc2New.canvas.width * .10, y: crc2New.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movingAnimations.push(new CloudNew({ x: crc2New.canvas.width * .5, y: crc2New.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }

    function animate(): void {

        requestAnimationFrame(animate);

        crc2New.clearRect(0, 0, crc2New.canvas.width, crc2New.canvas.height);
        crc2New.putImageData(imageData, 0, 0);
        
        for (let index: number = 0; index < flowers.length; index ++) {
            flowers[index].updateNectar();
        }

        for (let index: number = 0; index < movingAnimations.length; index++) {
            movingAnimations[index].update();
            movingAnimations[index].draw();
        }
    }
}