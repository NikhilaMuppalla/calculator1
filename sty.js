let string = "";
let buttons = document.querySelectorAll('.button');
let pi = Math.PI;
let E = Math.E;
// const data = [];
// const display = document.getElementById('display');
// function updateDisplay() {
//     display.textContent = data.join('\n');
// }

// Get the reference to the <p> element by its ID
// Function to remove data from the <p> element and localStorage
const calculator = document.getElementById('calculator');
const history = document.getElementById('history');
const historyButton = document.getElementById('historyButton');
const historyList = document.getElementById('historyList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

// Function to perform the calculation and update the calculator history
function performCalculation(expression) {
  // Retrieve the current calculator history from LocalStorage
  const calculatorHistory = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

  // Add the calculation expression and result to the history
  calculatorHistory.push(`${expression}`);

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

clearHistoryButton.addEventListener('click', () => {
    clearHistory();
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
function fact(num) {
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        let result = 1;
        for (var i = num; i > 1; i--) {
            result *= i;
        };
        return result;
    }
};
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            Ans = eval(string);
            document.querySelector('input').value = Ans;
            // let st = Ans.toString();
            // data.push(string + ' = ' + st);
            // updateDisplay();
            initializeApp();
            performCalculation(string);
            // appendToHistory('This is the second entry.');
            // localStorage.clear();
            // historyParagraph.innerHTML = '';

            string = Ans;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '!') {
            string = eval(string);
            Ans = fact(string);
            document.querySelector('input').value = Ans;
            string = Ans;
        }
        else if (e.target.innerHTML == 'In') {
            string = eval(string);
            Ans = Math.log(string);
            document.querySelector('input').value = Ans;
            string = Ans;
        }
        else if (e.target.innerHTML == 'log') {
            string = eval(string);
            Ans = Math.log10(string);
            document.querySelector('input').value = Ans;
            string = Ans;
        }
        else if (e.target.innerHTML == 'sqrt') {
            string = eval(string);
            Ans = string ** (1 / 2);
            document.querySelector('input').value = Ans;
            string = Ans;
        }
        else {
            if (e.target.innerHTML == 'BS') {
                string = string.replace(string.charAt(string.length - 1), "");
                document.querySelector('input').value = string;
            }
            else {
                if (e.target.innerHTML == 'sin' || e.target.innerHTML == 'cos' || e.target.innerHTML == 'tan' || e.target.innerHTML == 'cosec' || e.target.innerHTML == 'sec' || e.target.innerHTML == 'cot') {
                    string = eval(string);
                    string = string * Math.PI / 180
                    if (e.target.innerHTML == 'sin') {
                        Ans = Math.sin(string);
                    }
                    else if (e.target.innerHTML == 'cos') {
                        Ans = Math.cos(string);
                    }
                    else if (e.target.innerHTML == 'tan') {
                        Ans = Math.tan(string);
                    }
                    else if (e.target.innerHTML == 'cosec') {
                        Ans = 1 / Math.sin(string);
                    }
                    else if (e.target.innerHTML == 'sec') {
                        Ans = 1 / Math.cos(string);
                    }
                    else if (e.target.innerHTML == 'cot') {
                        Ans = 1 / Math.tan(string);
                    }
                    document.querySelector('input').value = Ans;
                    string = Ans;
                }

                //console.log(e.target)
                else {
                    string = string + e.target.innerHTML;
                    document.querySelector('input').value = string;
                }

            }

        }

    })
})
