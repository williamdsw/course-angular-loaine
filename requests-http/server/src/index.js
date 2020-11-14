// importando dependencias do 'package.json'
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();

// Middlewares

app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({ extended: true }));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use (cors (corsOptions));

const multipartMiddleware = multipart ({
    uploadDir: './uploads'
});

// Endpoint para POST de arquivo
app.post ('/upload', multipartMiddleware, (request, response) => {
    const files = request.files;
    console.log (files);
    response.json ({
        message: files
    });
});

app.get ('/downloadExcel', (request, response) => {
    response.download ('./downloads/teste.xlsx');
});

app.get ('/downloadPDF', (request, response) => {
    response.download ('./downloads/teste.pdf');
});

app.use ((error, request, response, next) => {
    response.json ({
        error: error.message
    })
});

app.listen (8000, () => {
    console.log ('Servidor porta 8000');
});