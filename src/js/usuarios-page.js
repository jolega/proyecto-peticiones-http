import { obtenerUsuarios } from "./http-provider";

const body  = document.body;
let tableBody;
let item=0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>
    <hr>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody id="bodyUsuarios" >
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

}

const crearFilaUsuario = ( {email, first_name, last_name, avatar} ) => {
   
    tableBody =document.getElementById("bodyUsuarios")
    item++;

    const html = `
        <td scope="col"> ${item}. </td>
        <td scope="col">  ${email} </td>
        <td scope="col"> ${first_name}  ${last_name}  </td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tableBody.append(tr)

}


export const init = async() => {

    crearHtml();
    const usuarios= await obtenerUsuarios();
    usuarios.forEach(usuario =>  crearFilaUsuario(usuario));
    // puede hacerlo tambien asi  (await obtenerUsuarios()).forEach(usuario => (crearFilaUsuario)

}

