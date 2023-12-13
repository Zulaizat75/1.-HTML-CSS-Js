document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM content to be fully loaded before attaching the event listener
  
    // Get references to the button and paragraph elements
    var button = document.getElementById('myButton');
    var paragraph = document.getElementById('myPara');
  
    // Add an event listener to the button
    button.addEventListener('click', function() {
      // Change the content of the paragraph when the button is clicked
      paragraph.textContent = 'We Love Learning JavaScript!';
    });
  });
  