async function testURL() {
    
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