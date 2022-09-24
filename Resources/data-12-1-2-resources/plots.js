//Drink scatter plot
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter'
   };
   var data = [trace];
   var layout = {
    title: "'Scatter' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

//Drink pie chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea1", data, layout);

//Drink bar graph
var trace = {
 x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
 y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
 type: "bar"
};
var data = [trace];
var layout = {
 title: "'Bar' Chart",
 xaxis: {title: "Drinks"},
 yaxis: {title: "% of Drinks Ordered"}
};
Plotly.newPlot("plotArea1", data, layout);

//Line graph
Plotly.newPlot("plotArea2", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Line graph
Plotly.newPlot("plotArea3", [{x: [1, 2, 3, 4, 5], y: [10, 20, 30, 40, 50]}]);

//Lunch bar graph
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey"
};

Plotly.newPlot("plotArea4", [trace], layout);
