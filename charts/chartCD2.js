var chartCD2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumCasesByPublishDate&metric=cumDeaths28DaysByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "title": {
    "text": "Cases vs Deaths: UK Cumulative",
    "subtitle":"Cumulative cases and deaths by publish date.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "height": 300,

  "width": 290,

  "config": {"background": "#ffFfFf"},


  "mark": {"type": "circle", "size":75},
     
  "encoding": {
    "x": {"field": "cumCasesByPublishDate", "type": "quantitative", "title": "Cases"},
  
    "y": {
      "field": "cumDeaths28DaysByPublishDate",
      "type": "quantitative",
      "title": "Deaths"
    },

    "color":{
      "timeUnit":"month",
      "field":"date",
      "type": "ordinal",
      "title":null,
      "scale": {"scheme": "turbo"},
      "xxlegend":{"orient":"top"}
    },

    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {
        "field": "cumDeaths28DaysByPublishDate",
        "type": "quantitative",
        "title": "Deaths",
        "format": ",.0f"
      },
      {
        "field": "cumCasesByPublishDate",
        "type": "quantitative",
        "title": "Cases",
        "format": ",.0f"
      }
    ]
  },
  "resolve": {"scale": {"y": "independent", "x": "independent"}}
}
;

vegaEmbed('#chartCD2', chartCD2, {"actions":false});
