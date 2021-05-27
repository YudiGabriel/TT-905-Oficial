 const express = require("express");
 const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors')
 app.use(cors());

 //Porta que estou ouvindo

 app.listen(process.env.PORT || 3000);

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

 app.get('/mensagens', function(req, res){
    // res.send(mensagens);
     res.send(mensagens.filter(Boolean));
    }
);

app.get('/mensagens/:id', function(req, res)
    {
        const id = req.params.id - 1;
        const mensagem = mensagens[id];
        
        if(!mensagem){
            res.send('Mensagem não encontrada');
        } else {
            res.send(mensagem);
        }
    }
);
app.post('/mensagens',
        function(req, res){
            console.log(req.body.mensagem);
            const mensagem = req.body.mensagem ;
            mensagens.push(mensagem);
            res.send("criar uma mensagem");
        }
    );

    app.put('/mensagens/:id',
     (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        mensagens[id] = mensagem;
        res.send("Mensagem atualizada com sucesso")  
    }
);

app.delete('/mensagens/:id',
        (req, res) => {
           const id = req.params.id -1;
           delete mensagens[id];
           res.send("Mensagem removida com sucesso")
        }
    );