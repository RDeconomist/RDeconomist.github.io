var ChartM1a =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M1a) UK broad money aggregate (£m), 1955-2020",

   "title": {
    "text": "Broad money outstanding",
    "subtitle":"£ million. Source: Bank of England",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M1a.DataHub.MonetaryBroadMoney.csv"},
  "height": 300,
  "width": 280,
  
   "encoding": {"x": {"field": "Date", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              
               "axis": {"grid": false}
              }
            },

        
        "layer": [{"mark": {"type": "line", "color": "darkblue"}},

                  {"transform": 

                      [{"filter": {"selection": "hover"}}], 

                        "mark": "point"}

      ]

    },

    {"mark": "rule", 

      "encoding": {
        "opacity": {
          "condition": {"value": 0.1, "selection": "hover"},
          "value": 0
        },

        "tooltip": [

          {"field": "Date", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "title": "Broad money outstanding", "type": "quantitative", "format": ",.0f"}

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


vegaEmbed('#ChartM1a', ChartM1a, {"actions": false});