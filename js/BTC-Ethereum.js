
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')

  
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da API');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados recebidos da API:', data);

        // Preparar os dados para o gráfico
        const labels = ['Bitcoin', 'Ethereum'];
        const prices = [data.bitcoin.usd, data.ethereum.usd];

        // Configurações do gráfico
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico (barra, linha, etc.)
            data: {
                labels: labels, // Rótulos do eixo X
                datasets: [{
                    label: 'Preço em USD', // Legenda do gráfico
                    data: prices, // Dados no eixo Y
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => {
        console.error('Erro:', error); 
    });
