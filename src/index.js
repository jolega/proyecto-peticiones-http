

const jokeUrl = 'https://api.chucknorris.io/jokes/random' // enpoint

fetch ( jokeUrl ).then( resp => {

    resp.json().then( ({id, value})=> {  // extrae la respuesta  y es una promesa
        console.log(id);
        console.log(value);
    });
  
})