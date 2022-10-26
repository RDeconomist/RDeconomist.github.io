
// RICHARD DAVIES
// DATA SCIENCE FOR ECONOMISTS

// PURPOSE: JS DOWNLOADER THAT RUNS FROM ONS AND MAKES DIVS TO ACCOMODATE CHARTS


///// # Looping series into an API:
var DATASET = "PUSF";
var seriesList = ["JW2V", "HF6X", "CPOA", "ANBV", "ANLP", "NMBY", "NZGF", "LIBR", "LIBP", "AIIH"];

for(let i=0; i<seriesList.length; i++){
  
  //Make the URL:
  let x = seriesList[i];
  let urlRaw = `https://api.ons.gov.uk/timeseries/${x}/dataset/${DATASET}/data`;
  let corsHelper = "https://api.allorigins.win/raw?url=";
  let urlUse = corsHelper+urlRaw;

  // Put the URL in the spec:
  let spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "data":{
      "url": "",
      "format":{"type": "json","property": "years"}},
    "height": 300,
    "width": 260,
    "mark": {"type": "line",  "color": "rgb(0,47,167"},
    "encoding": {
      "x":{"field":"date", "type": "temporal"},
      "y":{"field":"value", "type": "quantitative"}}} 
  
    // Put the URL in the spec:
    spec.data.url = urlUse

    // Add a new div:
    var newDiv = document.createElement("div");
    newDiv.id = "chart"+i;
    newDiv.className = 'grid_item';
    // document.body.appendChild(newDiv);
    document.querySelector('.grid_items').appendChild(newDiv);

    // Embed the chart in this new div:
    vegaEmbed("#chart"+i, spec, {"actions": false})

}
//////