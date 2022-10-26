// RICHARD DAVIES
// DATA SCIENCE FOR ECONOMISTS

// PURPOSE: JS DOWNLOADER THAT RUNS FROM ONS AND MAKES DIVS TO ACCOMODATE CHARTS

////////////////////////////
//// Read in the info on the series that we want:
var urlCharts = "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/data/onsSeries.csv";

var request = new XMLHttpRequest();  
request.open("GET", urlCharts, false);   
request.send(null);  

var seriesList = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
    seriesList.push(jsonObject[i].split(','));
}
// Retrived data from csv file content
console.log(seriesList);
/////////////////////////////////

//// # LOOP ACROSS THESE SERIES

for(let i=1; i<seriesList.length; i++){
  
    // Make the URL:
    let x = seriesList[i][0]; // Thie selects out series
    let y = seriesList[i][1]; // This selects our dataset
    let urlRaw = `https://api.ons.gov.uk/timeseries/${x}/dataset/${y}/data`; // This a "template literal" that we will fill in each iteration of the loop.
    let corsHelper = "https://api.allorigins.win/raw?url="; // This is a helper that helps us get past CORS problems
    let urlUse = corsHelper+urlRaw; // The final URL that we will use in this iteration of the loop. 

    // Set a base spec::
    let spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": {
            "text": "",
            "subtitle": ["",""],
            "subtitleFontStyle":"italic",
            "subtitleFontSize":10,
            "anchor": "start",
            "color": "black"},
        "data":{
            "url": "https://api.allorigins.win/raw?url=https://api.ons.gov.uk/timeseries/L55O/dataset/MM23/data",
            "format":{
                "type": "json",
                "property": "quarters"}},

        "transform": [
            {"calculate": "datum.value", "as": "valuePlot"},
            
            {"calculate":"substring(datum.quarter,1)*3-1", "as": "quarter_n"},
            {"calculate":"join([datum.year, datum.quarter_n],['-'])", "as": "date2"},
            {"calculate":"timeParse(datum.date2, '%Y-%m')", "as": "date3"},

            {"calculate":"year(datum.date3)", "as": "year"},

            {"filter":{"field":"year", "gt":1988}}],
            
        "height": 120,
        "width": 120,
        "mark": {"type": "line",  "color": "rgb(0,47,167"},
        "encoding": {
            "x":{"field":"date3", "type": "temporal", "title":null, "axis": {"grid": false,}},
            "y":{"field":"valuePlot", "type": "quantitative", "title":null, "axis": {"grid": false,}}}} 
  

    // Now change the base spec, adding the url, and the titles
    spec.data.url = urlUse // adding the URL
    spec.title.text = seriesList[i][2] // adding the title
    spec.title.subtitle[0] = seriesList[i][3] // adding the subtitle (to first part of subtitle array)
    spec.title.subtitle[1] = seriesList[i][4] // adding the subtitle (to first part of subtitle array)
    spec.mark.color = seriesList[i][6] // adds the colour

    // Amend value variable if in GBP, this is to prevent values with lots of ,000:
    if(seriesList[i][4]=="GBP trillion"){
        spec.transform[0].calculate = "datum.value/1000000"
    }

    // Next add a new div, this will house our new chart:
    var newDiv = document.createElement("div"); // create the div
    newDiv.id = "chart"+i; // Give it a unique id
    newDiv.className = 'grid_item'; // Give it a common class
    // document.body.appendChild(newDiv); // This line adds the div to the body
    document.querySelector('.grid_items').appendChild(newDiv); // Add the div WITHIN the existing div that has class grid_items

    // Embed the chart made in this iteration of the loop, into the div made in this iteration of the loop:
    vegaEmbed("#chart"+i, spec, {"actions": false})

}
//////