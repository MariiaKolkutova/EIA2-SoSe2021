namespace Endabgabe {
    
    //Human = Superklasse, alles bezieht sich drauf, Grundaufbau  
    export abstract class Human {
        
        //Protected_ drauf kann man nur in der klasse und in subklassen, nicht komplett vom außen zugreifen  
        //3 haupteigenschaften jedes Menschens -> Geschwindigkeit, Position und Jerseycolor 
        protected velocity: number;
        //Vector= x/z Wert, nur die position gibt es bei human 
        protected position: Vector;
        protected jerseyColor: string;
        
        //Constructor wird nur einmal Aufgerufen 
        constructor(_position: Vector, _jerseyColor: string) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }   
        
        //public= öffentlich, man bekommnt die Position die bei protected bei human entsteht/ gespeichert wird 
        public get playerPosition(): Vector {
            return this.position;
        }
        
        //Auf draw(): in allen subklassen verweist durch Polymorphie 
        public draw(): void {
            //polymorphie
        }

        //Auf update(): in allen subklassen verweist durch Polymorphie 
        public update(): void {
            //polymorphie
        }
        
        public setJersey(_color: string): void {
            this.jerseyColor = _color;
        }
    }
}