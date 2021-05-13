namespace CanvasAlley {

    window.addEventListener("load", handeLoad);
    
    //Komilitonen mit denen zusammengearbeitet: Huu Thien Phan Ngoc, Mona Kabelka

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;

    interface Vector {
        x: number;
        y: number;
    }

    function handeLoad(): void {
        canvas = <HTMLCanvasElement>document.getElementById("canvasAllay");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let horizon: number = crc2.canvas.height * golden;
        let posMountains: Vector = { x: 0, y: horizon };

        drawBackground();
        drawMountain(posMountains, 75, 200, "grey", "black");
        drawMountain(posMountains, 50, 150, "grey", "black");
        drawSun({ x: 200, y: 75 });
        drawTree(-10, -100);
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawCloud({ x: 900, y: 100 }, { x: 450, y: 75 });
        drawCloud({ x: 800, y: 120 }, { x: 450, y: 100 });
        drawFlower1(-10, -130);
        drawFlower2(-20, -100);
    }

    function drawBackground(): void {
        //Gradient für den Backround 
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "rgb(156, 228, 255)");
        //gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "rgb(65, 128, 93)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("Background");
    }

    function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        /*größerere Schritte= größerer Abstand & mehr größeren Berge 
        vs kleinere Schritte= kleiner Abstand & kleinere + öter Ausschläge*/
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        //alte Nullstelle wird gespeichert 
        crc2.save();
        //neue Nullstelle wird plaziert und gespeichert
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        /* do schleife= es macht etwas bis while, x solange nicht größer als canvas.width */
        do {
            // x wird immer drauf addier +=
            // x darf nicht kleiner als 50 werden, deswegen stepmin +
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        //schließt den Path
        crc2.closePath();

        //Farbverlauf/Gradient
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();

        //neue Nullstelle wird anulliert
        crc2.restore();
    }
    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 10;
        let r2: number = 80;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 20%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawTree(_min: number, _max: number): void {

        let treesColors: string[] = [ "#182E1A", "#224225", "#356E3C"];
        //Variablen 
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;
        let horizon: number = crc2.canvas.height * golden;
        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 30));
            //Stamm
            crc2.fillStyle = "#473306";
            crc2.fillRect(0, 0, 30, -40);
            let y1: number = -40;
            let y2: number = -100;
            for (let x: number = 0; x < 3; x++) {
                //Dreiecke
                crc2.beginPath();
                crc2.moveTo(-50, y1);
                crc2.lineTo(80, y1);
                crc2.lineTo(15, y2);
                crc2.closePath();
                crc2.fillStyle = treesColors[x];
                crc2.fill();
                //
                y1 += -40;
                y2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        }
        while (x < crc2.canvas.width);
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 30;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }


    function drawFlower1(_min: number, _max: number): void {
        //Variablen 
        let stepMin: number = 10;
        let stepMax: number = 80;
        let x: number = 0;
        let horizon: number = crc2.canvas.height * golden;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 110));
            crc2.fillStyle = "#473306";
            crc2.fillRect(10.5, 4, 0.8, -10);
            crc2.fillStyle = "#86128A";
            crc2.beginPath();
            crc2.moveTo(10.8, -0.0);
            crc2.lineTo(14.1, -7.0);
            crc2.lineTo(21.8, -7.83);
            crc2.lineTo(16.2, -13.1);
            crc2.lineTo(17.5, -20.5);
            crc2.lineTo(10.8, -17.0);
            crc2.lineTo(4.12, -20.5);
            crc2.lineTo(5.5, -13.1);
            crc2.lineTo(0.1, -7.8);
            crc2.lineTo(7.5, -6.8);
            crc2.lineTo(10.8, -0);
            crc2.closePath();
            crc2.fill();
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        }
        while (x < crc2.canvas.width);
    }
    
    function drawFlower2(_min: number, _max: number): void {
        
        //Variablen 
        let stepMin: number = 10;
        let stepMax: number = 90;
        let x: number = 0;
        let horizon: number = crc2.canvas.height * golden;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 115));
            crc2.fillStyle = "#473306";
            crc2.fillRect(0.4, 20, 0.8, -10);
            crc2.beginPath();

            crc2.arc(0, 0, 10, 0, 4 * Math.PI, true);
            crc2.fillStyle = "#B80F28";
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.closePath();
            crc2.fill();

            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        }
        while (x < crc2.canvas.width);
    }

}
