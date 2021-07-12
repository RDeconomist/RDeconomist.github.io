var ChartM4 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M4) Nominal GDP",

   "title": {
    "text": "Nominal GDP",
    "subtitle":"GDP at market prices, seasonally adjusted, £ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M4.DataHub.MonetaryGDPMarketPrices.csv"},
  "height": 300,
  "width": 305,
  
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
          {"field": "Value", "title": "Nominal GDP", "type": "quantitative", "format": ",.0f"}

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


vegaEmbed('#ChartM4', ChartM4, {"actions": false});