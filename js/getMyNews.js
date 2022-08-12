
// Functions for getting my data:

///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function getMyNews() {
  
    // Build the URL, by adding the CORE helper:
    var corsHelper = 'https://api.allorigins.win/raw?url=';

    var url1 = 'https://www.ft.com/';
    var url2 = 'https://www.nytimes.com/';
    

    var urlCORS1 = corsHelper + url1;
    var urlCORS2 = corsHelper + url2;
    

    // Check our URLs are formed correctly:   
    console.log(urlCORS1);
    console.log(urlCORS2);
    

    // Get the HTML:  

    // Financial Times:
    $.get(urlCORS1, function(html1) {
        var headline1 = $(html1).find(".text.text--color-black.text-display--scale-7.text--weight-500").text();
        console.log(headline1);
        var x1 = document.getElementById("newsFT");
        const publication1 = "FT"
        headlineResult1 = publication1 + ": " + headline1
        x1.innerText = headlineResult1;      
    });

    // New York Times:
        // <h3 class="indicate-hover css-vip0cf">Democrats’ Long-Sought Plan for Lowering Drug Costs Is at Hand</h3>
    $.get(urlCORS2, function(html2) {
        var headline2 = $(html2).find(".indicate-hover.css-vip0cf").text();
        console.log(headline2);
        var x2 = document.getElementById("newsNYT");
        const publication2 = "NYT"
        headlineResult2 = publication2 + ": " + headline2
        x2.innerText = headlineResult2;    
    });


    //Guardian:
       
        // $.get(urlCORS3, function(html3) {
        //     const headline3 = $(html3).find(".fc-item__title").text();
        //     console.log(headline3);
        //     var x3 = document.getElementById("newsGuardian");
        //     x3.innerText = headline3;      
        // });

}




/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

