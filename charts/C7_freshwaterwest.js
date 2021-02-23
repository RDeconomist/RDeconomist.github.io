var chartC7 =
{
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/rapidcharts/master/waves/waveHeights_today.csv"
  },

   "title": {
    "text": "Freshwater West",
    
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
        "field": "freshwaterwest_high",
        "type": "quantitative",
        "title": "Predicted wave height",
        "grid":null
      },

      "y2": {
        "field": "freshwaterwest_low",
        "type": "quantitative",
        "title": "Predicted wave height",
        "grid":null
      }
    }
  };
vegaEmbed('#chartC7', chartC7, {"actions": false});