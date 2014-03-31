// magic globals for saxon-ce
//  array to hold saxon errors
var errors = new Array();
//  fires when saxon is loaded
var onSaxonLoad = function () {

  var xml = Saxon.requestXML($('#xml').val());
  var xslt = Saxon.requestXML($('#xslt').val());

  console.log(xml);
  console.log(xslt);

  errors = new Array();

  Saxon.setErrorHandler(handler);
  Saxon.setLogLevel("FINE");

  run = Saxon.run( {
    stylesheet: xslt,
    source: xml
  });

  // show a window alert listing any compile-time or run-time errors
  if (errors.length > 0) {
      // window.alert(errors.toString());
  } 

  function handler(saxonError) {
    errors.push(saxonError.message + " " + saxonError.level + " " + saxonError.time);
  }

};
