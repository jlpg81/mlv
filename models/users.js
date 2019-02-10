var mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{ //la persona hara login con esto
        type: String,
        required: true
    },
    password:{ //esto no seria visible para los coordinadores, pero los usuarios deberian poder cambiarlo de alguna manera
        type: String,
        required: true
    // },
    // state:{ //esto incluye paises si la persona esta en el extranjero, hay que poner un drop down menu en el formulario
    //     type: String,
    //     required: true
    // },
    // birth:{ //mejor poner una fecha de nacimiento en vez de la edad, para que se pueda ir actualizando automaticamente
    //     type: Number,
    //     required: true
    // },
    // work:{ //profesion/oficio/ocupacion
    //     type: String,
    //     required: true
    // },
    // phone:{
    //     type: String,
    //     required: true
    // },
    // social:{ //aqui ponen el link de social media, sea facebook o twitter o algo mas
    //     type: String,
    //     required: true
    // },
    // social2:{ //aqui ponen el link de social media, sea facebook o twitter o algo mas
    //     type: String,
    // },
    // ideology:{ // se pueden elegir entre: anarco-capitalismo, minarquista, liberal
    //     type: String,
    //     required: true
    // },
    // cedula:{
    //     type: String,
    //     required: true
    // },
    // date:{ //automatico, esto nos da la fecha en la que la cuenta fue creada
    //     type: Date,
    //     default: Date.now
    // },
    // type:{ //esto dara a elegir entre simpatizante, colaborador y activista
    //     type: String,
    //     required: true
    // },
    // acepted:{
    //     default: false,
    //     type: String,
    //     required: true
    },
});

var users = module.exports = mongoose.model('users', userModel)