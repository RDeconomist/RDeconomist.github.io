var chartCP3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Cost of Christmas",
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/db_christmas_basketcost.csv",
    "format": {"type": "csv"}
  },

  "height": 130,
  
  "width": 125,

  "config": {"background": "#FcFdFd"},
  
  "mark": {"type": "line", "point": false},
  
  "transform": [{"filter": {"selection": "Type"}}],
  
  "selection": {
    "Type": {
      "type": "single",
      "fields": ["measure"],
      "init": {"measure": "Basket cost"},
      "bind": {
        "input": "select",
        "options": [
          "Basket cost",
          "Cost: hours worked",
          "Median wage"
        ],
        "name": "Select items:"
      }
    }
  },

  "encoding": {
    
    "x": {"field": "year", "type": "temporal", "title": "Year"},

    "y": {"field": "value", "type": "quantitative", "title": "£ or hours worked"},
    
    "color": {
      "field": "measure",
      "type": "nominal",
      "legend":0,
       "scale": {
        "domain": [
          "Basket cost",
          "Cost: hours worked",
          "Median wage"
        ],
        "range": [
          "green",
          "blue",
          "red"
        ]
      }     
    },
    
    "facet": {
      "field": "region",
      "type": "nominal",
      "columns": 4,
      "title": "Region"
    }
  }
};

vegaEmbed('#visCP3', chartCP3);
