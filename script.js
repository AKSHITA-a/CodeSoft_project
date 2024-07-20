document.addEventListener('DOMContentLoaded', function(){
    // Get all the button element
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    // Initialize variables for current input and result state
    let currentInput = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {

              // Get the value of the button that was clicked
            const value = button.getAttribute('data-value');

            // Clear the display and reset input when 'AC' is pressed
            if (value === 'AC') {
                currentInput = '';
                display.textContent = '0';
                display.style.fontSize = '4em'; // Reset font size
                resultDisplayed = false;
                return;
            }

            // Calculate and display the result when '=' is pressed
            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    display.textContent = currentInput;
                    resultDisplayed = true;
                } catch (e) {
                    display.textContent = 'Error';
                    currentInput = '';
                    resultDisplayed = false;
                }
                return;
            }

             // Handle input after a result has been displayed
            if (resultDisplayed) {
                if (/\d/.test(value)) { // If the new value is a number
                    currentInput = value;
                } else { // If the new value is an operator
                    currentInput += value;
                }
                resultDisplayed = false;
            } else {
                currentInput += value;
            }

            display.textContent = currentInput;
            adjustFontSize();
        });
    });

      // Function to adjust the font size of the display based on input length
    function adjustFontSize() {
        const length = currentInput.length;
        if (length > 10) {
            display.style.fontSize = '2em';
        } else if (length > 5) {
            display.style.fontSize = '3em';
        } else {
            display.style.fontSize = '4em';
        }
    }
});