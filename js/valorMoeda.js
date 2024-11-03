const { error } = require("console");
const { response } = require("express");

function getDollarQuote() {
fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then(response => response.json())
    .then(data =>{

        const bid = data.USDBRL.bid
        document.getElementById('res-quote-dolar').textContent = `Cotação do Dólar: R$ ${bid}`;
    })

    .catch(error =>{
        console.error('Erro ao carregar dados:', error);
        document.getElementById('res-quote-dolar').textContent = 'Erro ao carregar dados';
    })

}

function getEuroQuote() {
fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
    .then(response => response.json())
    .then(data =>{

        const bid = data.EURBRL.bid
        document.getElementById('res-quote-euro').textContent = `Cotação do Dólar: R$ ${bid}`;

    })

    .catch(error =>{
        console.error('Erro ao carregar dados:', error);
        document.getElementById('res-quote-euro').textContent = 'Erro ao carregar dados';
    })
    window.onload = fetchdata;
}


function getCadQuote() {
fetch('https://economia.awesomeapi.com.br/last/CAD-BRL')
    .then(response => response.json())
    .then(data =>{

        const bid = data.CADBRL.bid
        document.getElementById('res-quote-cad').textContent = `Cotação do Dólar: R$ ${bid}`;
    })

    .catch(error =>{
        console.error('Erro ao carregar dados:', error);
        document.getElementById('res-quote-cad').textContent = 'Erro ao carregar dados';
    })
    window.onload = fetchdata;
}






