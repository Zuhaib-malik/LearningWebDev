import express from "express";

const app = express();
app.use(express.json());


let data = [];
let nextid = 1;

// store fruits
app.post('/fruits', (req, res)=>{
    const {name, price}= req.body;
    const newfruit = {id: nextid++, name , price};
    data.push(newfruit);
    res.status(201).send(newfruit);
})

// get all the fruits
app.get('/fruits', (req, res)=>{
    res.status(200).send(data)
})

// get fruit with id
app.get('/fruits/:id', (req, res)=>{
    const fruit = data.find(x => x.id === parseInt(req.params.id));
    if (!fruit) {
        return res.status(404).send('fruit not found');
    }
    res.send(fruit);
})

// update fruits
app.put('/fruits/:id',(req,res) => {
     const fruit = data.find(x => x.id === parseInt(req.params.id));

    if (!fruit) {
        return res.status(404).send('fruit not found');
    }
    res.send(fruit);
    const {name, price} = req.body;

    fruit.name = name;
    fruit.price = price;
    res.status(200).send(fruit);
})

// delete fruit
app.delete('/fruits/:id', (req,res)=>{
    const index = data.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('fruit not found');
    }
    data.splice(index,1);
    res.status(204).send('deleted');
})





const port = 3000;
app.listen(port, ()=>{
    console.log("server is running...");
    
})