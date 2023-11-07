import axios from 'axios';

//Fetch Jokes ChuckNorris
const fetchJoke = async () => {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        const imgChuck = result.data.icon_url;
        const joke = result.data.value;
        const jokeNew = document.querySelector('.joke');
        jokeNew.innerHTML = joke;
        const section = document.getElementsByTagName('section');
        document.createElement('img');
        const imgNew = document.getElementsByTagName('img');
        imgNew.src = imgChuck;
        console.log(result);
        return result.data.value;
    } catch (e) {
        console.error(e);
    }
}

fetchJoke();