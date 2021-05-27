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
        const carros = carros[id];
        
        if(!carros){
            res.send('Carro não encontrado');
        } else {
            res.send(carros);
        }
    }
);
app.post('/carros',
        function(req, res){
            console.log(req.body.carros);
            const carros = req.body.carros ;
            carros.push(carros);
            res.send("Carro adicionado");
        }
    );

    app.put('/carros/:id',
     (req, res) => {
        const id = req.params.id - 1;
        const carros = req.body.carros;
        carros[id] = carros;
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