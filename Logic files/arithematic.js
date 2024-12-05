let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('#display').innerText = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = "";
      document.querySelector('#display').innerText = string;
    }
    else if(e.target.innerHTML == 'C'){
        string = string.substring(0, string.length-1);
        document.querySelector('#display').innerText = string;
    }
    else{
    string = string + e.target.innerHTML;
    document.querySelector('#display').innerText = string;
    }
  })
})