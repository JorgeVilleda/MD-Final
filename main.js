document.addEventListener('DOMContentLoaded', () => {
    let listItems = document.querySelectorAll('.list__item--click');

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
    });
    
});

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
mostrarIntegrantes.addEventListener('click', mostrarMiembros); 

var mostrarSobreNosotros = document.getElementById("mostrarIntegrantes"); 
    var sobrenosotros = document.getElementById("sobrenosotros"); 

function mostrartexto () {
    sobrenosotros.classList.remove("sono");
}
mostrarSobreNosotros.addEventListener("click", mostrartexto)

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


/* Diferencia de conjuntos */ 



/* Complemento de conjuntos */ 

