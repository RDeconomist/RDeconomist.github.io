
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
        const headline1 = $(html1).find(".text.text--color-black.text-display--scale-7.text--weight-500").text();
        console.log(headline1);
        var x1 = document.getElementById("newsFT");
        x1.innerText = headline1;      
    });

    // New York Times:
        // <h3 class="indicate-hover css-vip0cf">Democrats’ Long-Sought Plan for Lowering Drug Costs Is at Hand</h3>
    $.get(urlCORS2, function(html2) {
        const headline2 = $(html2).find(".indicate-hover.css-vip0cf").text();
        console.log(headline2);
        var x2 = document.getElementById("newsNYT");
        x2.innerText = headline2;      
    });

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////