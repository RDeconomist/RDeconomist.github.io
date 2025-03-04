var chartC4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "title": {
    "text": "Case positivity: English regions",
    "subtitle":"Positive rate %, by specimen date, rolling weekly sum.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=uniqueCasePositivityBySpecimenDateRollingSum&format=csv",
    "format": {"type": "csv"}
  },
  "height": 300,
  "width": 300,
  "config": {"background": "#FfFfFf"},
  "mark": {"type": "line", "point": false},
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
      "title": null,
      "axis": {"grid": false}
    },
    "y": {
      "field": "uniqueCasePositivityBySpecimenDateRollingSum",
      "type": "quantitative",
      "title": null,
      "axis": {"grid": false}
    },
    "color": {
      "field": "areaName",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region",
      "legend": {"orient": "top-right", "fillColor": "#FfFfFf"}
    },
    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1},
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "areaName", "type": "nominal", "title": "Region"},
      {
        "field": "uniqueCasePositivityBySpecimenDateRollingSum",
        "type": "nominal",
        "title": "Positivity rate",
        "format": ".0f"
      }
    ]
  }
}
;

vegaEmbed('#chartC4', chartC4, {"actions":false});
