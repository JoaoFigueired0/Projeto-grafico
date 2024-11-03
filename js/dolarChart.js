function dolarChart() {
    fetch('https://economia.awesomeapi.com.br/json/daily/USD-BRL/30')


        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar dados da API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados recebidos da API:', data);

            const labels = data.map((item, index) => `Ponto ${index + 1}`);
            const prices = data.map(item => parseFloat(item.bid));
            

            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Cotação do Dólar (USD/BRL)',
                        data: prices,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1,
                        fill: true
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false 
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

window.onload = dolarChart;