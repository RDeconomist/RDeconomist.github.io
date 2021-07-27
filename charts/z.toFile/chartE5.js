var chartE5 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/LMS-LF24.json",
    "format": {"type": "json", "property": "quarters"}
  },
  "height": 400,
  "width": 600,
  "config": {"background": "#FcFdFd"},
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "orangered"
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "ordinal",
      "axis": {
        "title": "Date",
        "grid": false,
        "labelOverlap": "greedy",
        "labelSeparation": 20,
        "ticks": false
      }
    },
    "y": {
      "field": "value",
      "type": "quantitative",
      "title": "Employment rate",
      "axis": {"grid": false},
      "scale": {"zero": false}
    }
  }
};

vegaEmbed('#visE5', chartE5);
