var ChartF5 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F5) UK net debt (£m)",

   "title": {
    "text": "UK net debt (£m), 1997-2020",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F5.DataHub.FiscalNetDebt.csv"},
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
        "title": "Net debt (£m)",
        "type": "quantitative"
      }
    ]
  }
};

vegaEmbed('#ChartF5', ChartF5, {"actions": false});