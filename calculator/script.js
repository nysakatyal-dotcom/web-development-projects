const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const expression = display.value;

        if (!expression || !/^[0-9+\-*/%.() ]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = Number(result.toPrecision(12)).toString();
    } catch {
        display.value = "Error";
    }
}
