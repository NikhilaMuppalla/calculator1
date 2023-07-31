const calculator = document.getElementById('calculator');
const history = document.getElementById('history');
const historyButton = document.getElementById('historyButton');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

// Function to perform the calculation and update the calculator history
function performCalculation(expression, result) {
    // Retrieve the current calculator history from LocalStorage
    const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    // Add the calculation expression and result to the history
    calculatorHistory.push(`${expression} = ${result}`);

    // Update LocalStorage with the updated calculator history
    localStorage.setItem('calculatorHistory', JSON.stringify(calculatorHistory));
}

// Function to display the calculator view
function showCalculatorView() {
    calculator.style.display = 'block';
    history.style.display = 'none';
}

// Function to display the history view
function showHistoryView() {
    calculator.style.display = 'none';
    history.style.display = 'block';

    // Display the calculator history when the history view is shown
    displayHistory();
}

// Function to display the calculator history
function displayHistory() {
    // Retrieve the calculator history from LocalStorage
    const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    // Clear existing history entries from the list
    historyList.innerHTML = '';

    // Loop through the calculatorHistory array and display each entry in the list
    calculatorHistory.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry;

        // Create a delete button for this entry
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteEntry(entry));

        listItem.appendChild(deleteButton);
        historyList.appendChild(listItem);
    });
}

// Function to delete a calculator history entry
function deleteEntry(entry) {
    // Retrieve the calculator history from LocalStorage
    const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    // Filter out the entry to be deleted
    const newCalculatorHistory = calculatorHistory.filter(item => item !== entry);

    // Update LocalStorage with the new data
    localStorage.setItem('calculatorHistory', JSON.stringify(newCalculatorHistory));

    // Refresh the displayed calculator history after deletion
    displayHistory();
}

// Function to clear the entire calculator history
function clearHistory() {
    // Update LocalStorage with an empty array
    localStorage.setItem('calculatorHistory', JSON.stringify([]));

    // Refresh the displayed calculator history after clearing
    displayHistory();
}

// When the user clicks the History button, show the history view
historyButton.addEventListener('click', () => {
    showHistoryView();
});

// When the user clicks the "Back to Calculator" button in the history view, show the calculator view
const backButton = document.createElement('button');
backButton.textContent = 'Back to Calculator';
backButton.addEventListener('click', () => {
    showCalculatorView();
});
history.appendChild(backButton);

// Initial setup when the page loads
function initializeApp() {
    // Set up calculator UI and logic here
    // ...

    // Display the calculator view initially
    showCalculatorView();
}

initializeApp();
