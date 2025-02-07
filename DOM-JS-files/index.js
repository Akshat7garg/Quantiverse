// Declaration of Variables
const hamBtn = document.querySelector('.ham-btn');
const linkBox = document.querySelector('.link-box');
const choiceBox = document.querySelector('.choices');
const deviceBox = document.querySelector('.device');
const convertor_device = document.querySelector('.convert');
const keypad = document.querySelector('.keypad');

// adding span tags to the hamburger button
for (let i = 0; i < 3; i++) {
    const spanTag = document.createElement('span');
    hamBtn.appendChild(spanTag);
}

// creating reference for link (anchor) tag
const a_name = {
    "Developer's Info": 'https://github.com/Akshat7garg',
    "Source Code": 'https://github.com/Akshat7garg/Quantiverse'
};

// adding link (anchor) tag to the header
for (let link in a_name) {
    const a_tag = document.createElement('a');
    a_tag.innerText = link;
    a_tag.setAttribute('href', a_name[link]);
    a_tag.setAttribute('target', '_blank');
    linkBox.appendChild(a_tag);
}

// creating reference for choice buttons
const btn_name = {
    'Arithmetic Calculator': '<i class="fa-solid fa-plus-minus"></i>',
    'BMI Calculator': '<i class="fa-solid fa-child-reaching"></i>',
    'Currency Convertor': '<i class="fa-solid fa-dollar-sign"></i>',
    'Length Convertor': '<i class="fa-solid fa-text-height"></i>',
    'Weight Convertor': '<i class="fa-solid fa-scale-unbalanced"></i>',
    'Temperature Convertor': '<i class="fa-solid fa-temperature-low"></i>',
    'Power Convertor': '<i class="fa-solid fa-bolt"></i>'
};

// adding buttons to the option/choice box
for (let btn in btn_name) {
    const btn_tag = document.createElement('button');

    const spanLogo = document.createElement('span'); // adding icon to button
    spanLogo.innerHTML = btn_name[btn];
    btn_tag.appendChild(spanLogo);

    const spanName = document.createElement('span'); // adding name to button
    spanName.innerText = btn;
    btn_tag.appendChild(spanName);

    btn_tag.setAttribute('class', 'opt-btn');
    choiceBox.appendChild(btn_tag);
}

// unique ids for each unit conversion device
const unit_ids = ["currency", "length", "weight", "temperature", "power"];

// cloning/duplication unit conversion devices
for (let idx in unit_ids) {
    if (idx == 0) {
        convertor_device.setAttribute('id', unit_ids[idx]);
    }
    else {
        const copy = convertor_device.cloneNode('div');
        copy.setAttribute('id', unit_ids[idx]);
        deviceBox.appendChild(copy);
    }
}

// creating reference for the buttons of the keypad of the arithematic calculator
const keylist = {
    "key_val1": ['AC', 'C', '%', '/'],
    "key_val2": ['7', '8', '9', '*'],
    "key_val3": ['4', '5', '6', '+'],
    "key_val4": ['1', '2', '3', '-'],
    "key_val5": ['0', '.', '=']
};

// adding buttons to the keypad of arithematic calculator
for (let key in keylist) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    // loop for adding buttons in each row
    for (let keyVal of keylist[key]) {
        const btn = document.createElement('button');
        btn.innerText = keyVal;
        if (keyVal == "=") {
            btn.setAttribute('id', 'equal');
        }
        row.appendChild(btn);
    }
    keypad.appendChild(row);
}

// list of javascript files that are going to attach with html filw
const scripts = [
    "./DOM-JS-files/main.js",
    "./DOM-JS-files/curr_ref.js",
    "./JS-files/arithmetic.js",
    "./JS-files/bmi.js",
    "./JS-files/currency.js",
    "./JS-files/length.js",
    "./JS-files/weight.js",
    "./JS-files/temperature.js",
    "./JS-files/power.js"
];

// attching javascript files with html file
scripts.forEach((script) => {
    const scriptTag = document.createElement("script");
    scriptTag.src = script;
    scriptTag.defer = true;

    document.body.appendChild(scriptTag);
});