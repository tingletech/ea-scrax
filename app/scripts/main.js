var global_debug = {};
// magic globals for saxon-ce
//  array to hold saxon errors
var errors = [];
//  fires when saxon is loaded
var onSaxonLoad = function () {

  var xml = Saxon.requestXML($('#xml').val());
  var xslt = Saxon.requestXML($('#xslt').val());

  errors = [];

  Saxon.setErrorHandler(handler);
  // Saxon.setLogLevel("FINE");

  run = Saxon.run( {
    stylesheet: xslt,
    method: 'transformToHTMLFragment',
    source: xml
  });

  // show a window alert listing any compile-time or run-time errors
  if (errors.length > 0) {
      // window.alert(errors.toString());
  } 

  function handler(saxonError) {
    errors.push(saxonError.message + " " + saxonError.level + " " + saxonError.time);
  }

  console.log(run.getResultDocuments());

  global_debug = run;

};
