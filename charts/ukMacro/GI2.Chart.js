var ChartGI2 =


  {"$schema": "https://vega.github.io/schema/vega-lite/v4.json",

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

 "encoding": {"x": {"field": "Date", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              
               "axis": {"grid": false}
              }
            },

        
        "layer": [{"mark": {"type": "line", "color": "goldenrod", "interpolate": "monotone"}},

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
          {"field": "Value", "type": "quantitative", "format": ""}

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

vegaEmbed('#ChartGI2', ChartGI2, {"actions": false});