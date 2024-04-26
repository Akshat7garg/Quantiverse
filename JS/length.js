// assigning the values to the variables
let input = document.getElementById('length-input-number');
let output = document.getElementById('length-output-number');
let inputType = document.getElementById('length-input');
let outputType = document.getElementById('length-output');
let inputTypeValue, outputTypeValue;

// calling the function and initially assigning the the conversion type
inputTypeValue = inputType.value;
outputTypeValue = outputType.value;
input.value = 1;
output.value = 0.001;
input.addEventListener('keyup', conversion);
inputType.addEventListener('change', conversion);
outputType.addEventListener('change', conversion);

// for converting the units as the type has been selected
function conversion() {

    // assigning the conversion type values to the variables
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;

    // calling various functions on the basis of the input conversion type value
    switch (inputTypeValue) {
        case 'km': kilometer();
        break;

        case 'm': meter();
        break;

        case 'cm': centimeter();
        break;

        case 'mm': millimeter();
        break;

        case 'mi': miles();
        break;

        case 'ft': foots();
        break;

        case 'um': micrometer();
        break;
        
        case 'nm': nanometer();
        break;

        default: astronomical();
        break;
    }
}

// function if input conversion type is kilometer
function kilometer() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'm': output.value = input.value * 1000;
        break;

        case 'cm': output.value = input.value * 100000;
        break;

        case 'mm': output.value = input.value * 1000000;
        break;

        case 'mi': output.value = input.value * 0.621;
        break;

        case 'ft': output.value = input.value * 3280.8;
        break;

        case 'um': output.value = input.value * 1000000000;
        break;

        case 'nm': output.value = input.value * 1000000000000;
        break;

        case 'au': output.value = input.value * 0.0000000066;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is meter
function meter() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 0.001;
        break;

        case 'cm': output.value = input.value * 100;
        break;

        case 'mm': output.value = input.value * 1000;
        break;

        case 'mi': output.value = input.value * 0.000621;
        break;

        case 'ft': output.value = input.value * 3.2808;
        break;

        case 'um': output.value = input.value * 1000000;
        break;

        case 'nm': output.value = input.value * 1000000000;
        break;

        case 'au': output.value = input.value * 0.0000000000066;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is centimeter
function centimeter() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 0.00001;
        break;

        case 'm': output.value = input.value * 0.01;
        break;

        case 'mm': output.value = input.value * 10;
        break;

        case 'mi': output.value = input.value * 0.00000621;
        break;

        case 'ft': output.value = input.value * 0.032808;
        break;

        case 'um': output.value = input.value * 10000;
        break;

        case 'nm': output.value = input.value * 10000000;
        break;

        case 'au': output.value = input.value * 0.000000000000066;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is millimeter
function millimeter() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 0.000001;
        break;

        case 'm': output.value = input.value * 0.001;
        break;

        case 'cm': output.value = input.value * 0.1;
        break;

        case 'mi': output.value = input.value * 0.000000621;
        break;

        case 'ft': output.value = input.value * 0.0032808;
        break;

        case 'um': output.value = input.value * 1000;
        break;

        case 'nm': output.value = input.value * 1000000;
        break;

        case 'au': output.value = input.value * 0.0000000000000066;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is miles
function miles() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 1.6092693916961;
        break;

        case 'm': output.value = input.value * 1609.2693916961;
        break;

        case 'cm': output.value = input.value * 160926.93916961;
        break;

        case 'mm': output.value = input.value * 1609269.3916961;
        break;

        case 'ft': output.value = input.value * 5279.75;
        break;

        case 'um': output.value = input.value * 1609269391.6961;
        break;

        case 'nm': output.value = input.value * 1609269391696.1;
        break;

        case 'au': output.value = input.value * 0.0000000107;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is foots
function foots() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 0.0003047999995;
        break;

        case 'm': output.value = input.value * 0.3047999995;
        break;

        case 'cm': output.value = input.value * 30.47999995;
        break;

        case 'mm': output.value = input.value * 304.7999995;
        break;

        case 'mi': output.value = input.value * 0.0001894;
        break;

        case 'um': output.value = input.value * 304799.9995;
        break;

        case 'nm': output.value = input.value * 304799999.5;
        break;

        case 'au': output.value = input.value * 0.00000000000203;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is micrometer
function micrometer() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 0.000000001;
        break;

        case 'm': output.value = input.value * 0.000001;
        break;

        case 'cm': output.value = input.value * 0.0001;
        break;

        case 'mm': output.value = input.value * 0.001;
        break;

        case 'mi': output.value = input.value * 0.000000000621;
        break;

        case 'ft': output.value = input.value * 0.0000032808;
        break;

        case 'nm': output.value = input.value * 1000;
        break;

        case 'au': output.value = input.value * 0.0000000000000000066;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is nanometer
function nanometer() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 0.000000000001;
        break;

        case 'm': output.value = input.value * 0.000000001;
        break;

        case 'cm': output.value = input.value * 0.0000001;
        break;

        case 'mm': output.value = input.value * 0.000001;
        break;

        case 'mi': output.value = input.value * 0.000000000000621;
        break;

        case 'ft': output.value = input.value * 0.0000000032808;
        break;

        case 'um': output.value = input.value * 0.001;
        break;

        case 'au': output.value = input.value * 0.0000000000000000000066;
        break;

        default: output.value = input.value;
        break;
    }
}

// function if input conversion type is astronomical unit
function astronomical() {
    // assigning the values to output section based on the output conversion type
    switch (outputTypeValue) {
        case 'km': output.value = input.value * 149597582.5030667504413;
        break;

        case 'm': output.value = input.value * 149597582503.0667504413;
        break;

        case 'cm': output.value = input.value * 14959758250306.67504413;
        break;

        case 'mm': output.value = input.value * 149597582503066.7504413;
        break;

        case 'mi': output.value = input.value * 92959937.76;
        break;

        case 'ft': output.value = input.value * 490805717619.6;
        break;

        case 'um': output.value = input.value * 149597582503066750.4413;
        break;

        case 'nm': output.value = input.value * 149597582503066750441.3;
        break;

        default: output.value = input.value;
        break;
    }
}