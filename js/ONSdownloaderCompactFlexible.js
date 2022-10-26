// RICHARD DAVIES
// DATA SCIENCE FOR ECONOMISTS

// PURPOSE: JS DOWNLOADER THAT RUNS FROM ONS AND MAKES DIVS TO ACCOMODATE CHARTS

///// # Looping series into an API:
var seriesList = [
  ["JW2V", "PUSF", "Budget Deficit", "Public Sector Current Budget Deficit"],
  ["HF6X", "PUSF"],
  ["CPOA", "PUSF"],
  ["JW2V", "PUSF"],
  ["HF6X", "PUSF"],
  ["CPOA", "PUSF"],
  ["JW2V", "PUSF"],
  ["HF6X", "PUSF"],
  ["CPOA", "PUSF"],
  ["JW2V", "PUSF"],
  ["HF6X", "PUSF"],
  ["CPOA", "PUSF"],
  ["JW2V", "PUSF"],
  ["HF6X", "PUSF"],
  ["CPOA", "PUSF"],

]

//// # LOOP ACROSS THESE SERIES

for(let i=0; i<seriesList.length; i++){
  
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
            "url": "",
            "format":{"type": "json","property": "years"}},
        "height": 300,
        "width": 260,
        "mark": {"type": "line",  "color": "rgb(0,47,167"},
        "encoding": {
            "x":{"field":"date", "type": "temporal"},
            "y":{"field":"value", "type": "quantitative"}}} 
  

    // Now change the base spec, adding the url, and the titles
    spec.data.url = urlUse // adding the URL
    spec.title.text = seriesList[i][2] // adding the title
    spec.title.subtitle[0] = seriesList[i][3] // adding the subtitle (to first part of subtitle array)

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