// declaration of variables based on the classes and ids in length unit conversion device
const len_in = document.querySelector('#length #in');
const len_out = document.querySelector('#length #out');
const len_drop = document.querySelectorAll('#length .select-box');
const len_btn = document.querySelector('#length #gen');
const len_res = document.querySelector('#length .result');
const len_from = document.querySelector('#length .in .select-box');
const len_to = document.querySelector('#length .out .select-box');

// declaration of variables requiered for DOM manipulation and unit conversion
const len_url = "https://raw.githubusercontent.com/Akshat7garg/Quantiverse/main/JSON-files/length.json";
let opt_list = ["Kilometre (km)", "Metre (m)", "Decimetre (dm)", "Centimetre (cm)", "Millimetre (mm)", "Inch (in)", "Mile (mi)", "Foot (ft)", "Yard (yd)"];

// initializing some values and variables
len_in.value = 1;
len_btn.style.display = "none";

// creating updateLenVal function to perform length conversion operation
const updateLenVal = async () => {
    // fetching conversion exchange rates
    const response = await fetch(len_url);
    const data = await response.json();
    
    // perform conversion
    const inp = len_in.value;
    const ans = inp * data[len_from.value][len_to.value];

    // displaying result to the page
    len_out.innerText = ans;
    len_res.innerText = `1 ${len_from.value} = ${data[len_from.value][len_to.value]} ${len_to.value}`;
};

// adding event listeners to input segment of length device and window
len_in.addEventListener('input', () => {
    updateLenVal();
});
window.addEventListener('load', () => {
    updateLenVal();
});

// adding options to the select drop-down box in length unit conversion device
for (let select of len_drop) {
    for (let opt of opt_list) {
        const newOpt = document.createElement('option');
        newOpt.value = opt;
        newOpt.innerText = opt;

        // initially selecting the options for each select drop-down
        if (select.name === "from" && opt === "Kilometre (km)") {
            newOpt.selected = true;
        }
        else if (select.name === "to" && opt === "Metre (m)") {
            newOpt.selected = true;
        }

        select.append(newOpt);
    }

    // adding event listener to each select drop-down
    select.addEventListener('change', () => {
        updateLenVal();
    });
}
