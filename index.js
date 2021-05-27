 const express = require("express");
 const app = express();
app.use(express.json());

//Permissões
 var cors = require('cors')
 app.use(cors());

 //Porta que estou ouvindo

 app.listen(process.env.PORT || 3000);

 app.get('/', function (req, res){
        res.send("Olá, esta é minha atividade 7");
     }
 ); 

 app.get('/hello', function (req, res){
        res.send("Olá professor!");
     }
 );

 const carros = [
    "Fox", "Up"
 ];

 app.get('/carros', function(req, res){
    // res.send(mensagens);
     res.send(carros.filter(Boolean));
    }
);

app.get('/carros/:id', function(req, res)
    {
        const id = req.params.id - 1;
        const mensagem = carros[id];
        
        if(!mensagem){
            res.send('Carro não encontrado');
        } else {
            res.send(mensagem);
        }
    }
);
app.post('/carros',
        function(req, res){
            console.log(req.body.mensagem);
            const mensagem = req.body.mensagem ;
            carros.push(mensagem);
            res.send("Adicionar um carro");
        }
    );

    app.put('/carros/:id',
     (req, res) => {
        const id = req.params.id - 1;
        const mensagem = req.body.mensagem;
        carros[id] = mensagem;
        res.send("Carro atualizado com sucesso")  
    }
);

app.delete('/carros/:id',
        (req, res) => {
           const id = req.params.id -1;
           delete carros[id];
           res.send("Carro removido com sucesso")
        }
    );