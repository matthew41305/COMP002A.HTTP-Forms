// waits for tyhe DOM content to load before it runs the script
document.addEventListener('DOMContentLoaded', () => {

    //gets form of element by the ID
    const form = document.getElementById('colorForm');
    // gets the color of the input by its ID
    const colorInput = document.getElementById('colorInput');

    // checks if the color value is saved in local storage or not
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) { //checks if the saved color even exists
        console.log('Saved color: ${savedColor}'); //logs the saved color
        colorInput.value = savedColor; // set the Color input field to the saved value
    }

    // add an event listener to the form for "submit"
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // stops default action for submit

        const colorValue = colorInput.Value; // gets the current value of color input
        console.log('Selected Color: ${ColorValue}'); // logs selected color to the console
        // saves the color that its on to local sotrage with 'selectedColor'
        localStorage.setItem('selectedColor', colorValue);
    });
});