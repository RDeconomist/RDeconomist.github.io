var ChartGI5 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(GI5) UK government consumption expenditure (£m), 1955-2020",

   "title": {
    "text": "Government consumption expenditure",
    "subtitle":"£ million. Source: ONS",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/GI5.DataHub.GrowthInnovationGovSpend.csv"},
  "height": 300,
  "width": 345,
  "mark": {
    "type": "line",
    "point": false,
    "interpolate": "monotone",
    "color": "goldenrod"
  },
  "encoding": {
    "x": {
      "field": "Date",
      "type": "temporal",
      "axis": {
        "title": null,
        "grid": false,
        "labelSeparation": 20
      }
    },
    "y": {
      "field": "Value",
      "type": "quantitative",
      "title": "",
      "axis": {"grid": false}
    },
    
    "tooltip": [
      {"field": "Date", "type": "temporal"},
      {
        "field": "Value",
        "title": "Expenditure",
        "type": "quantitative"
      }
    ]
  }
};


vegaEmbed('#ChartGI5', ChartGI5, {"actions": false});
