//get elements

toggleBtn = document.querySelector('.aside-toggle');
asideBox = document.querySelector('.aside');
closeBtn = document.querySelector('.close-btn');


closeBtn.addEventListener('click', () => {
    if (asideBox.classList.contains('aside')) {
        asideBox.classList.add('hideAside');
        toggleBtn.classList.remove('hideToggleBtn');
    }
});

toggleBtn.addEventListener('click', () => {
    if (asideBox.classList.contains('hideAside')) {
        asideBox.classList.remove('hideAside');
        toggleBtn.classList.add('hideToggleBtn');
    }
});