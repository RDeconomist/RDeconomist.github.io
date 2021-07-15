var chartENV1 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Carbon per capita by country",

"title": {
    "text": "CO2 Emissions",
    "subtitle":"Tonnes per capita. Source: Our World in Data",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/observatory/main/Green_CarbonPerCapita.csv"
  },
  "height": 300,
  "width": 300,
  "mark": "line",
  "encoding": {
    "x": {"field": "Time", "type": "temporal", "title": "", "axis": {"grid": false}},
    "y": {
      "field": "Value",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false},
      "sort": [],
      "scale": {"domain": [-1, 25]}
    },
    "color": {
      "field": "Country",
      "title": null,
      "legend": {"orient": "top-left"},
      "type": "nominal",
      "sort": [],
      "scale": {"range": ["#00a767", "#007548", "#004329", "#00110a", "#80d3b3", "#f4c245"]}
    },
    "tooltip": [
      {"field": "Time", "type": "temporal", "timeUnit": "year", "title": "Year"},
      {"field": "Value", "type": "quantitative", "title": "CO2 per capita (t)"},
      {"field": "Country"}
    ]
  }
};


vegaEmbed('#chartENV1', chartENV1, {"actions": false});

