var ChartM1aand4 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M1aand4) Nominal GDP vs broad money",

   "title": {
    "text": "Broad money vs nominal GDP",
    "subtitle":"£ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M1aand4.MonetaryGDPvBroadMoney.csv"},

  "height": 300,
  "width": 280,
  
  "encoding": {"x": {"field": "Date", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              
               "axis": {"grid": false}
              },
              
      "color": {
      
      "field": "Measure",
      "legend": {"orient": "top-right"},
      "type": "nominal",
      "scale": {"range": ["darkblue", "lightblue"]}
    }


            },
            

        
        "layer": [{"mark": {"type": "line", "color": ""}},

                  {"transform": 

                      [{"filter": {"selection": "hover"}}], 

                        "mark": "point"}

      ]

    },

    {
      
      "mark": "rule", 

      "encoding": {
        "opacity": {
          "condition": {"value": 0.1, "selection": "hover"},
          "value": 0
        },

        "tooltip": [

          {"field": "Date", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "type": "quantitative", "format": ""},
          {"field": "Measure", "type": "nominal", "format": ""}

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


vegaEmbed('#ChartM1aand4', ChartM1aand4, {"actions": false});