function getFahrenheits(result){
  // Your code goes here

}

function getHours(result){
  // Your code goes here
  console.log("hours", result)
}

function generateDataSet(labels, data) {
  // Your code goes here
}

function makeRequest(endpoint, success) {
  // Your code goes 
  return fetch(endpoint)
    .then(res => res.json())
      .then(ele => {
    console.log(ele)
  })
}

// {
//   var data = generateDataSet(getHours(json), getFahrenheits(json));
//   // var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
//   const chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: "line",
 
//     // The data for our dataset
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "My First dataset",
//             data: [0, 10, 5, 2, 20, 30, 45],
//         }]
//     },
 
//     // Configuration options go here
//     options: {}
//   });
//   console.log(chart)
// });
