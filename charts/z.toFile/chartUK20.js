var chartUK20 = {  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
 
 "title": {
    "text": "NEW CASES - DAILY RATE",
    "anchor": "middle",
    "color": "black"
  },


  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesByPublishDate&format=csv",
    "format": {"type": "csv"}
  },
  "height": 600,
  "width": 480,
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "bar", "point": false},
  "selection": {
    "region": {"type": "multi", "fields": ["areaName"], "bind": "legend"}
  },
  "transform": [
    
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "sep", "date": 1},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  "encoding": {
    "x": {
      "field": "date", 
      "type": "temporal", 
      "title": "Date", 
      "axis":{"grid":false}
      },

    "y": {
      "field": "newCasesByPublishDate",
      "type": "quantitative",
      "title": "New cases",
      "axis":{"grid":false}
      },

    "color": {
      "field": "areaName",
      "type": "nominal",
      "scale": {"scheme": "inferno"},
      "title": "Region",
      "legend": {"orient": "top-left", "fillColor": "#FcFdFd"}
    },
    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1},
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "areaName", "type": "nominal", "title": "Region"},
      {
        "field": "rolling_mean",
        "type": "nominal",
        "title": "Cases 14-day avg",
        "format": ".0f"
      },
      {
        "field": "newCasesByPublishDate",
        "type": "nominal",
        "title": "New cases"
      }
    ]
  }
}
;

vegaEmbed('#visUK20', chartUK20);
