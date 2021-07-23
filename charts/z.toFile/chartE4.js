var chartE4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/xmasDrinks.csv",
    "format": {"type": "csv"}
  },
  "height": 200,
  "width": 300,
  "config": {"background": "#FcFdFd"},
  "mark": {"type": "line", "point": false},

  "transform": [
    {
      "filter": {
        "field": "name",
        "oneOf": ["Bitter", "Stout", "Sherry", "Brandy"]
      }
    }
  ],


  "selection": {
    "region": {"type": "multi", "fields": ["region_s"], "bind": "legend"}
  },

  "encoding": {
    "x": {"field": "year", "type": "temporal", "title": "Year"},
    "y": {
      "field": "price",
      "type": "quantitative",
      "title": "Price, £"
    },
    
    "color": {
      "field": "region_s",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region"
    },

    "facet": {
      "field": "name",
      "type": "nominal",
      "columns": 2,
      "title": "Region"
    },

    "opacity": {"condition": {"selection": "region", "value": 1}, "value": 0.1}
  },
  "resolve": {"scale": { "y": "independent"}}
};

vegaEmbed('#visE4', chartE4);
