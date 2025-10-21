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
    const respuesta = await fetch("https://restcountries.com/v3.1/name/" + inputPais.value + "?fullText=true");
    const infoPais = await  respuesta.json();

    const pais = infoPais[0];
    nombre.innerText = pais.name.common;
    nombreoficial.innerText = pais.name.official;
    capital.innerText = pais.capital;
    region.innerText = pais.region
    idioma.innerText = Object.values(pais.languages)[0];
    Zonahora.innerText = pais.timezones;
    bandera.src =  pais.flags.png;
    mapa.src = "https://www.google.com/maps?q=" + pais.name.common + "&output=embed";

};

botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    
    buscarPais();    
});