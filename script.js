const apiUrl = "https://icanhazdadjoke.com/";

// dadContainer.addEventListener("submit", function () {
//     const updateSubmissionsDisplay = document.getElementById("joke-container");  // old event listener for the submit button
// });

// function reload() {
//     window.location.reload();   // old function for onclick to refresh entire page
// }


function processInput() {
    const interactInput = document.getElementById("interact").value.toLowerCase();  //convert input to lowercase
    const jokeContainer = document.getElementById("joke-container");
    event.preventDefault();                 // prevent page from reloading on submission



    if (interactInput.includes("joke") || interactInput.includes("jokes")|| interactInput.includes("joke?" || interactInput.includes("jokes?"))) {
        fetchRandomJoke(jokeContainer);
    } 
    else {
        jokeContainer.innerText = "I think I need another beer..";

    }
}

// Function to fetch and display a random joke
async function fetchRandomJoke() {

  const jokeContainer = document.getElementById("joke-container");

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "Accept": "application/json",      }
    });

    if (response.ok) {
      const data = await response.json();
      const joke = data.joke;

      jokeContainer.innerText = `${joke}`;
    } else {
      jokeContainer.innerText = "Failed to fetch a joke.";
    }
  } catch (error) {
    jokeContainer.innerText = `Error: ${error.message}`;
  }
}

// Call the function to fetch and display a random joke
// fetchRandomJoke();       //old calling of function


// change button to form with placeholder text "hey buddy"
// accept input as a string
// if string contains "joke" or "jokes"
    // print joke
// else
    // print "I"m gonna need another beer"

// new onclick function

