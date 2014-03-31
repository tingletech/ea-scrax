;
var global_debug = {};
// magic globals for saxon-ce
//  array to hold saxon errors
var errors = [];
//  fires when saxon is loaded
var onSaxonLoad = function () {

  var xml = Saxon.requestXML($('#xml').val());
  var xslt = Saxon.requestXML($('#xslt').val());

  errors = [];

  // Saxon.setLogLevel("FINE");
  var proc = Saxon.newXSLT20Processor(xslt);
  Saxon.setErrorHandler(handler);
  var fragment = proc.transformToFragment(xml, document);

  // http://stackoverflow.com/a/998325/1763984
  var d = $("#ead-results")[0].contentWindow.document; // contentWindow works in IE7 and FF
  d.open(); d.close(); // must open and close document object to start using it!

  $("body", d).append(fragment);

  function handler(saxonError) {
    errors.push(saxonError.message + " " + saxonError.level + " " + saxonError.time);
  }

};
