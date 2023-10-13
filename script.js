const apiUrl = "https://icanhazdadjoke.com/";

function changeHeaderTitle(headerElement) {
  const headerTitle = headerElement.querySelector('.header__element');

  if (headerTitle.textContent === "Let's Grill") {
    headerTitle.textContent = "Let's Roast!!!";
  } else {
    headerTitle.textContent = "Let's Grill";
  }
}

function processInput() {
    const interactInput = document.getElementById("interact").value.toLowerCase();
    const jokeContainer = document.getElementById("joke-container");
    event.preventDefault();

    if (interactInput.includes("joke") || interactInput.includes("jokes")|| interactInput.includes("joke?" || interactInput.includes("jokes?"))) {
        fetchRandomJoke(jokeContainer);
    } 
    else {
        jokeContainer.innerText = "I think I need another beer..";
    }
}

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