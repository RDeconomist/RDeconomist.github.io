var ChartF4 =

{

  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F4) Current UK budget deficit (% GDP)",

   "title": {
    "text": "Current budget deficit (% of GDP)",
    "subtitle":"Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F4.DataHub.FiscalCurrentBudgetDefPerDGP.csv"},

  "height": 300,
  "width": 345,

"layer": [
{
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
        "title": "Current budget deficit (% of GDP)",
        "type": "quantitative"
      }
    ]
  }
},

{
      "mark": {"type": "rule", "color": "darkgrey", "size": 0.5},
      "encoding": {"y": {"field": "Lines", "type": "quantitative"}},
      "data": {
        "values": [
          {"Lines": "0"}
        ]
        
      }
    }

]

};

vegaEmbed('#ChartF4', ChartF4, {"actions": false});


