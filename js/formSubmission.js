function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  // // for multi-selects, we need special handling
  // formJSON.snacks = data.getAll('snacks');
  



 /////////////////////////////////////////////////////////////////
  /// Enter a blank spec that is to be filled in:

  var blankSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "",
  "height": "",
  "width": "",      
  "data": {
         "url": "",
         "format": {
           "type":""}},
  "mark":"",
  "encoding": {
    "x": {
      "field": "", 
      "type": ""},
    "y": {
      "field": "", 
      "type": ""}
    }
    }

////////////////////////////////////////////////////////////////////





///////////////////////////////////////////
/// Now fill in the blank spec, with the form JSON

// Start with the blank spec:
var yourSpec = blankSpec

// Data:
yourSpec.data.url = formJSON.dataUrl;
yourSpec.data.format.type = formJSON.dataFormatType;

// Appearance:
yourSpec.title = formJSON.title;
yourSpec.height = formJSON.height;
yourSpec.width = formJSON.width;

//Mark
yourSpec.mark = formJSON.mark;

//Encoding:
yourSpec.encoding.x.field = formJSON.xField;
yourSpec.encoding.x.type = formJSON.xType;

yourSpec.encoding.y.field = formJSON.yField;
yourSpec.encoding.y.type = formJSON.yType;

// yourSpec.encoding.facet.field = formJSON.facetField;
// yourSpec.encoding.facet.type = formJSON.facetType;

// yourSpec.encoding.color.field = formJSON.colorField;
// yourSpec.encoding.color.type = formJSON.colorType;
//////////////////////////////////////////////////////////


const yourSpecJSON = JSON.stringify(yourSpec, null, 2);
console.log(yourSpecJSON)

// Now embed the chartL
vegaEmbed('#chart', yourSpec, {"actions": false});

// Post the results:
const results = document.querySelector('.results pre');
results.innerText = JSON.stringify(yourSpec, null, 2);


}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);