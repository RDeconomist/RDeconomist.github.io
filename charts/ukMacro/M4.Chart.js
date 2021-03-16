var ChartM4 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M4) Nominal GDP",

   "title": {
    "text": "Nominal GDP",
    "subtitle":"GDP at market prices, seasonally adjusted, £ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M4.DataHub.MonetaryGDPMarketPrices.csv"},
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
        "title": "Nominal GDP",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartM4', ChartM4, {"actions": false});