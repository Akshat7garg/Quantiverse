// Logic building for the drop-down hamburger option
let btn = document.getElementById('menu-btn');
let dropBox = document.getElementById('drop');

btn.addEventListener("click", ()=> {
    if(dropBox.classList.contains('drop-box')){
        btn.classList.toggle('hamburger');
        dropBox.classList.toggle('drop-box');
    }
    else{
        btn.classList.toggle('hamburger');
        dropBox.classList.toggle('drop-box');
    }
});