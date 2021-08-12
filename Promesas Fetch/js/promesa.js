// let edad = 17

// new Promise ((resolve, reject)=>{
//     if(edad>=18){
//         resolve("Bienvenido, sos mayor de 18")
//     }else{
//         reject("no tenes 18")
//     }

// })
// .then ((respuesta)=>{
//     console.log(respuesta)
// })
// .catch((error)=>{
//     console.log(error)
// })



fetch('https://jsonplaceholder.typicode.com/users')
.then(respuesta => respuesta.json())
.then(data=> miPrograma(data))
.catch(error=>console.log(error))

function miPrograma(data){
    data.map((miembro)=>{
        const titulo = document.createElement('h1')
        titulo.innerText=miembro.name
        document.getElementById('body').appendChild(titulo)
    })
}