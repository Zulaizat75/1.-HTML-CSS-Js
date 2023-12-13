        // Declare an array of favorite fruits
        const favoriteFruits = ["apple", "banana", "orange", "strawberry", "kiwi"];
    
        // Get the fruits container
        const fruitsContainer = document.getElementById('container');
    
        // for loop to iterate through the array and print each fruit to the browser
        for (let i = 0; i < favoriteFruits.length; i++) {
          // Print to the console
          console.log(favoriteFruits[i]);
    
          // Print to the browser
          const fruitElement = document.createElement('p');
          fruitElement.textContent = favoriteFruits[i];
          fruitsContainer.appendChild(fruitElement);
        }
