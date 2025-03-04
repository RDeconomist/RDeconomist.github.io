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

  "encoding": {"x": {"field": "Date", "type": "temporal", "title":null}},
 
  "layer": [
    {"encoding": {
        "y": {"field": "Rate", 
              "type": "quantitative", 
              "title":"Number of Prices"}},
        
        "layer": [
          {"mark":{
            "type": "line",
            "align": false,
            "interpolate": "step",
            "color": "red"}},
          {"transform": 
            [{"filter": {"selection": "hover"}}], 
               "mark": {
                 "type":"circle",
                 "size":150,
                 "color":"red"}}
      ]
    },
    
    {"mark": "rule", 
      "encoding": {
         "opacity": {
           "condition": {"value": 0, "selection": "hover"},
           "value": 0
             },
          "tooltip": [
          {"field": "Date", "type": "temporal", "format": "%b-%Y", "title":"Date"},  
          {"field": "Rate", "type": "quantitative", "format": ",.0f", "title":"Bank Rate (%)"}
            ]
           },
      "selection": {
        "hover": {
          "type": "single",
          "fields": ["Date"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"
        }
      }
    }
  ]
};

vegaEmbed('#ChartM3', ChartM3, {"actions": false});