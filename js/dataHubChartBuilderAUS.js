// RICHARD DAVIES
// DATA SCIENCE FOR ECONOMISTS

// PURPOSE: JS DOWNLOADER THAT RUNS FROM ONS AND MAKES DIVS TO ACCOMODATE CHARTS.


///////////////////////////////////////////////////////////////////////////////
// STEP 1. READS IN A CSV FILE THAT HAS ALL THE INFO NEEDED TO MAKE EACH CHART.
// ** This creates an array "SeriesList" that is used to tailor each chart spec

// First, read in the info on the series that we want:
var urlCharts = "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/data/aus/dataHub_AUS.csv";
var request = new XMLHttpRequest();  
request.open("GET", urlCharts, false);   
request.send(null);


// Now make a new array, and fill it up with the info:
var seriesList = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
    seriesList.push(jsonObject[i].split(','));
}
console.log(seriesList); // This is our full series list:


// Remove any rows that relate to charts we do not want to make:
// In the CSV there is a column, rank, that runs from 1 to 5. 
// Give charts that we DO NOT want to appear, a rank of 5. 
for (var i = 1; i < seriesList.length-1; i++) {
    if(seriesList[i][13]>4){
        delete seriesList[i]
    }
}
// Retrived data from csv file content
console.log(seriesList);
// STEP 1 - END //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
/// CREATE INDICES WHERE THEY ARE MISSING
/// THE CPI DATA IS RETURNED AS AN INDEX
/// Loop across all series
for (var i = 1; i < seriesList.length-1; i++) {

    
}


//////////////////////////////////////////////////////////////////////////////
// STEP 2 - LOOP ACROSS THE SERIES TO MAKE THE CHARTS


for(let i=1; i<seriesList.length -1; i++){ // Start the loop at 1, since there is a header row. And end at length -1 for same reason.
  
    // Make the URL:
    // Working example: "https://api.data.abs.gov.au/data/ABS_LABOUR_ACCT/M9.AUS.TOTAL.A?detail=dataonly&format=csv"
    let x = seriesList[i][0]; // Thie selects our series
    let y = seriesList[i][1]; // Thie selects our dataset
    let urlRaw = `https://api.data.abs.gov.au/data/${y}/${x}?detail=dataonly&format=csv`; // This a "template literal" that we will fill in each iteration of the loop.
    let corsHelper = ""; // Not needed
    let urlUse = corsHelper+urlRaw; // The final URL that we will use in this iteration of the loop. 

    // Set a base spec::
    // This has lots of gaps in it, that the subsequent code will fill up. 
    // This is how we take one spec, and end up with different tailored charts.
    let spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": {
            "text": "", // This is injected via code, added from the csv that we load above.
            "subtitle": ["",""], // Added from csv
            "subtitleFontStyle":"italic",
            "subtitleFontSize":10,
            "anchor": "start",
            "color": "black"},
        "view": {"stroke": "transparent"}, // Make box around chart clear
        "data":{
            "url": "", // Added from csv
            "format":{
                "type": "json",
                "property": "observations"}},

        "transform": [
            {"caculate":"", "as":""},
            {},
            {},
            {"calculate":"year(datum.date)", "as": "year"},
            {"filter":{"field":"year", "gt":""}},
            
            {"calculate": "datum.value=='.' ? null : datum.value", "as":"value"} // deals with missing values which will prevent mean from being calculated.
        ],
            
        "height": 120,
        "width": 135,
        "mark": {"type": "line",  "color": "", "interpolate":"monotone"},
        "encoding": {
            "x":{"field":"TIME_PERIOD", "type": "temporal", "title":null, "axis": {"grid": false,}},
            "y":{"field":"OBS_VALUE", "type": "quantitative", "title":null, "axis": {"grid": false,"format":"s", }}}} 
  

    // BUILDING THE SPEC UP INTO A SPECIFIC CHART:
    // Now change the base spec, adding the url, and the titles
    spec.data.url = urlUse // adding the URL
    spec.title.text = seriesList[i][2] // adding the title
    spec.title.subtitle[0] = seriesList[i][3] // adding the subtitle (to first part of subtitle array)
    spec.title.subtitle[1] = seriesList[i][4] // adding the subtitle (to first part of subtitle array)
    spec.mark.color = seriesList[i][6] // adds the colour
    spec.transform[4].filter.gt = seriesList[i][7] // adds the start year
    spec.mark.type = seriesList[i][14] // adds the mark type: line, bar etc.

    
    spec.data.format.type = seriesList[i][12]
    spec.data.format.type = "csv"
    delete spec.data.format.property

    // Deal with missing values:
    spec.transform = [{"calculate": "datum.OBS_VALUE=='' ? null : datum.OBS_VALUE", "as":"value"}];
    spec.encoding.y.field = "value"


    // Base Rate chart - interpolation:
        if(seriesList[i][2]=="Fed Funds"){
            // Make the interpolation step wise
            spec.mark.interpolate = "step"
        };

    // Index charts:
    // Keep the daily data, but use it monthly and show the mean value:
    if(seriesList[i][16] == 12 || seriesList[i][16] == 4) {
        delete spec.data.url;
        delete spec.data.format;
        spec.data.values = json2.observations;
        spec.encoding.y.axis.format = "%";

    }


    // Daily data charts:
    // Keep the daily data, but use it monthly and show the mean value:
    if(seriesList[i][8] == "daily" || seriesList[i][8] == "monthly" || seriesList[i][8] == "quartNonAdj"){
        spec.encoding.x.timeUnit = "year"
        spec.encoding.y.aggregate = "mean"
    }

    // Charts that do not have an ONS API.
    // Record their series numbers as XYZ
    if(seriesList[i][0]=="XYZ"){
        // Correct the URL:
        spec.data.url = seriesList[i][11];
        // Correct the data type:
        spec.data.format.type = seriesList[i][12];
        // Correct the x encoding:
        // Note that cannot use "year", since this is made above
        spec.encoding.x.field = "dateYear";
        // Cull the transform and property, as not needed:
        delete spec.transform;
        delete spec.data.format.property;
        // Correct the encoding:
        spec.encoding.y.field = "value";
        spec.encoding.y.axis.format = "s";
    }

    // Charts that have the Quarterly data problem, 2000-Q1 etc:

    if(seriesList[i][8]=="Q" || seriesList[i][8]=="quartNonAdj"){
        spec.transform = [{}, {}, {}, {}]
        spec.transform[0].calculate = "split(datum.TIME_PERIOD, '-Q')"
        spec.transform[0].as = "temp1"
        spec.transform[1].calculate = "datum.temp1[0]+'-'+datum.temp1[1]*3"
        spec.transform[1].as = "temp2"
        spec.transform[2].calculate = "toDate(datum.temp2)"
        spec.transform[2].as = "date"

        // Same one from above, to deal with blanks:
        spec.transform[3] = {"calculate": "datum.OBS_VALUE=='' ? null : datum.OBS_VALUE", "as":"value"}

        spec.encoding.x.field = "date";

    }

    // Log the spec for debuggin each chart:
    console.log("This is chart" + i)
    console.log(spec)

    ///////////////////

    // Next add a new div, this will house our CHART AND BUTTONS:
    var newDiv = document.createElement("div"); // create the div
    newDiv.id = "chartHousing"+i; // Give it a unique id
    newDiv.className = 'grid_item'; // Give it a common class
    // document.body.appendChild(newDiv); // This line adds the div to the body
    document.querySelector('.grid_items').appendChild(newDiv); // Add the div WITHIN the existing div that has class grid_items

    // Next add a new div, this will house our CHART
    var newInnerDiv = document.createElement("div"); // create the div
    newInnerDiv.id = "chart"+i; // Give it a unique id
    newInnerDiv.className = 'grid_InnerItem'; // Give it a common class
    // document.body.appendChild(newDiv); // This line adds the div to the body
    document.getElementById('chartHousing'+i).appendChild(newInnerDiv); // Add the div WITHIN the existing div that has class grid_items

    // Next add an a tag within this new div.
    var myDiv = document.getElementById('chartHousing'+i);
    console.log(myDiv);
    
    var aTag = document.createElement('a');            // generate node
    aTag.setAttribute('href', seriesList[i][9]);      // set attribute
    aTag.textContent = "Data";
    aTag.className = "hubButtonData"
    console.log(aTag);
    myDiv.appendChild(aTag);

    var aTag2 = document.createElement('a');            // generate node
    aTag2.setAttribute('href', seriesList[i][10]);      // set attribute
    aTag2.textContent = "Articles";
    aTag2.className = "hubButtonArticles"
    console.log(aTag2);
    myDiv.appendChild(aTag2);

    // Embed the chart made in this iteration of the loop, into the div made in this iteration of the loop:
    vegaEmbed("#chart"+i, spec, {"actions": false})
}

/// END ////////////////////////////////////////////////////////////////////////////////////////////