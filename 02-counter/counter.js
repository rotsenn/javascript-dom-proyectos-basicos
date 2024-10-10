const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');
const number = document.getElementById('number');

let count = 0;
// let decrease;

btnDecrease.addEventListener('click', (e) => {
    
    decrease = count-=1;
    // console.log(decrease);
    
    number.textContent = decrease;

});

btnReset.addEventListener('click', () => {

    count = 0;
    number.textContent = count;

});

btnIncrease.addEventListener('click', () => {

    if ( btnReset ) {
        count = count += 1;
    }
    // } else if ( btnDecrease ){
    //     count = decrease += 1;
    // }

    console.log(count);
    number.textContent = count;

});

