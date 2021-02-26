var chartC1 =
{
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/rapidcharts/master/waves/waveHeights_today.csv"
  },

   "title": {
    "text": "Croyde",
    
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
        "field": "croyde_high",
        "type": "quantitative",
        "title": "Predicted wave height",
        "scale": {"domain": [0, 12]},
        "grid":null
      },

      "y2": {
        "field": "croyde_low",
        "type": "quantitative",
        "title": "Predicted wave height",
        "grid":null
      }
    }
  };
vegaEmbed('#chartC1', chartC1, {"actions": false});