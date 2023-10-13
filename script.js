const apiUrl = 'https://icanhazdadjoke.com/';

dadContainer.addEventListener("submit", function () {
    const updateSubmissionsDisplay = document.getElementById("joke-container");
});

function reload() {
    window.location.reload();
}



// Function to fetch and display a random joke
async function fetchRandomJoke() {

  const jokeContainer = document.getElementById('joke-container');

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',      }
    });

    if (response.ok) {
      const data = await response.json();
      const joke = data.joke;

      // Display the joke in your HTML
      jokeContainer.innerText = `${joke}`;
    } else {
      jokeContainer.innerText = 'Failed to fetch a joke.';
    }
  } catch (error) {
    jokeContainer.innerText = `Error: ${error.message}`;
  }
}

// Call the function to fetch and display a random joke
fetchRandomJoke();