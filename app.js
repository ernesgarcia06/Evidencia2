const botonBuscar = document.getElementById("botonBuscar");
const inputPais = document.getElementById("pais");
const nombre = document.getElementById("nombre");
const nombreoficial = document.getElementById("nombreOf");
const capital = document.getElementById("capital");
const bandera = document.getElementById("bandera");
const idioma = document.getElementById("idioma");
const region = document.getElementById("region");
const Zonahora = document.getElementById("hora");
const mapa = document.getElementById("mapa");

async function buscarPais(){
    const respuesta = await fetch("https://restcountries.com/v3.1/name/" + inputPais.value);
    const infoPais = await  respuesta.json();

};

botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    
    buscarPais();    
});