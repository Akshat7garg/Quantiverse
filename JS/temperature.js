// assigning the values to the variables
let t_input = document.getElementById('temperature-input-number');
let t_output = document.getElementById('temperature-output-number');
let t_inputType = document.getElementById('temperature-input');
let t_outputType = document.getElementById('temperature-output');
let t_inputTypeValue, t_outputTypeValue;

// calling the function and initially assigning the the conversion type
t_inputTypeValue = t_inputType.value;
t_outputTypeValue = t_outputType.value;
t_input.value = 1;
t_output.innerHTML = 0.001;
t_input.addEventListener('keyup', conversion);
t_inputType.addEventListener('change', conversion);
t_outputType.addEventListener('change', conversion);

// for the function 
function conversion(){
    // assigning the conversion type values to the variables
    t_inputTypeValue = t_inputType.value;
    t_outputTypeValue = t_outputType.value;

    // calling various functions on the basis of the t_input conversion type value
    switch (t_inputTypeValue) {
        case 'c': celsius();
        break;

        case 'f': fahrenheit();
        break;

        case 'k': kelvin();
        break;

        case 'r': rankine();
        break;

        default: reaumur();
        break;
    }
}

// function if t_input conversion type is celsius
function celsius() {
    // assigning the values to t_output section based on the t_output conversion type
    switch (t_outputTypeValue) {
        case 'f': t_output.innerHTML = 32 + (1.8 * t_input.value);
        break;

        case 'k': t_output.innerHTML = Number(t_input.value) + 273.15;
        break;

        case 'r': t_output.innerHTML = (Number(t_input.value) * 1.8) + 491.67;
        break;

        case 're': t_output.innerHTML = t_input.value * 0.8;
        break;

        default: t_output.innerHTML = t_input.value;
        break;
    }
}

// function if t_input conversion type is fahrenheit
function fahrenheit() {
    // assigning the values to t_output section based on the t_output conversion type
    switch (t_outputTypeValue) {
        case 'c': t_output.innerHTML = (t_input.value - 32)/1.8;
        break;

        case 'k': t_output.innerHTML = (Number(t_input.value) + 459.67)/1.8;
        break;

        case 'r': t_output.innerHTML = Number(t_input.value) + 459.67;
        break;

        case 're': t_output.innerHTML = (t_input.value - 32)/2.25;
        break;

        default: t_output.innerHTML = t_input.value;
        break;
    }
}

// function if t_input conversion type is kelvin
function kelvin() {
    // assigning the values to t_output section based on the t_output conversion type
    switch (t_outputTypeValue) {
        case 'c': t_output.innerHTML = t_input.value - 273.15;
        break;

        case 'f': t_output.innerHTML = (1.8 * t_input.value) - 459.67;
        break;

        case 'r': t_output.innerHTML = t_input.value * 1.8;
        break;

        case 're': t_output.innerHTML = (t_input.value - 273.15) * 0.8;
        break;

        default: t_output.innerHTML = t_input.value;
        break;
    }
}

// function if t_input conversion type is rankine
function rankine() {
    // assigning the values to t_output section based on the t_output conversion type
    switch (t_outputTypeValue) {
        case 'c': t_output.innerHTML = (t_input.value - 491.67)/1.8;
        break;

        case 'f': t_output.innerHTML = t_input.value - 459.67;
        break;

        case 'k': t_output.innerHTML = t_input.value/1.8;
        break;

        case 're': t_output.innerHTML = (t_input.value - 491.67)/2.25;
        break;

        default: t_output.innerHTML = t_input.value;
        break;
    }
}

// function if t_input conversion type is reaumur
function reaumur() {
    // assigning the values to t_output section based on the t_output conversion type
    switch (t_outputTypeValue) {
        case 'c': t_output.innerHTML = t_input.value * 1.25;
        break;

        case 'f': t_output.innerHTML = (Number(t_input.value) * 2.25) + 32;
        break;

        case 'k': t_output.innerHTML = (Number(t_input.value) * 1.25) + 273.15;
        break;

        case 'r': t_output.innerHTML = (Number(t_input.value) * 2.25) + 491.67;
        break;

        default: t_output.innerHTML = t_input.value;
        break;
    }
}