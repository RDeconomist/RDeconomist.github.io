
// Functions for getting my data:


///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyBanks() {
  
    // Build the URL, by adding the CORE helper:

    var corsHelper = 'https://api.allorigins.win/raw?url=';
    var url = 'https://www.google.com/finance/quote/LLOY:LON';
    var urlCORS = corsHelper + url;

    // See what we have:
    console.log(urlCORS);

    // Get the HTML:    

    $.get(urlCORS, function(html) {
        // console.log(html);
        const result = html.match(/<title>(.+)<\/title>/);
        // console.log(result)

         //Stuff we need to match:

        // <div role="heading" aria-level="1" class="zzDege">Lloyds Banking Group PLC</div>
        // <div class="YMlKec fxKbKc">GBX&nbsp;44.91</div>

        const bankName = $(html).find(".zzDege").text();
        const bankPrice = $(html).find(".YMlKec.fxKbKc").text();

        console.log(bankName);
        console.log(bankPrice);
       
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;
        var x1 = document.getElementById("bankName");
        var x2 = document.getElementById("bankPrice");
        
        x1.innerText = bankName;
        x2.innerText = bankPrice;
       
    });

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


    
                 
