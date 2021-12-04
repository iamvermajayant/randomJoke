const button = document.querySelector('.container button');
const joketext = document.querySelector('.container p');

button.addEventListener('click',fetchjoke);

function fetchjoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(data => data.json())
    .then(obj => joketext.innerHTML = obj.value);

}


// async function fetchjoke() {
//     const jokedata = await fetch('https://api.chucknorris.io/jokes/random',{
//         headers:{
//             'Accept': 'application/json'
//         }
//     });
//     const obj = await jokedata.json();
//     joketext.innerHTML = obj.value;
// }