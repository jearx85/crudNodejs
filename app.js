const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

const estados = require('./routes/estado');
const marcas = require('./routes/marca');
const tiposEquipo = require('./routes/tipoEquipo');
const usuarios = require('./routes/usuario');
const inventarios = require('./routes/inventario');

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(cors());


app.use('/api/estados',estados);
app.use('/api/marcas',marcas);
app.use('/api/tiposEquipo',tiposEquipo);
app.use('/api/usuarios',usuarios);
app.use('/api/inventarios',inventarios);





module.exports = app;