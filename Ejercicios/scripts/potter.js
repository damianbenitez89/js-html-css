let tabla = document.getElementById("tabla-personajes");

personajesData.forEach(miembro => {
    let cajita = document.createElement("div");
    cajita.innerHTML =  `<div class="tarjeta-personajes"> <h1>${miembro.name}</h1> <img src="${miembro.image}" class="imagen-personaje" alt=""> <p>${miembro.house}</p> <p>${miembro.actor}</p> </div>`

    tabla.appendChild(cajita)});

