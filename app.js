const list = document.getElementById("list");
const inputField = document.getElementById("inputField");

function calculate() {
    
    let input = inputField.value;
    if (input) {
        let result = eval(input);

        inputField.value = result;
        
        list.innerHTML += `<li class='rightside'>${input} = ${result}</li>`;
        // inputField.value = '';
    }

}
