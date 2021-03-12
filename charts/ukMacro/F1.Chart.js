var ChartF1 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F1) Total UK tax revenue",

   "title": {
    "text": "UK total tax revenue (£m), 1997-2021",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F1.DataHub.FiscalTaxRev.csv"},
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "mediumvioletred"
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
        "title": "Total revenue (£m)",
        "type": "quantitative"
      }
    ]
  }
};

vegaEmbed('#ChartF1', ChartF1, {"actions": false});