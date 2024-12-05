// declaration of variables based on classes and ids
const power_in = document.querySelector('#power-in');
const power_out = document.querySelector('#power-out');
const pow_dropdowns = document.querySelectorAll('.power');
const from_pow = document.querySelector('#power-in + select');
const to_pow = document.querySelector('#power-out + select');
const pow_msg = document.querySelector('#pow-msg');

// declaration of self created variables
const powerList = ["Kilowatt", "Watt", "Joule/second", "Imperial housepower", "Metric housepower", "Newton-meter/second"];
const pow_url = "../JSON files/power.json";

// adding event listener to the input section
power_in.addEventListener('input', () => {
    updatePowValue();
});

// adding options to the dropdown of select input
for (let select of pow_dropdowns) {
    for (let opt of powerList) {
        let newOpt = document.createElement("option");
        newOpt.innerText = opt;
        newOpt.value = opt;
        select.append(newOpt);

        if (select.name==="power-from" && opt==="Kilowatt") {
            newOpt.selected = "Selected";
        }

        else if (select.name==="power-to" && opt==="Watt") {
            newOpt.selected = "Selected";
        }
    }

    select.addEventListener('change', () => {
        updatePowValue();
    });
}

// updating output based on the input and fetching json file
const updatePowValue = async () => {    
    let Val = power_in.value;
    let response = await fetch(pow_url);
    let data = await response.json();

    // displaying values to page
    let finalVal = Val * data[from_pow.value][to_pow.value];
    power_out.innerText = finalVal;
    pow_msg.innerText = `1 ${from_pow.value} = ${data[from_pow.value][to_pow.value]} ${to_pow.value}`;
}