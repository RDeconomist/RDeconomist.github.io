var ChartF6 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F6) UK net debt (% of GDP)",

   "title": {
    "text": "Net debt (% of GDP)",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F6.DataHub.FiscalPubSectDebtPerGDP.csv"},
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
        "title": "Net debt (% of GDP)",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartF6', ChartF6, {"actions": false});