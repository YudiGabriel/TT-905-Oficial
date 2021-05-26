 const express = require("express");
 const app = express();

//Permissões
 var cors = require('cors')
 app.use(cors());

 //Porta que estou ouvindo

 app.listen(3000);

 app.get('/', function (req, res){
        res.send("Hello WorlAafkjsdyd");
     }
 ); 

 app.get('/hello', function (req, res){
        res.send("Olá professor!");
     }
 );

 const mensagens = [
    "Gabriel Yudi", "Marcelo Miranda"
 ];

 app.get('/mensagem', function(req, res){
     res.send(mensagens);
    }
);

app.get('/mensagem/:id', function(req, res)
    {
        const id = req.params.id - 1;
        const mensagem = mensagem[id];
        
        if(!mensagem){
            res.send('Mensagem não encontrada');
        } else {
            res.send(mensagem);
        }
    }
);