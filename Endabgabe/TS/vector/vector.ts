namespace Endabgabe {

  //Klasse= Vector 
  export class Vector {
    public x: number;
    public y: number;

    public constructor(_x: number = 0, _y: number = 0) {
      this.set(_x, _y);
    }

    //Difference, Unterschied zwischen x/y -> für Ball, nicht die Distanz  
    public static getDifference(_v0: Vector, _v1: Vector): Vector {
      return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
    }
    //Distanz zwischen Spieler_Ball 
    public static getdistance(_v0: Vector, _v1: Vector): number {
      let distanceX: number = _v0.x - _v1.x;
      let distanceY: number = _v0.y - _v1.y;
      return Math.hypot(distanceX, distanceY);
    }
    //Werte werden von den Atributen gespichert 
    public set(_x: number, _y: number): void {
      this.x = _x;
      this.y = _y;
    }
    //Skaliert?
    public scale(_factor: number): void {
      this.x *= _factor;
      this.y *= _factor;
    }
    //addiert? auf ein Vektor 
    public add(_addend: Vector): void {
      this.x += _addend.x;
      this.y += _addend.y;
    }

    //Ursprungsposition wird gespeichert, 
    public copy(): Vector {
      return new Vector(this.x, this.y);
    }
  }
}