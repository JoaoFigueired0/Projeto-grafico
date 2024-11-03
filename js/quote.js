const { error } = require("console");
const { response } = require("express");

function getDollarQuote() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        .then(response => response.json())
        .then(data => {

            const varBid = data.USDBRL.varBid
            const high = data.USDBRL.high
            const low = data.USDBRL.low
            document.getElementById('variation-dolar').textContent = `${varBid}`;
            document.getElementById('max-dolar').textContent = `${high}`;
            document.getElementById('min-dolar').textContent = `${low}`;
        })

        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            document.getElementById('class-dolar').textContent = 'Erro ao carregar dados';
        })

}

function getEuroQuote() {
    fetch('https://economia.awesomeapi.com.br/last/EUR-BRL')
        .then(response => response.json())
        .then(data => {

            const varBid = data.EURBRL.varBid
            const high = data.EURBRL.high
            const low = data.EURBRL.low
            document.getElementById('variation-euro').textContent = `${varBid}`;
            document.getElementById('max-euro').textContent = `${high}`;
            document.getElementById('min-euro').textContent = `${low}`;

        })

        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            document.getElementById('res-quote-euro').textContent = 'Erro ao carregar dados';
        })
    window.onload = fetchdata;
}

function getLibraQuote() {
    fetch('https://economia.awesomeapi.com.br/last/GBP-BRL')
        .then(response => response.json())
        .then(data => {

            const varBid = data.GBPBRL.varBid
            const high = data.GBPBRL.high
            const low = data.GBPBRL.low
            document.getElementById('variation-Libra-Esterlina').textContent = `${varBid}`;
            document.getElementById('max-Libra-Esterlina').textContent = `${high}`;
            document.getElementById('min-Libra-Esterlina').textContent = `${low}`;

        })

        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            document.getElementById('res-quote-euro').textContent = 'Erro ao carregar dados';
        })
    window.onload = fetchdata;
}

function getCadQuote() {
    fetch('https://economia.awesomeapi.com.br/last/CAD-BRL')
        .then(response => response.json())
        .then(data => {

            const varBid = data.CADBRL.varBid
            const high = data.CADBRL.high
            const low = data.CADBRL.low
            document.getElementById('variation-Dolar-Canadense').textContent = `${varBid}`;
            document.getElementById('max-Dolar-Canadense').textContent = `${high}`;
            document.getElementById('min-Dolar-Canadense').textContent = `${low}`;
        })

        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            document.getElementById('res-quote-cad').textContent = 'Erro ao carregar dados';
        })
    window.onload = fetchdata;
}

function getAudQuote() {
    fetch('https://economia.awesomeapi.com.br/last/AUD-BRL')
        .then(response => response.json())
        .then(data => {

            const varBid = data.AUDBRL.varBid
            const high = data.AUDBRL.high
            const low = data.AUDBRL.low
            document.getElementById('variation-Dolar-Australiano').textContent = `${varBid}`;
            document.getElementById('max-Dolar-Australiano').textContent = `${high}`;
            document.getElementById('min-Dolar-Australiano').textContent = `${low}`;

        })

        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            document.getElementById('res-quote-euro').textContent = 'Erro ao carregar dados';
        })
    window.onload = fetchdata;
}

function getFrancoQuote() {
    fetch('https://economia.awesomeapi.com.br/last/CHF-BRL')
        .then(response => response.json())
        .then(data => {

            const varBid = data.CHFBRL.varBid
            const high = data.CHFBRL.high
            const low = data.CHFBRL.low
            document.getElementById('variation-Franco').textContent = `${varBid}`;
            document.getElementById('max-Franco').textContent = `${high}`;
            document.getElementById('min-Franco').textContent = `${low}`;
        })

        .catch(error => {
            console.error('Erro ao carregar dados:', error);
            document.getElementById('res-quote-cad').textContent = 'Erro ao carregar dados';
        })
    window.onload = fetchdata;
}