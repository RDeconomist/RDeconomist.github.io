var ChartF3 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F3) Current UK budget deficit",

   "title": {
    "text": "UK current budget deficit (£m), 1997-2021",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F3.DataHub.FiscalCurrentBudgetDef.csv"},
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
        "title": "Current budget deficit (£m)",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartF3', ChartF3, {"actions": false});

