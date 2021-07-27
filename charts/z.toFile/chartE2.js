var chartE2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/abmi",
    "format": {"type": "json", "property": "quarters"}
  },
  "height": 400,
  "width": 600,
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false, "interpolate":"monotone", "color":"firebrick"},
  
  "encoding": {
    "x": {"field": "date", 
          "type":"ordinal",
          "axis": {
        "title": "Date",
        "grid": false,
        "labelOverlap": "greedy",
        "labelSeparation": 20,
        "ticks": false}
                    },
    "y": {
      "field": "value", "type": "quantitative",
      "title": "Quarterly output (£m)",
      "sort": {"field": "quarter"}
    }
     
  }
};

vegaEmbed('#visE2', chartE2);
