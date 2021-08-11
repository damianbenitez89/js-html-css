let tablita = document.getElementById("membertable");
let botonEstados = document.getElementById("opciones-estados"); 
const member= data.results[0].members;
let partidos=document.getElementsByName("party");




function dibujarTabla(array){  
    tablita.innerHTML ="";
    let statesValue=botonEstados.value;
    array.forEach((member)=>{
            const fullName= `${member.last_name},${member.first_name}${member.midle_name||""}`
            tablita.innerHTML += `
             <tr>
                 <td> <a href="${member.url}">${fullName}</a> </td>
                 <td>${member.party}</td>
                 <td>${member.state}</td>
                 <td>${member.seniority}</td>
                 <td>${member.votes_with_party_pct}%</td> 
             </tr>`
       
    });
}


let checkPartido=[];
for (let index = 0; index < partidos.length; index++) {
    partidos[index].addEventListener("change",() => {
        checkPartido=[]
        for (let index = 0; index < partidos.length; index++) {
            if(partidos[index].checked===true){
                checkPartido.push(partidos[index].value)
            }    
        }
        filtrarParty(member,checkPartido);
    })
        
}   



function buscarEstados (array) {
    let todosLosEstados = array.map(x=> x.state);//estados de members
    let estados = [];
    for (let i=0; i< todosLosEstados.length; i++) {
        if (!estados.includes(todosLosEstados[i])){
            estados.push(todosLosEstados[i]); //saque los repetidos
        }
    } 
        
    return estados;
}

function opcionEstados(estados){
    estados.forEach(x => botonEstados.innerHTML += `<option value="${x}">${x}</option>`);
}


opcionEstados(buscarEstados(member));


function filtrarEstados (array,estado){
    let estadosF=array.filter((member)=>member.state==estado);
    
    dibujarTabla(estadosF);
}

//console.log(filtrarEstados(member,"TN")); PRUEBA

function filtrarParty(array,partido){
    let partyF=array.filter((member)=>member.party==partido[0]|| member.party==partido[1]||member.party==partido[2]);
    return partyF;
    
}

//console.log(filtrarParty(member,"R")); PRUEBA


filtrarEstados(member,botonEstados.value);









  




























  