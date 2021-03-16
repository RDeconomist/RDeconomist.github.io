var ChartLM1 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(LM1) Unemployment rate (16+), seasonally adjusted",

   "title": {
    "text": "Unemployment",
    "subtitle":"Rate (%), 16+, seasonally adjusted. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/LM1.DataHub.LabourMarketUnemployment.csv"},
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "seagreen"
  },
  "encoding": {
    "x": {
      "field": "Date",
      "type": "temporal",
      "axis": {
        "title": null,
        "grid": false,
        "labelSeparation": 20
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
        "title": "Unemployment rate (%)",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartLM1', ChartLM1, {"actions": false});