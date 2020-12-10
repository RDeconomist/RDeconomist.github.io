var yourVlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",

    "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/vega/master/Albers.csv"
    },

  "config":{
    "background": "#FAFAFA"
         },

  "height": 500,
  "width": 500,

  "mark":{
     "type": "bar",
     "binSpacing":1000},

  "encoding": {

    "x": {
      "field": "Stacks", 
      "type": "ordinal",
      "axis": null
      },

    "y": {
      "field": "Height", 
      "type": "quantitative",
      "sort":"descending",
      "axis": null
      },

    "color": {
      "field": "Tone", 
      "type": "ordinal",
      "legend":null,
      "scale": {
        "domain": ["a","b","c","d","e","f","g"],
        "range": ["#FFFF00","#FFA747","#FF8000","#FF0000","#FF8000","#FFA747","#FFFF00"]
            }
          }
        }
}