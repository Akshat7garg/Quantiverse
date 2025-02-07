// Declaration of Variables
const devices = document.querySelectorAll('.calcy');
const choices = document.querySelectorAll('.choices button');
const spans = hamBtn.querySelectorAll('span');
const drop = document.querySelector('.drop-btn');
const opt = document.querySelector('.options');
const dailogBG = document.querySelector('.dailogBG');

// function that makes a calculator active after button click
const active = (index) => {
    devices[index].style.scale = 1;
    choices[index].classList.add('btnToggler');

    if (track != index) {
        devices[track].style.scale = 0;
        choices[track].classList.remove('btnToggler');
        track = index;
    }
}

devices[0].style.scale = 1;
choices[0].classList.add('btnToggler');
let track = 0;

// function that opens and close sliding choice panel for small devices
const sliding = () => {
    if (!hamBtn.classList.contains('active')) {
        opt.style.left = '1.5%';
        dailogBG.style.height = '100%'
        dailogBG.style.width = '100%'
        hamBtn.classList.add('active');
    }
    else {
        opt.style.left = '-151.5%';
        dailogBG.style.height = '0%'
        dailogBG.style.width = '0%'
        hamBtn.classList.remove('active');
    }
}

// function that opens and close drop-down header box for small devices
const scaling = () => {
    if (!drop.classList.contains('active')) {
        linkBox.classList.add('active-box');
        dailogBG.style.height = '100%'
        dailogBG.style.width = '100%'
        drop.classList.add('active');
    }
    else {
        linkBox.classList.remove('active-box');
        dailogBG.style.height = '0%'
        dailogBG.style.width = '0%'
        drop.classList.remove('active');
    }
}

// event listner to the sliding panel button
hamBtn.addEventListener('click', () => {
    if (drop.classList.contains('active')) {
        scaling();
    }
    sliding();
})

// event listener for the dropdown button
drop.addEventListener('click', () => {
    if (hamBtn.classList.contains('active')) {
        sliding();
    }
    scaling();
})

// event listener for the background div appers after opening slider or drop-down panel
dailogBG.addEventListener('click', () => {
    if (drop.classList.contains('active')) {
        scaling();
    }
    if (hamBtn.classList.contains('active')) {
        sliding();
    }
})

// event listener for each calculator choice button
choices.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        active(idx);
        sliding();
    })
})