// get Button
const toggleBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
    if ( links.classList.contains('display') ){
        links.classList.remove('display');
    } else {
        links.classList.add('display');
    }
});

console.log(links);