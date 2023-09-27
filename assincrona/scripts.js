// function soAceitaPares(num) {
//     if (num % 2 == 0) {
//         return 'É par';
//     } else {
//         return 'Não é par';
//     }
// }

function soAceitaPares(num) {
    return new Promise (function (resolve, reject){
        if (num % 2 == 0) {
            return 'É par';
        } else {
            return 'Não é par';
        }
    })
   
}

console.log("Antes do teste");

soAceitaPares(10)
    .then(resposta => console.log(resposta))
    .catch(erro => console.error(erro));

// let resposta = soAceitaPares(10);
// console.log(resposta);
console.log("Depois do teste");

//API 
let url = "https://restcountries.com/v3.1/name/brasil";
fetch(url)
    .then(resposta => resposta.json())
    .then(pais => console.log(pais[0].name.common))
    .catch(erro => console.error(erro));
