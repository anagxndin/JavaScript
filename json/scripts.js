

// // OBJETO
// let pessoa = {
//     nome: "Adriano",
//     idade: 17,
//     cidade: "Ituiutaba",
//     presente: true
// }

// let escola = {
//     info: {
//         nome: "Informatica",
//         criacao: 2010,
//         turmas: [
//             {
//                 ano: 1,
//                 alunos: 40,
//                 disciplinas: [
//                     {
//                         nome: "LP1",
//                         professor: "Alexandre"
//                     },
//                     {
//                         nome: "Sistemas Digitais",
//                         professor: "Marcelo"
//                     }
//                 ]
//             },

//             {
//                 ano: 2,
//                 alunos: 30,
//                 disciplinas: [
//                     {
//                         nome: "LP2",
//                         professor: "Alexandre"
//                     },
//                     {
//                         nome: "Laboratório de Hardware",
//                         professor: "Marcelo"
//                     }
//                 ]

//             },

//             {
//                 ano: 3,
//                 alunos: 30,
//                 disciplinas: [
//                     {
//                         nome: "LP3",
//                         professor: "Daniel"
//                     },
//                     {
//                         nome: "Redes II",
//                         professor: "Ailton"
//                     }
//                 ]

//             }
//         ]
//     }
// }

// console.log(pessoa["nome"])
// console.log(pessoa.cidade)
// console.log("Nome:", escola.info.nome)
// console.log("Alunos 3°:", escola.info.turmas[2].alunos)
// console.log("Professor de LP3:", escola.info.turmas[2].disciplinas[0].professor)

// for (i = 0; i < escola.info.turmas.length; i++) {
//     console.log( escola.info.turmas[i].alunos)
// } 

// // JSON: JavaScript Object Notation
// //TRANSFORMAR OBJETO COMPLEXO EM TEXTO
// let texto = JSON.stringify(escola);
// console.log( texto );
// //TRANSFORMAR TEXTO EM OBJETO
// let objeto = JSON.parse( texto );
// console.log(objeto);


// EXIBIR O NOME DA SÉRIE, O RESUMO E A NOTA

let nome = document.querySelector("#nome");
nome.innerHTML = bd.nome;

let resumo = document.querySelector("#resumo");
resumo.innerHTML = bd.resumo;

document.querySelector("#nota").innerHTML = bd.nota;

// EXIBIR O POSTER DA SÉRIE

let poster = document.querySelector("#poster");
poster.innerHTML = `<img src ="${bd.fotoPoster}" width="200" />`;

// EXIBA TODOS OS GENEROS

let generos = document.querySelector("#generos");
for (let i = 0; i < bd.generos.length; i++) {
    generos.innerHTML += bd.generos[i] + "<br/>";
}

// EXIBA A FOTO DE TODOS OS ATORES DA SÉRIE

let i;
let atores = document.querySelector("#atores");
for (let i = 0; i < bd.elenco.length; i++) {
    atores.innerHTML += `<img src="${bd.elenco[i].foto}" width="100"/>`
}


// EXIBA O POSTER DE CADA TEMPORADA E O NÚMERO DE EPISÓDIOS, abaixo do poster

let temporadas = document.querySelector("#temporadas");
for (let temp of bd.temporadas) {
    temporadas.innerHTML += `
        <img src="${temp.poster}" width="100"/> <br />
        ${temp.numero_episodios}<br />
    `;
}

// LISTE O NOME DE CADA UM DOS EPISODIOS DA SEGUNDA TEMPORADA

let episodios = document.querySelector("#episodios");
for (let ep of bd.temporadas[1].episodios) {
    episodios.innerHTML += ep.nome + "<br />";

}