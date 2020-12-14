var chartE1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/czbh",
    "format": {"type": "json", "property": "quarters"}
  },
  "height": 400,
  "width": 600,
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", 
            "point": false, 
            "interpolate":"monotone",
            "color":"orangered"},
  
  "encoding": {
    "x": {"field": "date", 
          "type":"ordinal",
          "axis": {
              
              "title": "Cases",
              "grid": false,
              "labelOverlap": "greedy",
              "labelSeparation":20,
              "ticks":false
      }
                    },
    "y": {
      "field": "value", 
      "type": "quantitative",
      "title": "RPI all items",
      "axis":{"grid":false}
    }
  }
};

vegaEmbed('#visE1', chartE1);
