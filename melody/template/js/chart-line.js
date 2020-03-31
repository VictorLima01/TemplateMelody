$(function() {

// Tiquei
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
// End Tiquei

//Faturamento Vr
var multiLineData4 = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18","19","20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30", "31"],
	datasets: [{
        label: 'Jan',
        data: [448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654,448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654 ],
        borderColor: [
          '#B22222'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
  
  if ($("#linechart-multi4").length) {
    var multiLineCanvas = $("#linechart-multi4").get(0).getContext("2d");
    var lineChart4 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData4,
      options: options
    });
  }
//End Vr

//Fatruramento Vero
var multiLineData5 = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18","19","20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30", "31"],
	datasets: [{
        label: 'Jan',
        data: [448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654,448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654 ],
        borderColor: [
          '#B22222'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
  
  if ($("#linechart-multi5").length) {
    var multiLineCanvas = $("#linechart-multi5").get(0).getContext("2d");
    var lineChart5 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData5,
      options: options
    });
  }
//End Vero

//faturamento 4Keys
var multiLineData6 = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17","18","19","20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30", "31"],
	datasets: [{
        label: 'Jan',
        data: [448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654,448447, 1256568, 37899, 564782, 222654, 321654, 678548, 798210, 101254, 110567, 128654, 154789, 154789, 659123, 895654 ],
        borderColor: [
          '#B22222'
        ],
        borderWidth: 2,
        fill: false
      },
      
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
  
  if ($("#linechart-multi6").length) {
    var multiLineCanvas = $("#linechart-multi6").get(0).getContext("2d");
    var lineChart6 = new Chart(multiLineCanvas, {
      type: 'line',
      data: multiLineData6,
      options: options
    });
  }
//End 4Keys



});