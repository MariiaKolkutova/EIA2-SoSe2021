namespace canvas {

    window.addEventListener("load", handelLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let canvasColour: string[] = ["black", "lavendel", "purple", "red", "grey"];

    function handelLoad(): void {

        canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let index: number = 0; index < 40; index++) {

            let firstNumber: number = Math.floor(Math.random() * Math.floor(canvas.width));
            let secondNumber: number = Math.floor(Math.random() * Math.floor(canvas.height));
            let thrirdNumber: number = Math.floor(Math.random() * Math.floor(5));
            let fourthNumber: number = Math.floor(Math.random() * Math.floor(40));
            //Kreis
            crc2.beginPath();
            crc2.arc(firstNumber, secondNumber, fourthNumber, 0, 4 * Math.PI, true);
            crc2.strokeStyle = canvasColour[thrirdNumber];
            crc2.stroke();
            //Path
            let path: Path2D = new Path2D();
            path.arc(firstNumber, secondNumber, 40, 0, 2 * Math.PI);
            crc2.stroke(path);
        }

        for (let index: number = 0; index < 40; index++) {

            let firstNumber: number = Math.floor(Math.random() * Math.floor(canvas.width));
            let secondNumber: number = Math.floor(Math.random() * Math.floor(canvas.height));
            let thrirdNumber: number = Math.floor(Math.random() * Math.floor(5));
            let fourthNumber: number = Math.floor(Math.random() * Math.floor(40));
            //Linien
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(canvas.width, canvas.height);
            crc2.arc(firstNumber, secondNumber, fourthNumber, 0, 4 * Math.PI, true);
            crc2.strokeStyle = canvasColour[thrirdNumber];
            crc2.stroke();
        }
    }
}