/* Funciones para el index */







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
function mostrarconjuntoC(){ 
    var idconjuntoC = document.getElementById('conjuntoC'); 
    var resultado2 = document.getElementById('resultado2'); 
    resultado2.style.display = 'none'; 

    if(idconjuntoC.style.display === 'none'){ 
        idconjuntoC.style.display = 'block'; 
    }else{ 
        idconjuntoC.style.display = 'none'; 
    }
}

var conjuntoA, conjuntoB, conjuntoC; 

function calcularUnion(){ 
    conjuntoA = document.getElementById('conjuntoA').value.split(', ').map(element => element.trim()); 
    conjuntoB = document.getElementById('conjuntoB').value.split(', ').map(element => element.trim()); 
    var union = [...new Set([...conjuntoA, ...conjuntoB])]; 

    document.getElementById('resultado').textContent = 'A U B {' + union.join(',') + '}';

    var idconjuntoC = document.getElementById('conjuntoC'); 
    var resultado2 = document.getElementById('resultado2'); 

    if(idconjuntoC.style.display === 'block'){ 
        var resultado2 = document.getElementById('resultado2'); 
        resultado2.textContent = ''; 
        resultado2.style.display = 'block';

        document.getElementById('btncalcresul').addEventListener('click', function(){
            calcularABC();
        });
    }else { 
        resultado2.style.display = 'none'; 
    }
}
function calcularABC() {
    conjuntoA = document.getElementById('conjuntoA').value.split(', ').map(element => element.trim()); 
    conjuntoB = document.getElementById('conjuntoB').value.split(', ').map(element => element.trim());
    conjuntoC = document.getElementById('conjuntoCinput').value.split(', ').map(element => element.trim());
    var unionC = [...new Set([...conjuntoA, ...conjuntoB, ...conjuntoC])];

    document.getElementById('resultado').style.display = 'none';
    var resultado2 = document.getElementById('resultado2'); 
    resultado2.textContent = 'A U B U C {' + unionC.join(', ') + '}';
    resultado2.style.display = 'block'; 
}
window.addEventListener("load", function(){ 
    document.getElementById("btnagregarc").addEventListener('click', function(){ 
        alert('Para ver el resultado de A U B U C, tiene que volver a presionar el botón de "Realizar Union".');
    })
});
/* Intersección de conjuntos */ 
function mostrarconjuntoIC() {
    var idconjuntoIC = document.getElementById('conjuntoIC');
    var resultadointer2 = document.getElementById('resultadointer2');
    resultadointer2.style.display = 'none';

    if (idconjuntoIC.style.display === 'none') {
        idconjuntoIC.style.display = 'block';
    } else {
        idconjuntoIC.style.display = 'none';
    }
}

var conjuntoIA, conjuntoIB, conjuntoIC;

function calcularInterseccion() {
    conjuntoIA = new Set(document.getElementById('conjuntoIA').value.split(', ').map(element => element.trim()));
    conjuntoIB = new Set(document.getElementById('conjuntoIB').value.split(', ').map(element => element.trim()));

    var interseccionAB = new Set([...conjuntoIA].filter(x => conjuntoIB.has(x)));

    document.getElementById('resultadoo2').textContent = 'A ∩ B {' + [...interseccionAB].join(', ') + '}';

    var idconjuntoIC = document.getElementById('conjuntoIC');
    var resultadointer2 = document.getElementById('resultadointer2');

    if (idconjuntoIC.style.display === 'block') {
        var resultadointer2 = document.getElementById('resultadointer2');
        resultadointer2.textContent = '';
        resultadointer2.style.display = 'block';

        document.getElementById('btncalcinter').addEventListener('click', function () {
            calcularIABC();
        });
    } else {
        resultadointer2.style.display = 'none';
    }
}
/* Diferencia de conjuntos */ 



/* Complemento de conjuntos */ 

