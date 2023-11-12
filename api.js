const express = require('express');
const mongoose = require('mongoose');
const user = require('./user.controler')
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect('mongodb+srv://josemacias24690:Macias_3190@cluster0.lwgotq2.mongodb.net/?retryWrites=true&w=majority');

/*
Se utiliza 
200 cuando el estatus es Ok y ademas se quiere enviar datos.
201 Significa Ok y ademas creado.
204 Significa 200 y adeas No content. put patch delete. 
*/

app.get('/users', user.list);
app.post('/users', user.create);
app.put('/users/:id', user.update);
app.get('/users/:id', user.get);
app.patch('/users/:id', user.update);
app.delete('/users/:id', user.destroy);

app.use(express.static('app'));

app.get('/', (req, res) =>{
    console.log(__dirname);
    res.sendFile(`${__dirname}/P-1.html`);
})

app.get('*', (req, res) => {
    res.status(404).send('Esta pagina no existe.');
})
app.post('*', (req, res) => {
    res.status(404).send('Esta pagina no existe.');
})
app.put('*', (req, res) => {
    res.status(404).send('Esta pagina no existe.');
})
app.patch('*', (req, res) => {
    res.status(404).send('Esta pagina no existe.');
})
app.delete('*', (req, res) => {
    res.status(404).send('Esta pagina no existe.');
})

app.listen(port, () =>{
    console.log('Arrancando la applicacion.')
})


