import express from "express"
const app = express();
app.use(express.json())

const produtos = [
    {
        id: 1,
        nome: "Niscal",
        marca: "não sabemos"
    },
    {
        id: 2,
        nome: "Nescau",
        marca: "Nestle"
    },
    {
        id: 3,
        nome: "Camaro 68",
        marca: "Chevrolet",
        valor: "21.368,34R$"
    }
]

app.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
})
// GET com parâmetro de rota -> /produtos/:id
app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id)
    const produto = produtos.find(p => p.id === id)

    if (!produto) {
        return res.status(404).json({ erro: "produto não encontrado" })
    }

    if (req.headers.accept === "application/xml") {
        return res.status(200)
            .type("application/xml")
            .send(`<produto><id>${produto.id}</id><nome>${produto.nome}</nome><marca>${produto.marca}</marca></produto>`)
    }

    res.status(200).json(produto)
})

// GET com parâmetro de query -> /produtos?marca=Nestle
app.get("/produtos/buscar", (req, res) => {
    const { marca } = req.query
    const filtrados = marca
        ? produtos.filter(p => p.marca.toLowerCase() === marca.toLowerCase())
        : produtos

    if (req.headers.accept === "application/xml") {
        const itens = filtrados.map(p => `<produto><id>${p.id}</id><nome>${p.nome}</nome><marca>${p.marca}</marca></produto>`).join("")
        return res.status(200).type("application/xml").send(`<produtos>${itens}</produtos>`)
    }

    res.status(200).json(filtrados)
})

// POST -> cria um novo produto
app.post("/produtos", (req, res) => {
    const { nome, marca, valor } = req.body

    if (!nome || !marca) {
        return res.status(400).json({ erro: "nome e marca são obrigatórios" })
    }

    const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1
    const novoProduto = { id: novoId, nome, marca, valor }
    produtos.push(novoProduto)

    if (req.headers.accept === "application/xml") {
        return res.status(201)
            .type("application/xml")
            .send(`<produto><id>${novoProduto.id}</id><nome>${novoProduto.nome}</nome><marca>${novoProduto.marca}</marca></produto>`)
    }

    res.status(201).json(novoProduto)
})
const porta = 3000
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))
