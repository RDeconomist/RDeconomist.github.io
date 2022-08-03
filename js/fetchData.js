
// Two similar functions for fetching JSON and CSV and injecting into page:


///////////////////////////////////////////////////////////////////////
///////////////////////////////JSON////////////////////////////////////

async function fetchJSON() {
    
  //Grab the URL from the page:
  var url = document.querySelector('#url').value;
  console.log(url);

  //Now use Fetch to get the URL:
  const response = await fetch(url); 
  const data = await response.json();
  console.log(data);

  //Now turn the results into JSON:
  dataJSON = JSON.stringify(data, null, 2);

  //Now display the JSON on the page:
  // document.body.innerHTML = dataJSON;
  var x = document.getElementById("dataLoaded");
  x.innerText = dataJSON;

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
///////////////////////////////CSV/////////////////////////////////////

async function fetchCSV() {

    // // (A1) GET HTML TABLE
    // let x = document.getElementById("dataLoaded");

    // (A2) GET URL
    var url = document.querySelector('#url').value;
 
    // (A) GET HTML TABLE
    let table = document.getElementById("csvTable");
 
    // (B) AJAX FETCH CSV FILE
    fetch(url)
    .then((res) => { return res.text(); })
    .then((csv) => {
    
    // (B1) REMOVE OLD TABLE ROWS
    table.innerHTML = "";
 
    // (B2) GENERATE TABLE
    csv = csv.split("\n");
    console.log(csv);
    for (let row of csv) {
        let tr = table.insertRow();
        for (let col of row.split(",")) {
        let td = tr.insertCell();
            td.innerHTML = col;
    }
  }
});

}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
    
                 
