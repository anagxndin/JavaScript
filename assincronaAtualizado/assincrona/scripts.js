// scripts.js
/*
function soAceitaPares(num) {
    if ( num % 2 == 0 ) {
        return 'É par';
    } else {
        return 'Não é par';
    }
}
*/

function soAceitaPares( num ) {
    return new Promise(function (resolve, reject) {
        if ( num % 2 == 0 ) {
            resolve('É par');
        } else {
            reject('Não é par');
        }
    })
}

console.log("Antes do teste");          // 1

soAceitaPares(10)                       // 3
    .then(resposta => console.log(resposta))     // Resolve -> deu certo
    .catch(erro => console.error(erro));   // Reject -> deu errado

console.log("Depois do teste");         // 2


// API
// let url = "https://restcountries.com/v3.1/name/brasil";
// fetch(url)
//     .then(resposta => resposta.json())
//     .then(pais => console.log( pais[0].flag ))
//     .catch(erro => console.error(erro));

let btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener("click", clickBuscarPais);

function clickBuscarPais(){
    let txtPais = document.querySelector("#txtPais");
    let nomePais = txtPais.value;

    buscaPais( nomePais );
}
buscaPais( "Canada");
function buscaPais (nomePais) {
    let url = "https://restcountries.com/v3.1/name/" + nomePais;

    fetch(url)
    // extraindo o Json da resposta (then do fetch)
        .then(resposta => resposta.json()) 
        .then(pais => mostraPais(pais))

        .catch(erro => console.log(erro));
    

}

function mostraPais ( pais ) {
    // alert( pais[0].name.common);

    // BANDEIRA
    let imgBandeira = document.querySelector
    ("#imgBandeira");
    imgBandeira.src = pais[0].flags.png;

    // NOME DO PAIS
    document.querySelector("h1").innerHTML = pais[0].
    name.common;

    // INFORMções diversas
    let info = document.querySelector("#info");
    info.innerHTML = "";

    let htmlCapital = `
        <div class="infoLinha">
        <span class="infoNome">Capital</span>
        <span class="infoValor">${pais[0].capital[0]}</span>
    
    </div>

    

`;

    let htmlPopulacao = `
        <div class="infoLinha">
        <span class="infoNome">população</span>
        <span class="infoValor">${pais[0].capital[0]}</span>

    </div>



`;

info.innerHTML = htmlCapital;

}

