/* Funciones para el index */
/* Muestra los cards de integrantes */

const mostrarintegrantes = document.getElementById('sobrenosotros'); 
const tarjetas = document.querySelectorAll('.cardintegrantes'); 

mostrarintegrantes.addEventListener('click', function(event){ 
    event.preventDefault(); 

    tarjetas.forEach(function(tarjeta){ 
        tarjeta.style.display = 'block';       
    });
        
});
/* Funciones para las paginas de conjuntos */ 

/*Muestra alerta para recordar que se deben insertar comas en cada elemento del conjunto */ 
var conjuntoAinput = document.getElementById('conjuntoAinput');
var agregarcomas = document.getElementById('agregarcomas');

conjuntoAinput.addEventListener('click', function() {
    agregarcomas.style.display = 'block';
    setTimeout(function() {
        agregarcomas.style.display = 'none';
        }, 5000);
});

/* Union de conjuntos */
var conjuntoA, conjuntoB; 

function calcularUnion(){ 
    conjuntoA = document.getElementById('conjuntoA').value.split(', ').map(element => element.trim()); 
    conjuntoB = document.getElementById('conjuntoB').value.split(', ').map(element => element.trim()); 
    var union = [...new Set([...conjuntoA, ...conjuntoB])]; 

    document.getElementById('resultado').textContent = 'A U B {' + union.join(',') + '}';
}
/* Intersección de conjuntos */ 
var conjuntoIA, conjuntoIB;

function calcularInterseccion() {
    conjuntoIA = new Set(document.getElementById('conjuntoIA').value.split(', ').map(element => element.trim()));
    conjuntoIB = new Set(document.getElementById('conjuntoIB').value.split(', ').map(element => element.trim()));

    var interseccionAB = new Set([...conjuntoIA].filter(x => conjuntoIB.has(x)));

    document.getElementById('resultadoo2').textContent = 'A ∩ B {' + [...interseccionAB].join(', ') + '}';
}
/* Diferencia de conjuntos */ 



/* Complemento de conjuntos */ 

