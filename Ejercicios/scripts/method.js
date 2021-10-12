let nombre = "carlos damian benitez"

nombre.split('a')

console.log (nombre)


//funciones de orden superior

//MAP : recorre un array y retorna un nuevo arrar 

let num = [1,5,9,8,7,3,5,4,6,9,8,7];

let mult2= num.map(function(x){
    return x*2
})

//FILTER es una funcion de orden superior que recorre un elemento y devuelve uno nuevo con una condicion


var perros = 
   [ {
        raza : "jaimi",
        esPeligroso: true
    },
    {
        raza : "ramion",
        esPeligroso: false
    },
    {
        raza : "tito",
        esPeligroso: true
    },
    {
        raza : "jaimi",
        esPeligroso: false
    },
    {
        raza : "tito",
        esPeligroso: true
    },
    {
        raza : "tito",
        esPeligroso: false
    },
    {
        raza : "tito",
        esPeligroso: true
    }]

    console.log(perros);

    let perrosMansos = perros.filter(function(array){
        return array.esPeligroso===false;
    })

    let perrosMalos = perros.filter((x)=>x.esPeligroso ===true)

    console.log(perrosMansos);
    console.log(perrosMalos);

    // FOREACH por cada uno a diferencia del map este solamente ejecuta sobre el array que tenemos 

    perros.forEach((perro)=>{
        console.log(perro)
    })

    //ternario es como un if en una sola linea
    //sintaxis , seria  condicion signo de pregunta , primera accion verdadera, : segunda accion

    perros.forEach((x)=>{x.esPeligroso===true ?  x.esPeligroso = false : console.log("Dami no sound")})

    console.log(perros)
       
// array. FIND devuelve el primer elemento que te devuelve lo que pedis
//similar al filter pero te da la primera opcion
// array.SOME devuelve un booleano y al menos uno comple la condicion  que se solicita
