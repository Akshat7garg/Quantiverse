// declaration of variables based on the classes and ids in body mass index calculation device
const bmi_h = document.querySelector('#h-inp');
const bmi_w = document.querySelector('#w-inp');
const bmi_btn = document.querySelector('#bmi-gen');
const bmi_out = document.querySelector('.bmi-out');

// link for fetching advice related to your body mass index
const bmi_url = '../JSON-files/bmi.json';

// adding paragraph tags for displaying bmi result
const res1 = document.createElement('p');
res1.innerText = `Your Body Mass Index : `;
bmi_out.append(res1);

// adding paragragh tag for displaying bmi category
const res2 = document.createElement('p');
res2.innerText = `Category : `;
bmi_out.append(res2);

// adding paragragh tag for displaying advice for bmi
const res3 = document.createElement('p');
res3.innerText = `Advice : `;
bmi_out.append(res3);

// creating displayAns function for displaying calculated BMI result
const displayAns = async (ans) => {

    // DOM manipulation if there is an invalid input
    if (ans<=0) {
        res1.innerText = "Invalid Input";
        res2.innerText = "";
        res3.innerText = "";
        bmi_out.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
        bmi_out.style.borderColor = "rgb(255, 0, 0)";
    }
    else {
        let type;
        const response = await fetch(bmi_url);
        const data = await response.json();

        // DOM mainpulation if person is underweight
        if (ans>=0 && ans<=18.5) {
            type = "Underweight";
            bmi_out.style.backgroundColor = "rgb(255, 165, 0, 0.6)";
            bmi_out.style.borderColor = "rgb(255, 165, 0)";
        }

        // DOM mainpulation if person is normal weight
        else if (ans>18.5 && ans<=25) {
            type = "Normal";
            bmi_out.style.backgroundColor = "rgb(0, 128, 0, 0.6)";
            bmi_out.style.borderColor = "rgb(0, 128, 0)";
        }

        // DOM mainpulation if person is overweight
        else if (ans>25 && ans<=30) {
            type = "Overweight";
            bmi_out.style.backgroundColor = "rgb(255, 255, 0, 0.6)";
            bmi_out.style.borderColor = "rgb(255, 255, 0)";
        }

        // DOM mainpulation if person is under obesity-1
        else if (ans>30 && ans<=35) {
            type = "Obesity-1";
            bmi_out.style.backgroundColor = "rgb(255, 165, 0, 0.6)";
            bmi_out.style.borderColor = "rgb(255, 165, 0)";
        }

        // DOM mainpulation if person is under obesity-2
        else if (ans>35 && ans<=40) {
            type = "Obesity-2";
            bmi_out.style.backgroundColor = "rgb(255, 69, 0, 0.6)";
            bmi_out.style.borderColor = "rgb(255, 69, 0)";
        }

        // DOM mainpulation if person is under obesity-3
        else {
            type = "Obesity-3";
            bmi_out.style.backgroundColor = "rgb(255, 0, 0, 0.6)";
            bmi_out.style.borderColor = "rgb(255, 0, 0)";
        }

        // displaying values on the page
        res1.innerText = `Your Body Mass Index : ${ans}`;
        res2.innerText = `Category : ${type}`;
        res3.innerText = `Advice : ${data[type]}`;
    }
}

// creating calculateBMI function for calculating body mass index
const calculateBMI = () => {
    let total_h = bmi_h.value;
    total_h *= total_h;
    let ans = bmi_w.value/total_h;

    // converting result in proper decimal format
    ans = Math.round(ans*10);
    ans /= 10;

    displayAns(ans);
};

// adding event listener to the bmi calculation btn
bmi_btn.addEventListener('click', () => {
    calculateBMI();
});