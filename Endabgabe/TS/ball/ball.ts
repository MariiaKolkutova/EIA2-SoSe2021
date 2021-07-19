namespace Endabgabe {

    //separate Klasse 
    export class Ball {
        private position: Vector;
        private newPosition: Vector;
        private playerIndex: number;
        private ballKey: boolean = true;
        private precisionChecker: number = 100;

        constructor(_position: Vector) {
            this.position = _position;
            this.draw();
        }

        public get ballPos(): Vector {
            return this.position;
        }

        public get getKey(): boolean {
            return this.ballKey;
        }

        public setKey(_key: boolean): void {
            this.ballKey = _key;
        }

        public setnewPosition(_newPosition: Vector): void {
            let distanceBall: number = Vector.getdistance(_newPosition, this.position);
            let chosenPlayer: Player = <Player>players[this.playerIndex];
            let random: number = Math.random();
            let newX: number;
            let newY: number;
            if (random >= 0.5) {
                newX = _newPosition.x + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newX = _newPosition.x - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            random = Math.random();
            if (random >= 0.5) {
                newY = _newPosition.y + ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            else {
                newY = _newPosition.y - ((distanceBall / this.precisionChecker) * chosenPlayer.playerPrecision);
            }
            this.newPosition = new Vector(newX, newY);
        }

        public draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
        }

        public update(): void {
            if (key == true) {
                let diff: Vector = Vector.getDifference(this.newPosition, this.position);
                if (Math.abs(diff.x) < 1 && Math.abs(diff.y) < 1) {
                    key = false;
                    this.checkEnviroment();
                }
                else {
                    diff.scale(0.03);
                    this.position.add(diff);
                    this.checkEnviroment();
                }
            }
            else {
                this.draw();
                this.checkEnviroment();
            }

            this.checkOut();
            this.checkGoal();
            
        }
        
        private checkGoal(): void {
            if (this.position.x < 30) {
                if (this.position.y < 300 && this.position.y > 200) {
                    scoreB++;
                    scoreBDOMElement.innerHTML = String(scoreB);
                    window.alert("Goal for Team B");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
            else if (this.position.x > 870) {
                if (this.position.y < 300 && this.position.y > 200) {
                    scoreA++;
                    scoreADOMElement.innerHTML = String(scoreA);
                    window.alert("Goal for Team A");
                    this.resetPosition();
                }
                else {
                    this.resetPosition();
                }
            }
        }

        private checkOut(): void {
            if (this.position.y > 470 || this.position.y < 30) {
                this.resetPosition();
            }
        }

        private resetPosition(): void {
            this.position.set(canvas.width / 2, canvas.height / 2);
            this.newPosition.set(canvas.width / 2, canvas.height / 2);
        }

        private checkEnviroment(): void {
            if (this.ballKey == true) {
                for (let index: number = 0; index < players.length; index++) {
                    let chosenPlayer: Player = <Player>players[index];
                    if (chosenPlayer.distance < 10) {
                        this.playerIndex = index;
                        posessionUpdate(index);
                        animationKey = false;
                        this.ballKey = false;
                        shootKey = true;
                        break;
                    }
                }
            }
        }
    }
}