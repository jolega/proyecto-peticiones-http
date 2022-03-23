

const jokeUrl     = 'https://api.chucknorris.io/jokes/random' // enpoint
const urlUsuarios = 'https://reqres.in/api/users?page=2'


const obtenerChiste = async () => {
    
    try{

        const resp = await fetch (jokeUrl)

        if(!resp.ok) throw alert('no se puedo realizar la peticion')
  
        const {icon_url, id, value } =await resp.json();
       
        return  {
            icon_url,
            id, 
            value 
        };

    }catch (err) {

        throw err
    }


}

const obtenerUsuarios = async  () => {
    try{
        const resp      = await fetch (urlUsuarios)
        const { data:usuarios }  = await resp.json(); // : usuarios renombra la data

        return usuarios;
    }
    catch{

    }
}

export{
    obtenerChiste,
    obtenerUsuarios
}