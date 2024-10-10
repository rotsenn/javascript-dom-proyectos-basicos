

const arraySimple = ['AliceBlue', 'AntiqueWhite', 'Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','DarkOrange'];
const nameColor = document.querySelector('.color-name');
const btn = document.querySelector('#btn');


btn.addEventListener('click', (e) => {
    // console.log('first');
    const body = document.getElementById('body');

    const selectRandom = () => {
        return ( Math.floor(Math.random() * arraySimple.length) );
    }
    
    // let resultado = '';
    let indexArray;
    for (let i = 0; i < arraySimple.length; i++) {
        
        const getRandomNumber = selectRandom();
        indexArray = arraySimple[getRandomNumber];
        
        // return indexArray;
    }

    body.style.backgroundColor = `${indexArray}`;
    nameColor.textContent = `Background-color: ${indexArray}`;
    nameColor.classList.add('other');
    
});