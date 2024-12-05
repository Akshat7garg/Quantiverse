// declaration of variables as per the classes and ids
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const ans = document.querySelector('#ans');
const category = document.querySelector('#category');
const advice = document.querySelector('#advice');
const btn = document.querySelector('#bmi-cal');
const output = document.querySelector('#bmi-output');

// link of the json file
const bmi_url = "../JSON files/bmi.json";

// adding event listener to generate button
btn.addEventListener('click', () => {
    calculateBMI();
});

// function that generate result based on the input
const calculateBMI = () => {
    let h_val = height.value;
    let g_val = weight.value;

    let total_h = h_val*h_val;
    let result = g_val/total_h;
    result = Math.round(result*10);
    result /= 10;

    // displaying solution based on the result
    if (result<=0) {
        ans.innerText = `You Body Mass Index: ${result}`;
        category.innerText = `Invalid Input`;
        advice.innerText = `Try Again`;
        output.style.borderColor = "rgb(255, 0, 0)";
        output.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
    }
    else {
        displayVal(result);
    }
}

// function that display solutions based on result
const displayVal = async (result) => {
    let type;
    let response = await fetch(bmi_url);
    let data = await response.json();

    if (result>0 && result<=18.5) {
        type = "Underweight";
        output.style.borderColor = "rgb(255, 165, 0)";
        output.style.backgroundColor = "rgb(255, 165, 0, 0.6)";
    }
    else if (result>18.5 && result<=25) {
        type = "Normal";
        output.style.borderColor = "rgb(0, 128, 0)";
        output.style.backgroundColor = "rgb(0, 128, 0, 0.6)";
    }
    else if (result>25 && result<=30) {
        type = "Overweight";
        output.style.borderColor = "rgb(255, 255, 0)";
        output.style.backgroundColor = "rgb(255, 255, 0, 0.6)";
    }
    else if (result>30 && result<=35) {
        type = "Obesity-1";
        output.style.borderColor = "rgb(255, 69, 0)";
        output.style.backgroundColor = "rgb(255, 69, 0, 0.6)";
    }
    else if (result>35 && result<=40) {
        type = "Obesity-2";
        output.style.borderColor = "rgb(165, 42, 42)";
        output.style.backgroundColor = "rgb(165, 42, 42, 0.6)";
    }
    else {
        type = "Obesity-3";
        output.style.borderColor = "rgb(255, 0, 0)";
        output.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
    }

    ans.innerText = `You Body Mass Index: ${result}`;
    category.innerText = `Category: ${type}`;
    advice.innerText = `Advice: ${data[type]}`;
}