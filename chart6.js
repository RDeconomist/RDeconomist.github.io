var Chart6 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",
  
  "data": {"url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDate&format=csv", "format":{"type":"csv"}},
  
  "height":500,

  "width": "container",
  
  "mark": {"type": "line","point": false, "color":"green"},

  "transform": [
    
    {"window": [
      {
        "field": "newCasesBySpecimenDate",
        "op": "mean",
        "as": "rolling_mean"
      }
    ],
    "frame": [-7, 7]},
    
    {"filter": {
      "field": "date", 
      "range": [{"year": 2020, "month": "feb", "date": 1}, {"year": 2020, "month": "dec", "date": 20}] 
      }
      }
    
    ],

  
  "encoding": {
    "x": {
      "field": "date", 
      "type":"temporal", 
      "title":"Date"},
    "y": {
      "field": "rolling_mean", 
      "type": "quantitative", 
      "title":"New cases (14-day avg)"},
    "color": {
      "field": "areaName", 
      "type": "nominal", 
      "scale": {"scheme": "set1"}
    }
  }
};

vegaEmbed('#vis6', Chart6);
