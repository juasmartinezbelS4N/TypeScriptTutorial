export {}

class Avenger{
    //nombre:string = "Aaaantman"; alternativ;a
    nombre:string
    equipo:string;
    nombreReal:string;
    puedePelear:boolean = true;
    peleasGanadas:number = 0;

    constructor( nombre:string, equipo:string, nombreReal:string, puedePelear?:number){
        console.log("Se ejecutó EL DESTRUCTOR")
        this.nombre=nombre;
        this.equipo=equipo;
        this.nombreReal=nombreReal;
        console.log(puedePelear);
    }
}

let antman:Avenger = new Avenger("Antman","Cap", "Tom Sawyer");
let barbillaRoja:Avenger = new Avenger("Barbilla Roja","IM", "Crimson Chin", 89);

console.log(antman);