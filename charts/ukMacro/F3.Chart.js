var ChartF3 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F3) Current UK budget deficit",

   "title": {
    "text": "Current budget deficit",
    "subtitle":"£ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F3.DataHub.FiscalCurrentBudgetDef.csv"},
  "height": 300,
  "width": 345,

 

"layer": [

  {"mark": {
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
    
    }},

    {
      "mark": {"type": "rule", "color": "darkgrey", "size": 0.75},
      "encoding": {"y": {"field": "Lines", "type": "quantitative"}},
      "data": {
        "values": [
          {"Lines": "0"}
        ]
        
      }
    }
    
    
    ]
  
  

};


vegaEmbed('#ChartF3', ChartF3, {"actions": false});

