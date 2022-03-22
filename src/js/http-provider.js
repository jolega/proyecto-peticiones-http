

const jokeUrl = 'https://api.chucknorris.io/jokes/random' // enpoint



const obtenerChiste = async () => {
    
    try{

        const resp = await fetch (jokeUrl)

        if(!resp.ok) throw alert('no se puedo realizar la peticion')
  
        const chiste = await resp.json();
  
        return chiste;

    }catch (err) {

        return{
            id: 'No se encontro'
        }
    }


}


export{
    obtenerChiste
}