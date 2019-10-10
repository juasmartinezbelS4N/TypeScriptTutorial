export {}

type Heroe ={
    nombre:string, 
    poderes:any[],
    edad:number,
    getNombre:()=>string,
    //heroe: Heroe
}


let flash: {nombre:string, poderes:any[], edad:number, getNombre:()=>string}={
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Correr rapido", "Viajar por el tiempo", 24],
    getNombre(){
        return this.nombre;
    }
}

let supermansito: {nombre:string, poderes:any[], edad:number, getNombre:()=>string}={
    nombre: "Clark Kent",
    edad: 30,
    poderes: ["Volar", "BS", 30],
    getNombre(){
        return this.nombre;
    }
}
console.log(flash.getNombre());



let flash2={
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Correr rapido", "Viajar por el tiempo", 24],
    getNombre(){
        return this.nombre;
    }
}