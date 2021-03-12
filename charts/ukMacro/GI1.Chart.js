var ChartGI1 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(GI1) GDP chained volume measure (£m, seasonally adjusted)",

   "title": {
    "text": "UK GDP chained volume (£m, seasonally adjusted), 1955-2020",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/GI1.DataHub.GrowthInnovationGDP.csv"},
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "goldenrod"
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
        "title": "GDP chained volume (£m)",
        "type": "quantitative"
      }
    ]
  }
};

vegaEmbed('#ChartGI1', ChartGI1, {"actions": false});