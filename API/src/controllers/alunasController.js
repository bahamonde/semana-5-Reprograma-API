const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
    
}

exports.getById = (req, res) => {
    const id = req.params.id
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))    
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    // console.log(aluna.livros)
    const livrosAluna = aluna.livros   //PARA ACESSAR OS LIVROS NOS OBJETOS ALUNAS.JSON
    const livrosLidos = livrosAluna.filter(livro => livro.leu == "true") //PARA PEGAR SO OS LIDOS 
    const tituloLivros = livrosAluna.map(livro => livro.titulo)  //SELECIONAR OS TITULOS
    res.status(200).send(tituloLivros)    //RETORNAR OS TITULOS ACESSADOS
}

