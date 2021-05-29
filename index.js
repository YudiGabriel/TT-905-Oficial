//  console.log("Hello World");
 const express = require("express");
 const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors');
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
       nome: "Marcelo Miranda", apelido: "Matheuzinho", data:"16/06/1996", cidade:"Sumaré", jogo:"Albion Online", signo:"Gêmeos", time:"Palmeiras", escola: "Sumaré School"
    },
    {
        nome: "Gabriel Yudi", apelido: "Carlton", data:"06/10/2000", cidade:"São Paulo", jogo: "Starcraft 2", signo:"Libra", time:"Corinthians", escola:"Objetivo Vergueiro"
    }
     
];

app.get('/repsipa',
    function(req, res){
        // res.send(mensagens);
        res.send(mensagens.filter(Boolean));
    } 
);
app.get('/repsipa/:id/:nn/',
    function(req,res){
        console.log("Oioio");
        let id = req.params.id - 1;
        res.send(mensagens[id][req.params.nn]);
    });
// app.get('/mensagens/:id/nome/',
//     function(req,res){
//         console.log("Oioio");
//         let id = req.params.id - 1;
//         res.send(mensagens[id].nome);
//     });

app.get('/repsipa/:id',
    function(req, res){
        console.log("sdsadsa");
        let id = req.params.id - 1;
        let mensagem = mensagens[id];
        
        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
)

app.post('/repsipa', 
    (req, res) => {
        console.log(req.body.mensagem);
        let mensagem = req.body.mensagem;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/repsipa/:id',
    (req, res) => {
        let id = req.params.id - 1;
        let mensagem = req.body.mensagem;
        mensagens[id] = mensagem;        
        res.send("Mensagem atualizada com sucesso.")
    }
)

app.delete('/repsipa/:id', 
    (req, res) => {
        let id = req.params.id - 1;
        delete mensagens[id];

        res.send("Mensagem removida com sucesso");
    }
);