"use strict";
exports.__esModule = true;
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
function enviarMision(xmen) {
    console.log("Enviado a: " + xmen.nombre);
}
;
function enviarAlCuartel(xmen) {
    console.log("Enviado a: " + xmen.nombre);
}
;
var wolverine = {
    nombre: "Wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarAlCuartel(wolverine);
