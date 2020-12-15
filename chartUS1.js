var chartUS1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "data": {"url": "https://raw.githubusercontent.com/RDeconomist/vega/master/US%20states2.csv"},

  "mark": "circle",
  
  "height": 400,
  
  "width": 600,
  
  "encoding": {
    
    "x": {
      "field": "Gini", 
      "type": "quantitative",
      "scale": {"domain": [0.41, 0.5]},
      "title":"Inequality (Gini)"
      },

    "y": {
      "field": "Death Rate", 
      "type": "quantitative"
      },

    "color": {
      "field": "Division", 
      "type": "ordinal",
      "scale": {"scheme": "set1"}
      },

     "size": {
      "field": "Med income", 
      "type": "quantitative"
      } 

  }
};

vegaEmbed('#visUS1', chartUS1);
