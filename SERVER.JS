const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const productos = [
        {
            title: 'Escuadra',
            price: 123.45,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
            id: 1
        },
        {
            title: "Calculadora",
            price: 234.56,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
            id: 2
        },
        {
            title: "Globo Terráqueo",
            price: 345.67,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
            id: 3
        },
    ]


app.get('/', (req, res) => {
    res.render('desafio/index', { productos })
})

//logré hacer funcionar el delete!!!! me re costo desde la ultima entrega me viene corriendo
app.get('/delete/', (req, res) => {
    const title = req.params.title
    const idx = productos.findIndex(p => p.title == title)
    productos.splice(idx, 1)

    console.log(title, ' removed from productos') //sale como undefined (bueh)

    res.render('desafio/index', { productos, isDeleted: 'deleted' })
})

app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(req.body, ' added to productos')

    res.render('desafio/index', { productos })
})

app.listen(8080)
console.log('Running...')