const express = require('express')
const routerApi = require('./routes')
const port = 3000

const app = express();

app.use(express.json());

app.get('/',(req,res) => {
	res.send("Hola mi server")
})
app.get('/nueva-ruta',(req,res) => {
	res.send("Hola mi server")
})
routerApi(app)

app.listen(port, () => {
	console.log('mi port' + port)
})

