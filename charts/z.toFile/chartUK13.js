var chartUK13 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv",
    "format": {"type": "csv"}
  },
  "height": 250,
  "width": "container",
  "mark": {"type": "bar", "width": 10},
  "selection": {
    "Region": {
      "type": "single",
      "fields": ["areaName"],
      "bind": {
        "input": "select",
        "options": [
          null,
          "East Midlands",
          "East of England",
          "London",
          "North East",
          "North West",
          "South East",
          "South West",
          "West Midlands",
          "Yorkshire and The Humber"
        ],
        "name": "Region"
      }
    }
  },
  "transform": [
    {"filter": {"selection": "Region"}},
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "dec", "date": 1},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    "y": {
      "field": "newCasesBySpecimenDate",
      "type": "quantitative",
      "title": "New cases"
    },
    "color": {
      "field": "areaName",
      "type": "nominal",
      "legend": null,
      "scale": {"scheme": "turbo"},
      "title":null
    }
  }
}
;

vegaEmbed('#visUK13', chartUK13);
