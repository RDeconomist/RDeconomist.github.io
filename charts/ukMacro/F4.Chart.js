var ChartF4 =

{

  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(F4) Current UK budget deficit (% GDP)",

   "title": {
    "text": "Deficit/GDP ratio",
    "subtitle":"% GDP. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/F4.DataHub.FiscalCurrentBudgetDefPerDGP.csv"},

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

        
        "layer": [{"mark": {"type": "line", "color": "mediumvioletred", "interpolate": "monotone"}},

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
          {"field": "Value", "title": "Deficit/GDP ratio", "type": "quantitative", "format": ""}

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

    },

    {
      "mark": {"type": "rule", "color": "darkgrey", "size": 0.75},
      "encoding": {"y": {"field": "Value", "type": "quantitative"}},
      "data": {
        "values": [
          {"Value": "0"}
        ]
        
      }
    }

  ]

};

vegaEmbed('#ChartF4', ChartF4, {"actions": false});


