//var: trae muchos problemas en Javascript.
// Mejor usar 'let'
var esSuperman = true;
var esBatman; //No hay valor asignado
var esAquaman = true; //No se declara tipo. No se recomienda, aunque sí detecta error
//esAquaman = "meme"; //->Type '"meme"' is not assignable to type 'boolean'.
if (esSuperman) {
    console.log("Estamos salvados");
}
else {
    console.log("NOOOOOOOO");
}
esSuperman = convertirClark();
function convertirClark() {
    //return "no;"    //<--Detecta el tipo al que se ha convertido. Solo será positivo si es booleano
    return false;
}
