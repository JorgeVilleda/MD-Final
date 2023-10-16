/* Funciones para el index */
/* Muestra los cards de integrantes */

<<<<<<< HEAD
    listItems.forEach(listItem => {
        let listButton = listItem.querySelector('.list__button--click');
        let listShow = listItem.querySelector('.list__show');
    
        listButton.addEventListener('click', () => {
            listButton.classList.toggle('.list__show');
            
            listItems.forEach(otherListItem => {
                let otherListShow = otherListItem.querySelector('.list__show');
                let otherListButton = otherListItem.querySelector('.list__button--click');
    
                if (otherListShow !== listShow) {
                    otherListShow.style.height = '0';
                }
            });
    
            // Abrir o cerrar la lista actual
            let height = listShow.clientHeight;
            listShow.style.height = (height === 0) ? `${listShow.scrollHeight}px` : '0';
        });
=======
const mostrarintegrantes = document.getElementById('sobrenosotros'); 
const tarjetas = document.querySelectorAll('.cardintegrantes'); 

mostrarintegrantes.addEventListener('click', function(event){ 
    event.preventDefault(); 

    tarjetas.forEach(function(tarjeta){ 
        tarjeta.style.display = 'block';       
>>>>>>> c6436678ea9b664a1c97e7a146814d9f94bcfc71
    });
        
});
<<<<<<< HEAD
/* Función para las card de integrantes */
var mostrarIntegrantes = document.getElementById("mostrarIntegrantes"); 
    var t1 = document.getElementById("t1"); 
    var t2 = document.getElementById("t2"); 
    var t3 = document.getElementById("t3"); 
    var t4 = document.getElementById("t4"); 

function mostrarMiembros (){ 
    t1.classList.remove("target"); 
    t2.classList.remove("target"); 
    t3.classList.remove("target"); 
    t4.classList.remove("target"); 
} 
mostrarIntegrantes.addEventListener("click", mostrarMiembros); 

var mostrarSobreNosotros = document.getElementById("mostrarIntegrantes"); 
    var sobrenosotros = document.getElementById("sobrenosotros"); 

function mostrartexto () {
    sobrenosotros.classList.remove("sono");
}
mostrarSobreNosotros.addEventListener("click", mostrartexto)

/* Funciones para las paginas de conjuntos */ 
/* Union de conjuntos */

function mostrarconjuntoC(){ 
    var idconjuntoC = document.getElementById('conjuntoC'); 

    if(idconjuntoC.style.display === 'none'){ 
        idconjuntoC.style.display = 'block'; 
    }else{ 
        idconjuntoC.style.display = 'none'; 
    }
}

var conjuntoA, conjuntoB, conjuntoC; 

function calcularUnion(){ 
    conjuntoA = document.getElementById('conjuntoA').value.split(',').map(element => element.trim()); 
    conjuntoB = document.getElementById('conjuntoB').value.split(',').map(element => element.trim()); 
    var union = [...new Set([...conjuntoA, ...conjuntoB])]; 
    document.getElementById('resultado').textContent = 'A U B: {' + union.join(',') + '}';
    
    if(mostrarconjuntoC){ 
        calcularABC();

    }else{ 
    calcularUnion(); 
    }
}
function calcularABC() {
    conjuntoA = document.getElementById('conjuntoA').value.split(',').map(element => element.trim()); 
    conjuntoB = document.getElementById('conjuntoB').value.split(',').map(element => element.trim());
    conjuntoC = document.getElementById('conjuntoC').value.split(',').map(element => element.trim());
    var union2 = [...new Set([...conjuntoA, ...conjuntoB, ...conjuntoC])];

    document.getElementById('resultado').textContent = 'A U B U C: {' + union2.join(',') + '}';
}

/* Intersección de conjuntos */ 


=======
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
>>>>>>> c6436678ea9b664a1c97e7a146814d9f94bcfc71
/* Diferencia de conjuntos */ 



/* Complemento de conjuntos */ 

