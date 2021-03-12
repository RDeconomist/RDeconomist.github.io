var ChartF2 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F2) Total UK expenditure",

   "title": {
    "text": "UK total expenditure (£m), 1997-2021",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F2.DataHub.FiscalTotalExpend.csv"},
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
        "title": "Total expenditure (£m)",
        "type": "quantitative"
      }
    ]
  }
}

;

vegaEmbed('#ChartF2', ChartF2, {"actions": false});