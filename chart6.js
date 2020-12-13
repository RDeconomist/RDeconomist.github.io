var Chart6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv",
    "format": {"type": "csv"}
  },
  "height": 400,
  "width": 600,
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false},

  "selection": {
    "region": {
      "type": "multi", "fields": ["areaName"], "bind": "legend"
    }
  },

  "transform": [
    {
      "window": [
        {"field": "newCasesBySpecimenDate", "op": "mean", "as": "rolling_mean"}
      ],
      "frame": [-7, 7]
    },
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "feb", "date": 1},
          {"year": 2020, "month": "dec", "date": 11}
        ]
      }
    }
  ],
  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    "y": {
      "field": "rolling_mean",
      "type": "quantitative",
      "title": "New cases (14-day avg)"
    },
    "color": {
      "field": "areaName",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region",
      "legend":{
        "orient":"top-left",
        "fillColor":"#FcFdFd"}
    },

    "opacity": {
      "condition": {"selection": "region", "value": 1},
      "value": 0.1
    },


    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "areaName", "type": "nominal", "title": "Region"},
      {"field": "rolling_mean", "type": "nominal", "title": "Cases 14-day avg","format": ".0f"},
      {"field": "newCasesBySpecimenDate", "type": "nominal", "title": "New cases"}]
  }
};

vegaEmbed('#vis6', Chart6);
