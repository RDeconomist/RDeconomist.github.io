
// Functions for getting my data:


///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyWaves() {
  
    // Build the URL, by adding the CORE helper:

    var corsHelper = 'https://api.allorigins.win/raw?url=';
    var url = 'https://magicseaweed.com/Porthcawl-Rest-Bay-Surf-Report/1449/';
    var urlCORS = corsHelper + url;

    // See what we have:
    console.log(urlCORS);

    // Get the HTML:    

    $.get(urlCORS, function(html) {

        // See what we got (I turn this off when it is working)
        // console.log(html);

        // The code we use in Python and BS:
        // results = soup.find_all("span", class_="h3 font-sans-serif heavy nomargin text-white")

        // Target element:  <li class="rating-text text-dark">    2-3<small>ft</small>   </li>
           
        const waves = $(html).find(".rating-text.text-dark").text();
        const forecast = $(html).find(".h3.font-sans-serif.heavy.nomargin.text-white").text();
        
        console.log(waves);
        console.log(forecast);
       
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;

        var x1 = document.getElementById("waveLocation");
        var x2 = document.getElementById("waveHeight");
        
        x1.innerText = "Rest Bay";
        x2.innerText = waves;
       
    });

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


    
                 
