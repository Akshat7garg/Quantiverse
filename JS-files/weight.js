// declaration of variables based on the classes and ids in weight unit conversion device
const wei_in = document.querySelector('#weight #in');
const wei_out = document.querySelector('#weight #out');
const wei_drop = document.querySelectorAll('#weight .select-box');
const wei_btn = document.querySelector('#weight #gen');
const wei_res = document.querySelector('#weight .result');
const wei_from = document.querySelector('#weight .in .select-box');
const wei_to = document.querySelector('#weight .out .select-box');

// declaration of variables requiered for DOM manipulation and unit conversion
const wei_url = "../JSON-files/weight.json";
opt_list = ["Kilogram (kg)", "Gram (g)", "Milligram (mg)", "Microgram (ug)", "Tonne (t)", "Quintal (q)", "Carat (c)", "Pound (lb)", "Grain (gr)"];

// initializing some values and variables
wei_in.value = 1;
wei_btn.style.display = "none";

// creating updateWeiVal function to perform weight conversion operation
const updateWeiVal = async () => {
    // fetching conversion exchange rates
    const response = await fetch(wei_url);
    const data = await response.json();
    
    // perform conversion
    const inp = wei_in.value;
    const ans = inp * data[wei_from.value][wei_to.value];

    // displaying result to the page
    wei_out.innerText = ans;
    wei_res.innerText = `1 ${wei_from.value} = ${data[wei_from.value][wei_to.value]} ${wei_to.value}`;
};

// adding event listeners to input segment of weight device and window
wei_in.addEventListener('input', () => {
    updateWeiVal();
});
window.addEventListener('load', () => {
    updateWeiVal();
});

// adding options to the select drop-down box in weight unit conversion device
for (let select of wei_drop) {
    for (let opt of opt_list) {
        const newOpt = document.createElement('option');
        newOpt.value = opt;
        newOpt.innerText = opt;

        // initially selecting the options for each select drop-down
        if (select.name === "from" && opt === "Kilogram (kg)") {
            newOpt.selected = true;
        }
        else if (select.name === "to" && opt === "Gram (g)") {
            newOpt.selected = true;
        }

        select.append(newOpt);
    }

    // adding event listener to each select drop-down
    select.addEventListener('change', () => {
        updateWeiVal();
    });
}