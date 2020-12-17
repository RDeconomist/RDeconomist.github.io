var Chart7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv",
    "format": {"type": "csv"}
  },
  "height": 133.3,
  "width": 200,
  "mark": {"type": "line", "point": false, "color": ["green", "red"]},
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
          {"year": 2020, "month": "dec", "date": 20}
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
    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 3,
      "title": "Region"
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "rolling_mean", "type": "quantitative", "title": "Cases, rolling"},
      {"field": "newCasesBySpecimenDate", "type": "quantitative", "title": "Cases"}
    ],
    "color": {
  "field": "areaName",
  "type": "nominal",
  "legend":0,
  "scale": {"domain": ["East Midlands", "East of England", "London", "North East", "North West", "South East", "South West", "West Midlands", "Yorkshire and The Humber"], "range": ["green", "red", "red", "green", "green", "red", "green","green","green"]}
}

  }
};

vegaEmbed('#vis7', Chart7);
