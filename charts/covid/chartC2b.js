var chartC2b = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

"title": {
    "text": "Cases by specimen date: English regions",
    "subtitle":"Daily new cases by specimen date.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 300,
  
  "width": 300,
  
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
        "name": "Pick a region:  "
      }
    }
  },
  "transform": [
    
    {"filter": {"selection": "Region"}},
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "dec", "date": 5},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],

  "encoding": {
    "x": {
      "field": "date", 
      "type": "temporal", 
      "title": null},
    "y": {
      "field": "newCasesBySpecimenDate",
      "type": "quantitative",
      "title": null
    },
    
      
    "color": {
      "field": "areaName",
      "type": "nominal",
      "legend": null,
      "scale": {"scheme": "viridis"}
    }
  }
}
;

vegaEmbed('#chartC2b', chartC2b, {"actions":false});
