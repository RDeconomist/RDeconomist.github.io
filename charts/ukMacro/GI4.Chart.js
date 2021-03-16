var ChartGI4 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(GI4) UK output per hour worked, 1971-2020",

   "title": {
    "text": "Productivity",
    "subtitle":"Output per hour worked. Index: 2018 = 100. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/GI4.DataHub.GrowthInnovationOutputperHour.csv"},
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
        "title": "Output per hour",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartGI4', ChartGI4, {"actions": false});