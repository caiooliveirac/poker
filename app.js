const express = require('express');
const fs = require('fs')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
var jogadores = JSON.parse(fs.readFileSync('settings.json', 'utf8'));

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/start.html')
})

app.get('/tela',(req,res) => {
    return res.json(jogador.nome)
}
)

app.post("/cadastrar", (req,res) => {
    let nome = req.body.nome
    let valorPote = req.body.valorPote
    let dados = JSON.stringify(req.body)
    let file = 'settings.json'
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
          console.log('Error: ' + err);
          return;
        }
      
        data = JSON.parse(data);
      
        console.dir(data);
        fs.writeFile(file,dados, function(err, result) {
            if(err) console.log('error', err);
          });
        
      });
    res.redirect('/poker');
    
})

app.get('/poker',(req,res) => {
    let file = 'settings.json'
    function retornaPote() {
    let pote = "oi"
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
          console.log('Error: ' + err);
          return;
        }
        data = JSON.parse(data);
        pote = data.valorPote
    });
    return pote
    }
    let valorDoPote = JSON.stringify(retornaPote())
    console.log(valorDoPote)
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log('a user connected');
})

server.listen(3000, () => {
    console.log('listening on *:3000');
})


