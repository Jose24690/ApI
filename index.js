const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://josemacias24690:Macias_3190@cluster0.lwgotq2.mongodb.net/?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    Edad: Number,
})

const crear = async () => {
    const user = new User({username: 'Bandida number: 3', Edad: 22})
    const savedUser = await user.save();
    console.log(savedUser);
}
// crear();

const buscaTodo = async() => {
    const users = await User.find();
    console.log(users);
}
// buscaTodo();

const buscar = async() => {
    const user = await User.find({username: 'Bandida number: 1'});
    console.log(user);
}
// buscar();

const buscar1 = async()=> {
    const user = await User.findOne({username: 'Bandida1'});
    console.log(user);
}
// buscar1();

const actualizar = async() => {
    const user = await User.findOne({username: 'Bandida number: 3'})
    console.log(user);
    user.Edad = 30;
    user.username = 'Bandida0'
    await user.save();
    console.log(user);
}
// actualizar();

const eliminar = async() => {
    const user = await User.findOne({username: 'Bandida number: 3'})
    console.log(user);
    if (user){
        await user.deleteOne()
    }
    else{
        console.log('El usuario no existe.')
    }

} 
eliminar();