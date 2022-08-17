
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

        // To JOSN
        var myData = JSON.stringify(result);
        console.log(myData)
        // return myData


        // var x = document.getElementById("weather");
        // x.innerText = maxTempJSON;
        
            // Now define and plot the chart:
        

     

    
        
  
    // Now embed the charts in the divs set above:
    //    vegaEmbed('#weather', weatherChart, {"actions": false});

    //    vegaEmbed('#weather', weatherChart, {"actions": false}).then(res =>
    //     res.view
    //       .insert('myData', maxTempJSON)
    //       .run()
    //   );
 
    var weatherChart = {
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "data": {
                    "name": "myData"
                },
                "mark": "line",
                "encoding": {
                "x": {"field": "day", "type": "quantitative"},
                "y": {"field": "temperature", "type": "quantitative"}
                }
            }
            // const data = await getMyWeather();
            // console.log(data);
            vegaEmbed('#weather', weatherChart, {"actions": false}).then(res =>
                res.view
                .insert('myData', myData)
                .run()
                );
  
  
  
  
  
    });

}

    ///////////////////
        // STEP 3. Define the chart drawing function:
        // This is a regular Vega Embed, as above
        // But with the addition that we insert data variable into the position 'myData', which is defined in the chart.
        // async function chartIt(){
        //     var weatherChart = {
        //         "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        //         "data": {
        //             "name": "myData"
        //         },
        //         "mark": "line",
        //         "encoding": {
        //         "x": {"field": "day", "type": "quantitative"},
        //         "y": {"field": "temperature", "type": "quantitative"}
        //         }
        //     }
        //     const data = await getMyWeather();
        //     console.log(data);
        //     vegaEmbed('#weather', weatherChart, {"actions": false}).then(res =>
        //         res.view
        //         .insert('myData', data)
        //         .run()
        //         );
        //     }


       






/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

