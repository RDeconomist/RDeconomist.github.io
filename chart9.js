var Chart9 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {

    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/ecdc",

    "format": {"type": "json", "property": "records"}
  },

  "height": 100,

  "width": 150,

  "config": {"background": "#FcFdFd"},

  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "orangered"
  },

"transform": [
    {
      "calculate": "datetime(datum.year, datum.month, datum.day)",
      "as": "combined"
    },
      {
      "xfilter": {
        "field": "countriesAndTerritories",
        "oneOf": ["France", "Germany", "United_States_of_America", "Mexico", "Australia", "China", "Japan", "South_Korea", "Italy"]
      },


      "filter": {"field": "popData2019", "gt":50000000}

    },

{"window": [
        {"field": "cases", "op": "mean", "as": "rolling_mean"}
      ],
      "frame": [-7, 7]
    }

  ],



  "encoding": {
    "x": {
      "field": "combined",
      "type": "temporal",
      "axis": {
        "title": "Cases",
        "grid": false,
        "labelOverlap": "greedy",
        "labelSeparation": 20,
        "ticks": false
      }
    },
    "y": {
      "field": "rolling_mean",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false}},

    "xxcolor": {
      "field": "countriesAndTerritories",
      "field": "countriesAndTerritories",
      "type": "nominal",
      "scale": {"scheme": "set1"},
      "title": "Region"},

"facet": {
      "xxfield": "continentExp",
      "xxfield":"countriesAndTerritories",
      "field": "countryterritoryCode",
      "type": "nominal",
      "columns": 4,
      "title": "Region"
    }


    }

    ,
    "resolve": {"scale": {"y": "independent"}}
  };

vegaEmbed('#vis9', Chart9);
