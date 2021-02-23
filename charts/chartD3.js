var chartD3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

"title": {
    "text": "Deaths by publication date: English regions",
    "subtitle":"New deaths by publish date.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newDeaths28DaysByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 300,
  
  "width": 330,
  
  "mark": {"type": "bar", "width":10},
  
  "selection": {
    "Region": {
      "type": "single",
      "fields": ["areaName"],
      "bind": {
        "input": "select",
        "options": [
          null,
          "London",
          "East Midlands",
          "East of England",
          "North East",
          "North West",
          "South East",
          "South West",
          "West Midlands",
          "Yorkshire and The Humber"
        ],
        "name": "Pick a region: "
      }
    }
  },
  "transform": [
    
    {"filter": {"selection": "Region"}},
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "dec", "date": 15},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],

  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    "y": {
      "field": "newDeaths28DaysByPublishDate",
      "type": "quantitative",
      "title": "New deaths, daily"
    },
    
      
    "color": {
      "field": "areaName",
      "type": "nominal",
      "legend": null,
      "scale": {"scheme": "reds"}
    }
  }
}
;

vegaEmbed('#chartD3', chartD3, {"actions":false});
