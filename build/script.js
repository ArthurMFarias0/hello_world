"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('Hello world!');
});
app.get('/BSM', function (request, response) {
    response.send('<h1>BSM DA GENERATION</h1>' +
        '<br>' +
        '<h3>Mentalidades</h3>' +
        '<ol>' +
        '<li>Persistência</li>' +
        '<li>Responsabilidade Pessoal</li>' +
        '<li>Orientação ao futuro</li>' +
        '<li>Mentalidade de crescimento</li>' +
        '</ol>' +
        '<br>' +
        '<h3>Habilidades</h3>' +
        '<ol>' +
        '<li>Trabalho em equipe</li>' +
        '<li>Atenção aos detalhes</li>' +
        '<li>Proatividade</li>' +
        '<li>Comunicação</li>' +
        '</ol>');
    app.get('/objetivo', function (request, response) {
        response.send('<h1>OBJETIVO SEMANAL DE APRENDIZADO</h1>' +
            '<h4>Tenho como objetivo adquirir conhecimentos para contribuir o máximo possível com meus colegas para o projeto integrador da Generation</h4>');
    });
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port, "!"));
});
