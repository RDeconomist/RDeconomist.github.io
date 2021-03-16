var ChartM1aand4 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M1aand4) Nominal GDP vs broad money",

   "title": {
    "text": "Nominal GDP versus broad money",
    "subtitle":"£ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M1aand4.MonetaryGDPvBroadMoney.csv"},

  "height": 300,
  "width": 345,
  
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone"
    
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
    "color": {
      "field": "Measure",
      "type": "nominal",
      "scale": {"range": ["darkblue", "lightblue"]}
    },
    
    "tooltip": [
      {"field": "Date", "type": "temporal"},
      {
        "field": "Value",
        "title": "Value (£m)",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartM1aand4', ChartM1aand4, {"actions": false});