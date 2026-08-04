import express from "express"
const app = express();
app.use(express.json())

app.get("/status", (req, res) => {
    res.status(200).json({status: "Ok - funcionou"})
})
app.get("/about", (req, res) => {
    res.status(200).json({nome: "bl3c4g", profissao : "Vagabundo"})
})
app.get("/esporte", (req,res) =>{
    res.status(200).json({message: "joga volêi mal e porcamente"})
})
app.get("/sorvete", (req,res) =>{
    res.status(200).json({message : "Adora sorvete de açai"})
})
app.get("/dbd", (req,res) =>{
    res.status(200).json({message: "Joga principalmente de Killer fortemente bom"})
})
app.get("/pais", (req,res) =>{
    res.status(200).json({ nome: "Christian", idade: "37"})
})
app.get("/sabor", (req,res) =>{
    res.status(200).json({message:"toguro inventa memes todo ano" })
})
app.get("/mais", (req,res) =>{
    res.status(200).json({message: "Mais ou menos"})
})
app.get("/fisica", (req,res) =>{
    res.status(200).json({message: "Adora fisica o oque escreveu isso"})
})
app.get("/pokemon", (req,res) =>{
    res.status(200).json({messagem : "Pokémon favorito é o Golisopod"})
})


const porta = 3000
app.listen( porta, () => console.log(`Servidor rodando na porta ${porta}`))
