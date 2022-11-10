const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
const $jokeContainer = document.querySelector('.js-joke-container');
const $randomJokeBtn= document.querySelector('.js-btn');

let oneJoke = () => {
    fetch(jokeApiUrl)
    .then((data) => data.json())
    .then((data) => {
        if (data.type === 'single') {
            $jokeContainer.textContent = `${data.joke}`
        } else {
            $jokeContainer.innerHTML = `${data.setup} <br> ${data.delivery}`
        }
    })
};

$randomJokeBtn.addEventListener('click', oneJoke);
oneJoke();