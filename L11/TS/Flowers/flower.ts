namespace L11 {

    export abstract class FlowersNew {
        protected x: number;
        protected flowerType: number;
        protected yRandomMin: number;
        protected yRandomMax: number;
        //
        protected nectarValue: number = Math.floor(Math.random() * 2000) + 1000;
        protected nectarCounter: number = 0;
        protected nectarLength: number = 2;
        protected yPos: number;

        constructor(_flowerType: number, _xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.x = _xPos;
            this.flowerType = _flowerType;

            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        public draw(): void {
            //
        }
        public updateNectar(): void {
            //;
        }
    }

}