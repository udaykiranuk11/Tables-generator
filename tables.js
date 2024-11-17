 // Your original function with the event listener
 function table() {
    let number = document.getElementById('tableNumber').value; // Get the number from the input field
    
    // Validate if the input is a valid number
    if (isNaN(number) || number === '') {
      alert("Please enter a valid number.");
      return; // Exit if the input is invalid
    }

    // Clear previous content from the output area
    document.getElementById('tableOutput').innerHTML = '';

    // Generate and display the multiplication table
    for (var i = 1; i <= 10; i++) {
      res = number * i;
      document.getElementById('tableOutput').innerHTML += `${number} x ${i} = ${res}<br>`;
    }
  }

  // Attach the event listener to the button
  document.getElementById('generateTableBtn').addEventListener('click', table);