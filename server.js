const dotEnv = require('dotenv').config();
const app = require('./app');
const { mongoConnection } = require('./database/configuration');

app.set('port', process.env.PORT || 3000);

const conn = mongoConnection();

app.listen(app.get('port'), () => {
    console.log(`Api corriendo en el puerto: ${app.get('port')}`)
})