function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    inputField.value = '';
    return inputFieldValueString;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

document.getElementById("btn-deposit").addEventListener("click", function() {
    const newDepositAmount = getInputValueById("deposit-field");
})