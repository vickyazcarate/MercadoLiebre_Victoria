let express = require('express');
let app = express();
let path = require('path');


app.listen(3000, () => console.log("Servidor 3000 disponible"));

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(path.resolve(publicPath)));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

app.get('/suscribirse', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/suscribirse.html'));
});

