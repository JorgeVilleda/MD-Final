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
mostrarIntegrantes.addEventListener("click", mostrarMiembros); 

var mostrarSobreNosotros = document.getElementById("mostrarIntegrantes"); 
    var sobrenosotros = document.getElementById("sobrenosotros"); 

function mostrartexto () {
    sobrenosotros.classList.remove("sono");
}
mostrarSobreNosotros.addEventListener("click", mostrartexto)

/* Funciones para las paginas de conjuntos */ 
/* Union de conjuntos */


/* Intersección de conjuntos */ 


/* Diferencia de conjuntos */ 



/* Complemento de conjuntos */ 

