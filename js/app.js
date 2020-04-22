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