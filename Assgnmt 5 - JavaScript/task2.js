    // Function to check the entered number
    function checkNumber() {
        // Get the value from the input field
        var numberInput = document.getElementById('numInput');
        var num = parseFloat(numberInput.value);
  
        // Check if the input is a valid number
        if (!isNaN(num)){
            // Use an if...else statement to determine the number's sign
            if (num > 0) {
                document.getElementById('result').innerHTML = num + ' is a positive number.';
              } else if (num < 0) {
                document.getElementById('result').innerHTML = num + ' is a negative number.';
              } else {
                document.getElementById('result').innerHTML = num + ' is zero.';
              }
        } else {
            document.getElementById('result').innerHTML = 'Please enter a valid number.';
        }
      }