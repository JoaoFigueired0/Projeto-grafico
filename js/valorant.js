const { error } = require("console");

fetch('https://valorant-api.com/v1/competitivetiers')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API');
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados recebidos da API:', data);

    data = JSON.parse(jsonResponse);

    const divisionNames = data.data[0].tiers.map(tier => tier.divisionName);
    const tierCounts = divisionNames.reduce((acc, division) => {
      acc[division] = (acc[division] || 0) + 1; // Conta o número de ocorrências de cada divisão
      return acc;
    }, {});

    const labels = Object.keys(tierCounts);
    const values = Object.values(tierCounts);

    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
      type: 'bar', // Tipo de gráfico
      data: {
        labels: labels, // Rótulos do eixo X
        datasets: [{
          label: 'Divisões', // Legenda do gráfico
          data: values, // Dados do gráfico
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 0, 0, 0.2)',
            'rgba(0, 255, 0, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true, // Iniciar o eixo Y no valor zero
            ticks: {
              stepSize: 1 // Incremento dos ticks no eixo Y
            }
          }
        }
      }
    });
  })
  .catch(error => {
    console.error("Erro ao obter os dados:", error);
  });
