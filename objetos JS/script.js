 const persona = {
     nombre:'damian',
     casado:'true',
     edad:25,
     amigos:['fer','cami','antonio'],
     direccion:{
         calle:'rio de janeiro',
         altura: '3395',
         cidaud:'casanova',
     },
     parientes:[
         {nombre:'daniel',parestesco:'hermano'},
         {nombre:'juan', parestesco:'papa'}
     ]
 }

 console.log(persona.parientes[1].parestesco); //para imprimir padres

 persona.parientes.map(pariente =>{
     console.log(pariente.nombre, pariente.parestesco) //iterar en parientes e imprim lo que quiero
 })
 persona.DNI = 35081213; // agregar un dato al objeto

 persona.edad=26; //modifica la edad del objeto que en la base es 25

 const number= [20,3,65,84,59,5,8,9]

 console.log(number.sort((a,b)=>a-b))// con la formula sort((a,b)=>a-b) te permite ordenar sin codigo ascci
 console.log(number.sort((a,b)=>b-a))// al reves

//las calses son fabricas de objetos, y los objetos responden a las clases
// clase es el molde de los objetos
class Persona {
    constructor(nombre, apellido,altura,edad){
        this.nombrePersona = nombre;
        this.apellidoPersona= apellido;
        this.alturaPersona= altura;
        this.edadPersona = edad;
    }
    cumplirAnos(){
        this.edadPersona ++
    }      
}//genere un molde de persona

const persona1 = new Persona ('damian','benitez','1.78','31') //genere un objeto en base a clases

console.log(persona1);

persona1.cumplirAnos()
console.log(persona1);

//como heredar una clase en otra clase
class Person {
    constructor(nombre, apellido){
        this.nombrePersona = nombre;
        this.apellidoPersona= apellido;
    }
    cumplirAnos(){
        this.edadPersona ++
    }      //aca cree una clase
}
class Job extends Person  { //con el extends person vincule la otra clase
    constructor (nombre, apellido,sueldo, cargo){ //solicitio los parametros incluidos los que vincule
        super(nombre,apellido) // con super selecciono los parametros que pide la clase vinculada
        this.sueldo= sueldo;
        this.cargo=cargo;
    }
}

let dami= new Job ('dami','dom',50000,'tecnico')

console.log(dami)

