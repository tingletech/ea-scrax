;
var global_debug = {};


var run_my_transform = function () {

  var errors = [];

  var xml  = Saxon.parseXML($($( '#xml')[0].contentWindow.document).find('textarea').val()); 
  var xslt = Saxon.requestXML('http://socialarchive.iath.virginia.edu/xtf/cpf2html/cpf2html.xsl');

  var proc = Saxon.newXSLT20Processor(xslt);
  // Saxon.setLogLevel('FINE');
  Saxon.setErrorHandler(handler);
  var fragment = proc.transformToFragment(xml, document);

  var d = $("#html")[0].contentWindow.document;
  $("body", d).html(fragment);
  
  function handler(saxonError) {
    errors.push(saxonError.message + " " + saxonError.level + " " + saxonError.time);
  }

  // http://tingletech.tumblr.com/post/81315608445/
  function stringToXML(oString) {
    //code for IE
    if (window.ActiveXObject) { 
      return (new ActiveXObject("Microsoft.XMLDOM")).loadXML(oString);
    } else { // code for Chrome, Safari, Firefox, Opera, etc. 
      return (new DOMParser()).parseFromString(oString, "text/xml");
    }
  }
  return false;
};

// wait for both saxon and the XML editor iframe to load 
// http://stackoverflow.com/a/14906825/1763984
var xml_editor_loaded = $.Deferred();
var saxon_loaded = $.Deferred();
var onSaxonLoad = function() {
  saxon_loaded.resolve();
}
$.when(xml_editor_loaded, saxon_loaded).done(function(){
  run_my_transform();
});
