function getFahrenheits(result){
  return result.map(function(hour){
    return hour.temperature
  })
}

function getHours(result){
  return result.map(function(hour){
    let newHour = new Date(hour.time*1000)
    return newHour.getHours()
  }) 
}

function generateDataSet(labels, data) {
  return {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: labels,
      datasets: [
        {
          label: "NYC Weather Data",
          data: data,
          backgroundColor: "rgba(195,212,232,.5)",
          borderColor: 'rgb(80, 129, 188)'
        }
      ]
    },

    // Configuration options go here
    options: {}
  }
}

function makeRequest(endpoint, ctx) {
  return fetch(endpoint)
    .then(res => res.json())
    .then(ele => {
      let hourlyData = ele.hourly.data
      const tempChart = new Chart(ctx, generateDataSet(getHours(hourlyData), getFahrenheits(hourlyData)))
    })
}
