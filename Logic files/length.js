// declaration of variables based on classes and ids
const length_in = document.querySelector('#length-in');
const length_out = document.querySelector('#length-out');
const len_dropdowns = document.querySelectorAll('.length');
const from_len = document.querySelector('#length-in + select');
const to_len = document.querySelector('#length-out + select');
const len_msg = document.querySelector("#len-msg");

// declaration of self created variables
const lengthList = ["Kilometre", "Metre", "Decimetre", "Centimetre", "Millimetre", "Inch", "Mile", "Foot", "Yard"];
const len_url = "../JSON files/length.json";

// adding event listener to the input section
length_in.addEventListener('input' , (e) => {
    updateLenValue();
});

// adding options to the dropdown of select input
for (let select of len_dropdowns) {
    for (let opt of lengthList) {
        let newOpt = document.createElement("option");
        newOpt.innerText = opt;
        newOpt.value = opt;
        select.append(newOpt);

        if (select.name==="length-from" && opt==="Kilometre") {
            newOpt.selected = "Selected";
        }

        else if (select.name==="length-to" && opt==="Metre") {
            newOpt.selected = "Selected";
        }
    }

    select.addEventListener('change', () => {
        updateLenValue();
    });
}

// updating output based on the input and fetching json file
const updateLenValue = async () => {
    let Val = length_in.value;
    let response = await fetch(len_url);
    let data = await response.json();

    // displaying values to page
    let finalVal = Val * data[from_len.value][to_len.value];
    length_out.innerText = finalVal;
    len_msg.innerText = `1 ${from_len.value} = ${data[from_len.value][to_len.value]} ${to_len.value}`;
}