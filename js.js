document.addEventListener('DOMContentLoaded', () => {
    let listItems = document.querySelectorAll('.list__item--click');

    listItems.forEach(listItem => {
        let listButton = listItem.querySelector('.list__button--click');
        let listShow = listItem.querySelector('.list__show');
    
        listButton.addEventListener('click', () => {
            listButton.classList.toggle('arrow');
    
            // Cerrar todas las listas excepto la que se hizo clic
            listItems.forEach(otherListItem => {
                let otherListShow = otherListItem.querySelector('.list__show');
                let otherListButton = otherListItem.querySelector('.list__button--click');
    
                if (otherListShow !== listShow) {
                    otherListShow.style.height = '0';
                    otherListButton.classList.remove('arrow');
                }
            });
    
            // Abrir o cerrar la lista actual
            let height = listShow.clientHeight;
            listShow.style.height = (height === 0) ? `${listShow.scrollHeight}px` : '0';
        });
    });
    
});

