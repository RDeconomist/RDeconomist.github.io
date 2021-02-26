var chartC10 =
{
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/rapidcharts/master/waves/waveHeights_today.csv"
  },

   "title": {
    "text": "Westdale",

    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "height":300,
  "width":350,

  "mark": {
    "type":"area",
    "color":"#0BB5FF"
      },
    
  "encoding": {
      
      "x": {
        "field": "days",
        "type": "quantitative",
        "title": "Forecast (days ahead)"        
      },
      
      "y": {
        "field": "westdale_high",
        "type": "quantitative",
        "title": "Predicted wave height",
        "scale": {"domain": [0, 12]},
        "grid":null
      },

      "y2": {
        "field": "westdale_low",
        "type": "quantitative",
        "title": "Predicted wave height",
        "grid":null
      }
    }
  };
vegaEmbed('#chartC10', chartC10, {"actions": false});