
// Functions for getting my data:


///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyBanks() {
  
    // Build the URL, by adding the CORE helper:

    var corsHelper = 'https://api.allorigins.win/raw?url=';
    var url1 = 'https://www.google.com/finance/quote/LLOY:LON';
    var url2 = 'https://www.google.com/finance/quote/BTC-USD';

    var urlCORS1 = corsHelper + url1;
    var urlCORS2 = corsHelper + url2;

    // See what we have:
    console.log(urlCORS1);
    console.log(urlCORS2);

    // Get the HTML:    

    $.get(urlCORS1, function(html1) {
        // console.log(html);

        //Stuff we need to match:
            // <div role="heading" aria-level="1" class="zzDege">Lloyds Banking Group PLC</div>
            // <div class="YMlKec fxKbKc">GBX&nbsp;44.91</div>

        const bankName1 = $(html1).find(".zzDege").text();
        const bankPrice1 = $(html1).find(".YMlKec.fxKbKc").text();

        console.log(bankName1);
        console.log(bankPrice1);
       
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;
        var x1 = document.getElementById("bankName1");
        var x2 = document.getElementById("bankPrice1");
        
        x1.innerText = bankName1;
        x2.innerText = bankPrice1;
       
    });

    $.get(urlCORS2, function(html2) {
        // console.log(html);

        //Stuff we need to match:
            // <div role="heading" aria-level="1" class="zzDege">Lloyds Banking Group PLC</div>
            // <div class="YMlKec fxKbKc">GBX&nbsp;44.91</div>

        const bankName2 = $(html2).find(".zzDege").text();
        const bankPrice2 = $(html2).find(".YMlKec.fxKbKc").text();

        console.log(bankName2);
        console.log(bankPrice2);
       
        //Now turn the results into JSON:
        // outputJSON = JSON.stringify(output, null, 2); 
        // console.log(outputJSON)

        //Now display the JSON on the page:
        // document.body.innerHTML = dataJSON;
        var x1 = document.getElementById("bankName2");
        var x2 = document.getElementById("bankPrice2");
        
        x1.innerText = bankName2;
        x2.innerText = bankPrice2;
       
    });

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


    
                 
