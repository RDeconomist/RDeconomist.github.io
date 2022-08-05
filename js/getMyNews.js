
// Functions for getting my data:


///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyNews() {
  
    // Build the URL, by adding the CORE helper:

    var corsHelper = 'https://api.allorigins.win/raw?url=';
    var url = 'https://www.ft.com/';
    var urlCORS = corsHelper + url;

    // See what we have:
    console.log(urlCORS);

    // Get the HTML:    

    $.get(urlCORS, function(html) {
        //Stuff we need to match:

        // <span class="text text--color-black text-display--scale-7 text--weight-500" id="">US adds 528,000 jobs in surprise gain for labour market</span>


        // <div role="heading" aria-level="1" class="zzDege">Lloyds Banking Group PLC</div>
        // <div class="YMlKec fxKbKc">GBX&nbsp;44.91</div>

        const headline = $(html).find(".text.text--color-black.text-display--scale-7.text--weight-500").text();
        // const bankPrice = $(html).find(".YMlKec.fxKbKc").text();

        console.log(headline);
        
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;
        var x1 = document.getElementById("newsFT");
        // var x2 = document.getElementById("bankPrice");
        
        x1.innerText = headline;
        // x2.innerText = bankPrice;
       
    });

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////