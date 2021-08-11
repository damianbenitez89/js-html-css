// const mural = document.getElementsByClassName("mural"); 
// // para hacer referincia al HTML

// // let muralesArray = Array.from(mural); 
// // con esto convertimos el prototipo HTMLCollection en Array

// const form= document.getElementById("ingreso");



// query selector tambien hace referencia pero al primero en 
// caso de querer usar todos querySelectorall

// querySelectorall devuelve un prototipo nodelist
// nodelist es un prototipo parecido al prototipo array y HTMLCollection

const mural=document.querySelector(".mural");
const form= document.querySelector("#ingreso");

form.addEventListener("submit",(event)=>{
    event.preventDefault();//esta funcion hace que el boton submit resetee la pagina que es una funcion predeterminada
     //hice una referenicia del input
    

    if(inputValue){
        const filtrados = filtrarDatos(data,inputValue);
        dibujarTabla(filtrados);


    }else{
        dibujarTabla(data)
    }
});




const tabla=document.querySelector("#cohorte");

function filtrarDatos(array,grupos){
    let alumnosFiltrados = array.filter((alumno)=>alumno.grupo == grupos[0] || alumno.grupo == grupos[1]||alumno.grupo == grupos[2] );//aca cree array nuevo con alumnos filtrados
   return alumnosFiltrados;
};

function dibujarTabla(array){
    tabla.innerHTML=""; //limpear 
    array.forEach((alumno)=>{
        tabla.innerHTML+= `
        <tr>
            <td>${alumno.lastname}</td>
            <td> ${alumno.name}</td>
            <td>${alumno.grupo}</td>
        </tr>`;
    
    });
}

let gr=[3,1];

console.log(filtrarDatos(data,gr));
// dibujarTabla(data)


function crearPoster(tituloInput,textoInput){
    const poster = document.createElement("div");//cree una constante poster que genera un div
    poster.classList.add("poster"); //aderi una clase para darle estilo
    // poste0r.className = "nueva clase" remueve la clase anterior y genera una nueva
    const titulo = document.createElement("h3");// cree constante que genra un titulo H3
    titulo.innerText=tituloInput;// el titulo es lo que se va a tipiar
    poster.appendChild(titulo); //aca indico que titulo va a ser hijo de poster osea el DIV

    const texto = document.createElement("p");
    texto.innerText=textoInput;
    poster.appendChild(texto);

    const cerrar = document.createElement("span");
    cerrar.innerText="x";
    cerrar.addEventListener("click",(event)=>{
        console.log(event.target)
        //mural.removeChild(event.target.parentNode); osea remuevo al hijo de mi abuelo
        //.target remueve el lugar donde estas parado
        mural.removeChild(poster);
    });
    poster.appendChild(cerrar);

    mural.appendChild(poster);
}

crearPoster("damian","solo el mejor");
crearPoster("damian","solo el mejor");
crearPoster("damian","solo el mejor");

crearPoster(data[0].lastname,data[0].name);

data.forEach((tito)=>{
    const titulo =`${tito.lastname},${tito.name}`;
    const texto =`pertenece al grupo ${tito.grupo}`;

    crearPoster(titulo,texto)
})// aca recorri toda la variable data  obtuve los datos y cree un poster de cada uno de los alumons

