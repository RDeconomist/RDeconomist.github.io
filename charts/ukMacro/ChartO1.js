var ChartO1 =
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Productivity UK",

   "title": {
    "text": "UK productivity, 1971-2021",
    "subtitle":"Labour productivity. Output per hour worked, 2018==100. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/GI4.DataHub.GrowthInnovationOutputperHour.csv"},
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "blueviolet"
  },
  "encoding": {
    "x": {
      "field": "Date",
      "type": "temporal",
      "axis": {
        "title": null,
        "grid": false,
        "labelSeparation": 20,
        "ticks": false
      }
    },
    "y": {
      "field": "Value",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false}
    }
  }
};
vegaEmbed('#ChartO1', ChartO1, {"actions": false});