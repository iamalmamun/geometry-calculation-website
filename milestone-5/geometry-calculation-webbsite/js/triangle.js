document.getElementById('btn-triangle').addEventListener('click', function(){
    const balanceInputField = document.getElementById('b-input-field');
    const balanceNumberInputFieldString = balanceInputField.value;
    const balanceNumberInputField = parseFloat(balanceNumberInputFieldString);
    balanceInputField.value = '';

    const heightInputField = document.getElementById('h-input-field');
    const heightNumberInputFieldString = heightInputField.value;
    const heightNumberInputField = parseFloat(heightNumberInputFieldString);
    heightInputField.value = '';
    
    const currentInputValue = balanceNumberInputField * heightNumberInputField;
    
    const areaCalculationField = document.getElementById('total-calculation');
    const totalCalculationString = areaCalculationField.innerText;
    const totalCalculation = parseFloat(totalCalculationString);
    areaCalculationField.innerText = totalCalculation;
    
})