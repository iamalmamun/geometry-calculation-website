document.getElementById('btn-rectangle').addEventListener('click', function(){
    const widthInputField = document.getElementById('width-field');
    const widthNumberFieldString = widthInputField.value;
    const widthNumberField = parseFloat(widthNumberFieldString);
    widthInputField.value = '';

    const lengthInputField = document.getElementById('length-field');
    const lengthNumberFieldString = lengthInputField.value;
    const lengthNumberField = parseFloat(lengthNumberFieldString);
    lengthInputField.value = '';

    const currentRectangleValue = widthNumberField * lengthNumberField;

    const areaCalculationField = document.getElementById('triangle-calculation');
    const triangleTotalCalculationString = areaCalculationField.innerText;
    const triangleTotalCalculation = parseFloat(triangleTotalCalculationString);
    areaCalculationField.innerText = currentRectangleValue, triangleTotalCalculation;
})