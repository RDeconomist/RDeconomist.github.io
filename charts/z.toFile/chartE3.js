var chartE3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/xmasDrinks.csv",
    "format": {"type": "csv"}
  },
  "height": 200,
  "width": 150,
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false},

  "transform": [
    {
      "filter": {
        "field": "name",
        "oneOf": ["Bitter", "Stout"]
      }
    }
  ],


  "selection": {
    "item": {"type": "multi", "fields": ["name"], "bind": "legend"}
  },

  "encoding": {

    "x": {"field": "year", "type": "temporal", "title": "Date"},

    "y": {
      "field": "price",
      "type": "quantitative",
      "title": "Price, £"
    },
    
    "color": {
      "field": "name",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Drink",
      "xxlegend": {"orient": "top-left", "fillColor": "#FcFdFd"}
    },

    "facet": {
      "field": "region_s",
      "type": "nominal",
      "columns": 2,
      "title": "Region"
    },

    "opacity": {"condition": {"selection": "item", "value": 1}, "value": 0.1}
   
  }
};

vegaEmbed('#visE3', chartE3);
