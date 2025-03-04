var ozoneChart = 

{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  
    "description": "Pollution data using satellite imagary from emissions API. The chart makes two separate API calls, one to get the UK data, and one to get the data for a specific point, in this case the coordinates for the city of Bristol.",

    "title": {
    "text": "Ozone - UK vs Bristol",
    "subtitle": "Average daily Ozone concentration for the UK (grey) and Bristol (blue)",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

    "width":300,
    "height":350,

    "encoding": {
      
      "x": {
        "field": "end", 
        "type": "temporal",
        "title":null
        },
  
      "y": {
        "field": "average", 
        "type": "quantitative",
        "scale": {"domain": [0.08, 0.25]},
        "title":null
        }
    },
  

    "layer":[
      {"data": {"url": "https://api.v2.emissions-api.org/api/v2/ozone/average.json?country=gb&begin=2010-02-01&end=2022-07-01"},
  
    "mark":{
      "type": "circle",
      "color":"grey",
      "opacity":0.5
    }
    },      
    
    {"data": {"url": "https://api.v2.emissions-api.org/api/v2/ozone/average.json?point=51.4545%2C2.5879&begin=2019-02-10&end=2021-02-11&limit=100&offset=0"},
  
    "mark":{
      "type": "circle",
      "color":"dodgerblue",
      "opacity":0.5
    }
    }
  ]  
};

vegaEmbed('#chartENV2', ozoneChart, {"actions": false});