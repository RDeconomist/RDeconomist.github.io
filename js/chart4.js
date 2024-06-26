   var yourVlSpec4 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",

  "description": "DRC GDP decomposed",

   "title": {
    "text": "DR CONGO - The worst economic decline of the 20th century in perspective",
    "anchor": "start",
    "color": "navy"
  },

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/vega/master/DRC%201970%20GDP%20race.csv"
    },


    "RD NOTES": "The final transform in the code will be the one that appears. So to alter the selection just move one down to the bottom. Alternatively you can block them out using xx",

  "transform":[
    {"filter": {"field": "Country", "oneOf": ["DR Congo", "Kenya", "Nigeria"]}}
    ],

  "transform":[
    {"filter": {"field": "Country", "oneOf": ["DR Congo", "Thailand", "Myanmar"]}}
    ],

  "xxtransform":[
    {"xxfilter": {"field": "Country", "oneOf": ["DR Congo", "Senegal", "Ghana"]}}
    ],
  
    
    "config":{
    "background": "#FAFAFA"
  },

  "height": 700,
  "width": 700,

  "xmark": "point",

  "mark": {
    "type": "line",
    "opacity": 1,
    "interpolate": "", 
    "color": "navy", 
    
    "point": {
      "color": "black",
      "size": "30"}
  },

  

  "encoding": {

    "x": {
      "field": "Year", 
      "type": "ordinal",
      "axis": {"title": "Year"}
      },

    "y": {
      "field": "GDP", 
      "type": "quantitative",
      "axis": {"title": "GDP per capita, 2010 dollars"}
      },

    "color": {
      "field": "Country", 
      "type": "nominal"
            },
    
    "xtooltip": [
      {"field": "Year", "type": "ordinal", "format": "%Y"},
      {"field": "Country", "type": "ordinal"},
      {"field": "GDP", "type": "quantitative", "format": "$.2f"}
    ]        
  }
}