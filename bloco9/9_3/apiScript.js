

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch('https://icanhazdadjoke.com/', myObject)
  .then(response => response.json())
  .then(data => {
    const recebe = document.getElementById('jokeContainer')
    const p = document.createElement('p');
    p.innerHTML = data.joke
    recebe.appendChild(p)
  })
}
                    const myObject = {
                      method: 'GET',
                      headers: { 'Accept': 'application/json' }
                    };

fetchJoke();

