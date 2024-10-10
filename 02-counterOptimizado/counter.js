// set initial
let count = 0;

const number = document.getElementById('number');
const btns = document.querySelectorAll('.btn');

btns.forEach( ( btn ) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        const click = e.currentTarget.classList;
        if (click.contains("decrease")) {    
           count--;
           number.style.color = "red";
        } else if (click.contains("increase")) {
            count++;
            number.style.color = "green";
        } else {
            count = 0;
            number.style.color = "#222";

        }


        number.textContent = count;
    });
});

// console.log(btns);