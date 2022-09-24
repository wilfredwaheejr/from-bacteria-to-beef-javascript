const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then();

d3.json("samples.json").then(function(data){
    console.log("hello");
});