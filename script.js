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