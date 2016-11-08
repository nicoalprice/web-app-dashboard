/* CHARTS */

/* Weekly Line Chart */
var traffic = document.getElementById("trafficChart");

var trafficChart = new Chart(traffic, {
	type: 'line',
	data: {
		labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
		datasets: [{
			data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
			backgroundColor: [
				'#e2e3f6',
			],
			borderColor: [
				'rgba(115, 119, 191,1)'
			],
			borderWidth: 1,
			lineTension: 0,
			pointBackgroundColor: 'white',
			pointBorderColor: '#7377bf',
			pointBorderWidth: 1.5,
			pointRadius: 5,
			},

			{//hourly
				data: [0, 30, 10, 750, 1230, 150, 650, 100, 12, 50, 20, 15, 21],
				label: "daily",
				backgroundColor: [
					'#e2e776',
				],
				borderColor: [
					'rgba(115, 121, 122,1)'
				],
				borderWidth: 1,
				lineTension: 0,
				pointBackgroundColor: 'white',
				pointBorderColor: '#7377bf',
				pointBorderWidth: 1.5,
				pointRadius: 5,
				hidden: true
			}

				   {//daily
				data: [0, 340, 100, 75, 1230, 150, 650, 1000, 100, 500, 200, 150, 200],
				label: "daily",
				backgroundColor: [
					'#e2e776',
				],
				borderColor: [
					'rgba(115, 121, 122,1)'
				],
				borderWidth: 1,
				lineTension: 0,
				pointBackgroundColor: 'white',
				pointBorderColor: '#7377bf',
				pointBorderWidth: 1.5,
				pointRadius: 5,
				hidden: true
			}
		]

	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					max: 2500,
					min: 0,
					stepSize: 500,
				},
			}],
		},
		responsive: true,
		legend: {
			display: false
		}
	}
});

/* Daily Traffic Chart */
var dailyTraffic = document.getElementById("dailyTrafficChart");

var dailyTrafficChart = new Chart(dailyTraffic, {
	type: 'bar',
	data: {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [

			{
				type: 'bar',
				label: 'Desktop',
				data: [50, 75, 150, 100, 200, 175, 75],
				backgroundColor: 'rgba(115,119,191,1)',
				borderColor: 'rgba(115, 119, 191,1)',
				borderWidth: 1
			},

			{
				type: 'bar',
				label: 'Mobile',
				data: [154, 210, 137, 154, 543, 112, 242],
				backgroundColor: '#A15F7D'
			}

		]

	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true,
					max: 250,
					min: 0,
					stepSize: 50,
				}
			}],
		},
		legend: {
			display: false,
		}
	}
});

/* Mobile Users Chart */

var mobileUsers = document.getElementById("mobileUsersChart");

var mobileUsersChart = new Chart(mobileUsers, {
	type: 'doughnut',
	data: {
		labels: [
			"Phones",
			"Tablets",
			"Desktop",
			"Other"
		],
		datasets: [
			{
				data: [50, 50, 260, 43],
				backgroundColor: [
					"#74b1bf",
					"#81c98f",
					"#7377bf",
					"#A15F7D"
				],
				hoverBackgroundColor: [
					"#5B98A6",
					"#68B076",
					"#5A5EA6",
					"#874563"
				]
			}]
		},
	options: {
		legend: {
			position: 'right',
			labels: {
				boxWidth: 15,
				fontSize: 14
			}
		}
	}
});

