"use strict";
exports.__esModule = true;
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal, puedePelear) {
        this.puedePelear = true;
        this.peleasGanadas = 0;
        console.log("Se ejecutó EL DESTRUCTOR");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log(puedePelear);
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Tom Sawyer");
var barbillaRoja = new Avenger("Barbilla Roja", "IM", "Crimson Chin", 89);
console.log(antman);
