// declaration of variables based on the classes and ids in temperature unit conversion device
const temp_in = document.querySelector('#temperature #in');
const temp_out = document.querySelector('#temperature #out');
const temp_drop = document.querySelectorAll('#temperature .select-box');
const temp_btn = document.querySelector('#temperature #gen');
const temp_res = document.querySelector('#temperature .result');
const temp_from = document.querySelector('#temperature .in .select-box');
const temp_to = document.querySelector('#temperature .out .select-box');

// declaration of variables requiered for DOM manipulation and unit conversion
const temp_url = "https://raw.githubusercontent.com/Akshat7garg/Quantiverse/main/JSON-files/temperature.json";
opt_list = ["Degree Celsius (C)", "Degree Fahrenheit (F)", "Degree Reaumur (Re)", "Degree Rankine (R)", "Kelvin (K)"];

// initializing some values and variables
temp_in.value = 0;
temp_btn.style.display = "none";

// creating updateTempVal function to perform temperature conversion operation
const updateTempVal = async () => {
    // fetching conversion exchange rates
    const response = await fetch(temp_url);
    const data = await response.json();
    
    // perform conversion
    const inp = temp_in.value;
    const res = inp * data[temp_from.value][temp_to.value][0];
    const ans = res + data[temp_from.value][temp_to.value][1];

    // displaying result to the page
    temp_out.innerText = ans;
    temp_res.innerText = `0 ${temp_from.value} = ${data[temp_from.value][temp_to.value][1]} ${temp_to.value}`;
};

// adding event listeners to input segment of temperature device and window
temp_in.addEventListener('input', () => {
    updateTempVal();
});
window.addEventListener('load', () => {
    updateTempVal();
});

// adding options to the select drop-down box in temperature unit conversion device
for (let select of temp_drop) {
    for (let opt of opt_list) {
        const newOpt = document.createElement('option');
        newOpt.value = opt;
        newOpt.innerText = opt;

        // initially selecting the options for each select drop-down
        if (select.name === "from" && opt === "Degree Celsius (C)") {
            newOpt.selected = true;
        }
        else if (select.name === "to" && opt === "Degree Fahrenheit (F)") {
            newOpt.selected = true;
        }

        select.append(newOpt);
    }

    // adding event listener to each select drop-down
    select.addEventListener('change', () => {
        updateTempVal();
    });
}