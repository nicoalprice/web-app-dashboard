/* CHARTS */

/* Traffic Chart */
var traffic = document.getElementById("trafficChart");

var trafficChart = new Chart(traffic, {
	type: 'line',
	data: {
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "189-24", "25-31"],
		datasets: [{
			data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
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
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true,
					max: 2500,
					min: 0,
					stepSize: 500,
					labelOffset: 30,
				}
			}]
		},
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
		datasets: [{
			data: [50, 75, 150, 100, 200, 175, 75],
			backgroundColor: [
				'rgba(115,119,191,1)',
				'rgba(115,119,191,1)',
				'rgba(115,119,191,1)',
				'rgba(115,119,191,1)',
				'rgba(115,119,191,1)',
				'rgba(115,119,191,1)',
				'rgba(115,119,191,1)'
			],
			borderColor: [
				'rgba(115, 119, 191,1)'
			],
			borderWidth: 1
		}]
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
			"Desktop"
		],
		datasets: [
			{
				data: [50, 50, 260],
				backgroundColor: [
					"#74b1bf",
					"#81c98f",
					"#7377bf"
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
				]
			}]
		},
	options: {
		legend: {
			position: 'right',
		}
	}
});

