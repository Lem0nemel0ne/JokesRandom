const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://api.chucknorris.io/jokes/random";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(response => response.json())
    .then(data => {
        jokeContainer.textContent = data.value;
        jokeContainer.classList.add("fade");
    })
    .catch(error => {
        console.error("Error fetching joke:", error);
        jokeContainer.textContent = "Error fetching joke. Please try again later.";
        jokeContainer.classList.add("fade");
    });
};

btn.addEventListener("click", getJoke);
