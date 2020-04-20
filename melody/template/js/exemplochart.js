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

var horizontalBarChartData = {
			labels: ['Auto-peças', "Alimentação", "Café", "Cosméticos", "Metrial-const",  "Minimercado", "outros"],
			datasets: [{
				label: 'Quantidade',
				backgroundColor:  'rgba(255, 99, 132, 0.2)',
				borderColor:  'rgba(255, 99, 132, 1)',
				borderWidth: 1,
				data: [394019, 23, 32, 10, 14, 32, 18]
			}, {
				label: 'Vendas em R$',
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				data: [ 139948754.29, 11, 18, 36, 52, 86, 29]
			}]

		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
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
					}
				}
			});

		};

		document.getElementById('randomizeData').addEventListener('click', function() {
			var zero = Math.random() < 0.2 ? true : false;
			horizontalBarChartData.datasets.forEach(function(dataset) {
				dataset.data = dataset.data.map(function() {
					return zero ? 0.0 : randomScalingFactor();
				});

			});
			window.myHorizontalBar.update();
		});

		var colorNames = Object.keys(window.chartColors);

		document.getElementById('addDataset').addEventListener('click', function() {
			var colorName = colorNames[horizontalBarChartData.datasets.length % colorNames.length];
			var dsColor = window.chartColors[colorName];
			var newDataset = {
				label: 'Dataset ' + (horizontalBarChartData.datasets.length + 1),
				backgroundColor: color(dsColor).alpha(0.5).rgbString(),
				borderColor: dsColor,
				data: []
			};

			for (var index = 0; index < horizontalBarChartData.labels.length; ++index) {
				newDataset.data.push(randomScalingFactor());
			}

			horizontalBarChartData.datasets.push(newDataset);
			window.myHorizontalBar.update();
		});

		document.getElementById('addData').addEventListener('click', function() {
			if (horizontalBarChartData.datasets.length > 0) {
				var month = MONTHS[horizontalBarChartData.labels.length % MONTHS.length];
				horizontalBarChartData.labels.push(month);

				for (var index = 0; index < horizontalBarChartData.datasets.length; ++index) {
					horizontalBarChartData.datasets[index].data.push(randomScalingFactor());
				}

				window.myHorizontalBar.update();
			}
		});

		document.getElementById('removeDataset').addEventListener('click', function() {
			horizontalBarChartData.datasets.pop();
			window.myHorizontalBar.update();
		});

		document.getElementById('removeData').addEventListener('click', function() {
			horizontalBarChartData.labels.splice(-1, 1); // remove the label first

			horizontalBarChartData.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myHorizontalBar.update();
		});
		
		//Financial Chart
		
		function generateData() {
			var unit = document.getElementById('unit').value;

			function unitLessThanDay() {
				return unit === 'second' || unit === 'minute' || unit === 'hour';
			}

			function beforeNineThirty(date) {
				return date.hour() < 9 || (date.hour() === 9 && date.minute() < 30);
			}

			// Returns true if outside 9:30am-4pm on a weekday
			function outsideMarketHours(date) {
				if (date.isoWeekday() > 5) {
					return true;
				}
				if (unitLessThanDay() && (beforeNineThirty(date) || date.hour() > 16)) {
					return true;
				}
				return false;
			}

			function randomNumber(min, max) {
				return Math.random() * (max - min) + min;
			}

			function randomBar(date, lastClose) {
				var open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
				var close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
				return {
					t: date.valueOf(),
					y: close
				};
			}

			var date = moment('Jan 01 1990', 'MMM DD YYYY');
			var now = moment();
			var data = [];
			var lessThanDay = unitLessThanDay();
			for (; data.length < 600 && date.isBefore(now); date = date.clone().add(1, unit).startOf(unit)) {
				if (outsideMarketHours(date)) {
					if (!lessThanDay || !beforeNineThirty(date)) {
						date = date.clone().add(date.isoWeekday() >= 5 ? 8 - date.isoWeekday() : 1, 'day');
					}
					if (lessThanDay) {
						date = date.hour(9).minute(30).second(0);
					}
				}
				data.push(randomBar(date, data.length > 0 ? data[data.length - 1].y : 30));
			}

			return data;
		}

		var ctx = document.getElementById('chart1').getContext('2d');
		ctx.canvas.width = 1000;
		ctx.canvas.height = 300;

		var color = Chart.helpers.color;
		var cfg = {
			data: {
				datasets: [{
					label: 'CHRT - Chart.js Corporation',
					backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
					borderColor: window.chartColors.red,
					data: generateData(),
					type: 'line',
					pointRadius: 0,
					fill: false,
					lineTension: 0,
					borderWidth: 2
				}]
			},
			options: {
				animation: {
					duration: 0
				},
				scales: {
					xAxes: [{
						type: 'time',
						distribution: 'series',
						offset: true,
						ticks: {
							major: {
								enabled: true,
								fontStyle: 'bold'
							},
							source: 'data',
							autoSkip: true,
							autoSkipPadding: 75,
							maxRotation: 0,
							sampleSize: 100
						},
						afterBuildTicks: function(scale, ticks) {
							var majorUnit = scale._majorUnit;
							var firstTick = ticks[0];
							var i, ilen, val, tick, currMajor, lastMajor;

							val = moment(ticks[0].value);
							if ((majorUnit === 'minute' && val.second() === 0)
									|| (majorUnit === 'hour' && val.minute() === 0)
									|| (majorUnit === 'day' && val.hour() === 9)
									|| (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
									|| (majorUnit === 'year' && val.month() === 0)) {
								firstTick.major = true;
							} else {
								firstTick.major = false;
							}
							lastMajor = val.get(majorUnit);

							for (i = 1, ilen = ticks.length; i < ilen; i++) {
								tick = ticks[i];
								val = moment(tick.value);
								currMajor = val.get(majorUnit);
								tick.major = currMajor !== lastMajor;
								lastMajor = currMajor;
							}
							return ticks;
						}
					}],
					yAxes: [{
						gridLines: {
							drawBorder: false
						},
						scaleLabel: {
							display: true,
							labelString: 'Closing price ($)'
						}
					}]
				},
				tooltips: {
					intersect: false,
					mode: 'index',
					callbacks: {
						label: function(tooltipItem, myData) {
							var label = myData.datasets[tooltipItem.datasetIndex].label || '';
							if (label) {
								label += ': ';
							}
							label += parseFloat(tooltipItem.value).toFixed(2);
							return label;
						}
					}
				}
			}
		};

		var chart = new Chart(ctx, cfg);

		document.getElementById('update').addEventListener('click', function() {
			var type = document.getElementById('type').value;
			var dataset = chart.config.data.datasets[0];
			dataset.type = type;
			dataset.data = generateData();
			chart.update();
		});
