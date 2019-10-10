export {}

interface Xmen{
    nombre:string,
    poder:string,
}

/*
function enviarMision(xmen:{nombre:string}){
    console.log("Enviado a: "+xmen.nombre)
};


function enviarAlCuartel(xmen:{nombreXmen:string}){
    console.log("Enviado a: "+xmen.nombreXmen)
};

let wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
}*/


function enviarMision(xmen:Xmen){
    console.log("Enviado a: "+xmen.nombre)
};


function enviarAlCuartel(xmen: Xmen){
    console.log("Enviado a: "+xmen.nombre)
};

let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "Regeneración"
}

enviarMision(wolverine);
enviarAlCuartel(wolverine);