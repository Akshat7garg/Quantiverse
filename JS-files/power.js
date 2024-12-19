// declaration of variables based on the classes and ids in power unit conversion device
const pow_in = document.querySelector('#power #in');
const pow_out = document.querySelector('#power #out');
const pow_drop = document.querySelectorAll('#power .select-box');
const pow_btn = document.querySelector('#power #gen');
const pow_res = document.querySelector('#power .result');
const pow_from = document.querySelector('#power .in .select-box');
const pow_to = document.querySelector('#power .out .select-box');

// declaration of variables requiered for DOM manipulation and unit conversion
const pow_url = "../JSON-files/power.json";
opt_list = ["Kilowatt (kW)", "Watt (W)", "Joule/second (J/s)", "Imperial housepower (hp)", "Metric housepower (PS)", "Newton-meter/second (N.m/s)"];

// initializing some values and variables
pow_in.value = 1;
pow_btn.style.display = "none";

// creating updatePowVal function to perform power conversion operation
const updatePowVal = async () => {
    // fetching conversion exchange rates
    const response = await fetch(pow_url);
    const data = await response.json();
    
    // perform conversion
    const inp = pow_in.value;
    const ans = inp * data[pow_from.value][pow_to.value];

    // displaying result to the page
    pow_out.innerText = ans;
    pow_res.innerText = `1 ${pow_from.value} = ${data[pow_from.value][pow_to.value]} ${pow_to.value}`;
};

// adding event listeners to input segment of power device and window
pow_in.addEventListener('input', () => {
    updatePowVal();
});
window.addEventListener('load', () => {
    updatePowVal();
});

// adding options to the select drop-down box in power unit conversion device
for (let select of pow_drop) {
    for (let opt of opt_list) {
        const newOpt = document.createElement('option');
        newOpt.value = opt;
        newOpt.innerText = opt;

        // initially selecting the options for each select drop-down
        if (select.name === "from" && opt === "Kilowatt (kW)") {
            newOpt.selected = true;
        }
        else if (select.name === "to" && opt === "Watt (W)") {
            newOpt.selected = true;
        }

        select.append(newOpt);
    }

    // adding event listener to each select drop-down
    select.addEventListener('change', () => {
        updatePowVal();
    });
}