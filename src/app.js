const cors = require('cors'); // Adicionar o cors
require('./routes');
const { restoreSessions } = require('./sessions');
const { routes } = require('./routes');
const app = require('express')();
const bodyParser = require('body-parser');
const { maxAttachmentSize } = require('./config');

// Inicializar a aplicação Express
app.disable('x-powered-by');

// Configurar o CORS para permitir requisições do frontend
app.use(cors({
    origin: ['http://localhost:3000', 'https://ps-wine.vercel.app'], // Permitir requisições vindas do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    credentials: true,
}));

// Configurar bodyParser
app.use(bodyParser.json({ limit: maxAttachmentSize + 1000000 }));
app.use(bodyParser.urlencoded({ limit: maxAttachmentSize + 1000000, extended: true }));

// Configurar as rotas
app.use('/', routes);

// Restaurar sessões (se for necessário no seu caso)
restoreSessions();

module.exports = app;
