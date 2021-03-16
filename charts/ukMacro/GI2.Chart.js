var ChartGI2 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(GI2) GDP year on year growth (%)",

   "title": {
    "text": "GDP growth",
    "subtitle":"Quarterly, year on year % change. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/GI2.DataHub.GrowthInnovationGDPRealGrowth.csv"},

  "height": 300,
  "width": 345,

"layer": [

  {"mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "goldenrod"
  },
  "encoding": {
    "x": {
      "field": "Date",
      "type": "temporal",
      "axis": {
        "title": null,
        "grid": false
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
        "title": "GDP growth (%)",
        "type": "quantitative"
      }
    ]
  }
},

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

vegaEmbed('#ChartGI2', ChartGI2, {"actions": false});