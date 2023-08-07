const Reader = require("./Reader")
const Writer = require("./Writer")
const Processor = require("./Processor")
const Table = require("./Table")
const HTMLParser = require("./HTMLParser")


async function main(){
    var leitor = new Reader()
    var escritor = new Writer()
    var dados = await leitor.Read("./user.csv")
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados)

    var html = await HTMLParser.Parse(usuarios)
    escritor.WriteHTML(Date.now() + ".html", html)
    escritor.WritePDF(Date.now() + ".pdf", html)
}

main()