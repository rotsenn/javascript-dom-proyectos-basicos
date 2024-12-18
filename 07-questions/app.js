// Get Elements 
const plusButtons = document.querySelectorAll('.btn-plus');

const minusButtons = document.querySelectorAll('.btn-minus');

const [ minusBtn4, minusBtn5, minusBtn6] = Array.from(document.querySelectorAll('.btn-minus'));

const hiddens = document.querySelectorAll('.hidden');
const hiddensArray = Array.from(hiddens)

const [ hidden1, hidden2, hidden3 ] = hiddensArray;
// console.log( hidden1, hidden2, hidden3 );


plusButtons.forEach(( plusBtn ) => {

    plusBtn.addEventListener('click', (e) => {
        
        const clickPlus = e.currentTarget.classList;

        if ( clickPlus.contains('btn-1') ) {
            console.log('btn-1');
            hidden1.classList.remove('hidden1'); // remove hidden1
            clickPlus.add('hide-btn-1'); // add class hidde
            minusBtn4.classList.remove('hide-btn-4');

        } else if ( clickPlus.contains('btn-2') ) {
            console.log('btn-2');
            hidden2.classList.remove('hidden2');
            clickPlus.add('hide-btn-2');
            minusBtn5.classList.remove('hide-btn-5');

        } else {
            console.log('btn-3');
            hidden3.classList.remove('hidden3');
            clickPlus.add('hide-btn-3');
            minusBtn6.classList.remove('hide-btn-6');
        }

    });
});

minusButtons.forEach(( minusBtn ) => {
    minusBtn.addEventListener('click', (e) => {

        const minusClick = e.currentTarget.classList;

        if ( minusClick.contains('btn-4') ) {
            console.log('btn-4');
            hidden1.classList.add('hidden1');
            minusBtn4.classList.add('hide-btn-4');
            plusButtons[0].classList.remove('hide-btn-1');

        } else if ( minusClick.contains('btn-5') ) {
            console.log('btn-2');
            hidden2.classList.add('hidden2');
            minusBtn5.classList.add('hide-btn-5');
            plusButtons[1].classList.remove('hide-btn-2');

        } else {
            console.log('btn-3');
            hidden3.classList.add('hidden3');
            minusBtn6.classList.add('hide-btn-6');
            plusButtons[2].classList.remove('hide-btn-3');
        }


    });
});


