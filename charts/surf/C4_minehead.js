var chartC4 =
{
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/rapidcharts/master/waves/waveHeights_today.csv"
  },

   "title": {
    "text": "Minehead",
    "subtitle": "Forecast wave heights (ft), range.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "height":300,
  "width":300,

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
        "field": "minehead_high",
        "type": "quantitative",
        "title": null,
        "scale": {"domain": [0, 12]},
        "grid":null
      },

      "y2": {
        "field": "minehead_low",
        "type": "quantitative",
        "title": null,
        "grid":null
      }
    }
  };
vegaEmbed('#chartC4', chartC4, {"actions": false});