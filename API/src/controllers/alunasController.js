const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
    
}

// exports.getById = (req, res) => {
//     const id = req.params.id
//     console.log(id)                            //REFIZ PARA MUDAR OS PARAMETROS E MOSTRAR MENSAGEM QDO ID NAO ENCONTRADO
//     res.status(200).send(alunas.find(aluna => aluna.id == id))    
// }

exports.getById = (req, res) => {
    const id = req.params.id
    if (id > 17 || id <= 0){
    //  res.send("Não deu") //PARA MOSTRAR MENSAGEM
    res.redirect(301, "https://www.embarcados.com.br/arduino-comunicacao-serial/")
    }
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)

    if(!aluna){
        res.send('Nao encontrada')
    } //mensagem quando nao encontra o ID

    // console.log(aluna.livros)
    const livrosAluna = aluna.livros   //PARA ACESSAR OS LIVROS NOS OBJETOS ALUNAS.JSON
    const livrosLidos = livrosAluna.filter(livro => livro.leu == "true") //PARA PEGAR SO OS LIDOS 
    // const tituloLivros = livrosAluna.map(livro => livro.titulo)  //SELECIONAR OS TITULOS
    const tituloLivros = livrosLidos.map(livro => livro.titulo) // selecionar so os lidos
    res.status(200).send(tituloLivros)    //RETORNAR OS TITULOS ACESSADOS
}

exports.getSp = (req, res) => {
    const nasceuSp = paulistas.filter(aluna => aluna.nasceuEmSp == "true")
    const meninasSp = nasceuSp.map(aluna => aluna.nome)
    res.status(200).send(meninasSp)
}

exports.getIdade = (req, res) => {
    const idQquero = req.params.id
    const aluna = alunas.find(item => item.id == idQquero)
    const data = aluna.dateOfBirth
    const separar = data.split('/')
    const dia = separar[0]
    const mes = separar[1]
    const ano = separar[2]
    const idade = calcularIdade(ano, mes, dia)
    
    res.status(200).send({idade})
}

console.log(this.getIdade)




function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }
    


    

