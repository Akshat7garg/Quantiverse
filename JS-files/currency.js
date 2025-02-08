// declaration of variables based on the classes and ids in currency unit conversion device
const cur_in = document.querySelector('#currency #in');
const cur_out = document.querySelector('#currency #out');
const cur_drop = document.querySelectorAll('#currency .select-box');
const cur_btn = document.querySelector('#currency #gen');
const cur_res = document.querySelector('#currency .result');
const cur_from = document.querySelector('#currency .in .select-box');
const cur_to = document.querySelector('#currency .out .select-box');

// declaration of variables requiered for DOM manipulation and unit conversion
const cur_baseURL = "https://latest.currency-api.pages.dev/v1/currencies/";

// initializing some values and variables
cur_in.value = 1;

// creating updatecurVal function to perform currency conversion operation
const updatecurVal = async () => {
    const from = country_data[cur_from.value][1].toLowerCase();
    const to = country_data[cur_to.value][1].toLowerCase();

    // fetching conversion exchange rates
    const cur_url = `${cur_baseURL}${from}.json`;
    const response = await fetch(cur_url);
    const data = await response.json();
    
    // perform conversion
    const inp = cur_in.value;
    const ans = inp * data[from][to];

    // displaying result to the page
    cur_out.innerText = ans;
    cur_res.innerText = `1 ${cur_from.value} = ${data[from][to]} ${cur_to.value}`;
};

// adding options to the select drop-down box in currency unit conversion device
for (let select of cur_drop) {
    for (let opt in country_data) {
        const newOpt = document.createElement('option');
        newOpt.value = opt;
        newOpt.innerText = opt;
        select.append(newOpt);
        
        // initially selecting the options for each select drop-down
        if (select.name === "from" && opt === "United States (US)") {
            newOpt.selected = "selected";
        }
        else if (select.name === "to" && opt === "India (IN)") {
            newOpt.selected = "selected";
        }
    }
}

// adding event listeners to window and convert btn
cur_btn.addEventListener('click', () => {
    updatecurVal();
});
window.addEventListener('load', () => {
    updatecurVal();
});
