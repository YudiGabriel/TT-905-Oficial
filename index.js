 const express = require("express");
 const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors')
 app.use(cors());

 //Porta que estou ouvindo

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Essa é minha página da Atividade 7");
     }
 ); 

 app.get('/hello', function (req, res){
        res.send("Olá professor!");
     }
 );

 const dados = [
    "Gabriel Yudi", "Marcelo Miranda"
 ];

 app.get('/dados', function(req, res){
  
     res.send(dados.filter(Boolean));
    }
);

app.get('/dados/:id', function(req, res)
    {
        const id = req.params.id - 1;
        const mensagem = dados[id];
        
        if(!mensagem){
            res.send('Mensagem não encontrada');
        } else {
            res.send(mensagem);
        }
    }
);
app.post('/dados',
        function(req, res){
            console.log(req.body.mensagem);
            const mensagem = req.body.mensagem ;
            dados.push(mensagem);
            res.send("criar uma mensagem");
        }
    );

    app.put('/dados/:id',
     (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        dados[id] = mensagem;
        res.send("Mensagem atualizada com sucesso")  
    }
);

app.delete('/dados/:id',
        (req, res) => {
           const id = req.params.id -1;
           delete dados[id];
           res.send("Mensagem removida com sucesso")
        }
    );