var ctx = document.getElementById('myChart').getContext('2d');
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Quantidade',
            data: [110, 247, 346, 408, 508, 456, 899],
			 backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
				 'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
				 'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1,
            order: 2
        }, {
            label: 'Vendas em R$',
            data: [1235698, 1896545, 1086547, 2564789, 1456236, 5698741, 1236547],
            type: 'line',
			 borderColor: [
          '#02F83C'
        ],
        borderWidth: 2,
            // this dataset is drawn on top
            order: 1
        }],
        labels: ['Auto-peças', "Alimentação", "Café", "Cosméticos", "Metrial-const",  "Minimercado", "outros"]
    },
   options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
   }
});
// var myChart = new Chart(ctx, {
    // type: 'bar',
    // data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // datasets: [{
            // label: '# of Votes',
            // data: [12, 19, 3, 5, 2, 3],
            // backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            // ],
            // borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            // ],
            // borderWidth: 1
        // }]
    // },
    // options: {
        // scales: {
            // yAxes: [{
                // ticks: {
                    // beginAtZero: true
                // }
            // }]
        // }
    // }
// });

