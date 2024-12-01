// get Elements
const btnOpenModal = document.getElementById('btn-modal');
const boxContainer = document.querySelector('.container');
const boxModal = document.querySelector('.opacity-modal');
const btnClose = document.querySelector('.close-btn'); 

btnOpenModal.addEventListener('click', () => {

    if (boxContainer.classList.contains('container')) {
        boxContainer.classList.add('opacity-container');
        boxModal.classList.remove('visibility');
    }

    btnClose.addEventListener('click', () => {

        boxContainer.classList.remove('opacity-container');
        boxModal.classList.add('visibility');
        
    });
});