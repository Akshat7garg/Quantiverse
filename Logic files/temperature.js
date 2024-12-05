// declaration of variables based on classes and ids
const temp_in = document.querySelector('#temperature-in');
const temp_out = document.querySelector('#temperature-out');

// function that convert and displays the converted values based on the given input
const updateTempValue = () => {
    temp_out.innerHTML = temp_in.value*0.8 + 32;
}

// adding event listner to the input section
temp_in.addEventListener('input', () => {
    updateTempValue();
});