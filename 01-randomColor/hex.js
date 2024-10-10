const btn = document.getElementById('btn');
const body = document.getElementById('body')
const textoHedecimal = document.querySelector('.texto-hexadecimal');
// const createElement = document.createElement('div');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', () => {
    array.forEach((elemento) => {
        console.log(elemento);
    });

    const hexadecimal = (arreglo, longitud) => {
        
        let resultado = '';
        for (let i = 0; i < longitud; i++) {
            
            const indiceArray = Math.floor(Math.random() * arreglo.length);
            resultado += arreglo[indiceArray];
        }
        return resultado;
    };

    let hexad = hexadecimal(array, 6);
    body.style.backgroundColor = `#${hexad}`;
    textoHedecimal.textContent = `Background-color: #${hexad}`;
    textoHedecimal.classList.add('other')
    
});
