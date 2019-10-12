const professoras = require("../model/professoras.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(professoras)  
}

// -------------------------------PARA NAO MOSTRAR O CPF MO CONSOLE  

// MANEIRA DE FAZER A FUNCAO COM FOR
// exports.getProfs =(req, res) => {
//     const arrProfs = []
//     for(let i = 0; i< professoras.length; i++){
//         const semCPF = {}
//         semCPF.id = professoras[i].id
//         semCPF.nome = professoras[i].nome
//         semCPF.especialidade = professoras[i].especialidade
//         semCPF.signo = professoras[i].signo
//         arrProfs.push(semCPF)
//     }
//     res.status(200).send(arrProfs)
// }

// OUTRA MANEIRA DE FAZER A FUNCAO COM MAP
exports.getProfs =(req, res) => {
    const semCPF = professoras.map(item => {
        item.cpf = "*************"
        return item
    })
    res.status(200).send(semCPF)
}

// OUTRA MANEIRA DE FAZER MAIS SIMPLES AINDA
// exports.getProfs =(req, res) => {
//     const semCPF = professoras.map(item => {
//     delete item.cpf
//     return item
// })
// res.status(200).send(semCPF)
// }

// TA ERRADO PQ DEVOLVE O ARRAY DO MAP :(
// exports.getById = (req, res) => {
//     const id = req.params.id;
//     const prof = professoras.find(proff => proff.id == id)
//     const profSemCpf = professoras.map( item => {
//         delete item.cpf
//         return item
//     })
//     res.status(200).send(profSemCpf)
// }

exports.getById = (req, res) => {
    const id = req.params.id;
    const prof = professoras.find(prof => prof.id == id)
    delete prof.cpf
    res.status(200).send(prof)
}



 


