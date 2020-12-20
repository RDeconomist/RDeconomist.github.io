var chartUK6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=cumCasesBySpecimenDate&metric=cumDeaths28DaysByDeathDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 133.3,

  "width": 200,

  "mark": {"type": "point", "color":"red"},
  

  "encoding": {
    "x": {"field": "cumCasesBySpecimenDate", "type": "quantitative", "title": "Cases"},
    "y": {
      "field": "cumDeaths28DaysByDeathDate",
      "type": "quantitative",
      "title": "Deaths"
    },
    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 3,
      "title": "Region"
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {
        "field": "cumCasesBySpecimenDate",
        "type": "quantitative",
        "title": "Cases, cumulative",
        "format":",.0f"
      },
      {
        "field": "cumDeaths28DaysByDeathDate",
        "type": "quantitative",
        "title": "Deaths, cumulative",
        "format":",.0f"
      }
      ]
    }
  }
;

vegaEmbed('#visUK6', chartUK6);
