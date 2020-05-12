var MONTHS = ["Cielo", "Getnet", "Sodexo", "VR", "Ticket", "Bin", "Stone", "Rede", "Vero", "Itaú"];
		var color = Chart.helpers.color;
		var horizontalBarChartData = {
			labels: ["Cielo", "Getnet", "Sodexo", "VR", "Ticket", "Bin", "Stone", "Rede", "Vero", "Itaú"],
            datasets: [{
                data: [10, 19, 32, 54, 25, 3, 20, 86, 97, 56],
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
                  'rgba(255,69,0, 1)'
                  
                ],
                borderWidth: 1,
                fill: false
              }]

		};

		window.onload = function() {
			var ctx = document.getElementById('horizontal').getContext('2d');
			window.myHorizontalBar = new Chart(ctx, {
				type: 'horizontalBar',
				data: horizontalBarChartData,
				options: {
					// Elements options apply to all of the options unless overridden in a dataset
					// In this case, we are setting the border of each horizontal bar to be 2px wide
					elements: {
						rectangle: {
							borderWidth: 2,
						}
					},
					responsive: true,
					legend: {
						position: 'right',
					},
					title: {
						display: true,
						text: 'Chart.js Horizontal Bar Chart'
					}
				}
			});

		};

	