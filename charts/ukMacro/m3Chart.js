var ChartM3 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Bank Rate",

   "title": {
    "text": "Bank Rate",
    "subtitle":"Bank of England's main policy rate. Source: BoE",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/m3BankRate.csv"},
  "height": 340,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "step",
    "color": "red"
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
      "field": "Rate",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false}
    },
    
    "tooltip": [
      {"field": "Date", "type": "temporal"},
      {
        "field": "Rate",
        "title": "Bank Rate",
        "type": "quantitative"
      }
    ]
  }
};

vegaEmbed('#ChartM3', ChartM3, {"actions": false});