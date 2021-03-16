var ChartF1and2 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F1and2) Tax revenue v expenditure",

   "title": {
    "text": "Expenditure vs tax revenue",
    "subtitle":"£ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F1.2.FiscalRevVExp.csv"},

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
      "scale": {"range": ["mediumvioletred", "pink"]}
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


vegaEmbed('#ChartF1and2', ChartF1and2, {"actions": false});

