
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };
        
        var chartColors = window.chartColors;
        var color = Chart.helpers.color;
        var config = {
            data: {
                datasets: [{
                    data: [1, 5, 3, 5, 2, 3, 8, 15, 11, 9],
                    backgroundColor: [
                        'rgba(72,209,204, 0.2)',
                        'rgba(255,0,0, 0.2)',
                        'rgba(0,139,139, 0.2)',
                        'rgba(50,205,50, 0.2)',
                        'rgba(139,0,0, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(127,255,0, 0.2)',
                        'rgba(255,140,0, 0.2)',
                        'rgba(47,79,79, 0.2)',
                        'rgba(255,69,0, 0.2)'
                    ],
                    borderColor: [
                        'rgba(72,209,204,1)',
                        'rgba(255,0,0, 1)',
                        'rgba(0,139,139, 1)',
                        'rgba(50,205,50,1)',
                        'rgba(139,0,0, 1)',
                        'rgba(255, 159, 64, 1)',
                         'rgba(127,255,0,1)',
                        'rgba(255,140,0,1)',
                        'rgba(47,79,79,1)',
                        'rgba(255,69,0, 1)'],
                        borderWidth: 1,
                    label: 'My dataset' // for legend
                }],
                labels: [
                    "Cielo", "Getnet", "Sodexo", "VR", "Ticket", "Bin", "Stone", "Rede", "Vero", "Itaú"
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Polar Area Chart'
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        };
        
        window.onload = function() {
            var ctx = document.getElementById('polar');
            window.myPolarArea = Chart.PolarArea(ctx, config);
        };

       