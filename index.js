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
const jogo = [
    {
        title: "LoL", who:"Gabriel"
    },
    {
        title:"Ablion", who:"Marcelo"
    }
];
app.get('/jogos', function(req, res){
    // res.send(jogos);
     console.log(jogo.title);
     console.log(jogo.who);
    // res.send(jogos.filter(Boolean));
    }
);

app.get('/jogos/:id', function(req, res)
    {
        const id = req.params.id - 1;
        const jogo = jogos[id];
        
        if(!jogo){
            res.send('Mensagem não encontrada');
        } else {
            res.send(jogo);
        }
    }
);
app.post('/jogos',
        function(req, res){
            console.log(req.body.jogo);
            const jogo = req.body.jogo ;
            jogos.push(jogo);
            res.send("criar uma mensagem");
        }
    );

app.put('/jogos/:id',
     (req, res) => {
        const id = req.params.id - 1;
        const jogo = req.body.jogom;
        jogos[id] = jogo;
        res.send("Mensagem atualizada com sucesso")  
    }
);

app.delete('/jogos/:id',
        (req, res) => {
           const id = req.params.id -1;
           delete jogos[id];
           res.send("Mensagem removida com sucesso")
        }
    );