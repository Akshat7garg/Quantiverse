// declaration of variables based on classes and ids
const weight_in = document.querySelector('#weight-in');
const weight_out = document.querySelector('#weight-out');
const wei_dropdowns = document.querySelectorAll('.weight');
const from_wei = document.querySelector('#weight-in + select');
const to_wei = document.querySelector('#weight-out + select');
const wei_msg = document.querySelector('#wei-msg');

// declaration of self created variables
const weightList = ["Kilogram", "Gram", "Milligram", "Microgram", "Tonne", "Quintal", "Carat", "Pound", "Grain"];
const wei_url = "../JSON files/weight.json";

// adding event listener to the input section
weight_in.addEventListener('input', () => {
    updateWeiValue();
});

// adding options to the dropdown of select input
for (let select of wei_dropdowns) {
    for (let opt of weightList) {
        let newOpt = document.createElement("option");
        newOpt.innerText = opt;
        newOpt.value = opt;
        select.append(newOpt);

        if (select.name==="weight-from" && opt==="Kilogram") {
            newOpt.selected = "Selected";
        }

        else if (select.name==="weight-to" && opt==="Gram") {
            newOpt.selected = "Selected";
        }
    }

    select.addEventListener('change', () => {
        updateWeiValue();
    });
}

// updating output based on the input and fetching json file
const updateWeiValue = async () => {
    let Val = weight_in.value;
    let response = await fetch(wei_url);
    let data = await response.json();

    // displaying values to page
    let finalVal = Val * data[from_wei.value][to_wei.value];
    weight_out.innerText = finalVal;
    wei_msg.innerText = `1 ${from_wei.value} = ${data[from_wei.value][to_wei.value]} ${to_wei.value}`;
}