// assigning the values to the variables
let w_input = document.getElementById('weight-input-number');
let w_output = document.getElementById('weight-output-number');
let w_inputType = document.getElementById('weight-input');
let w_outputType = document.getElementById('weight-output');
let w_inputTypeValue, w_outputTypeValue;

// calling the function and initially assigning the the conversion type
w_inputTypeValue = w_inputType.value;
w_outputTypeValue = w_outputType.value;
w_input.value = 1;
w_output.innerHTML = 0.001;
w_input.addEventListener('keyup', conversion);
w_inputType.addEventListener('change', conversion);
w_outputType.addEventListener('change', conversion);

// for the function 
function conversion(){
    // assigning the conversion type values to the variables
    w_inputTypeValue = w_inputType.value;
    w_outputTypeValue = w_outputType.value;

    // calling various functions on the basis of the w_input conversion type value
    switch (w_inputTypeValue) {
        case 'kg': kilogram();
        break;

        case 'g': gram();
        break;

        case 'mg': milligram();
        break;

        case 't': tonne();
        break;

        case 'q': quintal();
        break;

        case 'ct': carat();
        break;

        default: pound();
        break;
    }
}

// function if w_input conversion type is kilogram
function kilogram() {
    // assigning the values to w_output section based on the w_output conversion type
    switch (w_outputTypeValue) {
        case 'g': w_output.innerHTML = w_input.value * 1000;
        break;

        case 'mg': w_output.innerHTML = w_input.value * 1000000;
        break;

        case 't': w_output.innerHTML = w_input.value * 0.001;
        break;

        case 'q': w_output.innerHTML = w_input.value * 0.01;
        break;

        case 'ct': w_output.innerHTML = w_input.value * 5000;
        break;

        case 'lb': w_output.innerHTML = w_input.value * 2.2046;
        break;

        default: w_output.innerHTML = w_input.value;
        break;
    }
}

// function if w_input conversion type is gram
function gram() {
    // assigning the values to w_output section based on the w_output conversion type
    switch (w_outputTypeValue) {
        case 'kg': w_output.innerHTML = w_input.value * 0.001;
        break;

        case 'mg': w_output.innerHTML = w_input.value * 1000;
        break;

        case 't': w_output.innerHTML = w_input.value * 0.000001;
        break;

        case 'q': w_output.innerHTML = w_input.value * 0.00001;
        break;

        case 'ct': w_output.innerHTML = w_input.value * 5;
        break;

        case 'lb': w_output.innerHTML = w_input.value * 0.0022046;
        break;

        default: w_output.innerHTML = w_input.value;
        break;
    }
}

// function if w_input conversion type is milligram
function milligram() {
    // assigning the values to w_output section based on the w_output conversion type
    switch (w_outputTypeValue) {
        case 'kg': w_output.innerHTML = w_input.value * 0.000001;
        break;

        case 'g': w_output.innerHTML = w_input.value * 0.001;
        break;

        case 't': w_output.innerHTML = w_input.value * 0.000000001;
        break;

        case 'q': w_output.innerHTML = w_input.value * 0.00000001;
        break;

        case 'ct': w_output.innerHTML = w_input.value * 0.005;
        break;

        case 'lb': w_output.innerHTML = w_input.value * 0.0000022046;
        break;

        default: w_output.innerHTML = w_input.value;
        break;
    }
}

// function if w_input conversion type is tonne
function tonne() {
    // assigning the values to w_output section based on the w_output conversion type
    switch (w_outputTypeValue) {
        case 'kg': w_output.innerHTML = w_input.value * 1000;
        break;

        case 'g': w_output.innerHTML = w_input.value * 1000000;
        break;

        case 'mg': w_output.innerHTML = w_input.value * 1000000000;
        break;

        case 'q': w_output.innerHTML = w_input.value * 10;
        break;

        case 'ct': w_output.innerHTML = w_input.value * 5000000;
        break;

        case 'lb': w_output.innerHTML = w_input.value * 2204.6;
        break;

        default: w_output.innerHTML = w_input.value;
        break;
    }
}

// function if w_input conversion type is miles
function quintal() {
    // assigning the values to w_output section based on the w_output conversion type
    switch (w_outputTypeValue) {
        case 'kg': w_output.innerHTML = w_input.value * 100;
        break;

        case 'g': w_output.innerHTML = w_input.value * 100000;
        break;

        case 'mg': w_output.innerHTML = w_input.value * 100000000;
        break;

        case 't': w_output.innerHTML = w_input.value * 0.1;
        break;

        case 'ct': w_output.innerHTML = w_input.value * 500000;
        break;

        case 'lb': w_output.innerHTML = w_input.value * 220.46;
        break;

        default: w_output.innerHTML = w_input.value;
        break;
    }
}

// function if w_input conversion type is carat
function carat() {
    // assigning the values to w_output section based on the w_output conversion type
    switch (w_outputTypeValue) {
        case 'kg': w_output.innerHTML = w_input.value * 0.0002;
        break;

        case 'g': w_output.innerHTML = w_input.value * 0.2;
        break;

        case 'mg': w_output.innerHTML = w_input.value * 200;
        break;

        case 't': w_output.innerHTML = w_input.value * 0.0000002;
        break;

        case 'q': w_output.innerHTML = w_input.value * 0.000002;
        break;

        case 'lb': w_output.innerHTML = w_input.value * 0.0004409;
        break;

        default: w_output.innerHTML = w_input.value;
        break;
    }
}

// function if w_input conversion type is pound
function pound() {
    // assigning the values to w_output section based on the w_output conversion type
    switch (w_outputTypeValue) {
        case 'kg': w_output.innerHTML = w_input.value * 0.45359237;
        break;

        case 'g': w_output.innerHTML = w_input.value * 453.59237;
        break;

        case 'mg': w_output.innerHTML = w_input.value * 453592.37;
        break;

        case 't': w_output.innerHTML = w_input.value * 0.00045359237;
        break;

        case 'q': w_output.innerHTML = w_input.value * 0.0045359237;
        break;

        case 'ct': w_output.innerHTML = w_input.value * 2267.96;
        break;

        default: w_output.innerHTML = w_input.value;
        break;
    }
}