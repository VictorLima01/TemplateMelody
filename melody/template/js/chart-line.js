$(function() {
var multiLineData3 = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18","19","20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30", "31"],
	datasets: [{
        label: 'Jan',
        data: [448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654,448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654 ],
        borderColor: [
          '#02F83C'
        ],
        borderWidth: 2,
        fill: false
      },
      //{
      //  label: 'Fev',
      //  data: [558654, 239875, 712456, 123587, 425698, 234789, 285654, 157897, 155698,197777,205654, 1452368, 132564, 154987, 658746,558654, 239875, 712456, 123587, 425698, 234789, 285654, 157897, 155698,197777,205654, 1452368, 132564, 154987, 658746],
      //  borderColor: [
        //  '#8302F5'
      //  ],
       // borderWidth: 2,
       // fill: false
     // },
    //  {
      //  label: 'Mar',
      //  data: [1554658, 107865, 214568, 1325698, 1258698, 336558, 547698,132354,1658954,144568,111256, 1456235, 896574, 256347, 1564789,1554658, 107865, 214568, 1325698, 1258698, 336558, 547698,132354,1658954,144568,111256, 1456235, 896574, 256347, 1564789],
      //  borderColor: [
       //   '#06C7F8'
      //  ],
      //  borderWidth: 2,
      //  fill: false
     // }
	]
 
	};	
	
	var options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }

  };
  
  if ($("#linechart-multi3").length) {
    var multiLineCanvas = $("#linechart-multi3").get(0).getContext("2d");
    var lineChart3 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData3,
      options: options
    });
  }




});