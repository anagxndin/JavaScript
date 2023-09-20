

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

let nomeSerie = document.querySelector("#nomeSerie")
let poster = document.querySelector("#poster")
let fotos = document.querySelector("#fotos")
let galeriaposter = document.querySelector("#galeriaposter")
let episodios = document.querySelector("#episodios")

nomeSerie.innerHTML = 