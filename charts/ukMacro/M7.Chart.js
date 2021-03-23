var ChartM7 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M7) Bank of England Balance Sheet",

   "title": {
    "text": "Quantitative easing",
    "subtitle":"BoE balnace sheet, reserve balances. Source: BoE weekly report",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/teaching2/main/boeBalanceSheet.csv"},

  "height": 300,
 
  "width": 345,
  
   "encoding": {"x": {"field": "Date", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {
       "y": {"field": "Reserve balances", 
              "type": "quantitative", 
              "title":"",         
               "axis": {"grid": false}}
            },
        "layer": [{"mark": {"type": "line", "color": "orangered"}},
                  {"transform": 
                      [{"filter": {"selection": "hover"}}], 
                        "mark": {
            "type": "circle",
            "filled": true,
            "color":"pink",
            "size": 300,
            "stroke": "#DCDCDC",
            "fillOpacity": 1,
            "strokeOpacity": 0.8,
            "strokeWidth": 5
          }}
                  ]},

    {"mark": "rule", 
      "encoding": {
        "opacity": {"value": 0},
        "tooltip": [
          {"field": "Date2", "type": "temporal", "format":"%B, %Y", "title":"Date"},
          {"field": "Reserve balances", "title": "Reserve balances (£m)", "type": "quantitative", "format": ",.0f"}

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


vegaEmbed('#ChartM7', ChartM7, {"actions": false});