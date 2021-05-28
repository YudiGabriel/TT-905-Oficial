 const express = require("express");
 const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors')
 app.use(cors());

 //Porta que estou ouvindo

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Olá esta é minha atividade 7");
     }
 ); 
//  let LoL = {
//      nome: "League of Legends",
//      time: "5 pessoas",
//      estilo:"MOBA",
//      joga: ["Gabriel","Marcelo"]
//  };
//  let CoD = {
//     nome: "Call of Duty",
//     time: "5 pessoas",
//     estilo:"FPS",
//     joga: ["Gabriel","Marcelo"]
// };
// let Genshin = {
//     nome: "Genshin Impact",
//     time: "1 pessoa",
//     estilo:"RPG",
//     joga: "Marcelo"
// };

// let jogos = [LoL, CoD, Genshin];

let mensagens = [
    {
       nome: "Marcelo Miranda", apelido: "Matheuzinho"
    },
    {
        nome: "Gabriel Yudi", apelido: "Carlton"
    }
     
];

app.get('/mensagens',
    function(req, res){
        // res.send(mensagens);
        res.send(mensagens.filter(Boolean));
    } 
);

app.get('/mensagens/:id',
    function(req, res){
        let id = req.params.id - 1;
        let mensagem = mensagens[id];

        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/mensagens', 
    (req, res) => {
        console.log(req.body.mensagem);
        let mensagem = req.body.mensagem;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/mensagens/:id',
    (req, res) => {
        let id = req.params.id - 1;
        let mensagem = req.body.mensagem;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/mensagens/:id', 
    (req, res) => {
        let id = req.params.id - 1;
        delete mensagens[id];

        res.send("Mensagem removida com sucesso");
    }
);