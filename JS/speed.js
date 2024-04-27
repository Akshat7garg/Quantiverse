// assigning the values to the variables
let s_input = document.getElementById('speed-input-number');
let s_output = document.getElementById('speed-output-number');
let s_inputType = document.getElementById('speed-input');
let s_outputType = document.getElementById('speed-output');
let s_inputTypeValue, s_outputTypeValue;

// calling the function and initially assigning the the conversion type
s_inputTypeValue = s_inputType.value;
s_outputTypeValue = s_outputType.value;
s_input.value = 1;
s_output.innerHTML = 3.6;
s_input.addEventListener('keyup', conversion);
s_inputType.addEventListener('change', conversion);
s_outputType.addEventListener('change', conversion);

// for the function 
function conversion(){
    // assigning the conversion type values to the variables
    s_inputTypeValue = s_inputType.value;
    s_outputTypeValue = s_outputType.value;

    // calling various functions on the basis of the s_input conversion type value
    switch (s_inputTypeValue) {
        case 'km/h': kilohour();
        break;

        case 'm/s': metersecond();
        break;

        case 'km/s': kilosecond();
        break;

        default: milehour();
        break;
    }
}

// function if s_input conversion type is kilometer per hour
function kilohour() {
    // assigning the values to s_output section based on the s_output conversion type
    switch (s_outputTypeValue) {
        case 'm/s': s_output.innerHTML = s_input.value/3.6;
        break;

        case 'km/s': s_output.innerHTML = s_input.value/3600;
        break;

        case 'mi/h': s_output.innerHTML = s_input.value * 0.62137;
        break;

        default: s_output.innerHTML = s_input.value;
        break;
    }
}

// function if s_input conversion type is meter per second
function metersecond() {
    // assigning the values to s_output section based on the s_output conversion type
    switch (s_outputTypeValue) {
        case 'km/h': s_output.innerHTML = s_input.value * 3.6;
        break;

        case 'km/s': s_output.innerHTML = s_input.value * 0.001;
        break;

        case 'mi/h': s_output.innerHTML = s_input.value * 2.236936;
        break;

        default: s_output.innerHTML = s_input.value;
        break;
    }
}

// function if s_input conversion type is kilometer per second
function kilosecond() {
    // assigning the values to s_output section based on the s_output conversion type
    switch (s_outputTypeValue) {
        case 'km/h': s_output.innerHTML = s_input.value * 3600;
        break;

        case 'm/s': s_output.innerHTML = s_input.value * 1000;
        break;

        case 'mi/h': s_output.innerHTML = s_input.value * 2236.936;
        break;

        default: s_output.innerHTML = s_input.value;
        break;
    }
}

// function if s_input conversion type is miles per hour
function milehour() {
    // assigning the values to s_output section based on the s_output conversion type
    switch (s_outputTypeValue) {
        case 'km/h': s_output.innerHTML = s_input.value/0.62137;
        break;

        case 'm/s': s_output.innerHTML = s_input.value/2.236936;
        break;

        case 'km/s': s_output.innerHTML = s_input.value/2236.936;
        break;

        default: s_output.innerHTML = s_input.value;
        break;
    }
}