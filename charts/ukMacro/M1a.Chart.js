var ChartM1a =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M1a) UK broad money aggregate (£m), 1955-2020",

   "title": {
    "text": "Broad money outstanding",
    "subtitle":"£ million. Source: Bank of England",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M1a.DataHub.MonetaryBroadMoney.csv"},
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
      "field": "Date",
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
        "title": "Broad money outstanding",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartM1a', ChartM1a, {"actions": false});