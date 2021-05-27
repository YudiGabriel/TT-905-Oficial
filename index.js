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

 const dados = ["Gabriel Yudi", "Marcelo Miranda"];
 const ano = ["2000", "1996"];

 app.get('/dados', function(req, res){
  
     res.send(dados.filter(Boolean))
    }
);
app.get('/dados', function(req, res){
  
    res.send(ano.filter(Boolean))
   }
);

app.get('/dados/:id', function(req, res)
    {
        const id = req.params.id - 1;
        const dados = dados[id];
         const ano =ano[id];
        
        if(!dados){
            res.send('Dado não encontrado');
        } else {
            res.send(dado),res.send(ano);
        }
    }
);
app.post('/dados',
        function(req, res){
            console.log(req.body.dados);
            const dados = req.body.dados ;
            dados.push(dados);
            res.send("criar um dado");
            console.log(req.body.anos);
            const ano = req.body.ano ;
            dados.push(ano);
            res.send("criou um ano");
        }
    );

    app.put('/dados/:id',
     (req, res) => {
        const id = req.params.id - 1;
        const dados = req.body.dados;
        dados[id] = dados;
        res.send("Dados atualizados com sucesso"); 
    }
);
app.put('/dados/:id',
(req, res) => {
const id = req.params.id - 1;
        const ano = req.body.ano;
        dados[id] = ano;
        res.send("Ano atualizado com sucesso") 
});    

app.delete('/dados/:id',
        (req, res) => {
           const id = req.params.id -1;
           delete dados[id];
           res.send("Mensagem removida com sucesso");
        
        }
    );

    app.delete('/dados/:id',
    (req, res) => {
    const id = req.params.id -1;
    delete ano[id];
    res.send("Ano removida com sucesso")});