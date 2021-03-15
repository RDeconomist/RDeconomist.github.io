var ChartM2 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M2) CPIH annual rate (%), 1989-2021",

   "title": {
    "text": "Inflation (%)",
    "subtitle":"CPIH annual rate. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M2.DataHub.MonetaryCPIHAnnRate.csv"},
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "darkblue"
  },
  "encoding": {
    "x": {
      "field": "Month",
      "type": "temporal",
      "axis": {
        "title": null,
        "grid": false,
        "labelSeparation": 20,
        "ticks": false
      }
    },
    "y": {
      "field": "Value",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false}
    },
    
    "tooltip": [
      {"field": "Date", "type": "temporal"},
      {
        "field": "Value",
        "title": "CPIH",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartM2', ChartM2, {"actions": false});