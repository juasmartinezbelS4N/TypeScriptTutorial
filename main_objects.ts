export {}
let flash: {nombre:string, poderes:any[], edad:number, getNombre:()=>string}={
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Correr rapido", "Viajar por el tiempo", 24],
    getNombre(){
        return this.nombre;
    }
}

console.log(flash.getNombre());