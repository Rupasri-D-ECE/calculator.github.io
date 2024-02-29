function appendToScreen(value) {
    forms.screen.value += value;
}

function clearScreen() {
    forms.screen.value = '';
}

function calculateResult() {
    forms.screen.value = eval(forms.screen.value);
}
