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
       nome: "Marcelo Miranda", apelido: "Matheuzinho", data:"16/06/1996", cidade:"Sumaré", jogo:"Albion Online", signo:"Gêmeos", time:"Palmeiras", escola: "Meson"
    },
    {
        nome: "Gabriel Yudi", apelido: "Carlton", data:"06/10/2000", cidade:"São Paulo", jogo: "Starcraft 2", signo:"Libra", time:"Corinthians", escola:"Objetivo Vergueiro"
    }
     
];
// sdaisudasd

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
        let mensagem = req.body;
        mensagens.push(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/repsipa/:id',
    (req, res) => {
        let id = req.params.id - 1;
        let mensagem = req.body;
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
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://Aula12:<password>@cluster0.jv6lq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const mongodb = require('mongodb')
const password =    process.env.password;
console.log(password);
const connectionString = "mongodb+srv://Aula12:zuu25R3bfzC6Myt@cluster0.jv6lq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true
};
(async()=>{
    const client = await mongodb.MongoClient.connect(connectionString, options);
    const db = client.db('myFirstDataBase');
    const mensagens = db.collection('mensagens');
    console.log(await mensagens.find({}).toArray());

    app.get('/database', 
        async function(req, res){
            res.send(await mensagens.find({}).toArray()); 
        }
);

        app.get('/database/:id',
    async function(req, res){
        let id = req.params.id;
        let mensagem = await mensagens.findOne(
            {_id : mongodb.ObjectID(id)}
        );
        
        if (!mensagem){
            res.send("Mensagem não encontrada");
        } else {
            res.send(mensagem);
        }
    }
);
app.post('/database', 
    async (req, res) => {
        console.log(req.body);
        let mensagem = req.body;
        delete mensagem["_id"];
        mensagens.insertOne(mensagem);
        res.send("criar uma mensagem.")
    }
);

app.put('/database/:id',
    async (req, res) => {
        let id = req.params.id;
        let mensagem = req.body;
        delete mensagem["_id"];
        const num_mensagens = await mensagens.countDocuments({_id : mongodb.ObjectID(id)});    
        if (num_mensagens !==1){
            res.send('Ocorreu um erro devido ao numero de mensagens');
            return;
        }
        await mensagens.updateOne(
            {_id : mongodb.ObjectID(id)},
            {$set : mensagem}
        ); 
        res.send("Mensagem atualizada com sucesso.")
    }   
);
app.delete('/database/:id', 
    async (req, res) => {
        let id = req.params.id;
        await mensagens.deleteOne(
            {_id : mongodb.ObjectID(id)}
        );

        res.send("Mensagem removida com sucesso");
    }
);

})();