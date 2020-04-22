new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: ['Ice Hockey', 'Curling', 'Bobsleigh', 'Skiing', 'Skating'],
    datasets: [
    {
      label: 'Number of Records',
      data: ['351', '50', '22', '40', '159'],
      backgroundColor: ['#6F5F5E', '#FEC397', '#D28A7C', '#6D8C8E', '#AEC8CA']
    }
  ]
},
option: {
  legend: {
    display: false
  },

  animation: {
    duration: '2000',
    easing: 'easeInOutQuint'
    }
  }
});

new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['Men', 'Women'],
    datasets: [
    {
      data: [386, 239],
      backgroundColor: ['#3e95cd', '#8e5ea2']
    }
    ]
  }
});

new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['1980', '1988', '1994', '2002', '2006', '2010', '2014'],
    datasets: [
    {
      label: 'Canada',
      data: ['3', '7', '38', '48', '73', '80', '91'],
      fill: false,
      borderColor: '#3cba9f'
    }
    ]
  }
});

var updatingChart = new Chart(document.getElementById('updatingDataChart'), {
  type: 'horizontalBar',
  data: {
    labels: ['Gold', 'Silver', 'Bronze'],
    datasets: [{
      label: 'Number',
      backgroundColor: ['#FFD700', '#C0C0C0', '#AA7A55'],
      data: ['123', '75', '41']
    }]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Medals by Women in CANADA'
    }
  }
});

// Adding data & label to existing chart
function addData(chart, label, data, backgroundColor) {
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(data);
  chart.data.datasets[0].backgroundColor.push(backgroundColor);
  chart.update();
}

setTimeout(function () {
  addData(updatingChart, 'Antarctica', 97, '#FF5733');
}, 3000);

// Removing data & label from existing chart
function removeData(chart) {
  chart.data.labels.pop();
  chart.data.datasets[0].data.pop();

  chart.update();
}

setTimeout(function () {
  removeData(updatingChart);
}, 3000);

// update all data points on existing chart
function updateAllData(chart, data) {
  chart.data.datasets[0].data = data;
  chart.update();
}

setTimeout(function() {
  updateAllData(updatingChart, [5,2,6]);
}, 3000);

function updateConfig(chart, title) {
  chart.options.title.text = title;
  chart.update();
}

setTimeout(function() {
  updateAllData(updatingChart, [5,2,6])
  updateConfig(updatingChart, 'Medals by Women in JAPAN');
}, 3000);

function updateConfig(chart, data) {
  chart.data.datasets[0].data = data;
  chart.update();
}

setTimeout(function() {
  updateAllData(updatingChart, [60, 112, 71]);
}, 3000);

function updateConfig(chart, title) {
  chart.options.title.text = title;
  chart.update();
}

setTimeout(function() {
  updateConfig(updatingChart, 'Medals by women in USA');
}, 3000);


