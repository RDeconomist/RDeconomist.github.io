var ChartGI3 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(GI3) UK real nDP per capita",

   "title": {
    "text": "Net domestic product",
    "subtitle":"Per capita. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/GI3.DataHub.GrowthInnovationGDPperCap.csv"},
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
        "grid": false
      }
    },
    "y": {
      "field": "Value",
      "type": "quantitative",
      "scale": {"domain": [3000, 7000]},
      "title": "",
      "axis": {"grid": false}
    },
    
    "tooltip": [
      {"field": "Date", "type": "temporal"},
      {
        "field": "Value",
        "title": "nDP per capita",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartGI3', ChartGI3, {"actions": false});