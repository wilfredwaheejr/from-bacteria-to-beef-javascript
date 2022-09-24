//City Populations
console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.population - b.population).reverse();

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityPops = cityGrowths.map(city => parseInt(city.population));

var trace = {
  x: topFiveCityNames,
  y: topFiveCityPops,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Largest Cities By Population",
  xaxis: {title: "City" },
  yaxis: {title: "Populations"}
};
Plotly.newPlot("bar-plot1", data, layout);

//City Growths
console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);
