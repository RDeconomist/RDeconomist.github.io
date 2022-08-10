
// Functions for getting my data:

///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyWeather() {
  
    // Build the URL, by adding the CORE helper:
    var corsHelper = 'https://api.allorigins.win/raw?url=';

    var url = 'https://www.bbc.co.uk/weather/2654675';

    var urlCORS = corsHelper + url;

    // Check our URLs are formed correctly:   
    console.log(urlCORS);

    // Get the HTML:  

    // BBC weather:

    // wr-day-carousel__list wr-js-day-carousel-list clearfix
    // <span class="wr-value--temperature--c">24°</span>
       
    $.get(urlCORS, function(html) {
        const headline = $(html).find(".wr-value--temperature--c").text();
        console.log(headline);

        // Get rid of unwanted characters:
        var y = headline.replace(/°/g, ",");
        console.log(y)
        y = y.replace(" C", "");
        console.log(y)

        //Split the strong into an array
        y = y.split(",")
        console.log(y)

        // Filter out the even indexes of the array:
        let maxTemp = y.filter((element, index) => {
            return index % 2 === 0
        })
        console.log(maxTemp)

        // Now just get the first 10 days:
        // Starting at, how many items (not from position X to Y):
        maxTemp = maxTemp.slice(0,10);
        console.log(maxTemp)

        // Now an array of days:
        var days = Array.from(Array(10).keys())
        console.log(days)

        // Next create an object from these arrays, [days], [maxTemp]
        var result = [];
        for (var i = 0; i < days.length; i++) {
            var value1 = days[i];
            var value2 = maxTemp[i];
            var obj = {
                day: value1,
                temperature: value2
            };
            // console.log(obj);
            result.push(obj)
        }

        console.log(result);

        // Convert this to JSON data:
        var maxTempJSON = JSON.stringify(result);
        console.log(maxTempJSON)

        // Now define the chart:
        var weatherChart = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

            "title": {
                "text": "Bristol, peak temp next 10 days",
                "fontWeight":200,
                "fontSize":9,
                "subtitle":["Source: BBC weather",""],
                "color": "whitesmoke",
                "subtitleFontStyle":"italic",
                "subtitleFontSize":8,
                "anchor": "start",
                "subtitleColor":"whitesmoke"},
            

            "width": 120, "height": 60,

            "config": {
                "background":"#282d32",
                "view": {
                  "stroke": "transparent"}},

            "data": {
                "name": "myData"
            },
            "mark": {"type":"circle", "color":"#E0E0E0"},
            "encoding": {
                "x": {
                    "field": "day", 
                    "type": "quantitative",
                    "axis": {
                        "title": null,
                        "grid": false,
                        "labels": false,
                        "ticks": false,
                        "labelColor":"rgb(100,100,100)",
                        "tickColor":"rgb(100,100,100)"}},
                "y": {
                    "field": "temperature", 
                    "type": "quantitative",
                    "axis": {
                        "title": null,
                        "grid": false,
                       
                        
                        
                        "labelColor":"rgb(100,100,100)",
                        "tickColor":"rgb(100,100,100)"}}
                }
            }

        // Important trick. JSON parse does not like all the spaces in this. So you can either:
        // (1) delete all the spaces
        // (2) strigify the above first, and then parse it.
        // Option (2) is quicker and less prone to error.
     
        // var weatherChart2 = JSON.parse('{"$schema": "https://vega.github.io/schema/vega-lite/v5.json","data": {"name": "myData"},"mark": "line","encoding":{"x": {"field": "day", "type": "quantitative"},"y": {"field": "temperature", "type": "quantitative"}}}')
        weatherChart = JSON.stringify(weatherChart)
        weatherChart = JSON.parse(weatherChart)
        // After this we should have the spec as an object
        // We want it as an object so that we can manipulate it:

        // Inject the data into the object:
        weatherChart.data.name = maxTempJSON


        // Example: renaming the key (copy, rename, then delete)
        // obj['New key'] = obj['old key'];
        weatherChart.data['values'] = weatherChart.data['name'];
        delete weatherChart.data['name'];

        // Now embed the charts in the divs set above:
        vegaEmbed('#weather', weatherChart, {"actions": false});  
  
    });
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

